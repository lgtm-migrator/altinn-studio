import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { NoBlockSelected } from './common/NoBlockSelected';

export const ContentTab = () => {
  const [searchParams] = useSearchParams();
  return searchParams.has('block') ? (
    <div>ContentTab for {searchParams.get('block')}</div>
  ) : (
    <NoBlockSelected />
  );
};
