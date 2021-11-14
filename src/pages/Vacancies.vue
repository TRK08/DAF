<template>
  <div>
    <Banner :img="banner" text="Вакансии" />
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
export default {
  name: "Vacancies",
  components: { Questions, OurPartners, Banner, VacanciesBlock },
  data() {
    return {
      banner: require("../assets/img/objects-banner.png"),
    };
  },
};
</script>

<style scoped>
</style>