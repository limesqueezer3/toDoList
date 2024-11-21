export function timestamp (begin, end, item) {
    let hasItem = item ? true : false;
    function setItem (item) {
        hasItem = true;
        this.item = item;
    }
    return {begin, end, hasItem, item}
}