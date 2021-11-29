<template>
  <div class="single-services-item" v-if="singleService">
    <div class="single-services-item__wrap">
      <div class="container">
        <Breadcrumbs
          :cat="cat"
          :subcat="{ slug: '', text: singleService.title }"
        />
        <div v-html="singleService.text"></div>
      </div>
      <div class="single-services-item__block">
        <div class="container">
          <div class="single-services-item__block-wrap">
            <div class="single-services-item__block-slider">
              <swiper
                class="single-services-slider"
                ref="mySwiper"
                :options="swiperOptions"
              >
                <swiper-slide
                  v-for="slide in singleService.gallery"
                  :key="slide"
                  class="single-services-slide"
                >
                  <img :src="slide" alt="" />
                </swiper-slide>
              </swiper>
              <div class="swiper-prev">
                <img src="../assets/img/swiper-left-arrow.svg" alt="" />
              </div>
              <div class="swiper-next">
                <img src="../assets/img/swiper-right-arrow.svg" alt="" />
              </div>
            </div>
            <div class="single-services-item__block-text">
              <span class="orange-line"></span>
              <h3>{{ singleService.subtext }}</h3>
              <ul>
                <li
                  v-for="(item, i) in singleService.sostavlyayushhie"
                  :key="i"
                >
                  {{ item.tekst }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumbs from "./ui/Breadcrumbs.vue";
export default {
  components: { Breadcrumbs },
  name: "SingleServicesItem",
  props: {
    slug: {
      type: String,
      required: true,
    },
    singleService: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      cat: {
        slug: "/uslugi",
        text: "Услуги",
      },
      swiperOptions: {
        slidesPerView: 1,
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
.swiper-prev {
  left: 20px;
}
.swiper-next {
  right: 20px;
}
</style>