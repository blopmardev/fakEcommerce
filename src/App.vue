<template>
  <NavBar title="FakEcommerce" />
  <router-view />

  <CartProducts v-show="isCartOpen">
  </CartProducts>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from "./components/NavBar.vue";
import CartProducts from "./components/CartProducts.vue";
import { useCart } from './composables/useCart';
export default defineComponent({
  name: 'AppComponent',
  components: {
    NavBar,
    CartProducts,
  },
  setup() {

    const { isCartOpen } = useCart()

    return {
      useCart,
      isCartOpen
    }
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(231, 229, 229);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
