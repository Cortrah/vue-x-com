import Command from "../main/Command";

export default class AddSome extends Command{

    constructor(data) {
        super('AddSome', data);
        console.log("Constructed");
    }

    do(state){
        //let promise = new Promise((resolve, reject) => {

            console.log("do");
            state.counter = Number(state.counter) + Number(this.data.amt);

        //}).then( response => {
        //    console.log("Add some responded");
        //}).catch( error => {
        //    console.log("Add some had an Error");
        //});
        //return promise;
    }
}

