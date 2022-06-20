<template>
  <section
    class="container-fluid min-h-screen overflow-x-hidden"
    data-theme="chinebear">
    <Header />
    <router-view></router-view>
    <Footer />
  </section>
</template>

<script>
import Header from './components/Layout/Header.vue';
import Footer from './components/Layout/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
:root {
  --custom-color: #2196f3;
}
</style>
