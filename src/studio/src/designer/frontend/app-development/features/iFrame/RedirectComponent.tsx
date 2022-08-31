import React from 'react';
import AltinnButton from 'altinn-shared/components/AltinnButton';
import type { IAltinnWindow } from '../../types/global';

interface IRedirectComponentProvidedProps {
  redirectUrl: string;
  classes: any;
}

export class RedirectComponent extends React.Component<
  IRedirectComponentProvidedProps,
  any
> {
  public openManualTesting = () => {
    const { org, app } = window as Window as IAltinnWindow;
    const url = `${window.location.origin}/${this.props.redirectUrl}?ReturnUrl=%2Fruntime%2F${org}%2F${app}%2FManualTesting`;
    window.open(url, '_newWindow');
  };

  public render() {
    return (
      <React.Fragment>
        <div style={{ paddingLeft: 80, paddingTop: 10 }}>
          <AltinnButton
            id='manual-test-button'
            btnText='Åpne manuell testing i nytt vindu'
            onClickFunction={this.openManualTesting}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default RedirectComponent;
