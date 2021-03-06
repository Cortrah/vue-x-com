import Command from "./Command";

export default class AddSome extends Command{

    constructor(data) {
        super('AddSome', data);
    }

    // action
    async onDispatch(context, action){
        return await context.commit('do', {action: action, results: null});
    }

    // mutation
    do(state, payload){
        // console.log(state);
        // console.log(payload);
        // console.log(payload.action);
        // console.log(payload.results);
        // console.log(this.data);
        return state.counter += this.data.amt;
    }
}

