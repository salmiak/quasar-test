<template>

    <q-layout view="lHh LpR lff" container style="height: calc(100vh - 51px);">
      <q-header bordered class="bg-blue-grey-2 text-dark">
        <q-tabs
          v-model="tab"
          inline-label
          class="q-px-lg q-mt-sm"
          indicator-color="primary"
          align="left"
        >
          <q-tab name="admin"  icon="las la-user-cog" label="Admin" alert="orange" />
          <q-tab name="issues" icon="las la-book"   label="Ärenden">
            <q-badge color="red" floating>2</q-badge>
          </q-tab>
          <q-tab name="hcu1"   icon="las la-folder" label="Medicins Elevhälsa" class="text-blue-9" />
          <q-tab name="hcu2"   icon="las la-folder" label="Allm. Elevhälsa" class="text-orange-9" />
          <q-tab name="notes"  icon="las la-file-alt" label="Minneanteckningar" />
        </q-tabs>
      </q-header>

      <patient-sidebar />

      <q-page-container>
        <q-tab-panels
          v-model="tab"
          animated
          class="bg-blue-grey-2 q-px-sm"
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="admin">
            <patient-admin-tab />
          </q-tab-panel>
          <q-tab-panel name="issues" class="p-pa-lg">
            Översikt
          </q-tab-panel>
          <q-tab-panel name="hcu1" class="p-pa-lg">
            <journal-entry />
          </q-tab-panel>
          <q-tab-panel name="hcu2" class="p-pa-lg">
            <journal-entry />
          </q-tab-panel>
          <q-tab-panel name="notes" class="p-pa-lg">
            Minnesanteckningar
          </q-tab-panel>
        </q-tab-panels>
      </q-page-container>
    </q-layout>
</template>

<script>
import JournalEntry from 'components/JournalEntry.vue'
import PatientSidebar from 'components/PatientSidebar.vue'
import PatientAdminTab from 'components/PatientAdminTab.vue'

export default {
  name: 'Patient',
  components: {
    JournalEntry,
    PatientSidebar,
    PatientAdminTab
  },
  data () {
    return {
      tab: 'admin',
      left: true,
      patient: {
      }
    }
  }
}
</script>
