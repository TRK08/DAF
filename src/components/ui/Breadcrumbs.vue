<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="breadcrumb__wrap">
        <router-link tag="span" to="/">{{lang === 'ru' ? 'Главная' : 'Home'}}</router-link>
        <small>/</small>
        <router-link tag="span" :to="cat.slug">{{ cat.text[lang] }}</router-link>
        <small v-if="subcat">/</small>
        <router-link v-if="subcat" tag="span" :to="subcat.slug">
          {{ subcat.text }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Breadcrumbs",
  computed: {
    ...mapGetters({
      lang: "info/getLang",
    })
  },
  props: {
    cat: {
      type: Object,
      required: true,
    },
    subcat: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style scoped>
.breadcrumbs {
  color: var(--black);
  padding: 40px 0;
}

.breadcrumb__wrap span {
  cursor: pointer;
  font-weight: 600;
  border-bottom: 1px solid #000;
}

.breadcrumb__wrap span:last-child {
  font-weight: 400;
  border: none;
  pointer-events: none;
  line-height: 20px;
}

.breadcrumb__wrap small {
  font-weight: 600;
}
</style>