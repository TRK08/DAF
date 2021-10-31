<template>
  <section class="partners">
    <div class="container">
      <div class="partners__wrap">
        <h2><span class="orange-line"></span>Наши партнеры и заказчики</h2>
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
        loop: false,
        infinite: true,
        breakpoints: {},
      },
    };
  },
  computed: {
    ...mapGetters({
      partners: "info/getPartners",
    }),
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style scoped>
</style>