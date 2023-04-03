import React, { FC } from 'react';
import { AutoSizer as _AutoSizer, AutoSizerProps, List as _List, ListProps, ListRowRenderer } from 'react-virtualized';

import styles from './List.styles.module.scss';

const VirtualList = _List as unknown as FC<ListProps>;
const AutoSizer = _AutoSizer as unknown as FC<AutoSizerProps>;

type TProps = {
  data: object[];
  rowHeight: number;
  overScanRowCount: number;
  onItemClick: (to: string) => void;
  renderRow: ListRowRenderer;
};

const List = ({ data, onItemClick, rowHeight, renderRow, overScanRowCount }: TProps) => {
  if (!data.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      <AutoSizer defaultWidth={100} defaultHeight={100}>
        {({ width, height }) => {
          return (
            <VirtualList
              width={width}
              height={height}
              rowHeight={rowHeight}
              rowRenderer={renderRow}
              rowCount={data.length}
              overscanRowCount={overScanRowCount}
              data={data}
              onItemClick={onItemClick}
              data-testid="virtual-list"
            />
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default List;
