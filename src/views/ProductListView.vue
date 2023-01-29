<template>
  <div class="products">
    <h1>Productos</h1>
    <p>En esta página encontrarás información sobre los productos de nuestra <b>primera App Vue + TypeScript</b></p>
  </div>
  <div v-if="isLoading">
    Cargando...
  </div>

  <div v-else class="list">
    <CustomCard v-for="product in products" :key="product.id" :product="product">
      <template v-slot:header>
        <h2>{{ product.title }}</h2>
      </template>
      <template v-slot:picture>
        <img :src="product.images[0]" class="img" :alt="product.title" :title="product.title">
      </template>
      <template v-slot:body>
        <div>
          <h4>{{ product.category.name }}</h4>
        </div>
      </template>
      <template v-slot:footer>
        <p>{{ product.price }}€</p>
        <div>
          <CustomButton>
            <template v-slot:text>
              <router-link :to="{ name: 'product', params: { id: product.id } }">Detalles del producto</router-link>
            </template>
          </CustomButton>
          <CustomButton @click="addElementToCart(product)">
            <template v-slot:text>Añadir al 🛒</template>
          </CustomButton>
        </div>
      </template>
    </CustomCard>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCart } from '@/composables/useCart'
import useProducts from '@/composables/useProducts';
import CustomCard from '@/components/CustomCard.vue';
import CustomButton from '@/components/CustomButton.vue';

export default defineComponent({
  name: 'ProductList',
  components: {
    CustomCard,
    CustomButton,
  },
  setup() {

    const { products, isLoading, fetchProducts } = useProducts();
    fetchProducts();
    const { addElementToCart } = useCart();
    //fetchProductById(props.id);

    return {
      products,
      isLoading,
      addElementToCart,
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

a {
  text-decoration: none;
  color: #ffffff
}

a:visited {
  color: #ffffff;
}
</style>