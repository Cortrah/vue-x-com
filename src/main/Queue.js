//import Event from "../main/Event";

export default class Queue {

    constructor (playHead = 0, commands = []) {
        this.events = {};
        this.playhead = playHead;
        this.commands = commands;
        this.isRunning = false;
    }

    add(command) {
        this.commands.push(command);
        this.play();
    }

    async play() {
        this.isRunning = true;
        while(this.isRunning && (this.playhead < this.commands.length)){
            let command = this.commands[this.playhead];
            command.context.commit("Run", command);
            this.playhead++;
        }
       this.pause()
    }

    pause() {
        this.isRunning = false;
    }
};
