<template>
    <Header />
    <MainContent />
    <Footer />
</template>

<script>
    import Header from "./Header.vue";
    import MainContent from "./MainContent.vue";
    import Footer from "./Footer.vue";
    export default {
        components: {
            name: "Layout",
            Header,
            MainContent,
            Footer,
        },
    };
</script>
