<template>
    <div class="hello">
        <h1>{{ this.$store.state.counter }}</h1>
        <input ref="ammountInput" v-model="ammount" style="max-width: 40px"/>
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
                ammount: 4,
            }
        },
        methods: {
            inc: function () {
                this.$bus.$emit("Enqueue", new AddSome({amt: this.ammount, context: this.$store}));
            },
            dec: function () {
                this.$bus.$emit("Enqueue", new DecSome({amt: this.ammount, context: this.$store}));
            },
            fetchSome: function () {
                this.$bus.$emit("Enqueue", new FetchSome({url: 'https://www.google.com', context: this.$store}));
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