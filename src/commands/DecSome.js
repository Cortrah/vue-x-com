import Command from "../main/Command";

export default class DecSome extends Command{

    constructor(data) {
        super('DecSome', data);
    }

    do(state){
        state.counter -= this.data.amt;
    }

    undo(state){
        state.counter += this.data.amt;
    }
}

