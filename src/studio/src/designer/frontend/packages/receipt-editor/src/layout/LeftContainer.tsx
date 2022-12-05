import type { ChangeEvent } from 'react';
import React from 'react';
import { Checkbox } from '@altinn/altinn-design-system';
import classes from './LeftContainer.module.css';
import { useEditReceiptContext } from '../contexts/EditRecipeContext';
import { deepCopy } from 'app-shared/pure';
export const LeftContainer = () => {
  const { isReady, receipt, setReceipt } = useEditReceiptContext();
  const onChange = (e: ChangeEvent) => {
    const { name } = e.target;
    const receiptCopy = deepCopy(receipt);
    if (!receiptCopy[name]) {
      receiptCopy[name] = {
        data: null,
        enabled: false,
      };
    }
    receiptCopy[name].enabled = !receiptCopy[name].enabled;
    setReceipt(receiptCopy);
  };
  const components = [
    {
      label: 'Heading',
      value: 'heading',
    },
    {
      label: 'Sub-heading',
      value: 'subheading',
    },
    {
      label: 'Summary Table',
      value: 'summaryTable',
    },
    {
      label: 'Body Text',
      value: 'bodytext',
    },
    {
      label: 'Attachment Table',
      value: 'attachmentTable',
    },
  ];
  return (
    isReady && (
      <div className={classes.container}>
        <div>Left box</div>
        {components.map((component) => (
          <Checkbox
            key={component.value}
            label={component.label}
            onChange={onChange}
            name={component.value}
            checked={receipt[component.value] && receipt[component.value].enabled}
          />
        ))}
      </div>
    )
  );
};
