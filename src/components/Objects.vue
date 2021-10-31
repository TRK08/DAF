<template>
  <section class="objects">
    <div class="container">
      <div class="objects__wrap">
        <h2><span class="orange-line"></span>Наши объекты</h2>
        <div class="objects-items" v-if="objects">
          <router-link
            tag="div"
            to="/"
            class="object-item"
            v-for="item in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <span> {{ item.name }} </span>
          </router-link>
          <router-link
            tag="div"
            to="/"
            class="object-item"
            v-for="item in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <span> {{ item.name }} </span>
          </router-link>
          <router-link
            tag="div"
            to="/"
            class="object-item"
            v-for="item in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <span> {{ item.name }} </span>
          </router-link>
          <router-link
            tag="div"
            to="/"
            class="object-item"
            v-for="item in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <span> {{ item.name }} </span>
          </router-link>
          <router-link
            tag="div"
            to="/"
            class="object-item"
            v-for="item in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <span> {{ item.name }} </span>
          </router-link>
          <router-link
            tag="div"
            to="/"
            class="object-item"
            v-for="item in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <span> {{ item.name }} </span>
          </router-link>
          <router-link
            tag="div"
            to="/"
            class="object-item"
            v-for="item in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <span> {{ item.name }} </span>
          </router-link>
          <router-link
            tag="div"
            to="/"
            class="object-item"
            v-for="item in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <span> {{ item.name }} </span>
          </router-link>
          <router-link
            tag="div"
            to="/"
            class="object-item"
            v-for="item in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <span> {{ item.name }} </span>
          </router-link>
          <router-link
            tag="div"
            to="/"
            class="object-item"
            v-for="item in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <span> {{ item.name }} </span>
          </router-link>
          <router-link
            tag="div"
            to="/"
            class="object-item"
            v-for="item in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <span> {{ item.name }} </span>
          </router-link>
          <router-link
            tag="div"
            to="/"
            class="object-item"
            v-for="item in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <span> {{ item.name }} </span>
          </router-link>
          <router-link
            tag="div"
            to="/"
            class="object-item"
            v-for="item in objects"
            :key="item.id"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <span> {{ item.name }} </span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Objects",
  computed: {
    ...mapGetters({
      objects: "info/getObjects",
    }),
  },
};
</script>

<style scoped>
</style>