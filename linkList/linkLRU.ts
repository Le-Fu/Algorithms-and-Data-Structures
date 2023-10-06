import { List } from "./linkList";

export class CacheList<T> extends List<T> {
  maxLen: number | null = null;
  curLen: number = 0;
  setMaxLen(len: number) {
    this.maxLen = len - 1;
  }
  isFullLength() {
    let isFullLength = typeof this.maxLen === "number" ? this.maxLen <= this.curLen : false;
    console.log(isFullLength);

    return isFullLength;
  }
  cache(item: T) {
    console.log(item);
    const curItem = this.find(item);
    if (curItem) {
      this.remove(curItem.element);
      this.insertHead(item);
    } else {
      if (this.isFullLength()) {
        this.remove(this.findLast().element);
        this.insertHead(item);
      } else {
        this.insertHead(item);
        this.curLen++;
      }
    }
  }
}
// debugger
let cacheList = new CacheList<number>(1);
cacheList.setMaxLen(5);
cacheList.cache(2);
cacheList.cache(3);
cacheList.cache(4);
cacheList.display();
cacheList.cache(4);
cacheList.display();
cacheList.cache(2);
cacheList.display();
cacheList.cache(5);
cacheList.display();
cacheList.cache(6);
cacheList.display();
cacheList.cache(7);
cacheList.display();
