<template>
  <div class="single-services">
    <Banner :img="banner" text="Строительство дорог" />
    <SingleServicesItem :slug="id" />
    <Questions />
    <OurPartners />
  </div>
</template>

<script>
import OurPartners from "../components/OurPartners.vue";
import Questions from "../components/Questions.vue";
import SingleServicesItem from "../components/SingleServicesItem.vue";
import Banner from "../components/ui/Banner.vue";
import Breadcrumbs from "../components/ui/Breadcrumbs.vue";
export default {
  components: { Banner, Questions, OurPartners, SingleServicesItem },
  name: "SingleServices",
  props: ["id"],
  data() {
    return {
      banner: require("../assets/img/banner.png"),
    };
  },
  created() {},
};
</script>

<style scoped>
</style>