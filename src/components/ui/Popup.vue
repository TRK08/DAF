<template>
  <div class="popup" v-if="mode" @click="setMode({ mode: null })">
    <div class="popup-block" @click.stop="">
      <span class="popup-orange-line" :class="{ loading: isLoading }"></span>
      <img
        class="popup-close"
        @click="setMode({ mode: null })"
        src="../../assets/img/close-icon.svg"
      />
      <h3>Наши менеджеры ответят в течении 15 минут</h3>
      <small>А также проконсультируют по всем интересующим вопросам</small>
      <form @submit.prevent="sendForm">
        <div class="popup-form__item">
          <label for="name">Ваше имя:</label>
          <input placeholder="имя" v-model="name" id="name" type="text" />
        </div>
        <div class="popup-form__item">
          <label for="phone">Ваш телефон:</label>
          <input
            v-mask="'+7 (###) ###-##-##'"
            v-model="phone"
            placeholder="+7 ("
            inputmode="tel"
            id="phone"
            type="tel"
          />
        </div>
        <div class="popup-form__item">
          <label for="theme">Тема:</label>
          <select name="" id="theme" v-model="theme">
            <option
              v-for="item in popupData"
              :key="item.title"
              :value="item.title"
              :selected="item.isActive"
            >
              {{ item.title }}
            </option>
          </select>
        </div>
        <button
          :disabled="!name || phone.length < 18"
          type="submit"
          @click="isLoading = !isLoading"
        >
          <span class="load-spinner" v-if="isLoading"></span>
          <span v-else>Отправить</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  name: "Popup",
  data() {
    return {
      name: "",
      phone: "",
      theme: "",
      isLoading: false,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(1),
    },
    phone: {
      required,
      minLength: minLength(12),
    },
  },
  watch: {
    mode(val) {
      if (val) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    },
  },
  methods: {
    ...mapActions({
      setMode: "popup/TAKE_POPUP_MODE",
    }),
    sendForm() {
      console.log("send");
      this.isLoading = true;
      const emailData = {
        cname: this.name,
        cphone: this.phone,
        csubject: this.theme,
      };
      const form = new FormData();
      for (let field in emailData) {
        form.append(field, emailData[field]);
      }

      axios
        .post(
          "https://daf.webink.site/wp-json/contact-form-7/v1/contact-forms/179/feedback",
          form
        )
        .then((res) => {
          this.name = "";
          this.phone = "";
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err, "SEND MESSAGE ERR");
        });
    },
  },
  watch: {
    popupData(val) {
      let active = val.find((item) => item.isActive);
      this.theme = active.title;
    },
  },
  computed: {
    ...mapGetters({
      mode: "popup/getPopupMode",
      popupData: "popup/getPopupData",
    }),
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 23, 28, 0.75);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--black);
}

.popup-block {
  background-color: var(--white);
  padding: 55px 30px;
  max-width: 430px;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin: 15px;
}

.popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.popup-orange-line.loading {
  background-image: linear-gradient(90deg, var(--white) 50%, var(--orange) 50%);
  background-size: 50px;
  background-repeat: repeat-x;
  transform: skewX(135deg);
  animation: scroll 5s infinite linear;
}

.popup-orange-line {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 4px;
  width: 100%;
  background-color: var(--orange);
}

@keyframes scroll {
  from {
    background-position: -100px 0;
  }
  to {
    background-position: 120% 0;
  }
}

.popup-block small {
  display: block;
  margin: 5px auto 0;
  max-width: 200px;
  color: #848484;
}

.popup-block form {
  width: 100%;
  margin: 0 auto;
  max-width: 280px;
  margin-top: 25px;
}

.popup-form__item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
}

.popup-form__item label {
  font-size: 12px;
  line-height: 15px;
  color: #848484;
  font-weight: 400;
}

.popup-form__item input,
.popup-form__item select {
  padding: 14px;
  width: 100%;
  background-color: var(--grey);
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}

.popup-form__item select {
  appearance: none;
  background-image: url("../../assets/img/down-arrow-icon.svg");
  background-repeat: no-repeat;
  background-position: calc(100% - 18px) 50%;
}

.popup-block form button {
  background-color: var(--orange);
  margin-top: 15px;
}

.popup-block form button:disabled {
  opacity: 0.7;
}

.load-spinner {
  height: 20px;
  width: 20px;
  display: block;
  margin: 0 auto;
  position: relative;
  animation: rotation 1s infinite linear;
  border: 3px solid rgba(255, 255, 255, 0.4);
  border-radius: 100%;
}

.load-spinner:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: -3px;
  height: 100%;
  width: 100%;
  border-top: 3px solid var(--white);
  border-left: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
  border-radius: 100%;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>