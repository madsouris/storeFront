<template>
  <div class="container mx-auto px-4">
    <div class="row">
      <div class="col-12">
        <footer class="footer py-10 text-base-content">
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              class="fill-current">
              <path
                d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>Souris's Mix Stuff Store<br />Sell shit since 2002</p>
          </div>
          <div>
            <span class="footer-title">Our store</span>
            <a class="link link-hover">All products</a>
            <a class="link link-hover">Orders</a>
            <a class="link link-hover">Wishlist</a>
            <a class="link link-hover">Follow us</a>
          </div>
          <div>
            <span class="footer-title">Support</span>
            <a class="link link-hover">Customer support</a>
            <router-link to="/contact" class="link link-hover">
              Contact us
            </router-link>
            <router-link class="link link-hover" to="/">
              Contact Hangme
            </router-link>
            <a class="link link-hover">My account</a>
          </div>
          <div>
            <span class="footer-title">Legal</span>
            <router-link class="link link-hover" to="/terms">
              Terms and conditions
            </router-link>
            <router-link to="/privacy" class="link link-hover">
              Privacy Policy
            </router-link>
          </div>
        </footer>
        <div class="w-full block text-left md:text-center py-4 text-sm">
          &copy; Copyright 2022, all right reserved. <br />
          Powered by
          <a class="text-primary" href="//hangme.app" target="_blank"
            >Hangme.</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Footer',
  components: {},
});
</script>
