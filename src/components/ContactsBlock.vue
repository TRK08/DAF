<template>
  <div class="contacts">
    <div class="container">
      <Breadcrumbs :cat="cat" />
      <div class="contacts__wrap">
        <div class="contacts-info" v-if="contacts">
          <div class="contacts-info-item">
            <h3>{{lang === 'ru' ? 'Адрес' : 'Address'}}</h3>
            <span
              >{{lang === 'ru' ? 'Ленинградская область, г.Гатчина, ул. Чехова д.26, пом.4' : 'Gatchina, Leningrad region, 26 Chekhov St., p.4.'}}</span
            >
          </div>
          <div class="contacts-info-item">
            <h3>{{lang === 'ru' ? 'Телефоны' : 'Phones'}}</h3>
            <span
              ><img src="../assets/img/phone-icon.svg" alt="" />
              <a :href="`tel:${contacts.phone}`">
                {{ contacts.phone }}
              </a></span
            >
            <span
              ><img src="../assets/img/phone-icon.svg" alt="" />
              <a :href="`tel:${contacts.fphone}`">
                {{ contacts.fphone }}
              </a></span
            >
          </div>
          <div class="contacts-info-item">
            <h3>{{lang === 'ru' ? 'Почта' : 'E-mail'}}</h3>
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
        slug: "/kontakty",
        text: {
          ru: "Контакты",
          en: "Contacts"
        },
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
      lang: "info/getLang",
    }),
  },
};
</script>

<style scoped>
</style>