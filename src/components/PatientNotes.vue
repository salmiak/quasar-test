<template lang="html">
  <q-card class="q-pa-md ">
    <h3 class="q-mb-lg q-mt-none">Minnesanteckningar</h3>

    <div class="row">
      <div class="col" style="max-width: 160px; min-width: 160px;">

      </div>
      <div class="col q-px-sm text-blue-grey-5 text-italic" style="max-width: 40rem;" @click="dbClick()">Dubbelklicka för att skapa en ny anteckning.</div>
    </div>
    <q-separator class="q-my-md" />

    <div v-for="note in notes" :key="note.date">
      <div class="row" >
        <div class="col" style="max-width: 160px; min-width: 160px;">
          {{note.date}}
        </div>
        <div v-if="note.mode" class="col" style="max-width: 40rem;">
          <q-editor class="q-mb-sm" v-model="note.content" min-height="8rem" />
          <q-btn text-color="primary" label="Spara" @click="note.mode = false" />
        </div>
        <div v-else>
          <div :class="['col','q-px-sm',{'text-blue-grey-5 text-italic' : !note.content}]" style="max-width: 40rem;" v-html="note.content || 'Dubbelklicka för att redigera anteckningen.'" @click="dbClick(note)"></div>
        </div>
      </div>
      <q-separator class="q-my-md" />
    </div>
  </q-card>
</template>

<script>
export default {
  name: 'PatientNotes',
  data () {
    return {
      timeoutId: null,
      notes: [
        {
          date: '2020-07-11 13:54',
          content: '',
          mode: true
        },
        {
          date: '2020-07-11 13:54',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          mode: false
        },
        {
          date: '2020-07-11 11:54',
          content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          mode: false
        },
        {
          date: '2020-07-10 10:23',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          mode: false
        }
      ]
    }
  },
  methods: {
    dbClick (note) {
      if (!this.timeoutId) {
        this.timeoutId = setTimeout(() => {
          // simple click
          this.timeoutId = null
        }, 500)
      } else {
        clearTimeout(this.timeoutId)
        // double click
        this.timeoutId = null

        if (note) {
          note.mode = true
        } else {
          this.notes.unshift({
            date: 'Nyss',
            content: '',
            mode: true
          })
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
