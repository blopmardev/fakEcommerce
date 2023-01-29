<template>
  <article v-if="!isLoading">
    <h1>Perfil de {{ product.title }}</h1>
    <section>
      <CustomCard class="product" :key="product.id" :product="product.title">
        <template v-slot:header>
          <h2>{{ product.title }}</h2>
        </template>
        <template v-slot:picture>
          <div class="slider">
            <img :src="product.images[0]" class="img" :alt="product.title" :title="product.title">
            <img :src="product.images[1]" class="img" :alt="product.title" :title="product.title">
            <img :src="product.images[2]" class="img" :alt="product.title" :title="product.title">
          </div>
        </template>
        <template v-slot:body>
          <div>
            <h3>{{ product.category.name }}</h3>
            <h4>Precio: {{ product.price }}</h4>
          </div>
        </template>
        <template v-slot:footer>
          <p>{{ product.description }}</p>
          <CustomButton @click="addElementToCart(product)">
            <template v-slot:text>Añadir al 🛒</template>
          </CustomButton>
        </template>
      </CustomCard>
    </section>
  </article>
  <article v-else>
    <h2>Cargando...</h2>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCart } from '@/composables/useCart'
import useProducts from '@/composables/useProducts';
import CustomCard from '../components/CustomCard.vue';
import CustomButton from '../components/CustomButton.vue';

export default defineComponent({
  name: 'DetailComponent',
  components: {
    CustomCard,
    CustomButton
  },

  props: {
    id: {
      type: Number,
      required: true,
    }
  },

  setup(props) {
    const { addElementToCart } = useCart();
    const { product, fetchProductById, isLoading } = useProducts();
    fetchProductById(props.id);
    return {
      product,
      addElementToCart,
      isLoading
    };
  },
});
</script>

<style scoped>
.product {
  background-color: #539678;
  width: 70%;
}

h2 {
  color: #ffffff;
}

button {
  width: 50%;
  height: 25%;
  font-size: larger;
  background-color: #2c3e50;
}

a {
  text-decoration: none;
}

a:visited {
  color: #ffffff;
}

.slider {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  width: 100%;
}

.slider>img {
  width: 30%;
}
</style>