import React, { FC } from 'react';
import { LocaleEditorContextProvider } from './locale-editor.context-provider';
import { LocaleEditorList } from './locale-editor.list';
import { LocaleEditorModal } from './locale-editor.modal';
import { LocaleEditorMode } from './locale-editor.mode';
import { LocaleEditorHeader } from './locale-editor.header';
import { LocaleEditorWrap } from './locale-editor.wrap';
import { LocaleEditorBlock } from './locale-editor.block';
import { LocaleEditorFormatHelper } from './locale-editor.format-helper';

export const LocaleEditor: FC = () => (
    <LocaleEditorContextProvider>
        <LocaleEditorWrap>
            <LocaleEditorBlock height="260px">
                <LocaleEditorFormatHelper />
                <LocaleEditorHeader />
                <LocaleEditorMode />
            </LocaleEditorBlock>
            <LocaleEditorBlock height="100% - 260px">
                <LocaleEditorList />
                <LocaleEditorModal />
            </LocaleEditorBlock>
        </LocaleEditorWrap>
    </LocaleEditorContextProvider>
);
