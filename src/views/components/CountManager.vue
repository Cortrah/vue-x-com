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
                //let addPromise = new Promise((resolve, reject) => {
                    let command = new AddSome({amt: this.amount, context: this.$store});
                    this.$bus.$emit(command.name, command);
                //});
                // addPromise
                //     .then( response => {
                //         console.log('add returned');
                //     })
                //     .catch( error => {
                //         console.log("add error");
                //     })
            },
        }
    });
</script>