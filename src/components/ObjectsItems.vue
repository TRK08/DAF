<template>
  <section class="objects-page-items" v-if="objects">
    <Breadcrumbs
      :cat="cat"
      :class="{ greyBreadcrubms: objects.length === 2 }"
    />
    <!-- <pre>{{objects}}</pre> -->
    <div class="objects-page-items__wrap">
      <div
        class="objects-page-item"
        :class="{
          grey:
            (i % 2 !== 0 && objects.length > 2) ||
            (i === 0 && objects.length === 2),
        }"
        v-for="(object, i) in objects"
        :key="object.id"
      >
        <div class="container">
          <span class="orange-line"></span>
          <h3 v-html="object.name[lang]"></h3>
          <div class="objects-page-item-points">
            <div
              class="objects-page-item-point"
              v-for="(item, i) in object.objects"
              :key="i"
            >
              <img src="../assets/img/point-icon.svg" alt="" />
              <span>{{ lang === 'ru' ? item.nazvanie : item.nazvanie_en }}</span>
            </div>
          </div>
          <div class="objects-page-slider__wrap">
            <swiper
              class="objects-page-slider"
              ref="mySwiper"
              :options="swiperOptions"
            >
              <swiper-slide
                class="objects-page-slide"
                v-for="img in object.gallery"
                :key="img"
              >
                <img :src="img" alt="" />
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
import { mapGetters } from "vuex";
export default {
  components: { Breadcrumbs },
  name: "ObjectsItems",
  data() {
    return {
      cat: {
        slug: "/objects",
        text: {
          ru: "Объекты",
          en: "Objects"
        },
      },
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        touchRatio: 1,
        navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },
        breakpoints: {
          991: {
            slidesPerView: 3,
          },
          672: {
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
      objects: "info/getObjects",
      lang: "info/getLang",
    }),
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style scoped>
.objects-page-item.grey,
.greyBreadcrubms {
  background-color: var(--grey);
}
</style>