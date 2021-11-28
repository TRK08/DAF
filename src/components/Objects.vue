<template>
  <section class="objects">
    <div class="container">
      <div class="objects__wrap">
        <h2><span class="orange-line"></span>Наши объекты</h2>
        <div class="objects-items" v-if="objects">
          <div
            class="object-item"
            v-for="item in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
            @click="open(item.img)"
          >
            <span> {{ item.name }} </span>
          </div>
        </div>
      </div>
    </div>
    <div class="objects-popup" v-show="isOpen" @click="close">
      <div class="container">
        <div class="objects-popup__wrap" @click.stop>
          <div class="objects-popup__close" @click="close">
            <img src="../assets/img/close-icon.svg" alt="" />
          </div>
          <img :src="imgPreview" alt="" />
        </div>
      </div>
    </div>
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
  computed: {
    ...mapGetters({
      objects: "info/getObjects",
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