<template>
  <q-page>
    <div class="bg-blue-grey-1">

      <div class="q-px-lg q-py-md">
        <h2 class="no-margin">Gro Beckman</h2>
        <p class="no-margin">Meta info</p>
      </div>

      <q-tabs
        v-model="tab"
        inline-label
        class="q-mx-lg"
        indicator-color="primary"
        align="left"
      >
        <q-tab name="index" icon="las la-user" label="Översikt" />
        <q-tab name="hcu1" icon="las la-folder" label="Medicins Elevhälsa" class="text-blue-9" />
        <q-tab name="hcu2" icon="las la-folder" label="Allm. Elevhälsa" class="text-orange-9" />
        <q-tab name="notes" icon="las la-file-alt" label="Minneanteckningar" />
      </q-tabs>

      <q-separator />
    </div>

      <q-tab-panels
        v-model="tab"
        animated
        class="bg-blue-grey-2 q-px-sm"
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel name="index" class="p-pa-lg">
          Översikt
        </q-tab-panel>
        <q-tab-panel name="hcu1" class="p-pa-lg">
          HCU 1
        </q-tab-panel>
        <q-tab-panel name="hcu2" class="p-pa-lg">
          HCU 2
        </q-tab-panel>
        <q-tab-panel name="notes" class="p-pa-lg">
          Minnesanteckningar
        </q-tab-panel>
      </q-tab-panels>
  </q-page>
</template>

<script>
export default {
  name: 'Patient',
  data () {
    return {
      tab: 'index'
    }
  }
}
</script>
