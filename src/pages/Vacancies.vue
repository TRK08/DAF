<template>
  <div>
    <Banner :img="banner" :text="lang === 'ru' ? 'Вакансии' : 'Jobs'" />
    <VacanciesBlock />
    <Questions />
    <OurPartners />
  </div>
</template>

<script>
import Questions from "../components/Questions.vue";
import OurPartners from "../components/OurPartners.vue";
import Banner from "../components/ui/Banner.vue";
import VacanciesBlock from "../components/VacanciesBlock.vue";
import { mapGetters } from 'vuex'
export default {
  name: "Vacancies",
  components: { Questions, OurPartners, Banner, VacanciesBlock },
  data() {
    return {
      banner: require("../assets/img/objects-banner.png"),
    };
  },
  computed: {
    ...mapGetters({
      lang: "info/getLang",
    }),
  },
};
</script>

<style scoped>
</style>