 <template>
    <div class="home">
        <CountManager/>
        <p>
            Is Running ?: {{queue.isRunning}}
        </p>
        <p>
            Direction: {{queue.direction}}
        </p>
        <p>
            on {{queue.playhead}} of {{ queue.commands.length }}
        </p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import CountManager from './components/CountManager.vue';
    import Queue from '../commander/Queue'

    export default Vue.extend({
        name: 'home',

        components: {
            CountManager,
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
