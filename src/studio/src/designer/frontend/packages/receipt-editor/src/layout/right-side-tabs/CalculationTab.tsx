import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { NoBlockSelected } from './common/NoBlockSelected';

export const CalculationTab = () => {
  const [searchParams] = useSearchParams();
  return searchParams.has('block') ? (
    <div>CalculationTab for {searchParams.get('block')}</div>
  ) : (
    <NoBlockSelected />
  );
};
