<script setup>
    import Layout from "./components/Layout.vue";
    const theme = "winter";
</script>

<template>
    <section
        class="p-4 md:p-8 lg:py-12 lg:px-64 min-h-screen"
        :data-theme="theme"
    >
        <Layout />
    </section>
</template>
