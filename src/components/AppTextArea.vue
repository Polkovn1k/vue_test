<template>
  <div class="form-control">
    <label :for="options.id">{{ options.title }}</label>
    <textarea :id="options.id"
              :value="area_value"
              @input="setAreaValue"
              rows="3"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    options: Object,
    area_value: String,
  },
  emits: ['update:area_value'],
  data() {
    return {}
  },
  computed: {},
  methods: {
    setAreaValue(evt) {
      this.$emit('update:area_value', evt.target.value);
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
