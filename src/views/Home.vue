<template>
    <div class="home">
        <HelloWorld msg="ok"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    import HelloWorld from './components/HelloWorld.vue';

    export default Vue.extend({
        name: 'home',

        components: {
            HelloWorld,
        },

        data () {
            return {
                eventList: ['inc', 'dec'],
            }
        },

        created() {
            this.eventList.forEach( eventName => {
                console.log("created");
                this.$bus.$on(eventName, data => {
                    console.log("on");
                    this.eventSwitch(eventName, data);
                });
            });
        },

        beforeDestroy () {
            this.eventList.forEach( eventName => {
                this.$bus.$off(eventName);
            });
        },

        methods: {
            eventSwitch: function (eventName, data) {
                console.log(eventName);
            }
        }
    });
</script>
