<template>
<div id="top">
    <v-container class="fill-height" mb-5 fluid>
        <v-fade-transition mode="out-in">
            <v-card min-width="100%" color="blue-grey lighten-5">
                <v-img :src="coverImg" height="140" class="d-flex align-center grey darken-4">
                    <v-row key="1" align="center" class="lightbox white--text pa-2 fill-height">
                        <v-col cols="4" sm="4" md="3">
                            <v-avatar size="80" class="ml-3 elevation-4">
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                            </v-avatar>
                        </v-col>
                        <v-col cols="8" sm="8" md="6">
                            <div class="text-no-wrap text-h6 text-sm-h4 text-md-h3 text-uppercase primary--text">Jonathan Lee</div>
                            <div class="text-h5 d-none d-sm-block">heyfromjonathan@gmail.com</div>
                        </v-col>
                    </v-row>
                </v-img>
                <v-alert
                    border="left"
                    type="info"
                    colored-border
                    color="primary accent-4"
                    class="my-4 mx-4"
                    elevation="1">
                    This patient had 200 Euros debt !
                </v-alert>
            </v-card>
        </v-fade-transition>
        <v-row key="2" class="d-flex align-stretch mb-5">
            <v-col cols="12" md="4" v-if="!showInfoPanel">
                <information :customer="customer" />
                <a class="text-decoration-none" @click="goToPhotos">
                    <photos :photos="customer.photos" />
                </a>
            </v-col>
            <v-col cols="12" md="1" v-if="showInfoPanel">

                <v-card elevation="4" @click="showInfoPanel=null" height="60%" class="mx-auto px-2 py-2  d-flex flex-row justify-space-between flex-md-column">
                        <v-icon large color="blue darken-2">mdi-account</v-icon>

                        <v-icon large color="purple darken-2">mdi-phone</v-icon>

                        <v-icon large color="teal darken-2">mdi-email</v-icon>

                        <v-icon large color="blue-grey darken-2">mdi-flag</v-icon>

                        <v-icon large color="orange darken-2">mdi-camera</v-icon>
                   </v-card>

            </v-col>
            <v-col xs="12" :style="{width: showInfoPanel?'80%':'60%!important'}" style="height: 100%; ">
                <visits :visits="customer.visits" @panelOpen="showInfoPanel=$event" />
                <v-divider></v-divider>

            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import {
    mapGetters
} from "vuex";
import moduleData from "./store/index";
import Information from "./components/Information.vue";
import Photos from "./components/Photos.vue";
import Visits from "./components/Visits.vue";
import Balance from "./components/Balance.vue";

export default {
    name: "CustomerDetail",
    components: {
        Visits,
        Information,
        Photos,
        Balance
    },
    beforeCreate() {
        if (!moduleData.isRegistered) {
            this.$store.registerModule("customers", moduleData);
            moduleData.isRegistered = true;
        }
    },
    data() {
        return {
            showInfoPanel: null,
            coverImg: require("@/assets/images/pages/background_top.jpg")
        };
    },
    computed: {
        // ...mapGetters(["customers/getCustomer"])
        ...mapGetters("customers", {
            customer: "getCustomer"
        })
    },
    methods: {
        goToPhotos() {
            this.$router.push("/customers/gallery/" + this.customer.id);
        }
    }
};
</script>

<style lang="scss" scoped>
.v-expansion-panel-content__wrap {
    padding: 0px !important;
}
</style>
