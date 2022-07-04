<template>
  <div class="w-full min-h-screen fixed top-0 left-0 z-50 bg-gray-50">
    <div class="container mx-auto py-8">
      <div class="row">
        <div class="col-12">
          <h1 class="text-3xl font-semibold p-4">Checkout</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 md:col-6">
          <div class="w-full min-h-full h-[38rem] overflow-y-auto">
            <SmallList v-for="product in 16" :key="product" />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div
            class="bg-white border border-gray-100 p-4 w-full min-h-full h-[38rem] overflow-y-auto shadow-sm">
            <div class="flex flex-row flex-nowrap justify-between items-center">
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
            <h1 class="font-semibold text-2xl">Shipping note</h1>
          </div>
        </div>
      </div>
      <div class="row mt-4 items-center">
        <div class="col-12 text-left">
          <router-link to="/" class="link link-hover text-primary">
            ← Continue shopping
          </router-link>
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
