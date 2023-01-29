<template>
  <div class="categories">
    <h1>Categorías</h1>
    <p>En esta página encontrarás información sobre las categorías en las que están clasificados los productos de nuestra <b>primera App Vue + TypeScript</b></p>
  </div>
  <div v-if="isLoading">
    Cargando...
  </div>

  <div v-else class="list">
    <CustomCard v-for="category in categories" :key="category.id" :category="category">
      <template v-slot:header>
        <h2>{{ category.name }}</h2>
      </template>
      <template v-slot:picture>
        <img :src="category.image" class="img" :alt="category.title" :title="category.title">
      </template>
      <template v-slot:body>
        <div>
          <h4>{{ category.id }}</h4>
        </div>
      </template>
      <template v-slot:footer>
        <div>
          <CustomButton>
            <template v-slot:text>
              <router-link :to="{ name: 'category', params: { id: 56 } }">Ver Productos</router-link>
            </template>
          </CustomButton>
        </div>
      </template>
    </CustomCard>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useCategories from '@/composables/useCategories';
import CustomCard from '@/components/CustomCard.vue';
import CustomButton from '@/components/CustomButton.vue';

export default defineComponent({
  name: 'ProductList',
  components: {
    CustomCard,
    CustomButton,
  },
  setup() {

    const { categories, isLoading, fetchCategories} = useCategories();
    fetchCategories();
    console.log(categories)

    return {
      categories,
      isLoading,
    };
  },
});
</script>

<style scoped>
.categories {
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