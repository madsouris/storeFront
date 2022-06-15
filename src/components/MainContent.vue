<template>
    <div class="row">
        <Product v-for="product in 8" :key="product" />
    </div>
</template>

<script>
    import Product from "./Product.vue";
    export default {
        components: {
            name: "MainContent",
            Product,
        },
    };
</script>
