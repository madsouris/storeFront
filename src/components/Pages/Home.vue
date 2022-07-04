<template>
  <div class="container mx-auto p-4 md:px-0">
    <div class="row">
      <div class="col-12 lg:col-4">
        <div class="w-full p-4 bg-gray-100">
          <h1 class="text-2xl font-semibold">Categories</h1>
        </div>
      </div>
      <div class="col-12 lg:col-8">
        <div class="masonry sm:masonry-sm md:masonry-md">
          <Product />
        </div>
      </div>
    </div>
    <div class="row mt-4">
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
          Author 🐭
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Product from '../Product/Product.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
  components: {
    Product,
  },
});
</script>
