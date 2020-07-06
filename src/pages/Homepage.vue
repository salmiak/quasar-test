<template lang="html">
  <q-page>
    <div class="bg-blue-grey-1">

    <div class="q-px-lg q-py-md">
      <h2 class="no-margin">Hemsidan</h2>
      <p class="no-margin">Välkommen Alfred Beckman!</p>
    </div>

      <q-tabs
        v-model="tab"
        inline-label
        class="q-mx-lg"
        indicator-color="primary"
        align="left"
      >
        <q-tab name="home" icon="las la-home" label="Din sida" />
        <q-tab name="signbasket" icon="las la-inbox" label="Signeringskorg">
          <q-badge color="red" floating>3</q-badge>
        </q-tab>
        <q-tab name="settings" icon="las la-cog" label="Inställningar" />
        <q-tab name="about" icon="las la-info-circle" label="Om Prorenata Journal" />
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
          <q-tab-panel name="home" class="fit row q-gutter-lg">
            <div class="col">
              <h3>Dina utvalda</h3>
              <q-card
                class="bg-blue-grey-1 shadow-1"
              >
                <favs-table />

              </q-card>
            </div>
            <div class="col">
              <h3>Senast besökta</h3>
              <q-card>
                Besökta
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel name="signbasket">
            <h3>Signeringskorg</h3>
            <journal-entry />
          </q-tab-panel>

          <q-tab-panel name="settings">
            <h3>Inställningar</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="about" class="q-px-lg">
            <h3>Om Prorenata Journal</h3>

            <h4>Version</h4>
            <p>Du använder Prorenata Journal version 3.12.0. (Se <a href="/release_notes/" target="_blank">versionsbeskrivning för denna och tidigare versioner</a>)</p>

            <h4>CE-märkning</h4>
            <p>Hela Prorenata Journal är CE-märkt och framtaget i enlighet med kvalitetssäkerhetssystem ISO-13485, informationssäkerhet ISO-27000 och riskhanteringssystem ISO-14971.</p>

            <h4>Prorenata AB</h4>
            <p>Prorenata Journal tillverkas av Prorenata AB med säte i Stockholm, Sverige.</p>

            <p>Prorenata AB<br>Skeppsbron 30<br>111 30 Stockholm</p><p>Web: <a href="http://www.prorenata.se" target="_blank">www.prorenata.se</a><br>Telefon: 010-330 06 70<br>Mail: <a href="mailto:support@prorenata.se">support@prorenata.se</a></p>
          </q-tab-panel>
        </q-tab-panels>

  </q-page>
</template>

<script>
import FavsTable from 'components/FavsTable.vue'
import JournalEntry from 'components/JournalEntry.vue'
export default {
  name: 'HomePage',
  components: {
    FavsTable,
    JournalEntry
  },
  data () {
    return {
      tab: 'home'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
