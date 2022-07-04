<template>
  <div class="container mx-auto p-4">
    <div class="row">
      <div class="col-12 prose max-w-full py-0 :py-6" v-html="privacy"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
export default defineComponent({
  name: 'Privacy',
  async created() {
    try {
      const response = await axios.get(
        'https://api.hangme-staging.app/api/v2/marketplace/terms'
      );
      console.log(response.data);
      this.privacy = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  data() {
    return {
      privacy: null,
    };
  },
});
</script>
