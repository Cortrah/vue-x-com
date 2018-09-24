export default class Queue {

    constructor (playHead = 0, commands = []) {
        this.playhead = playHead;
        this.commands = commands;
        this.isRunning = false;
    }

    add(command) {
        this.commands.push(command);
    }

    async play() {
        this.isRunning = true;
        while(this.isRunning && (this.playhead < this.commands.length)){
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(true), 1000);
            });
            // wait for the promise to resolve
            let result = await promise;

            // and get and execute a command
            let command = this.commands[this.playhead];
            command.data.context.commit("Run", command);
            this.playhead++;
        }
       this.pause()
    }

    pause() {
        this.isRunning = false;
    }
};
