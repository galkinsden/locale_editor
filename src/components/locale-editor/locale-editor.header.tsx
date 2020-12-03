import React, {FC, useCallback, useEffect} from 'react';
import { saveAs } from 'file-saver';
import { Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import { DropZone } from '../dropzone';
import classes from './locale-editor.header.module.scss';
import { useLocaleEditorContext } from './locale-editor.context-provider';

export const LocaleEditorHeader: FC = () => {
    const { list, file, setFile, setList } = useLocaleEditorContext();

    const onDownload = useCallback(() => {
        const blob = new Blob(
            [`${JSON.stringify(list, null, 2)}\n`],
            {type: "text/plain;charset=utf-8"},
        );
        saveAs(blob, file?.name);
    }, [file, list]);

    const onUpdateFile = useCallback(() => {
        if (file) {
            const reader = new FileReader();
            (reader as any).fileName = file?.name;
            reader.readAsText(file);
            reader.onload = (event) => {
                try {
                    setList(JSON.parse(event?.target?.result as any));
                } catch (e) {
                    toast.error(`Error: ${e?.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            };
        }
    }, [file, setList]);

    useEffect(() => {
        onUpdateFile();
    }, [file, onUpdateFile]);

    return (
        <div className={classes.wrap}>
            <DropZone
                classNameWrap={classes.dropZoneWrap}
                additionalTitle="Drag 'n' drop json here, or click to select file"
                onDrop={setFile}
            />
            <Button
                onClick={onDownload}
                disabled={!file}
                variant="contained"
                color="secondary"
            >
                Download json
            </Button>
        </div>
    );
};
