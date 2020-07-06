<template lang="html">
  <q-card class="q-pa-md no-shadow border">
    <h3 class="q-mt-none">Administrativ anteckning</h3>

    <journal-entry-row label="">
      <q-banner rounded dark class="bg-info">
        <template v-slot:avatar>
          <q-icon name="las la-info-circle" color="white" />
        </template>
        Tänk på lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </q-banner>
    </journal-entry-row>

    <journal-entry-row label="Anteckningshuvud">

      <div class="q-py-sm" style="max-width:30rem">
        <q-input v-model="entry.date" name="entryDate" label="Händelsetid">
          <template v-slot:prepend>
            <q-icon name="fal fa-calendar-day" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="entry.date" mask="YYYY-MM-DD HH:mm" />
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="fal fa-clock" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="entry.date" mask="YYYY-MM-DD HH:mm" format24h />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <q-select v-model="entry.owner" :options="template.users" label="Ansvarig" style="max-width:30rem" />

      <q-select v-model="entry.type" :options="template.types" label="Kontakttyp" style="max-width:30rem" />

    </journal-entry-row>

    <journal-entry-row label="Anteckning">
      <q-editor v-model="qEditor" min-height="5rem" />
    </journal-entry-row>

    <journal-entry-row label="Bevakningar">
      Här kommer bevakningar
    </journal-entry-row>

    <journal-entry-row label="Bifogade filer">
      <q-file
        v-model="entry.attachement"
        label="Klicka för att bifoga filer"
        counter
        use-chips
        multiple
      >
        <template v-slot:prepend>
          <q-icon name="fal fa-paperclip" />
        </template>
      </q-file>
    </journal-entry-row>

    <journal-entry-row label="Signatur">
      <q-btn flat color="primary" label="Signera anteckning">
        <q-tooltip>Lås anteckningen genom att signera den</q-tooltip>
      </q-btn>
    </journal-entry-row>

  </q-card>
</template>

<script>
import JournalEntryRow from './JournalEntryRow'

const now = new Date()
const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: 'numeric', hour12: false })
console.log(dateTimeFormat.formatToParts(now)) // eslint-disable-line no-console
const [{ value: month }, , { value: day }, , { value: year }, , { value: hour }, , { value: minute }] = dateTimeFormat.formatToParts(now)

export default {
  name: 'JournalEntry',
  components: {
    JournalEntryRow
  },
  data () {
    return {
      qEditor: 'This is a quasar editor',
      template: {
        users: [
          'Alfred',
          'Nisse',
          'Belly'
        ],
        types: [
          'Mottagning',
          'Spontanbesök',
          'Bokat möte'
        ]
      },
      entry: {
        date: `${year}-${month}-${day} ${hour}:${minute}`,
        owner: 'Alfred',
        attachement: null
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
