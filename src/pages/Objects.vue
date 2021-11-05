<template>
  <div class="objects-page">
    <Banner :img="banner" text="Объекты" />
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
export default {
  components: { Banner, Questions, OurPartners, ObjectsItems },
  name: "ObjectsPage",
  data() {
    return {
      banner: require("../assets/img/objects-banner.png"),
    };
  },
};
</script>

<style scoped>
</style>