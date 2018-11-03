import Command from "../commander/Command";

export default class DecSome extends Command{

    constructor(data) {
        super('DecSome', data);
    }

    do(state){
        state.counter -= Number(this.data.amt);
    }

    undo(state){
        state.counter += Number(this.data.amt);
    }
}

