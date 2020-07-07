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
					<v-alert border="left" type="info" colored-border color="primary accent-4" class="my-4 mx-4" elevation="1">
						This patient had 200 Euros debt !
					</v-alert>
				</v-card>
			</v-fade-transition>
			<v-row key="2" class="d-flex align-stretch mb-5">
				<v-col cols="12" md="4">
					<information :customer="customer" />
				<a href=""><photos :photos="customer.photos" /></a>
				</v-col>
				<v-col cols="12" md="8">
					<visits :visits="customer.visits" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import moduleData from "./store/index";
import Visits from "./VisitsList.vue";
import Information from "./Information.vue";
import Photos from "./Photos.vue";

export default {
	name: "CustomerDetail",
	components: {
		Visits,
		Information,
		Photos
	},
	beforeCreate() {
		if (!moduleData.isRegistered) {
			this.$store.registerModule("customers", moduleData);
			moduleData.isRegistered = true;
		}
	},
	data() {
		return {
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
			this.$router.push("/customer/photos/" + this.userid);
		}
	}
};
</script>

<style lang="scss" scoped>
.v-expansion-panel-content__wrap {
	padding: 0px !important;
}
</style>
