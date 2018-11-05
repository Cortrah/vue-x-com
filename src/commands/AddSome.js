import Command from "../main/Command";

export default class AddSome extends Command{

    constructor(data) {
        super('AddSome', data);
    }

    do(state, reslove, reject){
        let doPromise = new Promise((resolve, reject) => {
            state.counter = Number(state.counter) + Number(this.data.amt);
        }).then( response => {
            console.log("Add Some Responded");
        }).catch( error => {
            console.log("Add Some Errored");
        })
    }

    undo(state){
        state.counter = Number(state.counter) - Number(this.data.amt);
    }
}

