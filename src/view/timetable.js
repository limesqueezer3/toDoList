export {renderTime, renderDays}

function renderTime() {
    const timeLeftDiv = document.querySelector("#timeLeft");
    const timeRightDiv = document.querySelector("#timeRight");

    // Clear any existing content in both containers
    timeLeftDiv.innerHTML = '';
    timeRightDiv.innerHTML = '';

    // Define the start and end times
    const startTime = 6;
    const endTime = 22;

    // Loop through each hour from startTime to endTime
    for (let hour = startTime; hour <= endTime; hour++) {
        // Format the time as "HH:MM"
        const timeString = `${hour.toString().padStart(2, '0')}:00`;

        // Create a new div element for the left container
        const timeLeftSlot = document.createElement("div");
        timeLeftSlot.textContent = timeString;
        timeLeftSlot.classList.add("time-slot");
        timeLeftDiv.appendChild(timeLeftSlot);

        // Create a new div element for the right container
        const timeRightSlot = document.createElement("div");
        timeRightSlot.textContent = timeString;
        timeRightSlot.classList.add("time-slot");
        timeRightDiv.appendChild(timeRightSlot);
    }
}

function renderDays() {
    const timeStampTableDiv = document.querySelector("#timeStampTable");
    for (let i = 0; i < 7 ; i++) {
        const day = document.createElement("div");
        day.className = "day";
        timeStampTableDiv.appendChild(day);
    }
}

