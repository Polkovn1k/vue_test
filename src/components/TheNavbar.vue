<template>
  <header class="navbar">
    <h3>Freelance</h3>
    <ul class="navbar-menu">
      <router-link v-for="item in linkOptions" :to="item.route" v-slot="{ navigate, href, isActive }" custom>
        <li>
          <a v-if="!isActive" :href="href" @click="navigate">{{ item.text }}</a>
          <span v-else class="active">{{ item.text }}</span>
        </li>
      </router-link>
    </ul>
  </header>
</template>

<script>
  import { ref } from 'vue'
  export default {
      setup() {
        const linkOptions = ref([{
          route: {
            name: 'main'
          },
          text: 'Все задачи',
        }, {
          route: {
            name: 'new'
          },
          text: 'Создать',
        }]);

        return {
          linkOptions,
        }
      }
  }
</script>

<style scoped></style>
