<template>
  <div class="card" v-if="currentTask">
    <h2>{{ currentTask.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="currentTask.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(currentTask.date).toLocaleDateString('ru') }}</p>
    <p><strong>Описание</strong>: {{ currentTask.description }}</p>
    <div @click.prevent="updTask($event)">
      <button class="btn" data-status="inwork">Взять в работу</button>
      <button class="btn primary" data-status="done">Завершить</button>
      <button class="btn danger" data-status="canceled">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  props: ['id'],
  setup(props) {
    const store = useStore();
    const currentTaskIndex = computed(() => store.getters.getTaskIndex(props.id))
    const currentTask = computed(() => store.getters.getTask(props.id));
    const updTask = (evt) => {
      if (evt.target.tagName.toUpperCase() === 'BUTTON') {
        store.dispatch('updTask', {
          index: currentTaskIndex.value,
          status: evt.target.dataset.status,
        });
      }
    };

    return {
      updTask,
      currentTaskIndex,
      currentTask,
    };
  },
  components: {AppStatus}
}
</script>

<style scoped>

</style>
