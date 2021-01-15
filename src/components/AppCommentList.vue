<template>
  <div class="card">
    <h2>Комментарии</h2>
    <ul class="list">
      <li class="list-item" v-for="item in list">
        <div>
          <p><strong>{{ item.email }}</strong></p>
          <small>{{ item.body }}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  data() {
    return {}
  },
  computed: {},
}
</script>

<style lang="scss" scoped>

</style>
