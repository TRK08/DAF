<template>
  <div class="contacts">
    <Banner :img="banner" :text="lang === 'ru' ? 'Контакты' : 'Contacts'" />
    <ContactsBlock />
    <Questions />
    <OurPartners />
  </div>
</template>

<script>
import Questions from "../components/Questions.vue";
import OurPartners from "../components/OurPartners.vue";
import Banner from "../components/ui/Banner.vue";
import ContactsBlock from "../components/ContactsBlock.vue";
import { mapGetters } from 'vuex'
export default {
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
   computed: {
    ...mapGetters({
      lang: "info/getLang",
    }),
  },
};
</script>

<style scoped>
</style>