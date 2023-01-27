<template>
  <article>
    <h1>Perfil de usuario</h1>
    <section>
      <CustomCard class="user">
      <template v-slot:header>
        <h3>{{ user?.name }}</h3>
      </template>
      <template v-slot:picture>
        <img :src="user?.avatar" alt="Avatar del usuario" title="Avatar del usuario" class="avatar">
      </template>
      <template v-slot:footer>
        <h3>Id de Usuario: {{ user?.id }}</h3>
      <h3>Rol de usuario: {{ user?.role }}</h3>
      </template>
    </CustomCard>
    </section>
  </article>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AxiosResponse } from 'axios';
import fakeShopApi from '../api/fakeShopApi';
import CustomCard from '../components/CustomCard.vue';
import { User } from '../models/user';

export default defineComponent({
  name: 'UserComponent',
  components: {
    CustomCard
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
    userRole: String
  },

  setup(props) {
    let user = ref<User>();

    fakeShopApi.get<unknown, AxiosResponse<User>>(`/users/${props.id}`)
      .then((res) => {
        user.value = res.data;
        console.log(res.data)
        console.log(user.value.name)
        console.log(user.value.id)

      })
    return {
      user
    }
  }
})
</script>

<style scoped>
.user{
  background-color: grey;
}

</style>