import Command from "../main/Command";

export default class AddSome extends Command{

    constructor(data) {
        super('AddSome', data);
    }

    do(state){
        //let promise = new Promise((resolve, reject) => {

            state.counter = Number(state.counter) + Number(this.data.amt);

        //}).then( response => {
        //    console.log("Add some responded");
        //}).catch( error => {
        //    console.log("Add some had an Error");
        //});
        //return promise;
    }
}

