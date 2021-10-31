<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// import "./assets/css/normalize.css";
import "./assets/css/style.css";
import axios from "axios";
import Header from "./components/ui/Header.vue";
import Footer from "./components/ui/Footer.vue";

export default {
  components: { Header, Footer },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("info/LOAD_MENU");
    this.$store.dispatch("info/LOAD_MAIN_INFO");
    this.$store.dispatch("info/LOAD_SERVICES");
    this.$store.dispatch("info/LOAD_OBJECTS");
    this.$store.dispatch("info/LOAD_PARTNERS");
    this.$store.dispatch("info/LOAD_VEHICLES");
  },
};
</script>



<style>
</style>





