<template>
  <header class="row mb-4 pb-4 border-b border-gray-100 items-center">
    <div class="col-12 md:col-6">
      <router-link to="/">
        <h3 class="font-bold text-3xl tracking-tight">
          {{ store }}
        </h3>
      </router-link>
      <p>
        {{ color }}
      </p>
      <router-link to="/contact">
        <button>Contact</button>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  components: {
    name: 'Header',
  },
  async created() {
    const response = await fetch(
      'https://api.hangme-staging.app/api/v2/marketplace/stores/2'
    );
    const data = await response.json();
    this.store = data.name;
    this.color = data.color;
  },
  data() {
    return {
      store: null,
      color: null,
    };
  },
};
</script>
