import React from 'react';
import { EditReceiptContext } from './contexts/EditRecipeContext';
import { ReceiptEditor } from './components/ReceiptEditor';

export const EditReceiptApp = () => {
  return (
    <EditReceiptContext>
      <div>
        <h1>EditReceiptContainer</h1>
        <ReceiptEditor />
      </div>
    </EditReceiptContext>
  );
};
