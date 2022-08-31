import type { WithStyles } from '@material-ui/core/styles';
import {
  createTheme,
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import React from 'react';
import AltinnButton from 'altinn-shared/components/AltinnButton';
import AltinnPopover from 'altinn-shared/components/AltinnPopover';
import altinnTheme from 'altinn-shared/theme/altinnStudioTheme';
import { getLanguageFromKey } from 'altinn-shared/utils/language';
import { get } from 'altinn-shared/utils/networking';
import postMessages from 'altinn-shared/utils/postMessages';
import type { IAltinnWindow } from '../../../types/global';

const theme = createTheme(altinnTheme);

const styles = () =>
  createStyles({
    textDisabled: {
      color: theme.altinnPalette.primary.grey,
    },
    input: {
      marginRight: 49,
    },
  });

interface IHandleMergeConflictDiscardChangesProps
  extends WithStyles<typeof styles> {
  disabled?: boolean;
  language: any;
}

interface IHandleMergeConflictDiscardChangesState {
  anchorEl: any;
  errorObj: any;
  networkingRes: any;
  popoverState: any;
}

const initialPopoverState = {
  descriptionText: '',
  isLoading: false,
  shouldShowDoneIcon: false,
  btnConfirmText: 'OK',
  shouldShowCommitBox: false,
  btnMethod: '',
  btnCancelText: '',
};

export class HandleMergeConflictDiscardChanges extends React.Component<
  IHandleMergeConflictDiscardChangesProps,
  IHandleMergeConflictDiscardChangesState
> {
  constructor(_props: IHandleMergeConflictDiscardChangesProps) {
    super(_props);
    this.state = {
      anchorEl: null,
      errorObj: null,
      networkingRes: null,
      popoverState: initialPopoverState,
    };
  }

  public discardChangesPopover = (event: any) => {
    this.setState({
      anchorEl: event.currentTarget,
      popoverState: {
        ...this.state.popoverState,
        btnMethod: this.discardChangesConfirmed,
        btnConfirmText: getLanguageFromKey(
          'handle_merge_conflict.discard_changes_button_confirm',
          this.props.language,
        ),
        descriptionText: getLanguageFromKey(
          'handle_merge_conflict.discard_changes_message',
          this.props.language,
        ),
        btnCancelText: getLanguageFromKey(
          'handle_merge_conflict.discard_changes_button_cancel',
          this.props.language,
        ),
      },
    });
  };

  // TODO: Add a spinner
  public discardChangesConfirmed = async () => {
    const { org, app } = window as Window as IAltinnWindow;

    try {
      this.setState({
        popoverState: {
          ...this.state.popoverState,
          isLoading: true,
          btnText: null,
          btnCancelText: null,
        },
      });

      const discardUrl =
        `${window.location.origin}/` +
        `/designer/api/v1/repos/${org}/${app}/discard`;
      const discardRes = await get(discardUrl);

      this.setState({
        networkingRes: discardRes,
        popoverState: {
          ...this.state.popoverState,
          isLoading: false,
          shouldShowDoneIcon: true,
        },
      });

      window.postMessage(
        postMessages.forceRepoStatusCheck,
        window.location.href,
      );
    } catch (err) {
      this.setState({
        errorObj: err,
        networkingRes: 'error',
        popoverState: {
          ...this.state.popoverState,
          isLoading: false,
        },
      });

      console.error('Discard merge error', err);
    }
  };

  public handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  public render() {
    const { popoverState } = this.state;
    return (
      <React.Fragment>
        <AltinnButton
          id='discardMergeChangesBtn'
          btnText={getLanguageFromKey(
            'handle_merge_conflict.discard_changes_button',
            this.props.language,
          )}
          onClickFunction={this.discardChangesPopover}
          secondaryButton={true}
          disabled={this.props.disabled}
        />

        <AltinnPopover
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          btnCancelText={popoverState.btnCancelText}
          btnClick={popoverState.btnMethod}
          btnConfirmText={popoverState.btnConfirmText}
          btnPrimaryId='discardMergeChangesConfirmBtn'
          descriptionText={popoverState.descriptionText}
          handleClose={this.handleClose}
          header={popoverState.header}
          isLoading={popoverState.isLoading}
          shouldShowCommitBox={popoverState.shouldShowCommitBox}
          shouldShowDoneIcon={popoverState.shouldShowDoneIcon}
          transformOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(HandleMergeConflictDiscardChanges);
