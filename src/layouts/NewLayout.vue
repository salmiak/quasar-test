<template>
  <q-layout view="lHh LpR lff">
    <q-header reveal bordered class="bg-blue-grey-1 text-dark bt-3 bt-primary">
      <q-toolbar>
        <q-btn v-if="!left" class="q-mr-lg" dense flat round icon="fal fa-bars" @click="left = !left" />

        <q-breadcrumbs class="text-blue-grey-9" active-color="blue-grey-6">
          <q-breadcrumbs-el label="Stora skolan" icon="fal fa-school" />
          <q-breadcrumbs-el label="1A" icon="fal fa-users-class" />
        </q-breadcrumbs>

        <q-space />

        <q-btn dense flat round icon="fal fa-bars" @click="right = !right" />
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
    <q-scroll-area class="fit">
        <q-list dark class="bt-3 bt-primary text-blue-grey-4">
          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="far fa-home" />
            </q-item-section>

            <q-item-section>
              Hem
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="far fa-folder" />
            </q-item-section>

            <q-item-section>
              Organisation
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="far fa-table" />
            </q-item-section>

            <q-item-section>
              Listor & Tabeller
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="far fa-books" />
            </q-item-section>

            <q-item-section>
              Bibliotek
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="far fa-calendar" />
            </q-item-section>

            <q-item-section>
              Kalender
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="far fa-envelope" />
            </q-item-section>

            <q-item-section>
              Meddelanden
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <q-scroll-area class="fit">
        <sidebar />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Sidebar from 'components/Sidebar.vue'

export default {
  name: 'MainLayout',

  components: {
    Sidebar
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
