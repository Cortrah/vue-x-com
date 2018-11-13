 <template>
    <div class="home">
        <CountManager/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import CountManager from './components/CountManager.vue';

    export default Vue.extend({
        name: 'home',

        components: {
            CountManager,
        },

        created() {
            this.$bus.$on('AddSome', (command) => {
                this.$store.commit("do", command);
            });
        },

        beforeDestroy () {
            this.$bus.$off('AddSome');
        }
    });
</script>
