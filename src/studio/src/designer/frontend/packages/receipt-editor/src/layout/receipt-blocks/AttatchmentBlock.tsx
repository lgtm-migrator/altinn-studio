import React from 'react';
import { BlockContainer } from './common/BlockContainer';
import { Blocks } from '../../enums';

export const AttatchmentBlock = (data: any) => {
  return <BlockContainer name={Blocks.AttachmentTable}>AttatchmentTableBlock</BlockContainer>;
};
