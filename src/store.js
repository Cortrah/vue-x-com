import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0
    },
    actions: {
        inc(context, data) {
            context.commit("inc", data)
        },
        dec(context, data) {
            context.commit("dec", data)
        }
    },
    mutations: {
        inc(state, data) {
            state.counter += data.amt;
        },
        dec(state, data) {
            state.counter -= data.amt;
        }
    }
})
