<template>
  <q-layout view="lHh LpR lff" class="bt-3 bt-primary">
    <q-header bordered class="bg-blue-grey-1 text-dark">
      <q-toolbar>
        <q-btn v-if="!left" class="q-mr-lg" dense flat round icon="las la-bars" @click="left = !left" />

        <q-breadcrumbs class="text-blue-grey-9" active-color="blue-grey-6">
          <q-breadcrumbs-el label="Stora skolan" icon="las la-school" />
          <q-breadcrumbs-el label="1A" icon="las la-users" />
        </q-breadcrumbs>

        <q-space />

        <q-btn dense flat round icon="las la-caret-square-left" :class="{'flip-horizontal':right}" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      show-if-above

      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay

      side="left"

      :width="230"
      :breakpoint="500"
      bordered
      content-class="bg-blue-grey-10"
    >
      <navigation-drawer />
    </q-drawer>

    <q-drawer
      show-if-above
      v-model="right"
      side="right"
      bordered
      behavior="desktop"
    >
      <q-scroll-area class="fit bg-blue-grey-4">
        <sidebar />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Sidebar from 'components/Sidebar.vue'
import NavigationDrawer from 'components/NavigationDrawer.vue'

export default {
  name: 'MainLayout',

  components: {
    Sidebar,
    NavigationDrawer
  },

  data () {
    return {
      left: false,
      miniState: true,
      right: false
    }
  }
}
</script>
