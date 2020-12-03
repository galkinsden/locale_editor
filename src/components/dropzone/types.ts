import { ReactNode } from 'react';
import { DropzoneOptions } from 'react-dropzone';

export interface DropZoneProps extends Omit<DropzoneOptions, 'onDrop'> {
    placeholder?: string;
    disabled?: boolean;
    accept?: string;
    multiple?: boolean;
    required?: boolean;
    title?: string | ReactNode;
    additionalTitle?: string | ReactNode;
    onDrop?: Function;
    classNameWrap?: string;
    isInvalid?: boolean;
    maxFileNameLength?: number;
    name?: string;
}

