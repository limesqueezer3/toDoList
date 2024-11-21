import createItem from item.js

let itemList = [];
let timeStampList = [];

function addItem (item) {
    itemList.push(item);
}

function addTimeStamp (timeStamp, day) {
    timeStampList[day].push(timeStamp);
}