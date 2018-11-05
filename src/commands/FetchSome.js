import Command from "../main/Command";

export default class FetchSome extends Command{

    constructor(data) {
        super('FetchSome', data);
    }

    do(state){
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(true), 1000);
        });
        let result = await promise;

        state.counter = Number(state.counter) + 10;
    }

    undo(state){
        state.counter = Number(state.counter) - Number(this.data.amt);
    }

}
