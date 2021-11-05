<template>
  <div class="single-services-item">
    <div class="single-services-item__wrap">
      <div class="container">
        <Breadcrumbs :cat="cat" :subcat="subcat" />
        <p>
          Дорожно-строительные работы включают в себя целый перечень работ, к
          которым стоит отнести: ремонт и строительство дорог, укладку
          асфальтобетонного покрытия, ремонт и строительство тротуаров на
          городских территориях, включая площадки, стоянки и парковки. В нашей
          компания при асфальтировании дорог применяются самые современные
          асфальтобетонные смеси, которые имеют различные марки и типы в
          зависимости от того, какое дорожное покрытие следует выполнить, что
          способствует долгому сроку службы. Применение современной техники с
          использованием новых технологий укладки дорожного покрытия позволяют
          производить дорожные работы любой сложности. Также применение новейших
          глобальных систем позиционирования (GPS) для геодезических работ
          позволяет с высокой степенью надежности и в кратчайшие сроки с
          точностью определять координаты и высоты объекта, что немало важно в
          современном строительстве. Персоналом нашей компании являются
          высококвалифицированные сотрудники, постоянно проходящие обучение
          новейшим технологиям в области дорожного строительства, что позволяет
          оптимизировать стоимость и сроки работ, достигая при этом высокого
          качества.
        </p>
      </div>
      <div class="single-services-item__block">
        <div class="container">
          <div class="single-services-item__block-wrap">
            <div class="single-services-item__block-slider">
              <swiper
                class="single-services-slider"
                ref="mySwiper"
                :options="swiperOptions"
              >
                <swiper-slide class="single-services-slide">
                  <img src="../assets/img/objects.png" alt="" />
                </swiper-slide>
                <swiper-slide class="single-services-slide">
                  <img src="../assets/img/objects.png" alt="" />
                </swiper-slide>
              </swiper>
              <div class="swiper-prev">
                <img src="../assets/img/swiper-left-arrow.svg" alt="" />
              </div>
              <div class="swiper-next">
                <img src="../assets/img/swiper-right-arrow.svg" alt="" />
              </div>
            </div>
            <div class="single-services-item__block-text">
              <span class="orange-line"></span>
              <h3>Строительство и реконструкция дорог:</h3>
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
                <li>Организация и планирование строительства.</li>
                <li>Вынос на местности и разбивка территории</li>
                <li>Рубка и корчевание леса и мелколесья.</li>
                <li>
                  Устройство подстилающих слоев основания конструкции дорожной
                  одежды из песка, ПГС, щебня, ЩПС (согласно проекту)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "./ui/Breadcrumbs.vue";
export default {
  components: { Breadcrumbs },
  name: "SingleServicesItem",
  data() {
    return {
      cat: {
        slug: "/services",
        text: "Услуги",
      },
      subcat: {
        slug: "/services",
        text: "Строительство дорог",
      },
      swiperOptions: {
        slidesPerView: 1,
        touchRatio: 1,
        navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },
        breakpoints: {},
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style scoped>
.swiper-prev {
  left: 20px;
}
.swiper-next {
  right: 20px;
}
</style>