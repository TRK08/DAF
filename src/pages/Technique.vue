<template>
  <div>
    <Banner :img="banner" :text="lang === 'ru' ? 'Спецтехника' : 'Special machinery'" />
    <TechniqueBlock />
    <Questions />
    <OurPartners />
  </div>
</template>

<script>
import Questions from "../components/Questions.vue";
import OurPartners from "../components/OurPartners.vue";
import Banner from "../components/ui/Banner.vue";
import TechniqueBlock from "../components/TechniqueBlock.vue";
import { mapGetters } from "vuex";
export default {
  name: "Technique",
  components: { Questions, OurPartners, Banner, TechniqueBlock },
  computed: {
    ...mapGetters({
      lang: "info/getLang",
    })
  },
  data() {
    return {
      banner: require("../assets/img/objects-banner.png"),
    };
  },
};
</script>

<style scoped>
</style>