import React from 'react';
import { useEditReceiptContext } from '../contexts/EditRecipeContext';

export const ReceiptEditor = () => {
  const { receipt, isReady } = useEditReceiptContext();
  return <div>{isReady && <pre>{JSON.stringify(receipt, null, 4)}</pre>}</div>;
};
