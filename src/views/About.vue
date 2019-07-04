<template>
    <div class="about">
        {{testAboutProp}}

        <button @click.stop.prevent="navigate('Home')">
            Snoopy Go Home
        </button>
    </div>
</template>

<script >
    import Vue from 'vue';
    import Goto from '../commands/Goto';

    export default Vue.extend({
        name: 'About',

        props: {
            testAboutProp: '',
        },

        methods: {
            navigate: function (destination) {
                let command = new Goto({router: this.$router, name: destination});
                this.$store.dispatch(
                    {
                        type: 'onDispatch',
                        command: command
                    }
                );
            }
        },

    });
</script>
