import { createRouter, createWebHistory } from 'vue-router'
import AllTasks from '../views/AllTasks.vue'
import NewTask from '../views/NewTask.vue'
import DetailTask from '../views/DetailTask.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: AllTasks,
    },
    {
        path: '/new',
        name: 'new',
        component: NewTask
    },
    {
        path: '/task/:id',
        name: 'detail',
        component: DetailTask,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
