import React from 'react';
import { Tabs } from '@altinn/altinn-design-system';
import { ContentTab } from './right-side-tabs/ContentTab';
import { ValidatonTab } from './right-side-tabs/ValidatonTab';
import { VisibilityTab } from './right-side-tabs/VisibilityTab';
import { CalculationTab } from './right-side-tabs/CalculationTab';
import classes from './RightContainer.module.css';

export const RightContainer = () => {
  return (
    <div className={classes.tabs}>
      <Tabs
        items={[
          {
            name: 'Innhold',
            content: <ContentTab />,
          },
          {
            name: 'Validering',
            content: <ValidatonTab />,
          },
          {
            name: 'Vis/Skjul',
            content: <VisibilityTab />,
          },
          {
            name: 'Beregning',
            content: <CalculationTab />,
          },
        ]}
      />
    </div>
  );
};
