<template>
<v-main :key="locale">
    <error-log v-if="errors" :errors="errors"></error-log>
    <transition name="fade-transform" mode="out-in">
        <keep-alive>
            <router-view />
        </keep-alive>
    </transition>
    <v-sheet height="200">
    </v-sheet>
</v-main>
</template>

<script>
import {
    mapGetters
} from "vuex";
import ErrorLog from "../widget/AppErrorLog.vue";
export default {
    name: "TheLayoutContent",
    data: () => ({}),
    components: {
        ErrorLog
    },
    computed: {
        ...mapGetters(["errors", "locale"])
    },
    watch: {
        locale: {
            immediate: true,
            handler(newVal, oldVal) {
                this.setLang(newVal)
            },
        },
    },
    methods: {
        setLang(lang) {
            this.$moment.locale(lang);
            console.log('dil değişti', lang)
        }
    },
};
</script>
