import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
    },
    actions: {
        enqueue(context, command) {
            return  context.commit('do', command);
        },
    },
    mutations: {
        do(state, payload) {
            return payload.command.do(state);
        },
    }
})
