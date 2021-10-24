<template>
  <v-app-bar dark app clipped-left>
    <v-app-bar-title>Cram School</v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}

export default Vue.extend({
  data: (): Data => {
    return {}
  },
  methods: {
    openDrawer() {
      this.$emit('openDrawer')
    },
  },
})
</script>