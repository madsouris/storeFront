<template>
  <h1 v-if="!products">Loading</h1>
  <div class="col-12 md:col-4 lg:col-3 mb-4 z-0" v-for="product in products" :key="product">
    <div
      class="card bg-base-100 shadow-xl hover:cursor-pointer border border-transparent hover:border-blue-500 transition-all" @click="openLink(product.id)">
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

<script>
import router from '../../router'
export default {
  components: {
    name: 'Product',
  },
  async created() {
    const response = await fetch(
      'https://api.hangme-staging.app/api/v2/marketplace/stores/2/products'
    );
    const data = await response.json();
    this.products = data;
  },
  methods: {
    openLink(id) {
      router.push(`/product/${id}`)
    }
  },
  data() {
    return {
      products: {},
    };
  },
};
</script>
