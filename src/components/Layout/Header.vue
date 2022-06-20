<template>
  <header class="row mb-4 pb-4 border-b border-gray-100 items-center">
    <div class="col-12 md:col-6">
      <router-link to="/">
        <h3 class="font-bold text-3xl tracking-tight">
          {{ name.charAt(0).toUpperCase() }}
        </h3>
      </router-link>
      <p>
        {{ color }}
      </p>
      <router-link to="/contact">
        <button class="text-primary">Contact</button>
      </router-link>
    </div>
  </header>
</template>

<script>
import { getStore, storeData } from '../../data';
export default {
  components: {
    name: 'Header',
  },
  async created() {
    await getStore();
    this.name = storeData.data.name;
    this.color = storeData.data.color;
  },
  data() {
    return {
      name: null,
      color: null,
    };
  },
};
</script>
