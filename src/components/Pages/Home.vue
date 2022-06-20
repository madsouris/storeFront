<template>
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
</template>

<script>
import Product from '../Product/Product.vue';
export default {
  components: {
    name: 'Home',
    Product,
  },
};
</script>
