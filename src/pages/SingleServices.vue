<template>
  <div class="single-services" v-if="singleServices(id)">
    <Banner :img="banner" :text="singleServices(id).title" />
    <SingleServicesItem :slug="id" :singleService="singleServices(id)" />
    <Questions />
    <OurPartners />
    <!-- <pre> {{ singleServices(id) }} </pre> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OurPartners from "../components/OurPartners.vue";
import Questions from "../components/Questions.vue";
import SingleServicesItem from "../components/SingleServicesItem.vue";
import Banner from "../components/ui/Banner.vue";
export default {
  components: { Banner, Questions, OurPartners, SingleServicesItem },
  name: "SingleServices",
  props: ["id"],
  data() {
    return {
      banner: require("../assets/img/banner.png"),
    };
  },
  computed: {
    ...mapGetters({
      singleServices: "info/getSingleServices",
    }),
  },
  created() {},
};
</script>

<style scoped>
</style>