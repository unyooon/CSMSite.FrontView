<template>
  <v-app-bar dark app clipped-left>
    <v-app-bar-title>Cram School</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn class="mx-2" icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn class="mr-4" icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
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