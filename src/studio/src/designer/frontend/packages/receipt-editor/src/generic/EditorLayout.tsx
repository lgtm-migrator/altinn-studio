import React from 'react';
import type { ReactNode } from 'react';
import classes from './EditorLayout.module.css';

interface Props {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}

export const EditorLayout = ({ left, center, right }: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes.leftCol}>{left}</div>
      <div className={classes.centerCol}>{center}</div>
      <div className={classes.rightCol}>{right}</div>
    </div>
  );
};
