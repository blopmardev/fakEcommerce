<template>
  <article>
    <h1>Detalle del producto {{ id }}</h1>
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
        <h4>Categoría</h4>
        <p>Pantalones</p>
      </template>
    </CustomCard>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomCard from '../components/CustomCard.vue';
export default defineComponent({
  name: 'DetailComponent',
  components: {
    CustomCard
  },

  props: {
    id: {
      type: Number,
      requeried: true,
    }
  },

  setup() {

    return {}
  }
})
</script>