<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="breadcrumb__wrap">
        <router-link tag="span" to="/">Главная</router-link>
        <small>/</small>
        <router-link tag="span" :to="cat.slug">{{ cat.text }}</router-link>
        <small v-if="subcat">/</small>
        <router-link v-if="subcat" tag="span" :to="subcat.slug">
          {{ subcat.text }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
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
  /* text-decoration: underline; */
}

.breadcrumb__wrap span:last-child {
  font-weight: 400;
  border: none;
  pointer-events: none;
}

.breadcrumb__wrap small {
  font-weight: 600;
}
</style>