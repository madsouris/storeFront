<template>
    <section class="container mx-auto p-4 min-h-screen" data-set-them="">
        <Layout />
    </section>
</template>

<script>
    import Layout from "./components/Layout/Layout.vue";
    import { onMounted, onUpdated, onUnmounted } from "vue";
    import { themeChange } from "theme-change";

    export default {
        components: {
            Layout,
        },
        setup() {
            onMounted(() => {
                themeChange(false);
            });
        },
        data() {
            return {
                theme: "winter",
            };
        },
    };
</script>
