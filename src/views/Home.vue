 <template>
    <div class="home">
        <HelloWorld msg="ok"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import HelloWorld from './components/HelloWorld.vue';
    import Queue from '../main/Queue'

    export default Vue.extend({
        name: 'home',

        components: {
            HelloWorld,
        },

        data () {
            return {
                queue: new Queue(),
                eventList: ['Enqueue', 'Play', 'Pause'],
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
                }
            },
        }
    });
</script>
