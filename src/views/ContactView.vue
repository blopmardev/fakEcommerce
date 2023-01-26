<template>
  <div class="contact">
    <h1>Contacto</h1>
    <p>En esta página podrás ponerte en contacto con el equipo de nuestra <b>primera App Vue + TypeScript</b></p>
  </div>
  <CustomSelect>
  </CustomSelect>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomSelect from '../components/CustomSelect.vue';
export default defineComponent({
  name: 'AppComponent',
  components: {
    CustomSelect
  },
})
</script>


<style scoped>

.contact{
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