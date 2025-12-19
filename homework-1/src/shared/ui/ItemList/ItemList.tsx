import React from 'react';
import type { ReactNode, ReactElement } from 'react';

export type ItemListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor?: (item: T) => string | number;
};

function ItemList<T>({ items, renderItem, keyExtractor }: ItemListProps<T>): ReactElement {
  return (
    <div>
      {items.map((item, index) => (
        <div key={keyExtractor ? keyExtractor(item) : index}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

export default ItemList;