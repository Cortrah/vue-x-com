 <template>
    <div class="home">
        {{testHomeProp}}
        <CountManager/>

        <button @click.stop.prevent="navigate('About')">
            Go About
        </button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import CountManager from './components/CountManager.vue';
    import Goto from '../commands/Goto';

    export default Vue.extend({
        name: 'Home',

        components: {
            CountManager,
        },

        props: {
            testHomeProp: null,
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
        }
    });
</script>
