<template>
  <div class="container mx-auto py-4 px-4 md:px-0">
    <div class="row items-center">
      <div class="col-12 md:col-6 mb-4 md:mb-0">
        <h1 class="text-4xl font-medium mb-2">
          {{ name }}
        </h1>
        <p class="text-secondary mb-2">
          {{ description }}
        </p>
        <p class="text-secondary">We are currently open, and always open.</p>
      </div>
      <div class="col-12 md:col-6">
        <div class="card w-full md:w-1/2 bg-base-100 shadow-xl p-0">
          <div class="card-body border border-gray-50 py-4 px-0">
            <ul class="menu">
              <li class="menu-title">
                <span>Give us a call</span>
              </li>
              <li>
                <a @click="visitLink('tel:' + phoneNumber)">
                  {{ phoneNumber }}
                </a>
              </li>
              <li class="menu-title">
                <span>Follow us on social media</span>
              </li>
              <li>
                <a
                  @click="visitLink(facebook)"
                  class="flex flex-col justify-start items-start gap-0">
                  <span> Facebook </span>
                  <span class="text-secondary text-sm">
                    {{ facebook }}
                  </span>
                </a>
              </li>
              <li>
                <a
                  @click="visitLink(instagram)"
                  class="flex flex-col justify-start items-start gap-0">
                  <span> Instagram </span>
                  <span class="text-secondary text-sm">
                    {{ instagram }}
                  </span>
                </a>
              </li>
              <li>
                <a
                  @click="visitLink(twitter)"
                  class="flex flex-col justify-start items-start gap-0">
                  <span> Twitter </span>
                  <span class="text-secondary text-sm">
                    {{ twitter }}
                  </span>
                </a>
              </li>
              <li>
                <a
                  @click="visitLink(youtube)"
                  class="flex flex-col justify-start items-start gap-0">
                  <span> Youtube </span>
                  <span class="text-secondary text-sm">
                    {{ youtube }}
                  </span>
                </a>
              </li>
              <li>
                <a
                  @click="visitLink(pinterest)"
                  class="flex flex-col justify-start items-start gap-0">
                  <span> Pinterest </span>
                  <span class="text-secondary text-sm">
                    {{ pinterest }}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStore, storeData } from '../../data';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Contact',
  components: {},
  async created() {
    await getStore();
    this.name = storeData.data.name;
    this.description = storeData.data.description;
    this.phoneNumber = storeData.data.phoneNumber;
    this.facebook = storeData.data.facebook;
    this.instagram = storeData.data.instagram;
    this.email = storeData.data.email;
    this.twitter = storeData.data.twitter;
    this.youtube = storeData.data.youtube;
    this.pinterest = storeData.data.pinterest;
    this.messenger = storeData.data.messenger;
  },
  methods: {
    visitLink(link) {
      window.open(link);
    },
  },
  data() {
    return {
      social: {
        facebook: null,
        instagram: null,
        twitter: null,
        youtube: null,
        pinterest: null,
      },
      name: null,
      description: null,
      phoneNumber: null,
      email: null,
      messenger: null,
      telegram: null,
      line: null,
      skype: null,
      wechat: null,
      whatsapp: null,
    };
  },
});
</script>
