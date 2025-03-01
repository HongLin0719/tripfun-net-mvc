const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      // 1=購物車, 2=填寫資料與付款, 3=訂購完成
      currentStep: 1,
      // 購物車內的商品
      cartItems: [
        {
          checked: true,
          img: "https://picsum.photos/400/300?random=1",
          title: "【40分鐘航程】貼近澎湖藍洞：親子體驗日出船票",
          detail: "40分鐘航程 | 親子限定團(含導覽)",
          date: "2025-03-15",
          people: "成人 x1",
          price: 439,
        },
        {
          checked: false,
          img: "https://picsum.photos/400/300?random=2",
          title: "金嶼燈塔與澎湖藍洞：超值兩日套裝票券",
          detail: "雙人行程 | 含來回船票、導覽及住宿 | 旺季方案",
          date: "2025-04-11",
          people: "成人 x1",
          price: 1599,
        },
        {
          checked: false,
          img: "https://picsum.photos/400/300?random=3",
          title: "海上獨木舟體驗券 - 雙人優惠方案",
          detail: "2小時 | 日出團",
          date: "2025-05-01",
          people: "成人 x2",
          price: 800,
        },
      ],
      // 表單資料 (Step 2)
      firstName: "",
      lastName: "",
      phone: "",
      country: "台灣",
      email: "",

      // 追蹤每個欄位是否「被觸碰」
      fieldTouched: {
        firstName: false,
        lastName: false,
        phone: false,
        country: false,
        email: false,
      },

      // 訂單編號 (Step 3)
      orderNumber: "",
    };
  },
  computed: {
    // 回傳「已勾選」的商品清單
    selectedItems() {
      return this.cartItems.filter((item) => item.checked);
    },
    // 已勾選商品的總金額
    selectedTotalPrice() {
      return this.selectedItems.reduce((sum, item) => sum + item.price, 0);
    },
    // 計算全選checkbox
    selectAll: {
      // Getter: 若所有卡片都勾選，則回傳 true，否則回傳 false
      get() {
        return (
          this.cartItems.length > 0 &&
          this.cartItems.every((item) => item.checked)
        );
      },
      // Setter: 當全選 checkbox 被勾選或取消勾選時，將每個卡片的 checked 更新為新值
      set(newValue) {
        this.cartItems.forEach((item) => {
          item.checked = newValue;
        });
      },
    },
    validEmail() {
      // 簡易驗證 (只檢查有無 @ 符號)
      return this.email.includes("@");
    }
  },
  methods: {
    // 切換步驟
    goToStep(step) {
      // 若要進入 Step 2，但沒有勾選商品，則不允許
      if (step === 2 && this.selectedItems.length === 0) {
        alert("請至少勾選一項商品");
        return;
      }
      // 若要進入 Step 3，需檢查表單是否通過驗證
      if (step === 3 && !this.checkForm()) {
        return;
      }
      // 若表單驗證通過，設置 currentStep 並產生訂單編號
      if (step === 3) {
        this.orderNumber = "A" + Math.floor(Math.random() * 1000000);
        alert(`表單提交成功！訂單編號：${this.orderNumber}`);
      }

      this.currentStep = step;
    },

    //step 1 商品資訊
    // 移除當前商品
    removeItem(index) {
      this.cartItems.splice(index, 1);
    },
    //移除所有勾選的商品
    deleteSelected() {
      this.cartItems = this.cartItems.filter((item) => !item.checked);
    },
    // 加入隨機商品到購物車
    addRandomItem() {
      const randomId = Math.floor(Math.random() * 1000);
      this.cartItems.push({
        checked: false,
        img: `https://picsum.photos/400/300?random=${randomId}`,
        title: `隨機商品 #${randomId}`,
        detail: `訂單資訊 ${randomId}`,
        date: "2025-07-01",
        people: "成人 x1",
        price: 999,
      });
      alert("已將範例商品加入購物車！");
    },
    
    //step2 檢查表單
    checkForm() {
      this.fieldTouched = {
        firstName: true,
        lastName: true,
        phone: true,
        country: true,
        email: true,
      };
      if (
        !this.firstName ||
        !this.lastName ||
        !this.phone ||
        !this.country ||
        !this.validEmail
      ) {
        alert("請填寫所有必填欄位");
        return false;
      }
      return true;
    },
    
    // step 3 完成訂購 (返回首頁)
    finishOrder() {
      window.location.reload();
    },
    
  },
});
app.use(ElementPlus);
// 正確註冊所有圖標
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#cartIndex");
