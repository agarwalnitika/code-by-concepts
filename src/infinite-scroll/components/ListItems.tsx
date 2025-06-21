import { useEffect, useMemo, useRef, useState } from "react";
import type { Item } from "../types/items-type";
import { sampleListData } from "../data/sample-list-data";
import { LIST_ITEMS_SIZE } from "../constants/constants";
import "../styles/list-item.css";

function ListItems() {
  const [visibleItems, setVisibleItems] = useState<Item[]>(
    sampleListData.slice(0, LIST_ITEMS_SIZE)
  );
  const [dataQueue, setDataQueue] = useState<Item[]>(
    sampleListData.slice(LIST_ITEMS_SIZE)
  );

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadMore = () => {
    const nextItems = dataQueue.slice(0, LIST_ITEMS_SIZE);
    setVisibleItems((prev) => [...prev, ...nextItems]);
    setDataQueue((prev) => prev.slice(LIST_ITEMS_SIZE));
  };

  function throttle(fn, delay) {
    let lastCall = 0;

    return (...args) => {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        fn(...args);
      }
    };
  }

  const throttledLoadMore = useMemo(() => throttle(loadMore, 500), [loadMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && dataQueue.length > 0) {
          console.log("hi loaded");
          throttledLoadMore();
        }
      },
      { threshold: 1 }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [dataQueue, throttledLoadMore]);

  return (
    <div className="list-container">
      {visibleItems.map((item) => (
        <div className="list-item" key={item.id}>
          {item.name}
        </div>
      ))}
      <div ref={loaderRef} style={{ height: "20px" }} />
    </div>
  );
}

export default ListItems;
