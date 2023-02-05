<template>
  <div class="about">
    <div class="container">
      <Breadcrumbs :cat="cat" />
      <div class="about__wrap">
        <div class="about__wrap-item" v-for="item in info" :key="item.title">
          <div class="about-item-img">
            <img :src="item.kartinka" alt="" />
          </div>
          <div class="about-item-text">
            <span class="orange-line"></span>
            <h3>{{ lang === 'ru' ? item.nazvanie : item.nazvanie_en }}</h3>
            <p v-html="lang === 'ru' ? item.opisanie : item.opisanie_en"></p>
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
  name: "About",
  data() {
    return {
      cat: {
        slug: "/about",
        text: {
          ru: "О компании",
          en: "About the company"
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      info: "info/getAboutInfo",
      lang: "info/getLang"
    }),
  },
};
</script>

<style scoped>
</style>