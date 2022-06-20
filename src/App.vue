<template>
  <section class="container mx-auto p-4 min-h-screen" data-theme="chinebear">
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
