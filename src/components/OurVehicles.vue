<template>
  <section class="vehicles">
    <div class="container">
      <div class="vehicles__wrap">
        <h2><span class="orange-line"></span>Наша техника</h2>
        <div class="vehicles-items" v-if="vehicles">
          <div
            class="vehicles-item"
            v-for="item in vehicles.slice(0, 6)"
            :key="item.id"
          >
            <div class="vehicles-item-text">
              <h3>{{ item.name }}</h3>
            </div>
            <div class="vehicles-item-img">
              <img :src="item.img" alt="" />
            </div>
          </div>
        </div>
        <router-link class="orange-btn" tag="button" to="/tehnika"
          >Подробнее</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OurVehicles",
  computed: {
    ...mapGetters({
      vehicles: "info/getVehicles",
    }),
  },
};
</script>

<style scoped>
</style>