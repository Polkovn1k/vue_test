<template>
  <h1 class="text-white center" v-if="!task.length">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ getActiveTaskQuantity }}</h3>
    <div class="card" v-for="item in task">
      <h2 class="card-title">
        {{ item.title }}
        <AppStatus :type="item.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ new Date(item.date).toLocaleDateString('ru') }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click.prevent="openDetailPage(item.id)">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import { computed } from 'vue'
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const openDetailPage = (id) => {
      router.push({
        name: 'detail',
        params: {
          id,
        }
      });
    };

    return {
      task: computed(() => store.state.task),
      getActiveTaskQuantity: computed(() => store.getters.getActiveTaskQuantity),
      openDetailPage,
    }
  },
  components: {
    AppStatus,
  },
}
</script>
