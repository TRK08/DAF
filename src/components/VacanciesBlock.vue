<template>
  <section class="vacancies">
    <Breadcrumbs :cat="cat" />
    <div class="vacancies__wrap">
      <div class="vacancies-item">
        <div class="container">
          <div class="vacancies-item__wrap">
            <div class="vacancies-item-info">
              <span class="orange-line"></span>
              <h3>Производитель работ</h3>
              <div class="vacancies-item-block">
                <h4>Профессиональные требования:</h4>
                <ul>
                  <li>Организация и планирование строительства.</li>
                  <li>Вынос на местности и разбивка территории</li>
                  <li>Рубка и корчевание леса и мелколесья.</li>
                  <li>
                    Устройство подстилающих слоев основания конструкции дорожной
                    одежды из песка, ПГС, щебня, ЩПС (согласно проекту)
                  </li>
                  <li>
                    Укладка слоев асфальтобетонного покрытия всех типов и марок
                    (согласно проекту).
                  </li>
                </ul>
              </div>
              <div class="vacancies-item-block">
                <h4>Обязанности:</h4>
                <ul>
                  <li>Организация и планирование строительства.</li>
                  <li>Вынос на местности и разбивка территории</li>
                  <li>Рубка и корчевание леса и мелколесья.</li>
                  <li>
                    Устройство подстилающих слоев основания конструкции дорожной
                    одежды из песка, ПГС, щебня, ЩПС (согласно проекту)
                  </li>
                </ul>
              </div>
              <div class="vacancies-item-block">
                <h4>Условия:</h4>
                <ul>
                  <li>Организация и планирование строительства.</li>
                  <li>Вынос на местности и разбивка</li>
                </ul>
              </div>
              <button>Откликнуться</button>
            </div>
            <div class="vacancies-item-img">
              <img src="../assets/img/objects.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "./ui/Breadcrumbs.vue";
export default {
  components: { Breadcrumbs },
  name: "VacanciesBlock",
  data() {
    return {
      cat: {
        slug: "/vacancies",
        text: "Вакансии",
      },
    };
  },
};
</script>

<style scoped>
</style>