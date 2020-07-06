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
          <q-tab name="index" icon="las la-user" label="Översikt" />
          <q-tab name="hcu1" icon="las la-folder" label="Medicins Elevhälsa" class="text-blue-9" />
          <q-tab name="hcu2" icon="las la-folder" label="Allm. Elevhälsa" class="text-orange-9" />
          <q-tab name="notes" icon="las la-file-alt" label="Minneanteckningar" />
        </q-tabs>
      </q-header>

      <q-drawer
        v-model="left"
        side="left"
        behavior="desktop"

        :width="320"

        content-class="bg-blue-grey-2"
      >
        <div class="q-px-lg q-py-xl text-center">
          <q-avatar
            size="72px"
            font-size="48px"
            color="teal"
            text-color="white"
            icon="las la-user"
          >
          </q-avatar>
          <h2>Christoffer Silverkrona-Stahle</h2>
          <h5 class="no-margin text-blue-grey-7">
            <q-icon
              name="fas fa-star"
              class="q-mr-md"
              color="primary"
            />
            <span>
              12 121110-0908

              <q-tooltip>
                7 år och 3 månader
              </q-tooltip>
            </span>
            <q-icon
              name="fas fa-mars"
              class="q-ml-md"
            />
          </h5>
        </div>

        <q-separator />

        <div class="q-pa-sm">
          <q-list>
            <q-expansion-item
              expand-separator
              icon="las la-exclamation-triangle"
              label="Blodsmitta"
              dark
              dense
              class="bg-negative rounded-borders q-mb-sm"
            >
              <q-card>
                <q-card-section class="bg-red-1">
                  <div v-html="patient.warning"></div>
                  <q-popup-edit
                    buttons
                    v-model="patient.warning"
                  >
                    <q-editor
                      v-model="patient.warning"
                      autofocus
                      @keyup.enter.stop
                      style="max-width: 400px;"
                    />
                  </q-popup-edit>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="las la-info-circle"
              label="Kontrollelev vikt"
              dark
              dense
              class="bg-info rounded-borders q-mb-sm"
            >
              <q-card>
                <q-card-section class="bg-blue-1">
                  <div v-html="patient.warning"></div>
                  <q-popup-edit
                    buttons
                    v-model="patient.warning"
                  >
                    <q-editor
                      v-model="patient.warning"
                      autofocus
                      @keyup.enter.stop
                      style="max-width: 400px;"
                    />
                  </q-popup-edit>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>

          <q-list padding>
            <q-item-label header>Bevakningar</q-item-label>

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="patient.tasks.task1.status" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Ryggkontroll</q-item-label>
                <q-item-label caption v-html="patient.tasks.task1.description"></q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="las la-pen-square">
                  <q-popup-edit
                    buttons
                    v-model="patient.tasks.task1.description"
                  >
                    <q-editor
                      v-model="patient.tasks.task1.description"
                      autofocus
                      @keyup.enter.stop
                      style="max-width: 400px;"
                    />
                  </q-popup-edit>
                </q-icon>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="patient.tasks.task2.status" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Ring föräldrar</q-item-label>
                <q-item-label caption v-html="patient.tasks.task2.description"></q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="las la-pen-square">
                  <q-popup-edit
                    buttons
                    v-model="patient.tasks.task2.description"
                  >
                    <q-editor
                      v-model="patient.tasks.task2.description"
                      autofocus
                      @keyup.enter.stop
                      style="max-width: 400px;"
                    />
                  </q-popup-edit>
                </q-icon>
              </q-item-section>
            </q-item>

          </q-list>
        </div>
      </q-drawer>

      <q-page-container>
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

export default {
  name: 'Patient',
  components: {
    JournalEntry
  },
  data () {
    return {
      tab: 'index',
      left: true,
      patient: {
        warning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid.',
        tasks: {
          task1: {
            status: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
          },
          task2: {
            status: false,
            description: 'Lorem apsum dolor sit amet, consectetur adipisicing elit...'
          }
        }
      }
    }
  }
}
</script>
