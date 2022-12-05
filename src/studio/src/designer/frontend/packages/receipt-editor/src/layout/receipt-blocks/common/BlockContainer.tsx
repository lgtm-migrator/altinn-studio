import React from 'react';
import { Button } from '@altinn/altinn-design-system';
import { Edit } from '@navikt/ds-icons';
import { deepCopy } from 'app-shared/pure';
import { useSearchParams } from 'react-router-dom';
import classes from './BlockContainer.module.css';

interface Props {
  name: string;
  children?: React.ReactNode;
}
export const BlockContainer = ({ name, children }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const goToComponent = () => {
    const SearchParamsCopy = deepCopy(searchParams);
    SearchParamsCopy.block = name;
    setSearchParams(SearchParamsCopy);
  };
  return (
    <div className={classes.container}>
      <div>{children}</div>
      <div>
        <Button onClick={goToComponent} icon={<Edit />} />
      </div>
    </div>
  );
};
