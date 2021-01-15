<template>
  <div class="form-control">
    <label :for="options.id">{{ options.title }}</label>
    <select :id="options.id"
            @change="setSelectedValue">
      <option v-for="item in options.values"
              :value="item.value"
              :selected="item.value === selected_value">{{ item.title }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: Object,
    selected_value: String,
  },
  emits: ['update:selected_value'],
  data() {
    return {}
  },
  computed: {},
  methods: {
    setSelectedValue(evt) {
      this.$emit('update:selected_value', evt.target.value);
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
