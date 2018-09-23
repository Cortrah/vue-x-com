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

    export default Vue.extend({
        name: 'HelloWorld',
        props: {
            msg: String,
        },
        methods: {
            inc: function () {
                this.$bus.$emit("inc", {amt: 4})
            },
            dec: function () {
                this.$bus.$emit("dec", {amt: 3})
            }
        }
    });
</script>