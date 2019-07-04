<template>
    <div>

        <h1>{{ this.$store.state.counter }}</h1>
        <input v-model="amount" style="max-width: 40px"/>

        <br/>

        <button @click.prevent="delta(-2)">
            -2
        </button>
        <button @click.prevent="delta(4)">
            +4
        </button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import AddSome from '../../commands/AddSome';

    export default Vue.extend({
        name: 'CountManager',
        methods: {
            delta: function (amt) {
                this.$store.dispatch(
                    {
                        type: 'onDispatch',
                        command: new AddSome({amt:amt})
                    }
                );
            },
        }
    });
</script>
