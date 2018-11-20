<template>
    <div class="about">
        {{testAboutProp}}

        <button @click.stop.prevent="goHome()">
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
            goHome: function () {
                let command = new Goto({router: this.$router, name: "Home", path:'/'});
                this.$bus.$emit("enque", command);
            }
        },

    });
</script>
