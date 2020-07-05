<template>
<v-main>
   <error-log v-if="errors" :errors="errors"></error-log>
    <transition name="fade-transform" mode="out-in">
        <keep-alive>
            <router-view />
        </keep-alive>
    </transition>
</v-main>
</template>

<script>
import {
    mapGetters
} from 'vuex';
import ErrorLog from '../widget/AppErrorLog.vue';
export default {
    name: 'TheLayoutContent',
    data: () => ({}),
    components: {
        ErrorLog,
    },
    computed: {
        ...mapGetters([
            'errors'
        ])
    }
}
</script>
