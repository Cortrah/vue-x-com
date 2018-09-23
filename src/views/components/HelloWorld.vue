<template>
    <div class="hello">
        <h1>{{ this.$store.state.counter }}</h1>
        <button @click.prevent="incIt()">+</button>
        <button @click.prevent="decIt()">-</button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'HelloWorld',
        props: {
            msg: String,
        },
        methods: {
            incIt: function () {
                this.$emit("inc", {amt: 4})
            },
            decIt: function () {
                this.$emit("dec", {amt: 3})
            }
        }
    });
</script>