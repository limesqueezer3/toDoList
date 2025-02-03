export function createTime(time) {
    return new Date(1999, 1, 1, time["hour"], time["minute"]);
}