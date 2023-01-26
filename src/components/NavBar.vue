<template>
  <nav>
    <div>
      <img src="../assets/logo.png" alt="Logo de Vue" title="Logo de Vue">
    </div>
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <router-link :to="{name: 'home'}" title="Home">Home</router-link> |
      <router-link :to="{name: 'products'}" title="Productos">Productos</router-link> |
      <router-link :to="{name: 'contact'}" title="Contacto">Contacto</router-link>
    </div>
  </nav>
  <nav class="links" v-if="links">
    <a v-for="link in links"
    :key="link.label"
    :href="link.url"
    :title="link.label"
    target="_blank">{{ link.label }}</a>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Link } from '@/interfaces/link';
import { Btn } from '@/interfaces/btn';


export default defineComponent({
  name: 'NavBar',
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array as PropType<Link[]>,
      default(): Link[]{
        return [
          { label: "Google", url:"http://www.google.es" },
          { label: "Vue", url:"http://www.vuejs.org" }
        ]
      }
    },
    btn: {
      type: Array as PropType<Btn[]>,
      default(): Btn[]{
        return [
          { label: "Google", url:"http://www.google.es" },
          { label: "Vue", url:"http://www.vuejs.org" }
        ]
      }
    }
  },
});
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: #9ad4ba;
  height: 5rem;
  height: auto;
  min-height: 2rem;
  padding: 1rem;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav img {
  width: 30%;
}

nav a.router-link-exact-active {
  color: #ffffff;
}

.links {
  background-color: #2c3e50;
}
.links > a {
  background-color: #2c3e50;
  color: #ffffff;
}
</style>