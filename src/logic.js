import { createItem } from "./item.js";
import { createTimestamp } from "./timestamp";
import { createTime } from "./time";
export { addItem, addTimeStamp, getItems, getTimeStamps, deleteItem };

const ITEM_LIST_KEY = "itemList";
let itemList = loadFromLocalStorage(ITEM_LIST_KEY, []);

function loadFromLocalStorage(key, defaultValue) {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
}

let timeStampList = [];
for (let i = 0; i < 7; i++) {
    timeStampList.push([]);
}

function addItem (topic, priority, dueDate, hours) {
    const it = createItem(topic, priority, dueDate, hours);
    itemList.push(it);
    localStorage.setItem(ITEM_LIST_KEY, JSON.stringify(itemList));
}

function addTimeStamp (timeStamp, day) {
    timeStampList[day].push(timeStamp);
}

function getItems() {
    return itemList;
}

function getTimeStamps() {
    return timeStampList;
}

function deleteItem(item) {
    const index = itemList.indexOf(item);
    if (index > -1) {
        itemList.splice(index, 1);
        localStorage.setItem(ITEM_LIST_KEY, JSON.stringify(itemList));
    }
}