<template>
    <article>
        <h1>Detalle del producto {{ id }}</h1>
        <CustomCard>
        </CustomCard>
    </article>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
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

  setup(){

    return {}
  }
})
</script>