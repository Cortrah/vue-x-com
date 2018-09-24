import Vue from 'vue'
import Vuex from 'vuex'
import Queue from './main/Queue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        queue: new Queue(),
        counter: 0,
    },
    actions: {
        Enqueue(context, command) {
            this.state.queue.add(command);
            context.commit("Run", command)
        },
    },
    mutations: {
        Run(state, command) {
            command.do(state)
        }
    }
})
