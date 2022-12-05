import React from 'react';
import { BlockContainer } from './common/BlockContainer';
import { Blocks } from '../../enums';

export const HeadingBlock = (data: any) => {
  return <BlockContainer name={Blocks.Heading}>HeadingBlock</BlockContainer>;
};
