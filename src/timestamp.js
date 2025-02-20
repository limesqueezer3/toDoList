import { createTime } from "./time";

export function createTimestamp (begin, end, item) {
    let hasItem = item ? true : false;
    function setItem (item) {
        hasItem = true;
        this.item = item;
    }
    return {begin: createTime(begin), end: createTime(end), hasItem, item, setItem}
}
