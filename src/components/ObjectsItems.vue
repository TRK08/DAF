<template>
  <section class="objects-page-items">
    <Breadcrumbs :cat="cat" />
    <div class="objects-page-items__wrap">
      <div class="objects-page-item">
        <div class="container">
          <span class="orange-line"></span>
          <h3>
            Выполнение работ по ремонту автомобильных дорог общего пользования
            федерального значения
          </h3>
          <div class="objects-page-item-points">
            <div class="objects-page-item-point">
              <img src="../assets/img/point-icon.svg" alt="" />
              <span>Сортавала» А-121</span>
            </div>
            <div class="objects-page-item-point">
              <img src="../assets/img/point-icon.svg" alt="" />
              <span>Сортавала» А-121</span>
            </div>
            <div class="objects-page-item-point">
              <img src="../assets/img/point-icon.svg" alt="" />
              <span>Сортавала» А-121</span>
            </div>
            <div class="objects-page-item-point">
              <img src="../assets/img/point-icon.svg" alt="" />
              <span>Сортавала» А-121</span>
            </div>
          </div>
          <div class="objects-page-slider__wrap">
            <swiper
              class="objects-page-slider"
              ref="mySwiper"
              :options="swiperOptions"
            >
              <swiper-slide class="objects-page-slide">
                <img src="../assets/img/objects.png" alt="" />
              </swiper-slide>
              <swiper-slide class="objects-page-slide">
                <img src="../assets/img/objects.png" alt="" />
              </swiper-slide>
              <swiper-slide class="objects-page-slide">
                <img src="../assets/img/objects.png" alt="" />
              </swiper-slide>
              <swiper-slide class="objects-page-slide">
                <img src="../assets/img/objects.png" alt="" />
              </swiper-slide>
            </swiper>
            <div class="swiper-prev">
              <img src="../assets/img/swiper-left-arrow.svg" alt="" />
            </div>
            <div class="swiper-next">
              <img src="../assets/img/swiper-right-arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "./ui/Breadcrumbs.vue";
export default {
  components: { Breadcrumbs },
  name: "ObjectsItems",
  data() {
    return {
      cat: {
        slug: "/objects",
        text: "Объекты",
      },
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        touchRatio: 1,
        navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },
        breakpoints: {},
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style scoped>
</style>