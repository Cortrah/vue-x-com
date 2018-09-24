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
                eventList: ['queue'],
            }
        },

        created() {
            this.eventList.forEach( eventName => {
                this.$bus.$on(eventName, data => {
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
                this.$store.dispatch("Que", data);
            }
        }
    });
</script>
