<template>
  <div class="home">
    <img alt="Logo de Vue" title="Logotipo de Vue" src="../assets/logo.png">
    <HelloWorld msg="Mi primera aplicación con Vue.js + TypeScript" title="Hola, bienvenido/a a esta asombrosa App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>

<style scoped>
.home > img {
  width: 15%;
}
</style>
