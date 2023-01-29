<template>
  <div class="users">
    <h1>Usuarios</h1>
  </div>

  <div class="list" v-if="!isLoading">
    <CustomCard v-for="user in users" :key="user.id" :user="user">
      <template v-slot:header>
        <h2>{{ user.name }}</h2>
        <h4>{{ user.email }}</h4>
      </template>
      <template v-slot:picture>
        <img :src="user.avatar" class="img" :alt="user.name" :title="user.name">
      </template>
      <template v-slot:body>
        <h3>{{ user.rol }}</h3>
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

  <div v-else>
    Cargando...
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
.users {
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

a {
  text-decoration: none;
  color: #ffffff
}

a:visited {
  color: #ffffff;
}
</style>