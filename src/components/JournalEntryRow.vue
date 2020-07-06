<template lang="html">
  <div class="row q-col-gutter-md q-my-lg">
    <div class="col-3">
      <h4 class="q-mt-none text-right text-blue-grey-7">{{label}}</h4>
    </div>
    <div class="col-7">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JournalEntryRow',
  props: [
    'label'
  ]
}
</script>

<style lang="css" scoped>
</style>
