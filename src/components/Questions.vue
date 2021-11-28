<template>
  <section class="questions">
    <div class="container">
      <div class="questions__wrap">
        <h2>Остались вопросы?</h2>
        <p>Задайте их нашим менеджерам!</p>
        <button
          class="transparent-btn"
          @click="setMode({ mode: true, data: popupData })"
        >
          Задать вопрос
        </button>
        <div class="questions-man">
          <img src="../assets/img/questions-man.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Questions",
  data() {
    return {
      popupData: [
        {
          title: "Аренда техники",
          isActive: false,
        },
        {
          title: "Благоустройство территорий",
          isActive: true,
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      setMode: "popup/TAKE_POPUP_MODE",
    }),
  },
};
</script>

<style scoped>
</style>