 <template>
    <div class="home">
        <CountController/>
        Direction: {{queue.direction}}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import CountController from './components/CountManager.vue';
    import Queue from '../commander/Queue'

    export default Vue.extend({
        name: 'home',

        components: {
            CountController,
        },

        data () {
            return {
                queue: new Queue(),
                eventList: ['Enqueue', 'Play', 'Pause', 'Reverse'],
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
                switch(eventName) {
                    case 'Enqueue': {
                        this.queue.add(data);
                        break;
                    }
                    case 'Play': {
                        this.queue.play();
                        break;
                    }
                    case 'Pause': {
                        this.queue.pause();
                        break;
                    }
                    case 'Reverse': {
                        this.queue.reverse();
                        break;
                    }
                }
            },
        }
    });
</script>
