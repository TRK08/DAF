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
        <h1>Строительство дорог и даже больше!</h1>
        <p>Надежность, качество, стабильность, профессионализм и уважение!</p>
        <router-link class="transparent-btn" to="/uslugi" tag="button"
          >Подробнее</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.hero {
  background-color: var(--grey);
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
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
</style>