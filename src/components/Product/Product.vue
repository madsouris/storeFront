<template>
  <div v-if="!products" class="prose">
    <h1>There is nothing here</h1>
  </div>
  <div class="break-inside z-0 mb-4" v-for="product in products" :key="product">
    <div
      class="card bg-base-100 shadow-xl hover:cursor-pointer border border-transparent hover:border-primary transition-all"
      @click.native="$router.push('/product/' + product.id)">
      <figure>
        <img
          class="w-full aspect-square object-cover"
          src="https://api.lorem.space/image/fashion?w=500"
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
//import router from '../../router';
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
      //console.log(this.$router.currentRoute.path);
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
