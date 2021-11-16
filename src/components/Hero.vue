<template>
  <section class="hero">
    <video
      src="src/assets/video/daf.mp4"
      autoplay="autoplay"
      loop="loop"
      playsinline="playsinline"
      muted="muted"
      class="hero-bg-video"
    ></video>
    <div class="container">
      <div class="hero__wrap">
        <h1>Строительство дорог и даже больше!</h1>
        <p>Надежность, качество, стабильность, профессионализм и уважение!</p>
        <router-link class="transparent-btn" to="/" tag="button"
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
  height: 100vh;
  background-image: url("../assets/img/hero-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
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

.hero-bg-video {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  height: 56.25vw;
  width: 177.78vh;
  border-width: 0;
  outline-width: 0;
  z-index: 1;
  object-fit: contain;
}
</style>