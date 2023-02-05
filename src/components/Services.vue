<template>
  <section class="services">
    <div class="container">
      <div class="services__wrap">
        <h2 v-if="this.$route.path === '/'">
          <span class="orange-line"></span> {{ lang === 'ru' ? 'Наши Услуги' :  'Our Services'}}
        </h2>
        <Breadcrumbs v-else :cat="cat" />
        <p>
          {{ lang === 'ru' ? 'Мы оказываем услуги как по строительству, ремонту, эксплуатации дорог и искусственных сооружений, благоустройству территорий, так и проектированию. Мы ориентированы, прежде всего, на качественную работу с соблюдением установленных сроков, стремимся соответствовать потребностям рынка, соблюдая стандарты и нормы отрасли, проявляя профессионализм, внедряя информационные технологии и ведя гибкую, адекватную ценовую политику.' :  'We provide services both in construction, repair, maintenance of roads and engineering structures, landscaping and design. We are focused primarily on quality work with observance of deadlines, we strive to meet the needs of the market, observing the standards and norms of the industry, showing professionalism, introducing information technologies and pursuing a flexible, adequate pricing policy.'}}
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
              <h3>{{ item.title[lang] }}</h3>
              <p>{{ item.subtext[lang] }}</p>
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
          >{{ lang === 'ru' ? 'Подробнее' :  'More'}}</router-link
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
        text: {
          ru: "Услуги",
          en: "Services"
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      services: "info/getServices",
      lang: "info/getLang"
    }),
  },
};
</script>

<style scoped>
</style>