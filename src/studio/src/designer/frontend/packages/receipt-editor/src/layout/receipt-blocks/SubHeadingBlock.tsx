import React from 'react';
import { BlockContainer } from './common/BlockContainer';
import { Blocks } from '../../enums';

export const SubHeadingBlock = (data: any) => {
  return <BlockContainer name={Blocks.SubHeading}>SubHeadingBlock</BlockContainer>;
};
