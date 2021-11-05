<template>
  <div class="banner">
    <div
      class="banner__wrap"
      :style="{
        background: 'url(' + img + ') no-repeat ',
        'background-size': 'cover',
      }"
    >
      <div class="container">
        <h2>{{ text }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    text: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.banner {
  height: 300px;
}

.banner__wrap {
  height: inherit;
  display: flex;
  align-items: flex-end;
}

.banner__wrap h2 {
  margin-bottom: 70px;
  color: var(--white);
}
</style>