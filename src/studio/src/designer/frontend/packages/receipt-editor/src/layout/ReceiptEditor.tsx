import React from 'react';
import { useEditReceiptContext } from '../contexts/EditRecipeContext';
import { HeadingBlock } from './receipt-blocks/HeadingBlock';
import { SubHeadingBlock } from './receipt-blocks/SubHeadingBlock';
import { SummaryTableBlock } from './receipt-blocks/SummaryTableBlock';
import { BodyTextBlock } from './receipt-blocks/BodyTextBlock';
import { AttatchmentBlock } from './receipt-blocks/AttatchmentBlock';
import { Blocks } from '../enums';

export const ReceiptEditor = () => {
  const { receipt, isReady } = useEditReceiptContext();
  const enbl = (field: string) => receipt && receipt[field] && receipt[field].enabled;
  const data = (field: string) => receipt && receipt[field] && receipt[field].data;
  return (
    isReady && (
      <>
        {enbl(Blocks.Heading) && <HeadingBlock data={data(Blocks.Heading)} />}
        {enbl(Blocks.SubHeading) && <SubHeadingBlock data={data(Blocks.SubHeading)} />}
        {enbl(Blocks.SummaryTable) && <SummaryTableBlock data={data(Blocks.SummaryTable)} />}
        {enbl(Blocks.BodyText) && <BodyTextBlock data={data(Blocks.BodyText)} />}
        {enbl(Blocks.AttachmentTable) && <AttatchmentBlock data={data(Blocks.AttachmentTable)} />}
        <pre>{JSON.stringify(receipt, null, 4)}</pre>
      </>
    )
  );
};
