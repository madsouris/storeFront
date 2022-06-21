<template>
  <section class="flex flex-row flex-nowrap mb-4">
    <img
      class="mask mask-squircle w-16 h-16 mr-2"
      src="https://api.lorem.space/image/fashion?w=200&h=200"
      alt="Shoes" />
    <div class="flex flex-col flex-wrap">
      <p class="font-bold text-clip">Some fashion shit</p>
      <p class="font-bold text-primary mb-2">$34.90</p>
      <p class="flex flex-row">
        <button class="btn btn-outline btn-primary btn-xs">-</button>
        <span class="mx-2">1</span>
        <button class="btn btn-outline btn-primary btn-xs">-</button>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    name: 'SmallList',
  },
};
</script>
