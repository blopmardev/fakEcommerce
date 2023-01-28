<template>
    <article class="cart">
      <section class="cart-header">
        <h2>Mi Carrito</h2>
      </section>
      <section class="cart-items">
      </section>
      <section class="cart-footer">
        <button>Comprar</button>
      </section>
    </article>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    setup() {
  
      return {

      };
    },
  });
  </script>
  
  <style scoped>
  .cart {
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    border: 1px solid black;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    background-color: lightgray;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
  .cart-header,
  .cart-footer {
    background-color: grey;
    height: 50px;
    width: 100%;
  }
  
  .cart-items ul {
    list-style: none;
  }
  li {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  </style>