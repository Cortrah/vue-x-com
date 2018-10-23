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
        do(state, command) {
            command.do(state)
        },
        undo(state, command) {
            command.undo(state)
        }
    }
})
