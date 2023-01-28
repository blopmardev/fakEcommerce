<template>
    <article class="cart">
        <section class="cart-header">
            <h2>Mi Carrito 🛒</h2>
        </section>
        <section class="cart-items">
            <h3>{{ cartItems.length }} productos</h3>
            <ul>
                <li v-for="item in cartItems" :key="item.id">
                    {{ item.name }}
                </li>
                <li></li>
                <li></li>
            </ul>
        </section>
        <section class="cart-footer">
            <CustomButton>
                <template v-slot:text>
                    Comprar
                </template>
            </CustomButton>
        </section>
    </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCart } from '../composables/useCart';
import CustomButton from '../components/CustomButton.vue';

export default defineComponent({
    components: {
        CustomButton
    },
    setup() {
        const { cartItems } = useCart()
        return {
            cartItems
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
    padding-top: 0.75rem;
    color: #ffffff;
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