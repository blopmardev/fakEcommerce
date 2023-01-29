<template>
  <div class="home">
    <img alt="Logo de Vue" titlae="Logotipo de Vue" src="../assets/logo.png">
    <HelloWorld title="FakEcommerce con Vue.js + TypeScript" msg="Hola, bienvenido/a a este asombroso Ecommerce"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

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
