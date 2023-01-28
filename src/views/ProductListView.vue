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
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <router-link :to="{ name: 'product', params: { id: 603 } }">Detalles del producto</router-link>
    </template>
    <template v-slot:footer>
      <h4>Footer</h4>
    </template>
  </CustomCard>
  <div v-if="isLoading">
    Cargando...
  </div>
  <div v-else>
    <div v-for="user in users" :key="user.id">
      {{ user.name }} | {{ user.role }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useUsers from '@/composables/useUsers';
import CustomCard from '../components/CustomCard.vue';

export default defineComponent({
  name: 'ProductList',
  components: {
    CustomCard
  },
  setup() {
    const { users, isLoading, fetchUsers } = useUsers();
    fetchUsers();
    console.log(users)

    return {
      users,
      isLoading,
    };
  },
});
</script>


<style scoped>
.products {
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