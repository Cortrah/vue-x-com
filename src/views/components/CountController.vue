<template>
    <div class="hello">
        <h1>{{ this.$store.state.counter }}</h1>
        <input v-model="amount" style="max-width: 40px"/>
        <br/>
        <button @click.prevent="inc()">
            +
        </button>
        <button @click.prevent="dec()">
            -
        </button>
        <br/>
        <button @click.prevent="fetchSome()">
            fetch
        </button>
        <br/>
        <button @click.prevent="play()">
            play
        </button>
        <button @click.prevent="pause()">
            pause
        </button>
        <button @click.prevent="reverse()">
            reverse
        </button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import AddSome from '../../commands/AddSome';
    import DecSome from '../../commands/DecSome';
    import FetchSome from '../../commands/DecSome';

    export default Vue.extend({
        name: 'Panel',
        data () {
            return {
                amount: 4,
            }
        },
        methods: {
            inc: function () {
                let addPromise = new Promise((resolve, reject) => {
                    let command = new AddSome({amt: this.amount, context: this.$store});
                    this.$bus.$emit("Enqueue", command, resolve, reject);
                });

                addPromise
                    .then( response => {
                        console.log('add returned');
                    })
                    .catch( error => {
                        console.log("add erored");
                    })
            },
            dec: function () {
                let decPromise = new Promise((resolve, reject) => {
                    let command = new DecSome({amt: this.amount, context: this.$store});
                    this.$bus.$emit("Enqueue", command, resolve, reject);
                });

                decPromise
                    .then( response => {
                        console.log('dec returned');
                    })
                    .catch( error => {
                        console.log("dec erored");
                    })
            },
            fetchSome: function () {
                this.$bus.$emit("Enqueue", new FetchSome({url: 'https://www.google.com', context: this.$store}));

                let fetchPromise = new Promise((resolve, reject) => {
                    let command = new FetchSome({url: 'https://www.google.com', context: this.$store});
                    this.$bus.$emit("Enqueue", command, resolve, reject);
                });

                fetchPromise
                    .then( response => {
                        console.log('fetch returned');
                    })
                    .catch( error => {
                        console.log("fetch erored");
                    })
            },
            play: function () {
                this.$bus.$emit("Play");
            },
            pause: function () {
                this.$bus.$emit("Pause");
            },
            reverse: function () {
                this.$bus.$emit("Reverse");
            }
        }
    });
</script>