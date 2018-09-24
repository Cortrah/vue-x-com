<template>
    <div class="hello">
        <h1>{{ this.$store.state.counter }}</h1>
        <button @click.prevent="inc()">
            +
        </button>
        <button @click.prevent="dec()">
            -
        </button>
        <button @click.prevent="play()">
            play
        </button>
        <button @click.prevent="pause()">
            pause
        </button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import AddSome from '../../commands/AddSome';
    import DecSome from '../../commands/DecSome';

    export default Vue.extend({
        name: 'HelloWorld',
        props: {
            msg: String,
        },
        methods: {
            inc: function () {
                this.$bus.$emit("Enqueue", new AddSome({amt: 4, context: this.$store}));
            },
            dec: function () {
                this.$bus.$emit("Enqueue", new DecSome({amt: 3, context: this.$store}));
            },
            play: function () {
                this.$store.dispatch("Play");
            },
            pause: function () {
                this.$store.dispatch("Pause");
            }
        }
    });
</script>