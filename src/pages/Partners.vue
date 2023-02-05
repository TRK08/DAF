<template>
  <div class="partners-page">
    <Banner :img="banner" :text="lang === 'ru' ? 'Партнеры' : 'Partners'" />
    <Breadcrumbs :cat="cat" />
    <div class="container">
      <div class="partners-page__wrap">
        <div class="partners-page-item" v-for="item in partners" :key="item.id">
          <img :src="item.img" alt="" />
          <span> {{ item.name[lang] }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/ui/Banner.vue";
import Breadcrumbs from "../components/ui/Breadcrumbs.vue";
import { mapGetters } from "vuex";
export default {
  components: { Banner, Breadcrumbs },
  name: "Partners",
  data() {
    return {
      banner: require("../assets/img/banner.png"),
      cat: {
        slug: "/partnery",
        text: {
          ru: "Партнеры",
          en: "Partners"
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      partners: "info/getPartners",
      lang: "info/getLang",
    }),
  },
};
</script>

<style scoped>
</style>