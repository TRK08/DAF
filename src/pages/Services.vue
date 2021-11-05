<template>
  <div class="services-page">
    <Banner :img="banner" text="Услуги" />
    <Services />
    <Objects />
    <Questions />
    <OurPartners />
    <!-- <Services />
    <Objects />
    <Questions />
    <OurPartners /> -->
  </div>
</template>

<script>
import Objects from "../components/Objects.vue";
import Questions from "../components/Questions.vue";
import Services from "../components/Services.vue";
import OurPartners from "../components/OurPartners.vue";
import Banner from "../components/ui/Banner.vue";
export default {
  components: { Services, Objects, Questions, OurPartners, Banner },
  name: "ServicesPage",
  data() {
    return {
      banner: require("../assets/img/banner.png"),
    };
  },
};
</script>

<style scoped>
.services-page::v-deep .services {
  padding: 40px 0 80px;
}
</style>