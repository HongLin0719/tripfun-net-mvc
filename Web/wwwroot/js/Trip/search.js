let selectedRegions = [];

function toggleSelection(card, region) {
    const circle = card.querySelector('.circle');
    console.log(`Clicked on ${region}`); // 確認哪個地區被點擊

    // 檢查當前地區是否已被選中
    if (selectedRegions.includes(region)) {
        // 如果已經選中，則取消選擇
        selectedRegions = selectedRegions.filter(r => r !== region);
        circle.classList.remove('selected'); // 移除選中樣式
        console.log('Removed selected class'); // 確認移除類別
    } else {
        // 如果未選中，則添加到選中列表
        selectedRegions.push(region);
        circle.classList.add('selected'); // 添加選中樣式
        console.log('Added selected class'); // 確認添加類別
    }

    // 更新輸入框顯示選中的地區
    document.getElementById('selectedRegions').value = selectedRegions.join(', ');
}



document.getElementById('exploreButton').addEventListener('click', function () {
    // 將所選地區存儲到 localStorage
    localStorage.setItem('selectedRegions', selectedRegions.join('、'));
    // 跳轉到 schedule_input.html
    window.location.href = 'Input';
});