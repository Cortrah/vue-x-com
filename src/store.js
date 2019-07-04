import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isServerLive: false,
        appView: null,
        counter: 0,
    },
    actions: {
        onInit(context, payload){
            context.commit("init", payload);
        },
        async onDispatch(context, action) {
            // console.log("store onDispatch action called");
            // console.log(this);
            // console.log(context);
            // console.log(action);
            // console.log(action.command);
            // console.log(action.command.thing1());
            // console.log(await action.command.thing2());
            return action.command.onDispatch(context, action);
        },
    },
    mutations: {
        do(state, payload) {
            // console.log("=== store do mutation called ===");
            // console.log(state);
            // console.log(payload);
            // console.log(payload.action);
            // console.log(payload.action.type);
            // console.log(payload.action.command.name);
            // console.log(payload.action.command.data);
            return payload.action.command.do(state, payload.results);
        },
        init(state, payload){
            state.appView = payload;
        },
    },
})
