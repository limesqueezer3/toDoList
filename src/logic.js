import createItem from item.js
import { createTimestamp } from "./timestamp";
import { createTime } from "./time";
let itemList = [];
let timeStampList = [];
for (let i = 0; i < 7; i++) {
    timeStampList.push([]);
}
function addItem (item) {
    itemList.push(item);
}

function addTimeStamp (timeStamp, day) {
    timeStampList[day].push(timeStamp);
}

// testing
createTimestamp()
