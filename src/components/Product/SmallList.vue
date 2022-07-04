<template>
  <section
    class="flex flex-row flex-nowrap hover:bg-slate-50 p-4 hover:cursor-pointer">
    <img
      class="mask mask-squircle w-16 h-16 mr-2 object-cover"
      src="http://placekitten.com/g/200/300"
      alt="Shoes" />
    <div class="flex flex-col flex-wrap">
      <p class="font-semibold text-clip">Some fashion shit</p>
      <p class="font-bold text-primary mb-2">$34.90</p>
      <p class="flex flex-row items-center">
        <button
          class="btn btn-outline btn-primary btn-sm"
          v-if="$router.currentRoute.value.path !== '/checkout'">
          -
        </button>
        <input
          type="number"
          min="1"
          value="1"
          class="input input-bordered input-sm w-16"
          v-if="$router.currentRoute.value.path !== '/checkout'" />
        <span
          class="text-secondary"
          v-if="$router.currentRoute.value.path === '/checkout'"
          >x1</span
        >
        <button
          class="btn btn-outline btn-primary btn-sm"
          v-if="$router.currentRoute.value.path !== '/checkout'">
          +
        </button>
      </p>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SmallList',
  components: {},
});
</script>
