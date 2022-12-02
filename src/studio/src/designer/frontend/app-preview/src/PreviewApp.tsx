import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './views/LandingPage';
import { NoMatch } from './views/NoMatch';

export const PreviewApp = () => {
  return (
    <div>
      <h1>Preview</h1>
      <Routes>
        <Route path='/preview/:org/:app' element={<LandingPage />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
};
