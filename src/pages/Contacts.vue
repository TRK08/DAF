<template>
  <div class="contacts">
    <Banner :img="banner" text="Контакты" />
    <ContactsBlock />
    <Questions />
    <OurPartners />
  </div>
</template>

<script>
import Questions from "../components/Questions.vue";
import OurPartners from "../components/OurPartners.vue";
import Banner from "../components/ui/Banner.vue";
import Breadcrumbs from "../components/ui/Breadcrumbs.vue";
import ContactsBlock from "../components/ContactsBlock.vue";
export default {
  components: { Breadcrumbs },
  components: { Questions, OurPartners, Banner, ContactsBlock },
  name: "Contacts",
  data() {
    return {
      cat: {
        slug: "/contacts",
        text: "Контакты",
      },
      banner: require("../assets/img/objects-banner.png"),
    };
  },
};
</script>

<style scoped>
</style>