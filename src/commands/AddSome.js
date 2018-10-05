import Command from "../main/Command";

export default class AddSome extends Command{

    constructor(data) {
        super('AddSome', data);
    }

    do(state){
        state.counter += this.data.amt;
    }

    undo(state){
        state.counter -= this.data.amt;
    }

}

