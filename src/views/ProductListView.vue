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
  <div v-else class="list">
  <CustomCard v-for="user in users" :key="user.id" :user="user">
    <template v-slot:header>
      <h2>{{ user.name }}</h2>
      <h4>{{ user.email }}</h4>
    </template>
    <template v-slot:picture>
      <img :src="user.avatar" class="img" :alt="user.name" :title="user.name">
    </template>
    <template v-slot:body>
      <h3>{{ user.rol}}</h3>
    </template>
    <template v-slot:footer>
      <CustomButton>
        <template v-slot:text>
          <router-link :to="{ name: 'user', params: { id: user.id } }">Perfil del usuario</router-link>
        </template>
      </CustomButton>
    </template>
  </CustomCard>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useUsers from '@/composables/useUsers';
import CustomCard from '@/components/CustomCard.vue';
import CustomButton from '@/components/CustomButton.vue';

export default defineComponent({
  name: 'ProductList',
  components: {
    CustomCard,
    CustomButton,
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

.list {
  display: flex;
  flex-flow: row wrap;
}

.card {
  width: 30%;
}

.img {
  width: 100%;
}

h1 {
  color: #539678;
}

button {
  background-color: #2c3e50;
}

a{
  text-decoration: none;
  color: #ffffff
}

a:visited{
  color: #ffffff;
}
</style>