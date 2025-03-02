const prices = {
    adult: 910,
    child: 458,
    infant: 404
};

const quantities = {
    adult: 0,
    child: 0,
    infant: 0
};

function updateQuantity(type, change) {
    const quantityElement = document.getElementById(`${type}-quantity`);

    if (!quantityElement) return;

    let newQuantity = quantities[type] + change;
    if (newQuantity < 0) newQuantity = 0; // 確保數量不會變成負數

    quantities[type] = newQuantity;
    quantityElement.textContent = newQuantity;

    updateTotalPrice();
}

function updateTotalPrice() {
    let total = 0;
    for (const type in quantities) {
        total += quantities[type] * prices[type];
    }

    document.getElementById("total-price").textContent = `TWD ${total}`;
}

document.addEventListener("DOMContentLoaded", updateTotalPrice);

// 日曆功能
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
const monthYearElement = document.querySelector(".monthYear");
const calendarBody = document.querySelector(".calendarBody");

const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

function generateCalendar(month, year) {
    calendarBody.innerHTML = "";
    monthYearElement.textContent = `${year}年 ${months[month]}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let date = 1;

    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td");
            if (i === 0 && j < firstDay) {
                cell.textContent = "";
            } else if (date > daysInMonth) {
                break;
            } else {
                cell.textContent = date;
                cell.classList.add("calendar-day");
                cell.onclick = function () {
                    selectDate(year, month, date);
                };
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

function changeMonth(direction) {
    currentMonth += direction;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
}

function selectDate(year, month, date) {
    alert(`已選擇日期：${year}年 ${months[month]} ${date}日`);
}

document.addEventListener("DOMContentLoaded", () => {
    generateCalendar(currentMonth, currentYear);
});
