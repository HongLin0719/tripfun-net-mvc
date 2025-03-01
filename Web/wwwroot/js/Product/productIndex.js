const { createApp } = Vue;
const { ElIcon } = ElementPlus;
const { Search, ShoppingCart, User, Location } = ElementPlusIconsVue;

createApp({
  data() {
    return {
      searchQuery: "",
      windowWidth: window.innerWidth,
      categories: [
        "美食甜點",
        "景點門票",
        "溫泉泡湯",
        "博物/美術館",
        "工作坊 & 課程",
        "活動 & 展覽",
        "主題樂園",
        "spa & 按摩",
        "住宿",
        "觀光行程",
        "戶外活動",
      ],
      themes: [
        {
          id: 1,
          name: "美食甜點",
          image: "/images/mobile-categories/birthday-cake.png",
        },
        {
          id: 2,
          name: "景點門票",
            image: "/images/mobile-categories/ticket.png",
        },
        {
          id: 3,
          name: "溫泉泡湯",
            image: "/images/mobile-categories/stones.png",
        },
        {
          id: 4,
          name: "博物/美術館",
            image: "/images/mobile-categories/painting.png",
        },
        {
          id: 5,
          name: "工作坊＆課程",
            image: "/images/mobile-categories/school-bag.png",
        },
        {
          id: 6,
          name: "活動 & 展覽",
            image: "/images/mobile-categories/museum-map.png",
        },
        {
          id: 7,
          name: "主題樂園",
            image: "/images/mobile-categories/merry-go-round.png",
        },
        {
          id: 8,
          name: "spa & 按摩",
            image: "/images/mobile-categories/bath-towel.png",
        },
      ],
      japanProducts: [
        {
          id: 1,
          name: "東京｜花之舞海鮮居酒屋｜江戶東京博物館前店",
              image: "/images/products/japan/1.jpeg",
          price: 451,
          originalPrice: 1610,
          description:
            "每月一次的鮪魚解體秀，帶來極致新鮮的海味！本店嚴選來自產地直送的頂級海鮮，搭配職人巧手料理，呈現最道地的日式風味。快來享受Q彈新鮮的刺身與多樣化的居酒屋美食，搭配嚴選日本酒，體驗正宗東京居酒屋文化！",
          location: "東京",
          link: "#",
        },
        {
          id: 2,
          name: "東京｜新鮮漁獲直送居酒屋｜花之舞",
            image: "/images/products/japan/2.jpeg",
          price: 451,
          originalPrice: 1610,
          description:
            "嚴選當日直送的新鮮海產，搭配精緻日式料理手法，每一口都鮮甜回味！本店以快速便捷的居酒屋菜單著稱，讓您在傳統和室包廂內，輕鬆品味各式道地美食與精選日本酒，感受最正宗的日式風情。",
          location: "東京",
          link: "#",
        },
        {
          id: 3,
          name: "東京｜職人手作海鮮饗宴｜花之舞居酒屋",
            image: "/images/products/japan/3.jpeg",
          price: 451,
          originalPrice: 1610,
          description:
            "鮮美海味直送您的味蕾！本店每日嚴選新鮮漁獲，以最道地的日式手法精心烹調，讓您品嚐來自大海的純粹鮮甜。無論是Q彈刺身、豐富居酒屋小食，還是搭配日本酒的完美組合，都能帶來極致的味覺享受。",
          location: "東京",
          link: "#",
        },
        {
          id: 4,
          name: "東京｜道地日式海鮮料理｜花之舞本店",
            image: "/images/products/japan/4.jpeg",
          price: 451,
          originalPrice: 1610,
          description:
            "在地人最愛的海鮮居酒屋，專為饕客準備的極致美味！我們堅持使用當日現撈漁獲，保證最新鮮的海味，並搭配多樣化的日式料理與居酒屋小吃，讓您在充滿日式氛圍的和室包廂內，享受一場難忘的美食饗宴。",
          location: "東京",
          link: "#",
        },
        {
          id: 5,
          name: "東京｜道地日式海鮮料理｜花之舞本店",
            image: "/images/products/japan/4.jpeg",
          price: 451,
          originalPrice: 1610,
          description:
            "在地人最愛的海鮮居酒屋，專為饕客準備的極致美味！我們堅持使用當日現撈漁獲，保證最新鮮的海味，並搭配多樣化的日式料理與居酒屋小吃，讓您在充滿日式氛圍的和室包廂內，享受一場難忘的美食饗宴。",
          location: "東京",
          link: "#",
        },
        {
          id: 6,
          name: "東京｜道地日式海鮮料理｜花之舞本店",
            image: "/images/products/japan/4.jpeg",
          price: 451,
          originalPrice: 1610,
          description:
            "在地人最愛的海鮮居酒屋，專為饕客準備的極致美味！我們堅持使用當日現撈漁獲，保證最新鮮的海味，並搭配多樣化的日式料理與居酒屋小吃，讓您在充滿日式氛圍的和室包廂內，享受一場難忘的美食饗宴。",
          location: "東京",
          link: "#",
        },
      ],
      hotTripProducts: [
        {
          id: 1,
          name: "曼谷奔集希爾頓逸林酒店的 OPEN 酒吧 |泰國",
              image: "/images/hot-trip/1.webp",
          link: "#",
        },
        {
          id: 2,
          name: "曼谷皇家蘭花喜來登大酒店暹羅遊艇俱樂部餐廳晚餐套餐| 曼谷泰國",
            image: "/images/hot-trip/2.webp",
          link: "#",
        },
        {
          id: 3,
          name: "曼谷 CentralWorld 的 Camin Cuisine & Cafe 供應泰國南部美食 |泰國",
            image: "/images/hot-trip/3.webp",
          link: "#",
        },
        {
          id: 4,
          name: "爐邊酒吧及酒廊@聖淘沙灣|新加坡",
            image: "/images/hot-trip/4.webp",
          link: "#",
        },
        {
          id: 5,
          name: "沖繩美食｜琉球料理 料亭那霸",
            image: "/images/hot-trip/5.webp",
          link: "#",
        },
        {
          id: 6,
          name: "沖繩美食｜琉球料理 料亭那霸",
            image: "/images/hot-trip/6.webp",
          link: "#",
        },
      ],
    };
  },
  computed: {
    bannerFolder() {
      if (this.windowWidth >= 992) {
        return "1123_438";
      } else if (this.windowWidth >= 768) {
        return "848_438";
      } else {
        return "454_145";
      }
    },
    carouselImages() {
      const banners = [
        { name: "campaign", ext: "jpg" },
        { name: "esim", ext: "png" },
        { name: "insurance", ext: "jpg" },
        { name: "japan", ext: "png" },
      ];
      return banners.map(
        (item) => `/images/banner/${this.bannerFolder}/${item.name}.${item.ext}`
      );
    },
    carouselHeight() {
      if (this.windowWidth < 768) {
        return "150px";
      } else if (this.windowWidth < 992) {
        return "350px";
      } else {
        return "450px";
      }
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });

    this.$nextTick(() => {
      new Swiper(".ad-swiper", {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.2,
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: ".ad-swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".ad-swiper-button-next",
          prevEl: ".ad-swiper-button-prev",
        },
      });
    });

    const swiperIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        swiperIndexes.forEach((index) => {
          this.$nextTick(() => {
            new Swiper(`.product-swiper-${index}`, {
              loop: false,
              slidesPerView: 1,
              centeredSlides: false,
              spaceBetween: 10,
              watchSlidesProgress: true,
              watchSlidesVisibility: true,
              breakpoints: {
                375: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 1.3,
                },
                530: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2.8,
                },
                1280: {
                  slidesPerView: 3.4,
                },
                1400: {
                  slidesPerView: 4,
                },
              },
              navigation: {
                nextEl: `.swiper-button-next-${index}`,
                prevEl: `.swiper-button-prev-${index}`,
              },
              pagination: {
                el: `.swiper-pagination-${index}`,
                clickable: true,
                dynamicBullets: true,
              },
            });
          });
        });

    this.$nextTick(() => {
      new Swiper(".category-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".category-swiper-next",
          prevEl: ".category-swiper-prev",
        },
        breakpoints: {
          1440: {
            spaceBetween: 20,
            slidesPerView: 9,
          },
          992: {
            spaceBetween: 20,
            slidesPerView: 8,
          },
          768: {
            slidesPerView: 5,
          },
        },
      });
    });
  },
  components: {
    ElIcon,
    Search,
    ShoppingCart,
    User,
    Location,
  },
})
  .use(ElementPlus)
  .mount("#productIndex");
