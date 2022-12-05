import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { NoBlockSelected } from './common/NoBlockSelected';

export const ValidatonTab = () => {
  const [searchParams] = useSearchParams();
  return searchParams.has('block') ? (
    <div>ValidatonTab for {searchParams.get('block')}</div>
  ) : (
    <NoBlockSelected />
  );
};
