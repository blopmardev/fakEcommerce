<template>
  <div class="products">
    <h1>Productos</h1>
    <p>En esta página encontrarás información sobre los productos de nuestra <b>primera App Vue + TypeScript</b></p>
  </div>
  <CustomCard>
    <template v-slot:header>
      <h3>Card Header</h3>
    </template>
    <template v-slot:picture>
      <img src="../assets/logo.png" alt="Logo de Vue" title="Logo de Vue" class="img">
    </template>
    <template v-slot:body>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Sed, dolorum explicabo tempore neque quia, omnis ipsum iste dolores, deserunt numquam et rem beatae.
        Excepturi, deserunt nam sunt accusantium expedita exercitationem.</p>
    </template>
    <template v-slot:footer>
    <h4>Footer</h4>
    <router-link :to="{name: 'product', params: {id: '1Ab3c4d'}}">Detalles</router-link>
    </template>
  </CustomCard>
  <CustomCard>
    <template v-slot:header>
      <h3>Card Header</h3>
    </template>
    <template v-slot:picture>
      <img src="../assets/logo.png" alt="Logo de Vue" title="Logo de Vue" class="img">
    </template>
    <template v-slot:body>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Sed, dolorum explicabo tempore neque quia, omnis ipsum iste dolores, deserunt numquam et rem beatae.
        Excepturi, deserunt nam sunt accusantium expedita exercitationem.</p>
    </template>
    <template v-slot:footer>
    <h4>Footer</h4>
    <router-link :to="{name: 'product', params: {id: '2Ab5c4d'}}">Detalles</router-link>
    </template>
  </CustomCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomCard from '../components/CustomCard.vue';
export default defineComponent({
  name: 'AppComponent',
  components: {
    CustomCard
  },
})
</script>


<style scoped>

.products{
  margin: 0 auto;
  width: 90%;
  margin-top: 1rem;
  padding: 1rem;
}
.img {
    width: 50%;
    max-width: 200px;
}

h1 {
  color: #539678;
}

</style>