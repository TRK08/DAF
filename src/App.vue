<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />

    <Popup />
  </div>
</template>

<script>
// import "./assets/css/normalize.css";
import "./assets/css/style.css";
import axios from "axios";
import Header from "./components/ui/Header.vue";
import Footer from "./components/ui/Footer.vue";
import Popup from "./components/ui/Popup.vue";

export default {
  components: { Header, Footer, Popup },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("info/LOAD_MENU");
    this.$store.dispatch("info/LOAD_MAIN_INFO");
    this.$store.dispatch("info/LOAD_SERVICES");
    this.$store.dispatch("info/LOAD_OBJECTS");
    this.$store.dispatch("info/LOAD_PARTNERS");
    this.$store.dispatch("info/LOAD_CUSTOMERS");
    this.$store.dispatch("info/LOAD_VEHICLES");
    this.$store.dispatch("info/LOAD_VEHICLES_CATEGORY");
    this.$store.dispatch("info/LOAD_VACANCIES");
  },
};
</script>



<style>
</style>





