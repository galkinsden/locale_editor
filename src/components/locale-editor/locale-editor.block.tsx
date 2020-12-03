import React, { memo, FC } from 'react';

export interface LocaleEditorBlockProps {
    height: string;
}

const PADDING = '20px';

export const LocaleEditorBlock: FC<LocaleEditorBlockProps> = memo(({ children, height }) => (
    <div style={{ height: `calc(${height} - ${PADDING})`, padding: PADDING }}>{children}</div>
));
