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
            command.context = context;
            this.state.queue.add(command);
        },
        Play() {
            this.state.queue.play();
        },
        Pause() {
            this.state.queue.pause();
        }
    },
    mutations: {
        Run(state, command) {
            command.do(state)
        }
    }
})
