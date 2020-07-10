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
				</v-card>
			</v-fade-transition>
			<v-row key="2" class="d-flex">
					<v-col v-show="!showInfoPanel" cols="12" :md="!showInfoPanel?'4':'0'" key="1">
						<div key="1">
							<information :customer="customer" />
							<a class="text-decoration-none" @click="goToPhotos">
								<photos :photos="customer.photos" />
							</a>
						</div>
					</v-col>
				<transition name="fade">
				<v-col cols="12" :md="!showInfoPanel?'8':'12'" key="2">
					<visits :visits="customer.visits" @panelOpen="showInfoPanel=$event" />
				</v-col>	</transition>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
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
			showInfoPanel: false,
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
.fade-enter-active,
.fade-leave-active {
	transition: opacity 800s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
