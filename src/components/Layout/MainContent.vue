<template>
  <div class="row">
    <!-- <Product v-for="product in 8" :key="product" /> -->
    <h1 v-if="!products">Loading</h1>
    <div class="col-12 md:col-4 lg:col-3 mb-4" v-for="product in products">
      <div
        class="card bg-base-100 shadow-xl hover:cursor-pointer border border-transparent hover:border-blue-500 transition-all">
        <figure>
          <img
            class="image-full"
            src="https://api.lorem.space/image/fashion?w=400&h=225"
            alt="Shoes" />
        </figure>
        <div class="card-body gap-0 p-4">
          <h1 class="card-title tracking-tight">
            {{ product.name }}
          </h1>
          <div class="card-actions mt-2">
            <h3 class="card-title text-primary">$ {{ product.price }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <a
        href="https://github.com/madsouris/storeFront"
        target="_blank"
        class="btn btn-primary mr-2">
        Repo 🍑
      </a>
      <a
        href="https://vannrith.com"
        target="_blank"
        ref="nofollow"
        class="btn btn-outline btn-primary">
        Author 🐭</a
      >
    </div>
  </div>
</template>

<script>
// import Product from "../Product/Product.vue";
export default {
  components: {
    name: 'MainContent',
  },
  created() {
    fetch('http://localhost:3500/product')
      .then((response) => response.json())
      .then((data) => (this.products = data));
  },
  data() {
    return {
      products: {},
    };
  },
};
</script>
