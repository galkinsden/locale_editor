import React, {memo, FC, useMemo, useCallback} from 'react';
import { AutoSizer, Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';
import { useLocaleEditorContext } from './locale-editor.context-provider';
import { Modes } from './types';

export const LocaleEditorList: FC = memo(() => {
    const { list, mode, setModal } = useLocaleEditorContext();

    const listByMode = useMemo(() => {
        switch (mode) {
            case Modes.ALL:
                return list;
            case Modes.EMPTY:
                return list.filter(({ message }) => !message);
            default:
                return list;
        }
    }, [list, mode]);

    const onRowClick = useCallback((e) => {
        setModal(e?.rowData)
    }, [setModal]);

    return (
        <>
            {!!listByMode.length && (
                <AutoSizer>
                    {({ height, width }) => (
                        <Table
                            width={width}
                            height={height}
                            headerHeight={50}
                            rowHeight={50}
                            rowStyle={{ backgroundColor: '#fff' }}
                            rowCount={listByMode.length}
                            rowGetter={({ index }) => listByMode[index]}
                            onRowClick={onRowClick}
                        >
                            <Column label="id" dataKey="id" width={width/3} />
                            <Column label="rus" dataKey="defaultMessage" width={width/3} />
                            <Column label="translation" dataKey="message" width={width/3} />
                        </Table>
                    )}
                </AutoSizer>
            )}
        </>
    );
});

