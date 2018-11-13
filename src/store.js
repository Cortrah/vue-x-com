import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
    },
    actions: {
    },
    mutations: {
        do(state, command, resolve, reject) {
            return command.do(state, resolve, reject)
        },
        undo(state, command, resolve, reject) {
            return command.undo(state)
        }
    }
})
