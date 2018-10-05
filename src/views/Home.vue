 <template>
    <div class="home">
        <CountController/>
        Direction: {{queue.direction}}
        <br/>
        Is Running: {{queue.isRunning}}
        <br/>
        Command Count: {{queue.commands.length}}
        <br/>
        Playhead: {{queue.playhead}}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import CountController from './components/CountController.vue';
    import Queue from '../main/Queue'

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
