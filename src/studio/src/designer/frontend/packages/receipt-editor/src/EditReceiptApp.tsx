import React from 'react';
import { EditReceiptContext } from './contexts/EditRecipeContext';
import { ReceiptEditor } from './components/ReceiptEditor';
import { EditorLayout } from './components/EditorLayout';

export const EditReceiptApp = () => {
  return (
    <EditReceiptContext>
      <EditorLayout left={<ReceiptEditor />} center={<ReceiptEditor />} right={<ReceiptEditor />} />
    </EditReceiptContext>
  );
};
