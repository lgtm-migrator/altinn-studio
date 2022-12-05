import React from 'react';
import { EditReceiptContext } from './contexts/EditRecipeContext';

import { EditorLayout } from './generic/EditorLayout';

import { ReceiptEditor } from './layout/ReceiptEditor';
import { LeftContainer } from './layout/LeftContainer';
import { RightContainer } from './layout/RightContainer';

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
