<template>
  <div>
    <Hero />
    <Services />
    <Objects />
    <Reasons />
    <OurVehicles />
    <Questions />
    <OurPartners />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Objects from "../components/Objects.vue";
import OurPartners from "../components/OurPartners.vue";
import OurVehicles from "../components/OurVehicles.vue";
import Questions from "../components/Questions.vue";
import Reasons from "../components/Reasons.vue";
import Services from "../components/Services.vue";
export default {
  name: "Home",
  components: {
    Hero,
    Services,
    Objects,
    Reasons,
    OurPartners,
    OurVehicles,
    Questions,
  },
};
</script>