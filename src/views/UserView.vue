<template>
    <article>
        <h1>Perfil de usuario:</h1>
        <h3>Id de Usuario: {{ id }}</h3>
        <h3>Rol de Usuario: {{ rol }}</h3>
        <h3>UserRol: {{ userRole }}</h3>
    </article>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
export default defineComponent({
  name: 'UserComponent',
  components: {
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
    userRole: String,
  },

  setup(){

    const rol ="Admin"

    return {
      rol
    }
  }
})
</script>