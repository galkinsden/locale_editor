export enum Modes {
    ALL,
    EMPTY
}

export interface ListItem {
    message?: string;
    defaultMessage: string;
    files: string[];
    id: string;
}

export interface LocaleEditorContextProps {
    file: File | undefined,
    list: ListItem[];
    modal: ListItem | undefined
    mode: Modes;
    setFile: Function;
    setList: Function;
    setMode: Function;
    setModal: Function;
}
