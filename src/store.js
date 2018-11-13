import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
    },
    actions: {
        Enqueue(context, payload) {
            return context.commit('do', payload)
        },
    },
    mutations: {
        do(state, payload) {
            return payload.command.do(state);
        },
    }
})
