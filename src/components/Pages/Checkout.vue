<template>
  <div
    class="w-full lg:h-full max-h-max lg:min-h-screen lg:fixed lg:top-0 lg:left-0 z-50 bg-gray-50 transition-all">
    <div class="container mx-auto py-8">
      <div class="row">
        <div class="col-12">
          <router-link to="/" class="link link-hover text-primary px-4">
            ← Continue shopping
          </router-link>
          <h1 class="text-3xl font-semibold p-4">Checkout</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 md:col-6 lg:col-4 order-2 md:order-1">
          <div
            class="w-full min-h-full h-full max-h-max lg:h-[38rem] overflow-none lg:overflow-y-auto">
            <SmallList v-for="product in 16" :key="product" />
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-8 order-1 md:order-2">
          <div
            class="bg-white border border-gray-100 p-4 w-full lg:h-[38rem] overflow-none lg:overflow-y-auto shadow-sm">
            <div class="row">
              <div class="col-12 md:col-12 lg:col-6 border-r border-gray-100">
                <div
                  class="flex flex-row flex-nowrap justify-between items-center">
                  <h1 class="font-semibold text-2xl">Addresses</h1>
                  <button class="btn btn-outline btn-primary btn-sm">
                    Add address
                  </button>
                </div>
                <div class="form-control mb-4">
                  <label class="label cursor-pointer justify-start gap-2">
                    <input
                      type="radio"
                      name="Addresses"
                      class="radio checked:bg-primary"
                      checked />
                    <span class="label-text flex flex-col">
                      <span class="text-clip">
                        (251) 824-7256 14887 Hemley Rd Coden, Alabama(AL), 36523
                      </span>
                      <span class="text-secondary"> 855108787767 </span>
                    </span>
                  </label>
                  <label class="label cursor-pointer justify-start gap-2">
                    <input
                      type="radio"
                      name="Addresses"
                      class="radio checked:bg-primary"
                      checked />
                    <span class="label-text flex flex-col">
                      <span class="text-clip">
                        (251) 824-7256 14887 Hemley Rd Coden, Alabama(AL), 36523
                      </span>
                      <span class="text-secondary"> 855108787767 </span>
                    </span>
                  </label>
                  <label class="label cursor-pointer justify-start gap-2">
                    <input
                      type="radio"
                      name="Addresses"
                      class="radio checked:bg-primary"
                      checked />
                    <span class="label-text flex flex-col">
                      <span class="text-clip">
                        (251) 824-7256 14887 Hemley Rd Coden, Alabama(AL), 36523
                      </span>
                      <span class="text-secondary"> 855108787767 </span>
                    </span>
                  </label>
                  <label class="label cursor-pointer justify-start gap-2">
                    <input
                      type="radio"
                      name="Addresses"
                      class="radio checked:bg-primary"
                      checked />
                    <span class="label-text flex flex-col">
                      <span class="text-clip">
                        (251) 824-7256 14887 Hemley Rd Coden, Alabama(AL), 36523
                      </span>
                      <span class="text-secondary"> 855108787767 </span>
                    </span>
                  </label>
                  <label class="label cursor-pointer justify-start gap-2">
                    <input
                      type="radio"
                      name="Addresses"
                      class="radio checked:bg-primary"
                      checked />
                    <span class="label-text flex flex-col">
                      <span class="text-clip">
                        (251) 824-7256 14887 Hemley Rd Coden, Alabama(AL), 36523
                      </span>
                      <span class="text-secondary"> 855108787767 </span>
                    </span>
                  </label>
                  <label class="label cursor-pointer justify-start gap-2">
                    <input
                      type="radio"
                      name="Addresses"
                      class="radio checked:bg-primary"
                      checked />
                    <span class="label-text flex flex-col">
                      <span class="text-clip">
                        (251) 824-7256 14887 Hemley Rd Coden, Alabama(AL), 36523
                      </span>
                      <span class="text-secondary"> 855108787767 </span>
                    </span>
                  </label>
                </div>
                <h1 class="font-semibold text-2xl">Shipping method</h1>
                <div class="form-control mb-4">
                  <label class="label cursor-pointer justify-start gap-2">
                    <input
                      type="radio"
                      name="shipping"
                      class="radio checked:bg-primary"
                      checked />
                    <span class="label-text flex flex-col">
                      <span class="text-clip"> Via TADA On-demand </span>
                      <span class="text-secondary"> $2.00 </span>
                    </span>
                  </label>
                  <label class="label cursor-pointer justify-start gap-2">
                    <input
                      type="radio"
                      name="shipping"
                      class="radio checked:bg-primary"
                      checked />
                    <span class="label-text flex flex-col">
                      <span class="text-clip"> Via Gram Express </span>
                      <span class="text-secondary"> $1.00 </span>
                    </span>
                  </label>
                </div>
                <h1 class="font-semibold text-2xl">Payment method</h1>
                <div class="form-control mb-4">
                  <label class="label cursor-pointer justify-start gap-2">
                    <input
                      type="radio"
                      name="payment"
                      class="radio checked:bg-primary"
                      checked />
                    <span class="label-text flex flex-col">
                      <span class="text-clip"> Bongloy </span>
                    </span>
                  </label>
                  <label class="label cursor-pointer justify-start gap-2">
                    <input
                      type="radio"
                      name="payment"
                      class="radio checked:bg-primary"
                      checked />
                    <span class="label-text flex flex-col">
                      <span class="text-clip"> Kess </span>
                    </span>
                  </label>
                  <label class="label cursor-pointer justify-start gap-2">
                    <input
                      type="radio"
                      name="payment"
                      class="radio checked:bg-primary"
                      checked />
                    <span class="label-text flex flex-col">
                      <span class="text-clip"> Bakong </span>
                    </span>
                  </label>
                </div>
              </div>
              <div class="col-12 lg:col-6">
                <h1 class="font-semibold text-2xl">Shipping note</h1>
                <textarea
                  class="textarea textarea-bordered w-full mt-2"
                  placeholder="Type your request"></textarea>
                <div
                  class="flex flex-row flex-nowrap justify-between items-center mb-2">
                  <p class="text-secondary">Subtotal</p>
                  <p class="text-primary">$298.00</p>
                </div>
                <div
                  class="flex flex-row flex-nowrap justify-between items-center mb-2">
                  <p class="text-secondary">Delivery</p>
                  <p class="text-primary">$1.00</p>
                </div>
                <div
                  class="flex flex-row flex-nowrap justify-between items-center mb-4">
                  <p class="text-secondary">Grand Total</p>
                  <p class="text-primary text-xl font-semibold">$300.00</p>
                </div>
                <button class="btn btn-primary w-full">Pay</button>
                <router-link to="/">
                  <button class="btn btn-ghost w-full text-primary">
                    Continue shopping
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SmallList from '../Product/SmallList.vue';
export default defineComponent({
  name: 'Checkout',
  components: {
    SmallList,
  },
});
</script>
