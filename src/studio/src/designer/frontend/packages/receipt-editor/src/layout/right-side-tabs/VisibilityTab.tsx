import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { NoBlockSelected } from './common/NoBlockSelected';

export const VisibilityTab = () => {
  const [searchParams] = useSearchParams();
  return searchParams.has('block') ? (
    <div>VisibilityTab for {searchParams.get('block')}</div>
  ) : (
    <NoBlockSelected />
  );
};
