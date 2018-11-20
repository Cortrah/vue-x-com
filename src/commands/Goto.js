import Command from "../main/Command";

export default class Goto extends Command{

    constructor(data) {
        super('Goto', data);
    }

    do(state){
        this.data.router.push({name: this.data.name});

        //if(this.data.name === 'Home'){
        //    this.data.router.push(this.data.path);
        //}
    }
}

