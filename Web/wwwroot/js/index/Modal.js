// <!-- 初始化 Bootstrap Tooltip & 讚按鈕邏輯 -->
document.addEventListener("DOMContentLoaded", function () {
  // 啟用 Tooltip
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // 讚按鈕邏輯 (點擊後從0→1，並切換按鈕顏色)
  var btnLike = document.getElementById("btnLike");
  if (btnLike) {
    btnLike.addEventListener("click", function () {
      if (this.classList.contains("btn-warning")) {
        // 取消讚
        this.classList.remove("btn-warning");
        this.classList.add("btn-light");
        this.textContent = "讚 0";
      } else {
        // 加讚
        this.classList.remove("btn-light");
        this.classList.add("btn-warning");
        this.textContent = "讚 1";
      }
    });
  }

  // 監聽 day1Group 的所有 Radio
  const day1Radios = document.querySelectorAll('input[name="day1Group"]');

  day1Radios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      // 先將所有 .new-spot-name 移除 .selected
      day1Radios.forEach(function (r) {
        const targetId = r.getAttribute("data-new-name-id");
        const targetEl = document.getElementById(targetId);
        if (targetEl) targetEl.classList.remove("selected");
      });

      // 再將目前選到的 Radio 對應 .new-spot-name 加上 .selected
      if (this.checked) {
        const newNameId = this.getAttribute("data-new-name-id");
        const newNameEl = document.getElementById(newNameId);
        if (newNameEl) {
          newNameEl.classList.add("selected");
        }
      }
    });
  });

  // // 監聽 day2Group 的所有 Radio
  // const day2Radios = document.querySelectorAll('input[name="day2Group"]');

  // day2Radios.forEach(function(radio) { // <-- 修正這裡
  //   radio.addEventListener('change', function() {
  //     // 先將所有 .new-spot-name 移除 .selected
  //     day2Radios.forEach(function(r) {
  //       const targetId = r.getAttribute('data-new-name-id');
  //       const targetEl = document.getElementById(targetId);
  //       if(targetEl) targetEl.classList.remove('selected');
  //     });

  //     // 再將目前選到的 Radio 對應 .new-spot-name 加上 .selected
  //     if(this.checked) {
  //       const newNameId = this.getAttribute('data-new-name-id');
  //       const newNameEl = document.getElementById(newNameId);
  //       if(newNameEl) {
  //         newNameEl.classList.add('selected');
  //       }
  //     }
  //   });
  // });

  // 下拉選單(邀請共編)邏輯
  function toggleInviteDropdown() {
    const menu = document.getElementById("inviteDropdownMenu");
    menu.classList.toggle("show");
  }
  function selectInviteOption(txt) {
    const toggleBtn = document.querySelector(".invite-dropdown-toggle");
    toggleBtn.childNodes[0].textContent = txt + " ";
    toggleInviteDropdown();
  }
  window.addEventListener("click", function (e) {
    const dropdown = document.querySelector(".invite-dropdown");
    const menu = document.getElementById("inviteDropdownMenu");
    if (dropdown && !dropdown.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
});
