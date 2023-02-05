<template>
  <section class="reasons">
    <div class="container">
      <div class="reasons__wrap">
        <div class="reasons-items">
          <div class="reasons-big-text">
            <div class="reasons-big-text__number">5</div>
            <div class="reasons-big-text__text">{{ lang === 'ru' ? 'Причин работать с нами' : 'Reasons to work with us' }}</div>
          </div>
          <div
            class="reasons-item"
            v-for="item in reasons"
            :key="item.nazvanie"
          >
            <img :src="item.ikonka" alt="" />
            <h3>{{ item.nazvanie }}</h3>
            <span> {{ item.tekst }} </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Reasons",
  computed: {
    ...mapGetters({
      reasons: "info/getReasons",
      lang: "info/getLang"
    }),
  },
};
</script>

<style scoped>
.container {
  max-width: 880px;
}
</style>