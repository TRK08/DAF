<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <router-link tag="div" to="/" class="header-logo">
          <img src="../../assets/img/logo.png" alt="" />
        </router-link>
        <div class="header-info">
          <div class="header-contacts" v-if="contacts">
            <div class="header-contacts-item">
              <img src="../../assets/img/phone-icon.svg" alt="" />
              <a :href="`tel:${contacts.phone}`"> {{ contacts.phone }} </a>
            </div>
            <div class="header-contacts-item">
              <img src="../../assets/img/phone-icon.svg" alt="" />
              <a :href="`tel:${contacts.fphone}`"> {{ contacts.fphone }} </a>
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
        <div class="header-info-burger" @click="isOpen = !isOpen">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="mobile-menu" v-if="isOpen">
        <div class="container">
          <div class="mobile-menu__wrap">
            <div class="mobile-menu-head">
              <img
                class="mobile-menu-logo"
                src="../../assets/img/logo--black.png"
                alt=""
              />
              <img
                @click="isOpen = !isOpen"
                class="mobile-menu-close"
                src="../../assets/img/close-icon.svg"
                alt=""
              />
            </div>
            <div class="mobile-menu-body">
              <ul class="mobile-menu-links" v-if="menu">
                <router-link
                  class="mobile-menu-item"
                  tag="li"
                  :to="`/${item.slug}`"
                  v-for="item in menu"
                  :key="item.ID"
                  >{{ item.title }}
                </router-link>
              </ul>
              <div class="mobile-contacts" v-if="contacts">
                <div class="mobile-contacts-item">
                  <img src="../../assets/img/phone-icon.svg" alt="" />
                  <a :href="`tel:${contacts.phone}`">
                    {{ contacts.phone }}
                  </a>
                </div>
                <div class="mobile-contacts-item">
                  <img src="../../assets/img/phone-icon.svg" alt="" />
                  <a :href="`tel:${contacts.fphone}`">
                    {{ contacts.fphone }}
                  </a>
                </div>
                <div class="mobile-contacts-item">
                  <img src="../../assets/img/email-icon.svg" alt="" />
                  <a :href="`mailto:${contacts.email}`">
                    {{ contacts.email }}
                  </a>
                </div>
              </div>
              <button>Задать вопрос</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    $route(to, from) {
      this.isOpen = false;
      document.body.style.overflow = "auto";
    },
    isOpen(val) {
      if (val) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
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