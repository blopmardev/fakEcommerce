<template>
  <main class="hello">
    <h2>{{ title }}</h2>
    <h3> {{ msg }}</h3>
    <section>
      <article>
        <p>En este simulador de E-Commerce podrás consultar los productos disponibles, así que como los usuarios que ya confían en nuestra plataforma.</p>
      </article>
    </section>
    <CategoryListView></CategoryListView>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CategoryListView from '@/views/CategoryListView.vue';

export default defineComponent({
    name: "HelloWorld",
    props: {
        msg: String,
        title: String
    },
    components: {
      CategoryListView },
});
</script>

<style scoped>
p {
  margin: 20px 0 0;
}
h2, h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  font-size: 1rem;
}

main{
  width: 90%;
  margin: 0 auto;
}
</style>
