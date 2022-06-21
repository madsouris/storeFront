<template>
  <div class="drawer drawer-end" data-theme="chinebear">
    <input id="menu-drawer" type="checkbox" class="drawer-toggle" />
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <Header class="" />
      <router-view></router-view>
      <Footer />
    </div>
    <div class="drawer-side">
      <label for="menu-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <li>
          <h4 class="font-bold text-xl">Menu</h4>
        </li>
        <li>
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered w-full max-w-xs" />
        </li>
        <p class="pt-5 px-4 text-secondary">Hello, Souris</p>
        <div class="divider"></div>
        <li>
          <a class="text-primary"> + Follow store </a>
        </li>
        <div class="divider"></div>
        <li>
          <a class="text-primary">My store</a>
        </li>
        <li>
          <a class="text-primary">My account</a>
        </li>
        <li>
          <a class="text-primary">Orders</a>
        </li>
        <li>
          <a class="text-primary">Wishlist</a>
        </li>
        <li>
          <a class="text-primary">Contact us</a>
        </li>
        <li>
          <a class="text-primary">Contact Hangme</a>
        </li>
        <li>
          <a class="text-primary">Log out</a>
        </li>
        <div class="divider"></div>
        <div class="px-4">
          <p class="mb-2 text-secondary">Language</p>
          <button class="btn btn-outline btn-primary mr-2">English</button>
          <button class="btn btn-outline btn-primary">Khmer</button>
        </div>
        <div class="divider"></div>
        <div class="px-4">
          <p class="mb-2 text-secondary">Currency</p>
          <button class="btn btn-outline btn-primary mr-2">USD</button>
          <button class="btn btn-outline btn-primary">KHR</button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from './components/Layout/Header.vue';
import Footer from './components/Layout/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
:root {
  --custom-color: #2196f3;
}
</style>
