import { createStore } from 'vuex';

const store = createStore({
    state () {
        return {
            task: JSON.parse(window.localStorage.getItem('tasks')) || [],
        }
    },
    getters: {
        getActiveTaskQuantity (state) {
            return state.task.filter(item => item.status === 'active').length;
        },
        getTaskIndex: (state) => (id) => {
            return state.task.findIndex(item => item.id === +id)
        },
        getTask: (state, getters) => (id) => {
            return state.task[getters.getTaskIndex(id)]
        },
    },
    mutations: {
        pushToStorage(state) {
            window.localStorage.setItem('tasks', JSON.stringify(state.task));
        },
        addTask(state, payload) {
            state.task.push(payload);
            store.commit('pushToStorage')
        },
        updTask(state, payload) {
            state.task[payload.index].status = payload.status;
            store.commit('pushToStorage')
        },
    },
    actions: {
        addTask(context, payload) {
            context.commit('addTask', payload);
        },
        updTask(context, payload) {
            context.commit('updTask', payload);
        },
    }
});

export default store;
