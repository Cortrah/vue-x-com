import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 3
    },
    mutations: {
        inc(state, data) {
            console.log("mutate inc");
            state.counter += data.amt;
        },
        dec(state, data) {
            console.log("mutate dec");
            state.counter -= data.amt;
        }
    },
    actions: {}
})
