<template>
  <section class="technique">
    <div class="container">
      <Breadcrumbs :cat="cat" />
      <div class="technique__wrap">
        <span class="orange-line"></span>
        <h3>{{lang === 'ru' ? 'Преимущества аренды в ООО"ДАФ"' : 'Rental advantages in LLC "DAF"'}} :</h3>
        <p>
          {{lang === 'ru' ? 'В компании ООО " ДАФ", вы можете взять в аренду всю необходимую технику для осуществления дорожно-строительных и погрузочных работ на выгодных условиях. Перечень имеющейся в наличии техники позволяет удовлетворить потребности многочисленных клиентов. Вся наша техника проходит регулярную диагностику, поэтому мы можем ручаться за идеальное техническое состояние.' : 'At the company LLC "DAF", you can rent all the necessary equipment for the implementation of road construction and loading operations on favorable terms. The list of available equipment allows us to satisfy the needs of numerous customers. All our machines are regularly checked, so we can vouch for their perfect technical condition.'}}
        </p>
        <div class="technique__wrap-text">
          <span>{{lang === 'ru' ? 'Вся техника в хорошем состоянии' : 'All machines are in good condition'}}</span>
          <span>{{lang === 'ru' ? 'Возможность круглосуточной аренды' : 'Round-the-clock availability'}}</span>
          <span>{{lang === 'ru' ? 'Выгодные условия аренды' : 'Favourable rental conditions'}}</span>
          <span>{{lang === 'ru' ? 'Своевременная доставка по СПб и ЛО' : 'Timely delivery in St. Petersburg and Leningrad region'}}</span>
          <span>{{lang === 'ru' ? 'Хорошие цены' : 'Good prices'}}</span>
          <span>{{lang === 'ru' ? 'Индивидуальные условия с постоянными клиентами' : 'Individual terms with long term clients'}}</span>
        </div>
      </div>
      <div class="technique-catalog">
        <span class="orange-line"></span>
        <h3>{{lang === 'ru' ? 'Каталог техники' : 'Equipment catalog'}}</h3>
        <div class="technique-catalog-tabs">
          <button
            :class="{ active: !activeCatId }"
            @click="changeCategory(null)"
          >
            {{lang === 'ru' ? 'Вся техника' : 'All machinery'}}
          </button>
          <button
            :class="{ active: cat.isActive }"
            v-for="cat in category"
            :key="cat.term_id"
            @click="changeCategory(cat.term_id)"
          >
            {{ cat.name[lang] }}
            
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
                <h4>{{ item.name[lang] }}</h4>
                <div class="technique-catalog-item-feauture">
                  <div v-for="info in item.specs" :key="info.nazvanie">
                    <span> {{lang === 'ru' ?  info.nazvanie : info.nazvanie_en }} </span>
                    <span> {{lang === 'ru' ? info.znacheniya : info.znacheniya.replace(/\кг/g, 'kg').replace(/\мм/g, 'mm').replace(/\ч/g , 'h').replace(/\км/g , 'km').replace(/\л/g , 'l').replace(/\кВт/g , 'kW').replace(/\Гц/g , 'Hz').replace(/\т/g , 'ton').replace(/\с/g , 'sec').replace('об/мин', 'rpm').replace('гуsecениц', 'caterpillars').replace('куб.м', 'м³').replace('см', 'sm') }} </span>
                  </div>
                </div>
              </div>
              <button @click="rentTechnique(item)">{{lang === 'ru' ? 'Арендовать' : 'Rent'}}</button>
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
        slug: "/tehnika",
        text: {
          ru: "Спецтехника",
          en: "Special machinery"
        },
      },
      activeCatId: null,
      filteredTechnique: [],
    };
  },
  methods: {
    ...mapActions({
      setMode: "popup/TAKE_POPUP_MODE",
    }),
    changeCategory(id) {
      if (id) {
        this.category.map((item) => {
          item.isActive = item.term_id === id;
          if (item.isActive) {
            this.activeCatId = item.term_id;
          }
        });
      } else {
        this.category.map((item) => {
          item.isActive = false;
        });
        this.activeCatId = id;
      }
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
    // category(val) {
    //   val.map((item) => {
    //     if (item.isActive) {
    //       this.activeCatId = item.term_id;
    //     }
    //   });
    // },
  },
  computed: {
    ...mapGetters({
      category: "info/getVehiclesCategory",
      singleCat: "info/getSingleCatTechnique",
      lang: "info/getLang",
    }),
  },
  created() {},
};
</script>

<style scoped>
</style>