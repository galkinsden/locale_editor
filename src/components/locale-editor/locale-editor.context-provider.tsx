import React, { FC, createContext, useState, useContext } from 'react';
import { Modes, ListItem, LocaleEditorContextProps } from './types';

export const LocaleEditorContext = createContext<LocaleEditorContextProps>({
  file: undefined,
  list: [],
  mode: Modes.ALL,
  setFile: () => {},
  setList: () => {},
  setMode: () => {},
});

export const useLocaleEditorContext = () => useContext(LocaleEditorContext);

export const LocaleEditorContextProvider: FC = ({
  children
}) => {
  const [file, setFile] = useState<File | undefined>();
  const [list, setList] = useState<ListItem[]>([]);
  const [mode, setMode] = useState(Modes.ALL);

  return (
      <LocaleEditorContext.Provider value={{ file, list, mode, setFile, setList, setMode }}>
        {children}
      </LocaleEditorContext.Provider>
  )
};

