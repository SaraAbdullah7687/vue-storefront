<template>
  <SfBanner
    :title="title"
    :subtitle="subtitle"
    :description="description"
    :button-text="banner_text"
    :link="banner_link"
    :image="image.url"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { SfBanner } from '@storefront-ui/vue';

export default Vue.extend({
  name: 'Banner',
  components: {
    SfBanner
  },
  props: {
    title: {},
    subtitle: {},
    description: {},
    banner_text: {},
    banner_link: {},
    image: {
      type: Object,
      required: true
    },
    background: {}
  }
})
</script>