export default class Queue {

    constructor (playhead = 0, commands = []) {
        this.playhead = playhead;
        this.commands = commands;
        this.isRunning = false;
        this.direction = 'forward'; // or 'reverse'
    }

    add(command) {
        this.commands.push(command);
    }

    async play() {
        this.isRunning = true;
        if(this.direction === 'forward'){
            while(this.isRunning && (this.playhead < this.commands.length)){
                let promise = new Promise((resolve, reject) => {
                    setTimeout(() => resolve(true), 1000);
                });
                // wait for the promise to resolve
                let result = await promise;

                // and get and execute a command
                console.log(this.playhead);
                let command = this.commands[this.playhead];
                command.data.context.commit("Do", command);
                this.playhead++;
            }
        } else {
            while(this.isRunning && (this.playhead > 0)){
                let promise = new Promise((resolve, reject) => {
                    setTimeout(() => resolve(true), 1000);
                });
                // wait for the promise to resolve
                let result = await promise;

                // and get and execute a command
                console.log(this.playhead);
                this.playhead--;
                let command = this.commands[this.playhead];
                command.data.context.commit("Undo", command);
            }
        }
       this.pause()
    }

    pause() {
        this.isRunning = false;
    }

    reverse() {
        if(this.direction === 'forward'){
            this.direction = 'reverse'
        } else {
            this.direction = 'forward'
        }
    }
};
