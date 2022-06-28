<template>
  <h1>Product page</h1>
  <p>
    {{ product.name }}
  </p>
  <p>
    {{ product.price }}
  </p>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import axios from 'axios';
export default {
  components: {
    name: 'ProductView',
  },
  async created() {
    const route = useRoute();
    const id: any = route.params.id;
    console.log(id);
    try {
      const response = await axios.get(
        'https://api.hangme-staging.app/api/v2/marketplace/products/' + id
      );
      console.log(typeof response.data);
      this.product = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  data() {
    return {
      product: {
        name: null,
        price: null,
      },
    };
  },
};
</script>
