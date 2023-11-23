<template>
  <div class="about">
    <h1>This is Exercise Two Page</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      backendData: (state) => state.backendData
    })
  },
  created () {
    this.$store.dispatch('loadJSONData')
  },
  mounted () {
    console.log(this.backendData)
  }
}
</script>

<style>

</style>
