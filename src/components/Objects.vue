<template>
  <section class="objects">
    <div class="container">
      <div class="objects__wrap">
        <h2><span class="orange-line"></span>{{ lang === 'ru' ? 'Наши объекты' :  'Our sites'}}</h2>
        <div class="objects-items" v-if="objects">
          <div
            class="object-item image"
            v-for="(item, i) in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
            @click="index = i"
          >
            <span> {{ item.name[lang] }} </span>
          </div>
        </div>
      </div>
    </div>
    <CoolLightBox
      :items="items"
      :index="index"
      @close="index = null"
      mediaType="image"
    >
    </CoolLightBox>
    <!-- <div class="objects-popup" v-show="isOpen" @click="close">
      <div class="container">
        <div class="objects-popup__wrap" @click.stop>
          <div class="objects-popup__close" @click="close">
            <img src="../assets/img/close-icon.svg" alt="" />
          </div>
          <img :src="imgPreview" alt="" />
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Objects",
  data() {
    return {
      imgPreview: "",
      isOpen: false,
      items: [],
      index: null,
    };
  },
  methods: {
    open(img) {
      this.imgPreview = img;
      this.isOpen = true;
      document.body.style.overflowY = "hidden";
    },
    close() {
      this.isOpen = false;
      document.body.style.overflowY = "scroll";
    },
  },
  watch: {
    index(val) {
      console.log(val);
      // this.items = this.objects[this.index].gallery;
      if (val !== null) {
        this.items = this.objects[val].gallery;
      } else {
        this.index = null;
      }
    },
  },
  computed: {
    ...mapGetters({
      objects: "info/getObjects",
      lang: "info/getLang"
    }),
  },
};
</script>

<style scoped>
.objects-popup {
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.objects-popup__wrap {
  width: fit-content;
  max-height: 80vh;
  position: relative;
  margin: 0 auto;
}

.objects-popup__wrap img {
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

.objects-popup__close {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 40px;
  height: 40px;
  background-color: var(--white);
  padding: 10px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>