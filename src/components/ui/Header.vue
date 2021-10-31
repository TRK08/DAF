<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <div class="header-logo">
          <img src="../../assets/img/logo.png" alt="" />
        </div>
        <div class="header-info">
          <div class="header-contacts" v-if="contacts">
            <div class="header-contacts-item">
              <img src="../../assets/img/phone-icon.svg" alt="" />
              <a :href="`tel:${contacts.fphone}`"> {{ contacts.fphone }} </a>
            </div>
            <div class="header-contacts-item">
              <img src="../../assets/img/phone-icon.svg" alt="" />
              <a :href="`tel:${contacts.phone}`"> {{ contacts.phone }} </a>
            </div>
            <div class="header-contacts-item">
              <img src="../../assets/img/email-icon.svg" alt="" />
              <a :href="`mailto:${contacts.email}`"> {{ contacts.email }} </a>
            </div>
          </div>
          <ul class="header-menu" v-if="menu">
            <router-link
              class="header-menu-item"
              tag="li"
              :to="`/${item.slug}`"
              v-for="item in menu"
              :key="item.ID"
              >{{ item.title }}
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      menu: "info/getMenu",
      contacts: "info/getContacts",
    }),
  },
};
</script>	
<style scoped>
</style>