<template>
  <header class="row mb-4 pb-4 border-b border-gray-100 items-center">
    <div class="col-12 md:col-6">
      <h3 class="font-bold text-3xl tracking-tight">
        {{ store }}
      </h3>
      <p>
        {{ tagline }}
      </p>
    </div>
    <div class="col-12 md:col-6 text-right">
      <select class="select select-bordered w-full max-w-xs" data-choose-theme>
        <option value="lofi">Lofi</option>
        <option value="winter" selected>Winter</option>
        <option value="night">Night</option>
        <option value="coffee">Coffee</option>
        <option value="bumblebee">Bumblebee</option>
      </select>
    </div>
  </header>
</template>

<script>
export default {
  components: {
    name: 'Header',
  },
  async created() {
    const response = await fetch('http://localhost:3500/store/0');
    const data = await response.json();
    this.store = data.name;
    this.tagline = data.tagline;
  },
  data() {
    return {
      store: null,
      tagline: null,
    };
  },
};
</script>
