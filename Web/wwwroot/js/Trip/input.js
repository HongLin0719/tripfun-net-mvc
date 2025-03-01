// 從 localStorage 獲取選擇的地區
const selectedRegions = localStorage.getItem('selectedRegions');

// 顯示在頁面上
document.getElementById('selectedRegionDisplay').textContent = selectedRegions ? selectedRegions : '未選擇區域';


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".searchButton").addEventListener("click", function () {
        console.log("按鈕被點擊了"); // 確認按鈕被點擊
        window.location.href = "Search";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".searchButton2").addEventListener("click", function () {
        console.log("按鈕被點擊了"); // 確認按鈕被點擊
        window.location.href = "Search";
    });
});