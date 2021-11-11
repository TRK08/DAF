<template>
  <div class="contacts">
    <div class="container">
      <Breadcrumbs :cat="cat" />
      <div class="contacts__wrap">
        <div class="contacts-info" v-if="contacts">
          <div class="contacts-info-item">
            <h3>Адрес</h3>
            <span
              >Ленинградская область, г.Гатчина, ул. Чехова д.26, пом.4</span
            >
          </div>
          <div class="contacts-info-item">
            <h3>Телефоны</h3>
            <span
              ><img src="../assets/img/phone-icon.svg" alt="" />
              <a :href="`tel:${contacts.phone}`">
                {{ contacts.phone }}
              </a></span
            >
            <span
              ><img src="../assets/img/phone-icon.svg" alt="" />
              <a :href="`tel:${contacts.phone}`">
                {{ contacts.phone }}
              </a></span
            >
          </div>
          <div class="contacts-info-item">
            <h3>Почта</h3>
            <span>
              <img src="../assets/img/email-icon.svg" alt="" />
              <a :href="`mailto:${contacts.email}`"> {{ contacts.email }} </a>
            </span>
          </div>
        </div>
        <div class="contacts-map">
          <yandex-map
            :coords="coords"
            :zoom="14"
            ymap-class="map-instance__wrap"
            :controls="controls"
            :scroll-zoom="scrollZoom"
          >
            <ymap-marker :coords="markerCoords" marker-id="123" />
          </yandex-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "./ui/Breadcrumbs.vue";
import { mapGetters } from "vuex";
export default {
  components: { Breadcrumbs },
  name: "ContactsBlock",
  data() {
    return {
      cat: {
        slug: "/contacts",
        text: "Контакты",
      },
      banner: require("../assets/img/objects-banner.png"),
      coords: [59.575128, 30.144389],
      markerCoords: [59.575128, 30.144389],
      controls: ["zoomControl"],
      scrollZoom: false,
      markerIcon: {
        layout: "default#imageWithContent",
        // imageHref: require("../assets/img/map-point.svg"),
        imageSize: [30, 30],
        imageOffset: [0, -30],
      },
    };
  },
  computed: {
    ...mapGetters({
      contacts: "info/getContacts",
    }),
  },
};
</script>

<style scoped>
</style>