import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0
    },
    actions: {
        Que(context, data) {
            console.log(context);
            console.log(data.name);
            console.log(data.data);
            context.commit(data.name, data)
        },
    },
    mutations: {
        AddSome(state, com) {
            state.counter += com.data.amt;
        },
        DecSome(state, com) {
            state.counter -= com.data.amt;
        }
    }
})
