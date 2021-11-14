<template>
  <section class="hero">
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
  width: 100%;
}

.hero__wrap {
  margin-top: 40vh;
  max-width: 600px;
}

.hero__wrap p {
  font-size: 20px;
  line-height: 24px;
  margin: 15px 0 25px;
}
</style>