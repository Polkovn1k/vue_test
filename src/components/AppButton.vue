<template>
  <button class="btn"
          :class="type_class"
          :disabled="disabled"
          @click.prevent="$emit('action')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type_class: String,
    disabled: Boolean,
  },
  emits: ['action'],
  data() {
    return {}
  },
  computed: {},
}
</script>

<style lang="scss" scoped>

</style>
