import { useState } from "react";
import type { Item } from "../types/items-type";
import { sampleListData } from "../data/sample-list-data";
import { LIST_ITEMS_SIZE } from "../constants/constants";

function ListItemsContainer() {
  const [visibleItems, setVisibleItems] = useState<Item[]>(
    sampleListData.slice(0, LIST_ITEMS_SIZE)
  );
  const [dataQueue, setDataQueue] = useState<Item[]>(
    sampleListData.slice(LIST_ITEMS_SIZE)
  );

  return visibleItems.map((item) => <div>{item.name}</div>);
}

export default ListItems;
