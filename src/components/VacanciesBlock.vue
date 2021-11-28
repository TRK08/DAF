<template>
  <section class="vacancies">
    <Breadcrumbs :cat="cat" />
    <div class="container">
      <div class="vacancies__wrap">
        <div class="vacancies-item" v-for="item in vacancies" :key="item.id">
          <div class="img">
            <img src="../assets/img/vacancies.svg" alt="" />
          </div>
          <h3>{{ item.name }}</h3>
          <button @click="respond(item.name)">Откликнуться</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Breadcrumbs from "./ui/Breadcrumbs.vue";
export default {
  components: { Breadcrumbs },
  name: "VacanciesBlock",
  data() {
    return {
      cat: {
        slug: "/vacancies",
        text: "Вакансии",
      },
    };
  },
  methods: {
    ...mapActions({
      setMode: "popup/TAKE_POPUP_MODE",
    }),
    respond(name) {
      let list = this.vacancies.map((vac) => {
        if (name === vac.name) {
          return {
            title: vac.name,
            isActive: true,
          };
        } else {
          return {
            title: vac.name,
            isActive: false,
          };
        }
      });
      this.setMode({ mode: true, data: list });
    },
  },
  computed: {
    ...mapGetters({
      vacancies: "info/getVacancies",
    }),
  },
};
</script>

<style scoped>
</style>