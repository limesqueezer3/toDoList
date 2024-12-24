import createItem from item.js
import { createTimestamp } from "./timestamp";
import { createTime } from "./time";
let itemList = [];
let timeStampList = [];

function addItem (item) {
    itemList.push(item);
}

function addTimeStamp (timeStamp, day) {
    timeStampList[day].push(timeStamp);
}

// testing
createTimestamp()
