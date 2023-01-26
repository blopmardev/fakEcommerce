<template>
    <article>
        <slot name="picture"></slot>
        <slot name="header"></slot>
        <slot name="body"></slot>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </article>
</template>

<style scoped>
article {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    height: auto;
    min-height: 300px;
    width: 40%;
    margin: 1rem auto;
    border-radius: 1rem;
    box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.2) ;
    padding: 1rem;
    overflow: hidden;
    background-color: #ffffff;
}
.footer{
    background-color: #9ad4ba;
    width: 90%;
    height: auto;
    padding: 3rem;
    margin: 0.5rem 0rem 0rem 0rem;
}
</style>
