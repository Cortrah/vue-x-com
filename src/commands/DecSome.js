import Command from "../main/Command";

export default class DecSome extends Command{

    constructor(data) {
        super('DecSome', data);
    }

    do(state){
        state.counter = Number(state.counter) - Number(this.data.amt);
    }

    undo(state){
        state.counter = Number(state.counter) + Number(this.data.amt);
    }
}

