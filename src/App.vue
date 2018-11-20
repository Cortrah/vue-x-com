<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">
                Home
            </router-link>
                |
            <router-link to="/about">
                About
            </router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({
        name: 'App',

        created() {
            this.$bus.$on('enque', (command) => {
                return this.$store.dispatch("enque", command);
            });
        },

        beforeDestroy () {
            this.$bus.$off('enque');
        }
    });
</script>

