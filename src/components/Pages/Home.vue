<template>
  <div class="container mx-auto p-4 md:px-0">
    <div class="row">
      <Product />
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
