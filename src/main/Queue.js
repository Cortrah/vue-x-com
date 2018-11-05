export default class Queue {

    constructor (playhead = 0, commands = []) {
        this.playhead = playhead;
        this.commands = commands;
        this.isRunning = false;

        // 'forward' or 'reverse'
        this.direction = 'forward';
    }

    add(command, resolve, reject) {
        this.commands.push(command);
    }

    async play() {
        this.isRunning = true;
        if(this.direction === 'forward'){
            while(this.isRunning && (this.playhead < this.commands.length)){
                let promise = new Promise((resolve, reject) => {
                    setTimeout(() => resolve(true), 1000);
                });
                let result = await promise;

                let command = this.commands[this.playhead];
                command.data.context.commit("do", command);

                this.playhead++;
            }
        } else {
            while(this.isRunning && (this.playhead > 0)){
                let promise = new Promise((resolve, reject) => {
                    setTimeout(() => resolve(true), 1000);
                });
                let result = await promise;

                this.playhead--;
                let command = this.commands[this.playhead];
                command.data.context.commit("undo", command);
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
