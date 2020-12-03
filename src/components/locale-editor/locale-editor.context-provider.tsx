import React, { FC, createContext, useState, useContext } from 'react';
import { Modes, ListItem, LocaleEditorContextProps } from './types';

export const LocaleEditorContext = createContext<LocaleEditorContextProps>({
  file: undefined,
  list: [],
  mode: Modes.ALL,
  modal: undefined,
  setFile: () => {},
  setList: () => {},
  setMode: () => {},
  setModal: () => {},
});

export const useLocaleEditorContext = () => useContext(LocaleEditorContext);

export const LocaleEditorContextProvider: FC = ({
  children
}) => {
  const [file, setFile] = useState<File | undefined>();
  const [list, setList] = useState<ListItem[]>([]);
  const [mode, setMode] = useState(Modes.ALL);
  const [modal, setModal] = useState();

  return (
      <LocaleEditorContext.Provider value={{ file, list, mode, modal, setFile, setList, setMode, setModal }}>
        {children}
      </LocaleEditorContext.Provider>
  )
};

