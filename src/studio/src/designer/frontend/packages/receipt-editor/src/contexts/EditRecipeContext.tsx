import React, { useContext, createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { receiptPath } from 'app-shared/api-paths';

import axios from 'axios';
interface EditReceiptContextProps {
  isReady: boolean;
  setReceipt: (receipt: any) => void;
  receipt: any;
}

const Context = createContext<Partial<EditReceiptContextProps>>({});

export const EditReceiptContext = (props: any) => {
  const { org, app } = useParams();
  const [isReady, setIsReady] = useState<boolean>(false);
  const [receipt, setReceipt] = useState<undefined>();
  useEffect(() => {
    axios
      .get(receiptPath(org, app))
      .then((result) => setReceipt(result.data))
      .finally(() => setIsReady(true));
  }, [app, org]);
  return (
    <Context.Provider value={{ isReady, receipt, setReceipt }}>{props.children}</Context.Provider>
  );
};

export const useEditReceiptContext = () => useContext(Context);
