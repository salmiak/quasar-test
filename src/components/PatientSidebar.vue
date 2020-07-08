<template lang="html">
  <q-drawer
    v-model="left"
    side="left"
    behavior="desktop"

    :width="304"

    content-class="bg-blue-grey-1 q-pb-xl"
  >

    <div class="q-px-lg q-pt-xl q-pb-lg text-center">
      <q-avatar
        size="72px"
        font-size="48px"
        color="blue-grey-3"
        text-color="blue-grey-8"
        icon="las la-user"
      >
      </q-avatar>
      <h2>Alfred Beckman</h2>
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

    <div class="q-pa-sm text-center">
      <q-chip>
        <q-tooltip>
          2 framtida bokningar
        </q-tooltip>
        <q-avatar color="blue" text-color="white" icon="far fa-calendar" />
        2
      </q-chip>
      <q-chip>
        <q-tooltip>
          3 ej avklarade bevakningar
        </q-tooltip>
        <q-avatar color="orange" text-color="white" icon="far fa-check-square" />
        3
      </q-chip>
      <q-chip>
        <q-tooltip>
          2 okopplade anteckningar
        </q-tooltip>
        <q-avatar color="brown" text-color="white" icon="far fa-paperclip" />
        2
      </q-chip>
      <q-chip>
        <q-tooltip>
          2 pågående ärenden
        </q-tooltip>
        <q-avatar color="teal" text-color="white" icon="far fa-book" />
        2
      </q-chip>
    </div>

    <q-separator />

    <div class="q-pa-sm">
      <q-list class="q-gutter-sm">
        <q-expansion-item
          icon="las la-exclamation-triangle"
          label="Blodsmitta"
          dark
          dense
          class="bg-negative rounded-borders"
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
          icon="las la-info-circle"
          label="Kontrollelev vikt"
          dark
          dense
          class="bg-info rounded-borders"
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

        <q-expansion-item
          dense
          icon="las la-address-card"
          label="Kontaktuppgifter"
          class="bg-blue-grey-2 rounded-borders"
        >
          <q-list class="bg-yellow-1">

            <q-item clickable v-ripple>
              <q-item-section>
                <h5 class="no-margin">Eleven</h5>
              </q-item-section>
              <q-item-section side>
                <q-icon name="las la-edit" />
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-tooltip>Klicka för att kopiera</q-tooltip>
              <q-item-section side>
                <q-icon color="blue-grey-8" name="las la-home" />
              </q-item-section>

              <q-item-section>
                Alfred Beckman<br/>
                Träskmarken 55<br/>
                12345 Storstaden
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-tooltip>Klicka för att kopiera</q-tooltip>
              <q-item-section side>
                <q-icon color="blue-grey-8" name="las la-at" />
              </q-item-section>

              <q-item-section>
                alfred.beckman@prorenata.se
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-tooltip>Klicka för att kopiera</q-tooltip>
              <q-item-section side>
                <q-icon color="blue-grey-8" name="las la-phone" />
              </q-item-section>

              <q-item-section>
                0712 34 56 78
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <h5 class="no-margin">Vårdnadshavare</h5>
              </q-item-section>
              <q-item-section side>
                <q-icon name="las la-edit" />
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-tooltip>Klicka för att kopiera</q-tooltip>
              <q-item-section side>
                <q-icon color="blue-grey-8" name="las la-home" />
              </q-item-section>

              <q-item-section>
                Isabelle Beckman<br/>
                Träskmarken 55<br/>
                12345 Storstaden
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-tooltip>Klicka för att kopiera</q-tooltip>
              <q-item-section side>
                <q-icon color="blue-grey-8" name="las la-at" />
              </q-item-section>

              <q-item-section>
                isabelle.beckman@microfix.edu.chalmers.se
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-tooltip>Klicka för att kopiera</q-tooltip>
              <q-item-section side>
                <q-icon color="blue-grey-8" name="las la-phone" />
              </q-item-section>

              <q-item-section>
                0798 76 54 32
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section side>
                <q-icon name="las la-user-plus" />
              </q-item-section>
              <q-item-section>
                <h5 class="no-margin">Ny Vårdnadshavare</h5>
              </q-item-section>
            </q-item>
          </q-list>

        </q-expansion-item>
      </q-list>
    </div>

    <div>

      <q-list padding>

        <!-- Bokningar -->

        <q-item-label header class="text-h4">Bokningar</q-item-label>

        <q-item tag="label" v-ripple>
          <q-item-section side top>
            <q-avatar color="blue-1" font-size="0.875rem">15/12</q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{patient.tasks.task1.category}}</q-item-label>
            <q-item-label caption v-html="patient.tasks.task1.description"></q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="las la-edit">
              <q-popup-edit
                buttons
                v-model="patient.tasks.task1.description"
              >
                <div class="q-gutter-md">
                  <q-select v-model="patient.tasks.task1.category" :options="['Möte','Telefonsamtal']" label="'Kategori'" />
                  <q-editor
                    v-model="patient.tasks.task1.description"
                    autofocus
                    @keyup.enter.stop
                    style="max-width: 400px;"
                  />
                </div>
              </q-popup-edit>
            </q-icon>
          </q-item-section>
        </q-item>

        <!-- Bevakningar -->

        <q-item-label header class="text-h4">Bevakningar</q-item-label>

        <q-item tag="label" v-ripple>
          <q-item-section side top>
            <q-checkbox v-model="patient.tasks.task1.status" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{patient.tasks.task1.category}}</q-item-label>
            <q-item-label caption v-html="patient.tasks.task1.description"></q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="las la-edit">
              <q-popup-edit
                buttons
                v-model="patient.tasks.task1.description"
              >
                <div class="q-gutter-md">
                  <q-select v-model="patient.tasks.task1.category" :options="['Möte','Telefonsamtal']" label="'Kategori'" />
                  <q-editor
                    v-model="patient.tasks.task1.description"
                    autofocus
                    @keyup.enter.stop
                    style="max-width: 400px;"
                  />
                </div>
              </q-popup-edit>
            </q-icon>
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section side top>
            <q-checkbox v-model="patient.tasks.task2.status" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{patient.tasks.task2.category}}</q-item-label>
            <q-item-label caption v-html="patient.tasks.task2.description"></q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="las la-edit">
              <q-popup-edit
                buttons
                v-model="patient.tasks.task2"
              >
                <div class="q-gutter-sm q-py-sm">
                  <h4>Bevakning</h4>
                  <q-input v-model="patient.tasks.task2.title" label="Rubrik" />
                  <q-select v-model="patient.tasks.task2.category" :options="['Möte','Telefonsamtal']" label="Kategori" />
                  <q-editor
                    v-model="patient.tasks.task2.description"
                    autofocus
                    @keyup.enter.stop
                    style="max-width: 400px;"
                  />
                  <q-input v-model="patient.tasks.task2.date" mask="date" :rules="['date']" label="Senast datum">
                    <template v-slot:append>
                      <q-icon name="las la-calendar" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                          <q-date v-model="patient.tasks.task2.date" @input="() => $refs.qDateProxy.hide()" />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <q-select v-model="patient.tasks.task2.owner" :options="['Alfred Beckman','Caroline Johansson']" label="Ansvarig" />
                </div>
              </q-popup-edit>
            </q-icon>
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section side top>
            <q-checkbox v-model="patient.tasks.task2.status" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{patient.tasks.task2.category}}</q-item-label>
            <q-item-label caption v-html="patient.tasks.task2.description"></q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="las la-edit">
              <q-popup-edit
                buttons
                v-model="patient.tasks.task2"
              >
                <div class="q-gutter-sm q-py-sm">
                  <h4>Bevakning</h4>
                  <q-input v-model="patient.tasks.task2.title" label="Rubrik" />
                  <q-select v-model="patient.tasks.task2.category" :options="['Möte','Telefonsamtal']" label="Kategori" />
                  <q-editor
                    v-model="patient.tasks.task2.description"
                    autofocus
                    @keyup.enter.stop
                    style="max-width: 400px;"
                  />
                  <q-input v-model="patient.tasks.task2.date" mask="date" :rules="['date']" label="Senast datum">
                    <template v-slot:append>
                      <q-icon name="las la-calendar" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                          <q-date v-model="patient.tasks.task2.date" @input="() => $refs.qDateProxy.hide()" />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <q-select v-model="patient.tasks.task2.owner" :options="['Alfred Beckman','Caroline Johansson']" label="Ansvarig" />
                </div>
              </q-popup-edit>
            </q-icon>
          </q-item-section>
        </q-item>

        <!-- Okopplade anteckningar -->

        <q-item-label header class="text-h4">Okopplade anteckningar</q-item-label>

        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>Ordination</q-item-label>
            <q-item-label caption>
              MPR dos 2
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="las la-arrow-right">
            </q-icon>
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>Remiss</q-item-label>
            <q-item-label caption>
              Synundersökning
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="las la-arrow-right">
            </q-icon>
          </q-item-section>
        </q-item>

      </q-list>
    </div>
  </q-drawer>
</template>

<script>
export default {
  name: 'PatientSidebar',
  data () {
    return {
      left: true,
      patient: {
        warning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid.',
        tasks: {
          task1: {
            status: false,
            category: 'Möte',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
          },
          task2: {
            status: false,
            category: 'Telefonsamtal',
            description: 'Lorem apsum dolor sit amet, consectetur adipisicing elit...'
          }
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
