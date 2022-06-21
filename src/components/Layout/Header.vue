<template>
  <header class="shadow-xl sticky top-0 z-50 bg-white px-4 md:px-0 py-6">
    <div class="container mx-auto p-0">
      <div class="row items-center">
        <div class="col-12 flex flex-row no-wrap justify-between items-center">
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
            <div class="dropdown dropdown-end">
              <div class="indicator">
                <span class="indicator-item badge badge-primary">99+</span>
                <label tabindex="0" class="btn btn-outline btn-primary">
                  ⍜ Cart
                </label>
              </div>
              <ul
                tabindex="0"
                class="dropdown-content menu shadow-xl bg-base-100 rounded-box w-96">
                <li class="p-4 font-bold text-xl">Cart</li>
                <SmallList v-for="product in 4" :key="product" />
                <div
                  class="flex flex-row flex-nowrap justify-between items-center p-4">
                  <p class="text-secondary">Subtotal</p>
                  <p class="font-bold text-primary">$3323.99</p>
                </div>
                <button class="btn btn-primary w-full">Checkout</button>
              </ul>
            </div>
            <label
              for="menu-drawer"
              class="btn btn-outline btn-primary drawer-button ml-2">
              ⌘ Menu
            </label>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { getStore, storeData } from '../../data';
import SmallList from '../Product/SmallList.vue';
export default {
  components: {
    name: 'Header',
    SmallList,
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
