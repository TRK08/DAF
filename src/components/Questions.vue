<template>
  <section class="questions">
    <div class="container">
      <div class="questions__wrap">
        <h2>{{lang === 'ru' ? 'Остались вопросы?' : 'Still have questions?'}}</h2>
        <p>{{lang === 'ru' ? 'Задайте их нашим менеджерам!' : 'Ask our managers!'}}</p>
        <button
          class="transparent-btn"
          @click="setMode({ mode: true, data: popupData })"
        >
          {{ lang === 'ru' ? 'Задать вопрос' :  'Ask Question'}}
        </button>
        <div class="questions-man">
          <img src="../assets/img/questions-man.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Questions",
  data() {
    return {
      popupData: [
        {
          title: "Строительство дорог",
          isActive: true,
        },
        {
          title: "Благоустройство территорий",
          isActive: false,
        },
        {
          title: "Аренда техники",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      setMode: "popup/TAKE_POPUP_MODE",
    }),
  },
  computed: {
    ...mapGetters({
      services: "info/getServices",
      lang: "info/getLang"
    }),
    // setServices() {
    //   let popupData = [];
    //   this.services.map((item) => {
    //     popupData.push({
    //       title: item.title,
    //       isActive: false,
    //     });

    //     popupData[0].isActive = true;

    //     console.log(popupData);

    //     return popupData;
    //   });
    // },
  },
};
</script>

<style scoped>
</style>