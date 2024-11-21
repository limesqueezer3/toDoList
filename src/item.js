export function createItem(topic, priority, deadline, hours) {
    const decreaseHours = (timeSpend) => {
        hours -= timeSpend;
    };
    return {topic, priority, deadline, hours, decreaseHours};
}

