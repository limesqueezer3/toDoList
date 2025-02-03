import { createItem } from "./item.js";
import { createTimestamp } from "./timestamp";
import { createTime } from "./time";
export { addItem, addTimeStamp, getItems, getTimeStamps };

let itemList = [];
let timeStampList = [];
for (let i = 0; i < 7; i++) {
    timeStampList.push([]);
}

function addItem (topic, priority, dueDate, hours) {
    const it = createItem(topic, priority, dueDate, hours);
    itemList.push(it);
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