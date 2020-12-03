import React, { memo } from 'react';
import classes from './locale-editor.format-helper.module.scss';

export const LocaleEditorFormatHelper = memo(() => (
    <div className={classes.wrap}>
        <span>Format: {' '}</span>
        <span className={classes.format}>
            {`{ message: string, defaultMessage: string, files: string[], id: string }`}
        </span>
    </div>
));
