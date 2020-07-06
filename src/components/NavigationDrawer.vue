<template lang="html">

  <div class="column fit justify-between">
    <div class="col">
      <q-scroll-area class="fit">
        <q-list dark class="bt-3 bt-primary text-blue-grey-4">

          <q-item clickable v-ripple to="/home">
            <q-item-section avatar>
              <q-icon name="las la-home" />
            </q-item-section>

            <q-item-section>
              Hem
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple to="/patient">
            <q-item-section avatar>
              <q-icon name="las la-user" />
            </q-item-section>

            <q-item-section>
              Patient
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="las la-folder" />
            </q-item-section>

            <q-item-section>
              Organisation
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="las la-table" />
            </q-item-section>

            <q-item-section>
              Listor & Tabeller
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="las la-book" />
            </q-item-section>

            <q-item-section>
              Bibliotek
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="las la-calendar" />
            </q-item-section>

            <q-item-section>
              Kalender
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="las la-envelope" />
            </q-item-section>

            <q-item-section>
              Meddelanden
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </div>

    <q-list class="text-blue-grey-4">
      <q-item clickable v-ripple to="/locked">
        <q-item-section avatar>
          <q-icon name="las la-lock" />
        </q-item-section>

        <q-item-section>
          Lås skärmen
        </q-item-section>
      </q-item>
    </q-list>

  </div>
</template>

<script>
export default {
  name: 'NavigationDrawer'
}
</script>

<style lang="css" scoped>
</style>
