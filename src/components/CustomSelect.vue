<template>
    <h2>Formulario de Contacto</h2>
    <form>
        <h4><label for="name">Tu nombre:</label></h4>
        <input type="text" v-model="name">
        <h4><label for="email">Tu e-mail:</label></h4>
        <input type="email" v-model.trim="email">
        <h4><label for="message">Tu mensaje:</label></h4>
        <textarea v-model="text" name="text" class="contact-form" placeholder="Escribe tu mensaje aquí:"></textarea>
        <h4><label for="">¿Cómo nos conociste?</label></h4>
        <select v-model="response">
            <option value="Por recomendación">Por recomendación</option>
            <option value="Por un anuncio">Por un anuncio</option>
            <option value="Por redes sociales">Por redes sociales</option>
            <option value="Otros">Otros</option>
        </select>
    </form>
    <h3>Tu respuesta es:</h3>
    <p v-show="name">Mi nombre es: {{ name }} </p>
    <p v-show="email">Mi e-mail es: {{ email }} </p>
    <p v-show="response">Os he conocido por: {{ response }} </p>
    <p v-show="text">Quiero saber: {{ text }} </p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'CustomSelect',
    title: "Probando",
    setup() {
        const response = ref<string>("");
        const text = ref<string>("");
        const name = ref<string>("");
        const email = ref<string>("");
        return {
            response,
            text,
            name,
            email
        }
    }
});
</script>

<style scoped>
form {
    width: 50%;
    margin: 0 auto;
    text-align: left;
}

input {
    width: 100%;
    height: 30px;
    border: 1px dotted #424244;
    margin: 0.5rem;
}

.contact-form {
    height: 300px;
    width: 100%;
    border: 1px dotted #424244;
    resize: none;
}
</style>