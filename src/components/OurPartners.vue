<template>
  <section class="partners">
    <div class="container">
      <div class="partners__wrap">
        <h2><span class="orange-line"></span>{{lang === 'ru' ? 'Наши партнеры и заказчики' : 'Our partners and customers'}}</h2>
        <div class="swiper-pagination"></div>
        <swiper class="partners-slider" ref="mySwiper" :options="swiperOptions">
          <swiper-slide
            class="partners-slide"
            v-for="item in partners"
            :key="item.id"
          >
            <img :src="item.img" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OurPartners",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 5,
        spaceBetween: 30,
        draggable: true,
        touchRatio: 1,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        breakpoints: {
          991: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          512: {
            slidesPerView: 3,
          },
          390: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      partners: "info/getPartners",
      lang: "info/getLang"
    }),
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style scoped>
</style>