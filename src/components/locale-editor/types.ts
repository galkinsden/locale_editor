export enum Modes {
    ALL,
    EMPTY
}

export interface ListItem {
    message?: string;
    defaultMessage: string;
    description: string;
    files: string[];
}

export interface LocaleEditorContextProps {
    file: File | undefined,
    list: ListItem[];
    mode: Modes;
    setFile: Function;
    setList: Function;
    setMode: Function;
}
