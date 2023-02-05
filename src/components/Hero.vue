<template>
  <section class="hero">
    <div class="hero-bg-video__wrap">
      <video
        src="https://daf.webink.site/dist/daf.mov"
        poster="../assets/img/hero-bg.png"
        autoplay="autoplay"
        loop="loop"
        playsinline="playsinline"
        muted="muted"
        class="hero-bg-video"
      ></video>
    </div>
    <div class="container">
      <div class="hero__wrap">
        <h1>{{ lang === 'ru' ? 'Строительство дорог и даже больше!' : 'Construction of roads and more!' }}</h1>
        <p>{{ lang === 'ru' ? 'Надежность, качество, стабильность, профессионализм и уважение!' : 'Reliability, quality, stability, professionalism and respect!' }}</p>
        <router-link class="transparent-btn" to="/uslugi" tag="button">
        {{ lang === 'ru' ? 'Подробнее' : 'More' }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Hero",
  computed: {
    ...mapGetters({
      lang: "info/getLang"
    })
  }
};
</script>

<style scoped>
.hero {
  background-color: var(--grey);
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-image: url("../assets/img/hero-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.hero__wrap {
  margin-top: 40vh;
  max-width: 600px;
  position: relative;
  z-index: 10;
}

.hero__wrap p {
  font-size: 20px;
  line-height: 24px;
  margin: 15px 0 25px;
}

.hero-bg-video__wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  min-height: inherit;
  height: 100%;
  overflow: hidden;
}

.hero-bg-video {
  min-width: 100%;
  min-height: 100%;
  height: 56.25vw;
  width: 177.78vh;
  object-fit: cover;
  border-width: 0;
  outline-width: 0;
  z-index: 1;
}

@media (max-width: 512px) {
  .hero-bg-video {
    display: none;
  }
}
</style>