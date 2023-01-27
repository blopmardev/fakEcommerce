<template>
  <article>
    <h1>Perfil de usuario</h1>
    <section>
      <h3>Id de Usuario: {{ id }}</h3>
      <h3>Nombre de usuario: {{ user?.name }}</h3>
      <h3>Rol de usuario: {{ user?.role }}</h3>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AxiosResponse } from 'axios';
import fakeShopApi from '../api/fakeShopApi';
import { User } from '../models/user';

export default defineComponent({
  name: 'UserComponent',
  components: {
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
section {
  width: 50%;
  height: auto;
  margin: 0 auto;
  background-color: coral;
  min-height: 100px;
  text-align: left;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 2rem;
}
</style>