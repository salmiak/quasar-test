<template lang="html">
  <div>
    <q-tabs
      v-model="favTab"
      inline-label
      class="no-margin"
      indicator-color="blue-grey-8"
      align="left"
    >
      <q-tab name="schools" icon="las la-school" label="Skolor" />
      <q-tab name="classes" icon="las la-users" label="Klasser" />
      <q-tab name="groups" icon="las la-users" label="Grupper" />
      <q-tab name="patients" icon="las la-user" label="Elever" />
    </q-tabs>
    <q-separator />
    <q-tab-panels
      v-model="favTab"
      animated
      class="bg-blue-grey-1"
    >
      <q-tab-panel name="schools" class="q-pa-sm">
        <q-table
          :data="favs.schools.data"
          :columns="favs.schools.columns"
          row-key="name"
          hide-pagination
          flat
          class="bg-blue-grey-1"
        />
      </q-tab-panel>
      <q-tab-panel name="classes" class="q-pa-xs">
        <q-table
          :data="favs.classes.data"
          :columns="favs.classes.columns"
          row-key="name"
          hide-pagination
          flat
          class="bg-blue-grey-1"
        />
      </q-tab-panel>
      <q-tab-panel name="groups" class="q-pa-xs">
        <q-table
          :data="favs.groups.data"
          :columns="favs.groups.columns"
          row-key="name"
          hide-pagination
          flat
          class="bg-blue-grey-1"
        />
      </q-tab-panel>
      <q-tab-panel name="patients" class="q-pa-xs">
        <q-table
          :data="favs.patients.data"
          :columns="favs.patients.columns"
          row-key="name"
          hide-pagination
          flat
          class="bg-blue-grey-1"
        />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
export default {
  name: 'FavsTable',
  data () {
    return {
      favTab: 'schools',
      favs: {
        schools: {
          columns: [
            { name: 'name', label: 'Skola', field: 'name', required: true, align: 'left', sortable: true },
            { name: 'count', label: 'Antal elever', field: 'count', sortable: true },
            { name: 'action', field: 'action' }
          ],
          data: [
            { name: 'Lilla skolan', count: 12 },
            { name: 'Mellanstora skolan', count: 35 },
            { name: 'Stora skolan', count: 235 },
            { name: 'Enorma skolan', count: 1252 }
          ]
        },
        classes: {
          columns: [
            { name: 'name', label: 'Klassnamn', field: 'name', required: true, align: 'left', sortable: true },
            { name: 'school', label: 'Skola', field: 'name', required: true, align: 'left', sortable: true },
            { name: 'count', label: 'Antal elever', field: 'count', sortable: true }
          ],
          data: []
        },
        groups: {
          columns: [
            { name: 'name', label: 'Gruppnamn', field: 'name', required: true, align: 'left', sortable: true },
            { name: 'school', label: 'Skola', field: 'school', required: true, align: 'left', sortable: true },
            { name: 'count', label: 'Antal elever', field: 'count', sortable: true }
          ],
          data: [
            { name: 'Päronet', school: 'Stora skolan', count: 122 },
            { name: 'Äpplet', school: 'Mellanstora skolan', count: 35 },
            { name: 'Bananen', school: 'Stora skolan', count: 135 },
            { name: 'Sharonfrukten', school: 'Enorma skolan', count: 1252 }
          ]
        },
        patients: {
          columns: [
            { name: 'name', label: 'Elev', field: 'name', required: true, align: 'left', sortable: true },
            { name: 'school', label: 'Skola', field: 'school', required: true, align: 'left', sortable: true }
          ],
          data: [
            { name: 'Johan Eriksson', school: 'Stora skolan' },
            { name: 'Anna Svensson', school: 'Mellanstora skolan' },
            { name: 'Josef Jobadi', school: 'Stora skolan' },
            { name: 'Elise Rangarrök', school: 'Enorma skolan' }
          ]
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
