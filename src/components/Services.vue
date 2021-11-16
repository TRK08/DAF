<template>
  <section class="services">
    <div class="container">
      <div class="services__wrap">
        <h2 v-if="this.$route.path === '/'">
          <span class="orange-line"></span> Наши Услуги
        </h2>
        <Breadcrumbs v-else :cat="cat" />
        <p>
          Мы оказываем услуги как по строительству, ремонту, эксплуатации дорог
          и искусственных сооружений, благоустройству территорий, так и
          проектированию. Мы ориентированы, прежде всего, на качественную работу
          с соблюдением установленных сроков, стремимся соответствовать
          потребностям рынка, соблюдая стандарты и нормы отрасли, проявляя
          профессионализм, внедряя информационные технологии и ведя гибкую,
          адекватную ценовую политику.
        </p>
        <div class="services-items" v-if="services">
          <router-link
            tag="div"
            :to="`/uslugi/${item.slug}`"
            class="services-item"
            v-for="item in services"
            :key="item.id"
          >
            <div class="services-item-text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.subtext }}</p>
            </div>
            <div class="services-item-img">
              <img :src="item.icon" alt="" />
            </div>
          </router-link>
        </div>
        <router-link
          v-if="this.$route.path === '/'"
          class="orange-btn"
          tag="button"
          to="/uslugi"
          >Подробнее</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumbs from "./ui/Breadcrumbs.vue";
export default {
  components: { Breadcrumbs },
  name: "Services",
  data() {
    return {
      cat: {
        slug: "/services",
        text: "Услуги",
      },
    };
  },
  computed: {
    ...mapGetters({
      services: "info/getServices",
    }),
  },
};
</script>

<style scoped>
</style>