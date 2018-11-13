<template>
    <div class="hello">
        <h1>{{ this.$store.state.counter }}</h1>
        <input v-model="amount" style="max-width: 40px"/>
        <br/>
        <button @click.prevent="inc()">
            +
        </button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import AddSome from '../../commands/AddSome';

    export default Vue.extend({
        name: 'CountManager',
        data () {
            return {
                amount: 4,
            }
        },
        methods: {
            inc: function () {
                let command = new AddSome({amt: this.amount, context: this.$store});
                let returnValue = this.$bus.$emit("Enqueue", command);
                console.log(returnValue)
            },
        }
    });
</script>