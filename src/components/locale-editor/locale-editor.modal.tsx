import React, { memo, FC, useMemo, useCallback } from 'react';
import { Modal, TextField, Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import { getFormFields } from '../../utils/form';
import { useLocaleEditorContext } from './locale-editor.context-provider';
import classes from './locale-editor.modal.module.scss';
import { ListItem } from './types';

export const LocaleEditorModal: FC = memo(() => {
    const { modal, setModal, setList } = useLocaleEditorContext();
    const onClose = useCallback(() => {
        setModal(undefined);
    },[setModal]);
    const defaultValue = useMemo(() => ((modal?.data || {}) as any)[modal?.key as string], [modal]);
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        const newFields = getFormFields(e);
        setList(
            (l: ListItem[]) => l.map(
                (value) => value?.id === modal?.data?.id
                    ? { ...value, ...newFields }
                    : value
            )
        );
        toast.success(`${modal?.data?.id} changed to ${JSON.stringify(newFields)}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        onClose();
    }, [setList, onClose, modal]);

    return (
        <Modal
            open={!!modal}
            onClose={onClose}
        >
            <form className={classes.modal} noValidate autoComplete="off" onSubmit={onSubmit}>
                <TextField name={modal?.key} label={modal?.key} defaultValue={defaultValue} />
                <div className={classes.btns}>
                    <Button onClick={onClose} variant="contained">cancel</Button>
                    <Button type="submit" variant="contained" color="secondary">save</Button>
                </div>
            </form>
        </Modal>
    )
});
