<template>
  <div class="container mx-auto py-4 md:py-8 px-4">
    <div class="row">
      <div
        class="col-12 md:col-4 spotlight hover:cursor-pointer"
        data-src="https://api.lorem.space/image/movie?w=980">
        <img
          src="https://api.lorem.space/image/movie?w=980"
          alt="img"
          loading="lazy"
          class="w-full aspect-square object-cover border border-transparent hover:border-primary mb-4 md:mb-0" />
      </div>
      <div class="col-12 md:col-8 flex flex-col gap-2">
        <h1 class="text-4xl font-semibold text-black leading-tight">
          {{ product.name }}
        </h1>
        <div class="rating">
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400" />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
            checked />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400" />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400" />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400" />
          <p class="text-gray-500 ml-2 text-sm self-end">23 rates</p>
        </div>
        <h1 class="text-primary font-bold text-4xl">$ {{ product.price }}</h1>
        <p class="text-gray-500">23 available</p>
        <div class="flex flex-row items-center gap-2">
          <input
            type="number"
            min="1"
            placeholder="Amount"
            value="1"
            class="input input-bordered w-24" />
          <button class="btn btn-primary">Add to cart</button>
        </div>
        <div class="flex items-center gap-2">
          <button class="btn btn-outline btn-secondary btn-sm">
            Add to wishlist
          </button>
          <button class="btn btn-ghost text-gray-400 btn-sm">Report</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h1 class="text-2xl font-semibold mt-4 mb-2">Product description</h1>
      </div>
      <div
        class="col-12 prose max-w-full text-secondary"
        v-html="product.description"></div>
      <div class="col-12">
        <h3 class="text-2xl font-semibold mt-4 mb-2">Product size</h3>
        <p class="text-secondary">
          Height: <b> {{ product.height }} cm </b>
        </p>
        <p class="text-secondary">
          Width: <b> {{ product.width }} cm </b>
        </p>
        <p class="text-secondary">
          Depth: <b> {{ product.depth }} cm </b>
        </p>
        <p class="text-secondary">
          Weight: <b> {{ product.weight }} g </b>
        </p>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-primary">
    <div class="container mx-auto p-8 md:p-4">
      <div class="row">
        <div class="col-12 md:col-4 bg-white p-8 my-4 md:my-8">
          <h1 class="text-2xl font-semibold">Never miss any of our events</h1>
          <p class="text-secondary my-2">
            Join our Telegram channel to receive latest news, products,
            discount, event and other giveaway specials.
          </p>
          <button class="btn btn-primary">Telegram</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { defineComponent } from 'vue';
import 'spotlight.js/dist/spotlight.bundle.js';
import axios from 'axios';
export default defineComponent({
  name: 'ProductView',
  components: {},
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
        description: null,
        weight: null,
        height: null,
        width: null,
        depth: null,
      },
    };
  },
});
</script>
