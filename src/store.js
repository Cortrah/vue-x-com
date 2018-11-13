import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
    },
    actions: {
        do(context, payload) {
            console.log("action");
            return context.commit('do', payload)
        },
    },
    mutations: {
        do(state, payload) {
            console.log("mutations");
            console.log(payload.command);
            return payload.command.do(state);
        },
    }
})
