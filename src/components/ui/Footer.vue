<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <div class="footer-info">
          <div class="footer-info-logo">
            <img src="../../assets/img/logo.png" alt="" />
          </div>
          <p>
            Мы оказываем услуги как по строительству, ремонту, эксплуатации
            дорог и искусственных сооружений, благоустройству территорий, так и
            проектированию.
          </p>
          <div class="footer-info-nums">
            <span>ИНН: 12321312515135</span>
            <span>ОГРН: 23478304324</span>
          </div>
        </div>
        <div class="footer-menu" v-if="menu">
          <h3>Меню</h3>
          <ul>
            <router-link
              v-for="item in menu"
              :key="item.id"
              tag="li"
              :to="`/${item.slug}`"
            >
              {{ item.title }}
            </router-link>
          </ul>
        </div>
        <div class="footer-services" v-if="services">
          <h3>Услуги</h3>
          <ul>
            <router-link
              v-for="item in services"
              :key="item.id"
              tag="li"
              :to="`/uslugi/${item.slug}`"
            >
              {{ item.title }}
            </router-link>
          </ul>
        </div>
        <div class="footer-contacts" v-if="contacts">
          <h3>Контакты</h3>
          <div class="footer-contacts-item">
            <img src="../../assets/img/phone-icon.svg" alt="" />
            <a :href="`tel:${contacts.phone}`"> {{ contacts.phone }} </a>
          </div>
          <div class="footer-contacts-item">
            <img src="../../assets/img/phone-icon.svg" alt="" />
            <a :href="`tel:${contacts.fphone}`"> {{ contacts.fphone }} </a>
          </div>
          <div class="footer-contacts-item">
            <img src="../../assets/img/email-icon.svg" alt="" />
            <a :href="`mailto:${contacts.email}`"> {{ contacts.email }} </a>
          </div>
          <div class="footer-contacts-item footer-contacts-point">
            <img src="../../assets/img/point-icon.svg" alt="" />
            <span> {{ contacts.adres_ofisa }} </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapGetters({
      menu: "info/getMenu",
      services: "info/getServices",
      contacts: "info/getContacts",
    }),
  },
};
</script>

<style scoped>
</style>