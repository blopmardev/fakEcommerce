<template>
    <button @click="$emit('clicked')">
        Soy un botón
    </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
    name: 'CustomButton',
});
</script>

<style scoped>
button{
    background-color: #42b983;
    color: #ffffff;
    border: none;
    height: 30px;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
    box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.2) ;
}
button:active {
    background-color: #2c3e50;
    color: #ffffff;
    transform: translateY(4px);
}
</style>