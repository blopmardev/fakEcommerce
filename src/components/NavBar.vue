<template>
  <nav>
    <div>
      <img src="../assets/logo.png" alt="Logo de Vue" title="Logo de Vue">
    </div>
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <router-link :to="{ name: 'home' }" title="Home">Home</router-link> |
      <router-link :to="{ name: 'products' }" title="Productos">Productos</router-link> |
      <router-link :to="{ name: 'contact' }" title="Contacto">Contacto</router-link>
    </div>
    <span>{{ greeting }}</span>
  </nav>
  <nav class="links" v-if="links">

    <CustomButton @click="toggleCart">
      <template v-slot:text> Ver Carrito</template>
    </CustomButton>
    <a v-for="link in links" :key="link.label" :href="link.url" :title="link.label" target="_blank">{{ link.label }}</a>
    <CustomButton @click="changeGreeting">
      <template v-slot:text> x Cerrar sesión</template>
    </CustomButton>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Link } from '@/interfaces/link';
import { Btn } from '@/interfaces/btn';
import { useStore } from 'vuex';
import { useCart } from '@/composables/useCart';
import CustomButton from '../components/CustomButton.vue';
import { computed } from '@vue/reactivity';

export default defineComponent({
  name: 'NavBar',
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array as PropType<Link[]>,
      default(): Link[] {
        return [
          { label: "Google", url: "http://www.google.es" },
          { label: "Vue", url: "http://www.vuejs.org" }
        ]
      }
    },
    btn: {
      type: Array as PropType<Btn[]>,
      default(): Btn[] {
        return [
          { label: "Google", url: "http://www.google.es" },
          { label: "Vue", url: "http://www.vuejs.org" }
        ]
      }
    }
  },
  components: {
    CustomButton,

  },
  setup() {
    const store = useStore()
    //const greeting = ref<string>(store.state.greeting)
  const { toggleCart } = useCart();
    return {
      store,
      greeting: computed(() => store.getters['hello']),
      changeGreeting: () => {
        store.commit('changeGreeting', "🔴Sesión Cerrada")
      },
      toggleCart,
    };
  },
});
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: #9ad4ba;
  height: 5rem;
  height: auto;
  min-height: 2rem;
  padding: 1rem;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav img {
  width: 30%;
}

nav a.router-link-exact-active {
  color: #ffffff;
}

.links {
  background-color: #2c3e50;
}

.links>a {
  background-color: #2c3e50;
  color: #ffffff;
}
</style>