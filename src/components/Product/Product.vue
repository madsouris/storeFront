<template>
  <div v-if="!products" class="prose">
    <h1>There is nothing here</h1>
  </div>
  <div
    class="col-12 md:col-4 lg:col-3 mb-4 z-0"
    v-for="product in products"
    :key="product">
    <div
      class="card bg-base-100 shadow-xl hover:cursor-pointer border border-transparent hover:border-blue-500 transition-all"
      @click.native="$router.push('/product/' + product.id)">
      <figure>
        <img
          class="image-full"
          src="https://api.lorem.space/image/fashion?w=400&h=225"
          alt="Shoes" />
      </figure>
      <div class="card-body gap-0 p-4">
        <h1 class="card-title tracking-tight">
          {{ product.name }} ({{ product.id }})
        </h1>
        <div class="card-actions mt-2">
          <h3 class="card-title text-primary">$ {{ product.price }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from '../../router';
import axios from 'axios';
export default defineComponent({
  name: 'Product',
  components: {},
  async created() {
    try {
      const response = await axios.get(
        'https://api.hangme-staging.app/api/v2/marketplace/stores/2/products'
      );
      console.log(response.data);
      this.products = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  data() {
    return {
      products: null,
    };
  },
});
</script>
