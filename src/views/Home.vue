 <template>
    <div class="home">
        {{testHomeProp}}
        <h1>This is a Home page.</h1>

        <CountManager/>
        <button @click.stop.prevent="goAbout()">
            About Woodstock
        </button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import CountManager from './components/CountManager.vue';
    import Goto from '../commands/Goto';

    export default Vue.extend({
        name: 'home',

        components: {
            CountManager,
        },

        props: {
            testHomeProp: null,
        },

        methods: {
            goAbout: function () {
                let command = new Goto({router: this.$router, name: "About"});
                let result = this.$store.dispatch("enque", command);
            }
        },

        created() {
            this.$bus.$on('AddSome', (command) => {
                return this.$store.dispatch("enque", command);
            });
        },

        beforeDestroy () {
            this.$bus.$off('AddSome');
        }
    });
</script>
