<template lang="html">
  <div class="p-pa-lg q-gutter-md">

    <div class="q-gutter-xs">
      <q-btn no-caps outline color="blue-grey-8" label="Arkivera" icon="las la-archive" />
      <q-btn no-caps outline color="blue-grey-8" label="Flytta elev" icon="las la-user" />
      <q-btn no-caps outline color="blue-grey-8" label="Skapa läslänk" icon="las la-link" />
      <q-btn no-caps outline color="blue-grey-8" label="Slå ihop" icon="las la-user-friends" />
      <q-btn-dropdown no-caps outline color="blue-grey-8" label="Visa loggar">
        <q-list>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Besöksloggar</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Serverloggar</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Aktivitetsloggar      </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

    <q-card class="bg-yellow-1">
      <q-card-section>
        <h4 class="q-my-none">Potentiella dubbletter</h4>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-list separator>
          <q-item>
            <q-item-section avatar>
              <q-icon color="grey-8" name="las la-user-friends" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Alan Allansson</q-item-label>
              <q-item-label caption>20 121212-A121</q-item-label>
              <q-item-label caption>Miniskolan, 2B</q-item-label>
            </q-item-section>
            <q-item-section side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn flat dense round icon="las la-ellipsis-v">
                  <q-menu>
                    <q-list style="min-width: 100px">
                      <q-item clickable v-close-popup>
                        <q-item-section avatar>
                          <q-icon name="las la-user" />
                        </q-item-section>
                        <q-item-section>Gå till eleven</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup>
                        <q-item-section avatar>
                          <q-icon name="fal fa-people-arrows" />
                        </q-item-section>
                        <q-item-section>Använd för elevhopslagning</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="grey-8" name="las la-user-friends" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Alan Allansson</q-item-label>
              <q-item-label caption>20 121212-A121</q-item-label>
              <q-item-label caption>Microskolan, 2A</q-item-label>
            </q-item-section>
            <q-item-section side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn flat dense round icon="las la-ellipsis-v">
                  <q-menu>
                    <q-list style="min-width: 100px">
                      <q-item clickable v-close-popup>
                        <q-item-section avatar>
                          <q-icon name="las la-user" />
                        </q-item-section>
                        <q-item-section>Gå till eleven</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup>
                        <q-item-section avatar>
                          <q-icon name="fal fa-people-arrows" />
                        </q-item-section>
                        <q-item-section>Använd för elevhopslagning</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
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
              <q-item-label>Alan Allansson</q-item-label>
              <q-item-label caption>20 121212-A121</q-item-label>
              <q-item-label caption>Miniskolan, 2A</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-chip icon="las la-folder" color="blue-grey-6" text-color="white">EMI</q-chip>
            </q-item-section>

            <q-item-section side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn flat dense round icon="las la-ellipsis-v">
                  <q-menu>
                    <q-list style="min-width: 100px">
                      <q-item clickable v-close-popup>
                        <q-item-section avatar>
                          <q-icon name="las la-user" />
                        </q-item-section>
                        <q-item-section>Gå till eleven</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup>
                        <q-item-section avatar>
                          <q-icon name="las la-times" />
                        </q-item-section>
                        <q-item-section>Ta bort läslänk</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="blue-grey-8" name="las la-file-export" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Alan Allansson</q-item-label>
              <q-item-label caption>20 121212-A121</q-item-label>
              <q-item-label caption>Microskolan, 2A</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-chip icon="las la-folder" color="blue-grey-6" text-color="white">EMI</q-chip>
            </q-item-section>

            <q-item-section side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn flat dense round icon="las la-ellipsis-v">
                  <q-menu>
                    <q-list style="min-width: 100px">
                      <q-item clickable v-close-popup>
                        <q-item-section avatar>
                          <q-icon name="las la-user" />
                        </q-item-section>
                        <q-item-section>Gå till eleven</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup>
                        <q-item-section avatar>
                          <q-icon name="las la-times" />
                        </q-item-section>
                        <q-item-section>Ta bort läslänk</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <div class="q-my-lg">

    </div>

  </div>
</template>

<script>
export default {
  name: 'PatientAdminTab'
}
</script>

<style lang="css" scoped>
</style>
