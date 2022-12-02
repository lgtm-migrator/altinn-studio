import React from 'react';
import classes from './LandingPage.module.css';
import { PreviewContext } from '../PreviewContext';

export const LandingPage = () => {
  return (
    <PreviewContext>
      <div className={classes.landingPage}>LANDING PAGE</div>
    </PreviewContext>
  );
};
