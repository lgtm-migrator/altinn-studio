import React from 'react';
import { EditReceiptContext } from './contexts/EditRecipeContext';
import { ReceiptEditor } from './components/ReceiptEditor';
import { EditorLayout } from './components/EditorLayout';
import { LeftContainer } from './components/LeftContainer';
import { RightContainer } from './components/RightContainer';

export const EditReceiptApp = () => {
  return (
    <EditReceiptContext>
      <EditorLayout
        left={<LeftContainer />}
        center={<ReceiptEditor />}
        right={<RightContainer />}
      />
    </EditReceiptContext>
  );
};
