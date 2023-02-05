<template>
  <div class="objects-page">
    <Banner :img="banner" :text="lang === 'ru' ? 'Объекты' : 'Objects'" />
    <ObjectsItems />

    <Questions />
    <OurPartners />
  </div>
</template>

<script>
import ObjectsItems from "../components/ObjectsItems.vue";
import OurPartners from "../components/OurPartners.vue";
import Questions from "../components/Questions.vue";
import Banner from "../components/ui/Banner.vue";
import { mapGetters } from 'vuex';
export default {
  components: { Banner, Questions, OurPartners, ObjectsItems },
  name: "ObjectsPage",
  data() {
    return {
      banner: require("../assets/img/objects-banner.png"),
    };
  },
  computed: {
    ...mapGetters({
      lang: "info/getLang",
    })
  }
};
</script>

<style scoped>
</style>