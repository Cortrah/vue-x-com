<template>
    <div class="hello">
        <h1>{{ this.$store.state.counter }}</h1>
        <button @click.prevent="inc()">
            +
        </button>
        <button @click.prevent="dec()">
            -
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
                this.$bus.$emit("Enqueue", new AddSome({amt: 4}));
            },
            dec: function () {
                this.$bus.$emit("Enqueue", new DecSome({amt: 3}));            }
        }
    });
</script>