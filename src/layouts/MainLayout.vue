<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-blue-grey-7 bt-3 bt-primary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="fal fa-bars"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar Test App
        </q-toolbar-title>

        <div>
          <q-btn
            flat
            dense
            round
            :icon="rightDrawerOpen?'fal fa-angle-right':'fal fa-angle-left'"
            @click="rightDrawerOpen = !rightDrawerOpen"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-blue-grey-7 text-white"
      :breakpoint="2000"
    >
      <q-list>
        <q-item-label
          header
          class="text-primary text-bold">
          Mockup pages
        </q-item-label>
        <q-item>
          <router-link to="/home">Home page</router-link>
        </q-item>
      </q-list>
      <q-list>
        <q-item-label
          header
          class="text-primary text-bold"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-drawer
      side="right"
      v-model="rightDrawerOpen"
      show-if-above
      bordered
      :width="320"
      :breakpoint="600"
      content-class="bg-blue-grey-3"
    >
      <q-scroll-area class="fit">
        <sidebar />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import Sidebar from 'components/Sidebar.vue'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    Sidebar
  },

  data () {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: true,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'fal fa-book',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'fab fa-github',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'fab fa-discord',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'fab fa-discourse',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'fab fa-twitter',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'fab fa-facebook',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Quasar Awesome',
          caption: 'Community Quasar projects',
          icon: 'fab fa-font-awesome',
          link: 'https://awesome.quasar.dev'
        }
      ]
    }
  }
}
</script>
