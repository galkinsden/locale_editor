import React, {memo, FC, useMemo, useCallback} from 'react';
import { AutoSizer, Column, Table } from 'react-virtualized';
import { useLocaleEditorContext } from './locale-editor.context-provider';
import { Modes } from './types';
import classes from './locale-editor.list.module.scss';

const columnStyle = { cursor: 'pointer' };

const columns = [{ label: 'id', dataKey: 'id' }, { label: 'rus', dataKey: 'defaultMessage' }, { label: 'translation', dataKey: 'message' }];

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

    const cellRenderer = useCallback(({ rowData, dataKey }: any) => (
        <div className={classes.cell} onClick={() => setModal({ data: rowData, key: dataKey })}>
            {rowData[dataKey]}
        </div>
    ), []);

    return (
        <>
            {!!listByMode.length && (
                <AutoSizer>
                    {({ height, width }) => (
                        <Table
                            width={width}
                            height={height}
                            headerHeight={50}
                            rowHeight={30}
                            rowStyle={{ backgroundColor: '#fff' }}
                            rowCount={listByMode.length}
                            rowGetter={({ index }) => listByMode[index]}
                        >
                            {columns.map(({ dataKey, label }) => (
                                <Column
                                    dataKey={dataKey}
                                    label={label}
                                    width={width/3}
                                    style={columnStyle}
                                    cellRenderer={cellRenderer}
                                />
                            ))}
                        </Table>
                    )}
                </AutoSizer>
            )}
        </>
    );
});

