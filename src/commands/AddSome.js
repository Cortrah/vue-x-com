import Command from "../main/Command";

export default class AddSome extends Command{

    constructor(data) {
        super('AddSome', data);
    }

    async do(state){
        state.counter = Number(state.counter) + Number(this.data.amt);
        return state.counter;
    }
}

