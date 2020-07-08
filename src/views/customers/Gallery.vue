<template>
	<v-container fluid>
		<v-toolbar dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
			<v-icon @click="goBack" dark right>mdi-arrow-left</v-icon>

			<v-toolbar-title class="pl-3">Back To The Customer File</v-toolbar-title>

			<v-spacer></v-spacer>
			<v-tooltip bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-icon dark v-bind="attrs" v-on="on" @click="downloadAll">mdi-download</v-icon>
				</template>
				<span>Download All Photos</span>
			</v-tooltip>

		</v-toolbar>
		<v-card class="mx-auto mb-5 py-5 grey lighten-3">
			<dropzone @uploadComplete="uploadStatus($event)" :customerId="userid"></dropzone>
			<v-card-title>Customer Photo Gallery</v-card-title>
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
import { mapGetters } from "vuex";
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
		},
		goBack() {
			this.$router.push("/customers/detail/" + this.userid);
		},
		downloadAll() {
			alert("all photos will be downloaded");
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
