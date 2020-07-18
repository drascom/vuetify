<!--hem customer hem visit geliyor çift sorgu oluyor. customer içinden ilgili visit filtrelemyi bul  -->
<template>
<div>
    <v-toolbar color="secondary lighten-2">
        <v-icon @click="goBack">mdi-arrow-left</v-icon>Back
        <v-toolbar-title class="ml-5 pl-5">All Visits</v-toolbar-title>
    </v-toolbar>
    <v-card>
        <v-tabs
            class="pa-2"
            v-model="tab"
            grow
            background-color="secondary-lighten-4"
            center-active
            icons-and-text
            rounded-t>
            <v-tab href="#Information">
                Information
                <v-icon>mdi-information-variant</v-icon>
            </v-tab>
            <v-tab href="#Finance">
                Finance
                <v-icon>mdi-finance</v-icon>
            </v-tab>
            <v-tab href="#Consultation">
                Consultation
                <v-icon>mdi-stethoscope</v-icon>
            </v-tab>
            <v-tab href="#Reports">
                Information
                <v-icon>mdi-file-download</v-icon>
            </v-tab>
        </v-tabs>
    </v-card>
    <v-tabs-items v-model="tab">
        <v-tab-item value="Information">
            <v-card outlined>
                <Progress :visit="visit" />
            </v-card>
        </v-tab-item>
        <v-tab-item value="Finance">
            <v-card flat>
                <finance />
            </v-card>
        </v-tab-item>
        <v-tab-item value="Consultation">
            <v-card flat>
                3
            </v-card>
        </v-tab-item>
        <v-tab-item value="Reports">
            <v-card flat>
                4
            </v-card>
        </v-tab-item>
    </v-tabs-items>
</div>
</template>

<script>
import {
    mapGetters
} from "vuex";
import moduleData from "./store/index";

import Progress from "./components/Progress.vue";
// import Finance from "./components/Balance.vue";
export default {
    name: "VisitAdmin",
    components: {
        Progress
        // Finance
    },
    beforeCreate() {
        if (!moduleData.isRegistered) {
            this.$store.registerModule("customers", moduleData);
            moduleData.isRegistered = true;
        }
    },
    data() {
        return {
            tab: null
        };
    },
    computed: {
        visitId() {
            return this.$route.params.id;
        },
        ...mapGetters("customers", {
            customer: "getCustomer",
            visit: "getVisit"
        }),
    },
    methods: {
        goBack() {
            console.log("going back");
        },
    }
};
</script>

<style lang="scss" scoped>
.transparent {
    background-color: white !important;
    opacity: 0.65;
    border-color: transparent !important;
}
</style>
