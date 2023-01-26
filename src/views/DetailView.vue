<template>
    <article>
        <h1>Detalle del producto {{ id }}</h1>
        <CustomCard>
        </CustomCard>
    </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import CustomCard from '../components/CustomCard.vue';
export default defineComponent({
  name: 'DetailComponent',
  components: {
    CustomCard
  },

  setup(){
    const route = useRoute();
    const id = ref<string>(route.params.id as string);
    return {id}
  }
})
</script>