<template>
  <header class="shadow-xl sticky top-0">
    <div class="container mx-auto">
      <div class="row mb-4 items-center">
        <div
          class="col-12 flex flex-row no-wrap justify-between items-center p-6">
          <router-link to="/">
            <p>
              <span
                class="font-bold text-3xl tracking-tight text-white bg-primary py-2 px-4">
                {{ name }}
              </span>
              <span
                class="text-primary ml-2 align-super font-medium hidden md:inline-block">
                {{ nameFull }}
              </span>
            </p>
          </router-link>
          <!-- 
            This is how to use custom color
            <p class="text-[color:var(--custom-color)]">
            {{ color }}
          </p> -->
          <div>
            <button class="btn btn-outline btn-primary">
              ⍜ Cart

              <span class="bg-red-500 text-white rounded-full p-1 ml-1">
                12
              </span>
            </button>
            <button class="btn btn-outline btn-primary ml-2">⌘ Menu</button>
          </div>
        </div>
      </div>
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
    this.name = storeData.data.name.charAt(0).toUpperCase();
    this.nameFull = storeData.data.name;
    this.color = storeData.data.color;
  },
  data() {
    return {
      name: null,
      nameFull: null,
      color: null,
    };
  },
};
</script>
