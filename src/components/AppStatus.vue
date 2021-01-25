<template>
  <span class="badge" :class="getStatus.class">{{ getStatus.title }}</span>
</template>

<script>
  import { reactive, onMounted, computed } from 'vue'

  export default {
    props: {
      type: String
    },
    setup(props) {
      const options = reactive({
        'done': {
          class: 'warning',
          title: 'Завершено',
        },
        'active': {
          class: 'primary',
          title: 'Активно',
        },
        'inwork': {
          class: 'primary',
          title: 'Выполняется',
        },
        'canceled': {
          class: 'danger',
          title: 'Отменено',
        },
      });

      const getStatus = computed(() => options[props.type]);

      onMounted(function() {
        console.log(props);
      });

      return {
        options,
        getStatus
      };
    },
  }
</script>
