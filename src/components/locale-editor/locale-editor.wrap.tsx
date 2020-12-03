import React, { FC, memo } from 'react';
import classes from './locale-editor.wrap.module.scss';

export const LocaleEditorWrap: FC = memo(({ children }) => {
    return (
        <div className={classes.wrap}>
            {children}
        </div>
    );
});
