<template>
  <h1>{{ getFullSummary }}</h1>
</template>

<script>
export default {
  props: {
    user_name: String,
  },
  data() {
    return {
      summaryStart: `Резюме`,
    }
  },
  computed: {
    getFullSummary() {
      return `${this.summaryStart} ${this.user_name}`;
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
