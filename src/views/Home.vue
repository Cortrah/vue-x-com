 <template>
    <div class="home">
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
            this.$bus.$on('AddSome', (command, resolve, reject) => {
                return this.$store.commit("do", command, resolve, reject);
            });
        },

        beforeDestroy () {
            this.$bus.$off('AddSome');
        }
    });
</script>
