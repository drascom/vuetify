<template>
<v-container fluid>
    <v-card class="mx-auto mb-5 ">
        <dropzone @uploadComplete="uploadStatus($event)" :customerId="userid"></dropzone>
    </v-card>
    <v-card>
        <gallery :key="galleryKey" :photos="photos"></gallery>
    </v-card>
</v-container>
</template>

<script>
const dropzone = () => ({
    component: import("@/components/dropzone"),
    timeout: 5000
});
const gallery = () => ({
    component: import("@/components/gallery"),
    timeout: 5000
});
import {
    mapGetters
} from "vuex";
import moduleData from "./store/index";
export default {
    name: "customerGalleryView",
    beforeCreate() {
        console.log("module data: ", moduleData.isRegistered);
        if (!moduleData.isRegistered) {
            console.log("customer module not registered ");
            this.$store.registerModule("customers", moduleData);
            moduleData.isRegistered = true;
            console.log("module data: ", moduleData.isRegistered);
            console.log("customer module registered now ");
        }
        console.log("customer module already registered ");
    },
    data() {
        return {
            galleryKey: 1
        };
    },
    components: {
        dropzone,
        gallery
    },
    computed: {
        userid() {
            return this.$route.params.id;
        },
        tttt() {
            return this.moduleData;
        },
        ...mapGetters("customers", {
            photos: "getCustomerPhotos"
        })
    },
    methods: {
        uploadStatus(result) {
            if (result === true)
                this.$store.dispatch("customers/fetchCustomerPhotos", {
                    customerId: this.userid
                });
            this.galleryKey++;
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
