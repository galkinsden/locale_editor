import React, {
    memo,
    useState,
    useMemo,
    useCallback,
    FC,
    ReactNode,
} from 'react';
import { v1 as uuidv1 } from 'uuid'
import cn from 'classnames';
import { Icon } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import classes from './dropzone.module.scss';
import { DropZoneProps } from './types';

export const DropZone: FC<DropZoneProps> = memo(({
    disabled = false,
    accept = '',
    multiple = false,
    title = '',
    additionalTitle = '',
    onDrop = () => {},
    classNameWrap,
    isInvalid = false,
    maxFileNameLength = 30,
    ...rest
}) => {
    const [files, setFiles] = useState<File[]>([]);
    const [id] = useState<string>(uuidv1());

    const { getRootProps, getInputProps } = useDropzone({
        accept,
        disabled,
        multiple,
        onDrop: (filesToUpload: File[]) => {
            const allFiles: File[] = multiple
                ? files.concat(
                    (filesToUpload || []).filter(
                        ({ name }) => !files.find(({ name: fileName }) => name === fileName),
                    ),
                )
                : filesToUpload;
            setFiles(allFiles);
            onDrop(multiple ? allFiles : allFiles[0]);
        },
        ...rest,
    });

    const onClose = useCallback((event, index: number) => {
        event.stopPropagation();
        setFiles((files: File[]) => files.filter((el: File, i: number) => index !== i));
    }, []);

    const filesList: ReactNode[] = useMemo(() => files.map((file: File, i: number) => (
        <li key={file.name} className={classes.listItem}>
            <Icon className={classes.iconClose} onClick={(event) => onClose(event, i)}>close</Icon>
            <span className={classes.listItem__text}>
                {file.name}
            </span>
        </li>
    )), [onClose, files]);

    return (
        <section {...getRootProps({ className: cn(classes.wrap, classNameWrap, { [classes.wrap_invalid]: isInvalid }) })}>
            <input id={id} {...getInputProps()} />
            {!!filesList.length && <ul className={classes.list}>{filesList}</ul>}
            {!filesList.length && (
                <div className={classes.about}>
                    <span className={cn(classes.title, { [classes.text_invalid]: isInvalid })}>{title}</span>
                    {' '}
                    <span className={cn(classes.titleAdditional, { [classes.text_invalid]: isInvalid })}>{additionalTitle}</span>
                </div>
            )}
        </section>
    );
});

