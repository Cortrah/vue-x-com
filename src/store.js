import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0
    },
    actions: {
        Queue(context, command) {
            context.commit("Run", command)
        },
    },
    mutations: {
        Run(state, command) {
            command.do(state)
        }
    }
})
