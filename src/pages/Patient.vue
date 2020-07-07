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
          <q-tab name="issues" icon="las la-book"   label="Ärenden" />
          <q-tab name="hcu1"   icon="las la-folder" label="Medicins Elevhälsa" class="text-blue-9" />
          <q-tab name="hcu2"   icon="las la-folder" label="Allm. Elevhälsa" class="text-orange-9" />
          <q-tab name="notes"  icon="las la-file-alt" label="Minneanteckningar" />
          <q-tab name="admin"  icon="las la-user-cog" label="Admin" alert="orange" />
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
          <q-tab-panel name="admin" class="p-pa-lg q-gutter-md">

            <q-card class="bg-yellow-1">
              <q-card-section>
                <h4 class="q-my-none">Potentiella dubbletter</h4>
              </q-card-section>

              <q-separator inset />

              <q-card-section>
                <q-list separator>
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="grey-8" name="las la-user-friends" />
                    </q-item-section>

                    <q-item-section>
                      <q-item-label overline>Miniskolan</q-item-label>
                      <q-item-label>Alan Allansson</q-item-label>
                      <q-item-label caption>20 121212-A121</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn flat dense round icon="las la-ellipsis-v" />
                      </div>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="grey-8" name="las la-user-friends" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>Microskolan</q-item-label>
                      <q-item-label>Alan Allansson</q-item-label>
                      <q-item-label caption>20 121212-A121</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn flat dense round icon="las la-ellipsis-v" />
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>

            <q-card class="bg-blue-grey-0">
              <q-card-section>
                <h4 class="q-my-none">Utgående läslänkar</h4>
              </q-card-section>

              <q-separator inset />

              <q-card-section>
                <q-list separator>
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="blue-grey-8" name="las la-file-export" />
                    </q-item-section>

                    <q-item-section>
                      <q-item-label overline>Miniskolan</q-item-label>
                      <q-item-label>Alan Allansson</q-item-label>
                      <q-item-label caption>20 121212-A121</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <q-chip icon="las la-folder" color="blue-grey-6" text-color="white">EMI</q-chip>
                    </q-item-section>

                    <q-item-section side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn flat dense round icon="las la-ellipsis-v" />
                      </div>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="blue-grey-8" name="las la-file-export" />
                    </q-item-section>

                    <q-item-section>
                      <q-item-label overline>Microskolan</q-item-label>
                      <q-item-label>Alan Allansson</q-item-label>
                      <q-item-label caption>20 121212-A121</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <q-chip icon="las la-folder" color="blue-grey-6" text-color="white">EMI</q-chip>
                    </q-item-section>

                    <q-item-section side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn flat dense round icon="las la-ellipsis-v" />
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>

            <div class="q-my-lg">

            </div>

          </q-tab-panel>
        </q-tab-panels>
      </q-page-container>
    </q-layout>
</template>

<script>
import JournalEntry from 'components/JournalEntry.vue'
import PatientSidebar from 'components/PatientSidebar.vue'

export default {
  name: 'Patient',
  components: {
    JournalEntry,
    PatientSidebar
  },
  data () {
    return {
      tab: 'issues',
      left: true,
      patient: {
      }
    }
  }
}
</script>
