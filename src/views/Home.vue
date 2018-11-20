 <template>
    <div class="home">
        {{testHomeProp}}
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
        name: 'Home',

        components: {
            CountManager,
        },

        props: {
            testHomeProp: null,
        },

        methods: {
            goAbout: function () {
                let command = new Goto({router: this.$router, name: "About"});
                this.$bus.emit("enque", command);
            }
        },
    });
</script>
