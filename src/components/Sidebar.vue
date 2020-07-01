<template lang="html">
  <div class="fit row no-wrap items-start content-stretch">

      <q-tabs
        v-model="tab"
        vertical
        class="col"
        style="overflow: auto; min-width: 48px; max-width: 48px;"
      >
        <q-tab name="favs" icon="fal fa-star" />
        <q-tab name="notes" icon="fal fa-sticky-note" />
        <q-tab name="help" icon="fal fa-life-ring" />
      </q-tabs>

        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
          class="col self-stretch bg-blue-grey-3"
          style="overflow: auto;"
        >
          <q-tab-panel name="favs">
            <div class="text-h4 q-mb-md">Utvalda</div>

            <q-list bordered class="rounded-borders bg-blue-grey-1">
              <q-expansion-item
                group="favs"
                expand-separator
                icon="fal fa-school"
                label="Skolor"
                caption="4 stycken"
              >
                <q-list separator>
                  <q-item clickable v-ripple>
                    <q-item-section>Lilla skolan</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section>Mellanstora skolan</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section>Stora skolan</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section>Enorma skolan</q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>

              <q-expansion-item
                group="favs"
                expand-separator
                icon="fal fa-users"
                label="Klasser"
                caption="4 stycken"
              >
                <q-list separator>
                  <q-item clickable v-ripple>
                    <q-item-section>Lilla skolan</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section>Mellanstora skolan</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section>Stora skolan</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section>Enorma skolan</q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>

              <q-expansion-item
                group="favs"
                expand-separator
                icon="fal fa-users"
                label="Grupper"
                caption="4 stycken"
              >
                <q-list separator>
                  <q-item clickable v-ripple>
                    <q-item-section>Lilla skolan</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section>Mellanstora skolan</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section>Stora skolan</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section>Enorma skolan</q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>

              <q-expansion-item
                group="favs"
                expand-separator
                icon="fal fa-user"
                label="Elever"
                caption="4 stycken"
              >
                <q-list separator>
                  <q-item clickable v-ripple>
                    <q-item-section>Lilla skolan</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section>Mellanstora skolan</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section>Stora skolan</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section>Enorma skolan</q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel name="notes">
            <div class="text-h4 q-mb-md">Post-it's</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="help">
            <div class="text-h4 q-mb-md">Hjälp</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
        </q-tab-panels>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      tab: 'favs'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
