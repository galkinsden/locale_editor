import React, { memo, FC } from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useLocaleEditorContext } from './locale-editor.context-provider';
import { Modes } from './types';
import classes from './locale-editor.mode.module.scss';

export const LocaleEditorMode: FC = memo(() => {
    const { mode, setMode, list } = useLocaleEditorContext();
    return (
        <>
            {!!list.length && (
                <RadioGroup
                    className={classes.wrap}
                    aria-label="mode"
                    value={mode}
                    onChange={(_, value) => setMode(+value)}
                >
                    <FormControlLabel value={Modes.ALL} control={<Radio />} label="All" />
                    <FormControlLabel value={Modes.EMPTY} control={<Radio />} label="Only empty" />
                </RadioGroup>
            )}
        </>
    );
});
