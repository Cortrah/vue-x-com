import Command from "../commander/Command";

export default class AddSome extends Command{

    constructor(data) {
        super('AddSome', data);
    }

    do(state){
        state.counter += Number(this.data.amt);
    }

    undo(state){
        state.counter -= Number(this.data.amt);
    }

}

