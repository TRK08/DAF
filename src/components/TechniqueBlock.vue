<template>
  <section class="technique">
    <div class="container">
      <Breadcrumbs :cat="cat" />
      <div class="technique__wrap">
        <span class="orange-line"></span>
        <h3>Преимущества аренды в ООО"ДАФ" :</h3>
        <p>
          В компании ООО " ДАФ", вы можете взять в аренду всю необходимую
          технику для осуществления дорожно-строительных и погрузочных работ на
          выгодных условиях. Перечень имеющейся в наличии техники позволяет
          удовлетворить потребности многочисленных клиентов. Вся наша техника
          проходит регулярную диагностику, поэтому мы можем ручаться за
          идеальное техническое состояние.
        </p>
        <div class="technique__wrap-text">
          <span>Вся техника в хорошем состоянии</span>
          <span>Возможность круглосуточной аренды</span>
          <span>Выгодные условия аренды</span>
          <span>Своевременная доставка по СПб и ЛО</span>
          <span>Хорошие цены</span>
          <span>Индивидуальные условия с постоянными клиентами</span>
        </div>
      </div>
      <div class="technique-catalog">
        <span class="orange-line"></span>
        <h3>Каталог техники</h3>
        <div class="technique-catalog-tabs">
          <button
            :class="{ active: cat.isActive }"
            v-for="cat in category"
            :key="cat.term_id"
            @click="changeCategory(cat.term_id)"
          >
            {{ cat.name }}
          </button>
        </div>
        <div class="technique-catalog-items">
          <div
            class="technique-catalog-item"
            v-for="item in singleCat(activeCatId)"
            :key="item.slug"
          >
            <img :src="item.img" alt="" />
            <div class="technique-catalog-item__info">
              <div class="technique-catalog-item__text">
                <h4>{{ item.name }}</h4>
                <div class="technique-catalog-item-feauture">
                  <div v-for="info in item.specs" :key="info.nazvanie">
                    <span> {{ info.nazvanie }} </span>
                    <span> {{ info.znacheniya }} </span>
                  </div>
                </div>
              </div>
              <button @click="rentTechnique(item)">Арендовать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "./ui/Breadcrumbs.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { Breadcrumbs },
  name: "TechniqueBlock",
  data() {
    return {
      cat: {
        slug: "/technique",
        text: "Спецтехника",
      },
      activeCatId: 3,
      filteredTechnique: [],
    };
  },
  methods: {
    ...mapActions({
      setMode: "popup/TAKE_POPUP_MODE",
    }),
    changeCategory(id) {
      this.category.map((item) => {
        item.isActive = item.term_id === id;
        if (item.isActive) {
          this.activeCatId = item.term_id;
        }
      });
    },
    rentTechnique(item) {
      let list = this.singleCat(this.activeCatId).map((cat) => {
        if (cat.name === item.name) {
          return {
            title: cat.name,
            isActive: true,
          };
        } else {
          return {
            title: cat.name,
            isActive: false,
          };
        }
      });
      this.setMode({ mode: true, data: list });
    },
  },
  watch: {
    category(val) {
      val.map((item) => {
        if (item.isActive) {
          this.activeCatId = item.term_id;
        }
      });
    },
  },
  computed: {
    ...mapGetters({
      category: "info/getVehiclesCategory",
      singleCat: "info/getSingleCatTechnique",
    }),
  },
  created() {},
};
</script>

<style scoped>
</style>