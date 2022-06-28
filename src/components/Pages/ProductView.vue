<template>
  <h1>Product page</h1>
  <p>
    {{ product.name }}
  </p>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
export default {
  components: {
    name: 'ProductView',
  },
  setup() {
    const route = useRoute();
    console.log(route.params.product);

    //const product = JSON.parse(route.params.product);
    return {
      // product,
    };
  },
};
</script>
