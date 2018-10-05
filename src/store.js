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
        Do(state, command) {
            command.do(state)
        },
        Undo(state, command) {
            command.undo(state)
        }
    }
})
