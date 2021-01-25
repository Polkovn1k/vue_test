<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" @click.prevent="addTask" :disabled="!isDisabledBtn">Создать</button>
  </form>
</template>


<script>
  import { ref, computed } from 'vue'
  import AppStatus from '../components/AppStatus'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'

  export default {
    setup() {
      const router = useRouter();
      const store = useStore();
      const title = ref('');
      const date = ref('');
      const description = ref('');
      const isDisabledBtn = computed(() => title.value.length && date.value.length && description.value.length);
      const addTask = () => {
        let payload = {
          title,
          description,
          date: date.value,
          status: new Date(date.value) > new Date(Date.now()) ? 'active' : 'canceled',
          id: Math.random(),
        };
        store.dispatch('addTask', payload);
        router.push({
          name: 'main',
        })
      };

      return {
        title,
        date,
        description,
        isDisabledBtn,
        addTask,
      }
    },
    components: {
      AppStatus,
    },
  }
</script>
