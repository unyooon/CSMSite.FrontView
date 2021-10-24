<template>
  <v-card>
    <v-navigation-drawer permanent app clipped width="160px">
      <v-list nav dense>
        <v-list-item-group
          v-for="(item, i) in sideBarItems"
          :key="i"
          v-model="group"
          mandatory
        >
          <NuxtLink :to="item.url">
            <v-list-item>
              <v-list-item-icon>
                <v-icon> {{ item.icon }} </v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </NuxtLink>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

interface ISideBarItem {
  icon: string
  title: string
  url: string
}

type Data = {
  group: number | null
}

export default Vue.extend({
  props: {},
  data: (): Data => {
    return {
      group: null,
    }
  },
  computed: {
    sideBarItems(): ISideBarItem[] {
      return [
        {
          icon: 'mdi-home',
          title: 'HOME',
          url: '/',
        },
      ]
    },
  },
})
</script>