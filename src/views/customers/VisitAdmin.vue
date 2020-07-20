<!--hem customer hem visit geliyor çift sorgu oluyor. customer içinden ilgili visit filtrelemyi bul  -->
<template>
	<v-card>
		<v-toolbar color="secondary darken-2" dark  class="">
			<v-icon @click="goBack">mdi-arrow-left</v-icon><span class="pl-2">Back</span>
			<v-spacer></v-spacer>
			<v-tabs v-if="$vuetify.breakpoint.mdAndUp" class="" v-model="tab" grow background-color="transparent" center-active icons-and-text rounded>
				<v-tab href="#Information">
					<span v-if="$vuetify.breakpoint.mdAndUp">Information</span>
					<v-icon>mdi-information-variant</v-icon>
				</v-tab>
				<v-tab href="#Finance">
					<span v-if="$vuetify.breakpoint.mdAndUp">Finance</span>
					<v-icon>mdi-finance</v-icon>
				</v-tab>
				<v-tab href="#Consultation">
					<span v-if="$vuetify.breakpoint.mdAndUp">Consultation</span>
					<v-icon>mdi-stethoscope</v-icon>
				</v-tab>
			</v-tabs>
			<v-btn v-if="$vuetify.breakpoint.smAndDown" icon>
				<v-menu v-if="more.length" bottom left>
					<template v-slot:activator="{ on, attrs }">
						<v-btn text class="align-self-center mr-4" v-bind="attrs" v-on="on">
							<v-icon>mdi-dots-vertical</v-icon>
						</v-btn>
					</template>

					<v-list class="grey lighten-3">
						<v-list-item v-for="item,i in more" :key="i" @click="changeTab(item)">
							{{ item }}
						</v-list-item>
					</v-list>
				</v-menu>

			</v-btn>
		</v-toolbar>

		<v-tabs-items v-model="tab">
			<v-tab-item value="Information">
				<v-card outlined>
					<Progress :visit="visit" />
				</v-card>
			</v-tab-item>
			<v-tab-item value="Finance">
				<v-card color="#f5f5f5" flat>
					<finance :payments="visit.payments"/>
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
	</v-card>
</template>

<script>
import { mapGetters } from "vuex";
import moduleData from "./store/index";

import Progress from "./components/Progress.vue";
import Finance from "./components/Balance.vue";
export default {
	name: "VisitAdmin",
	components: {
		Progress,
		Finance
	},
	beforeCreate() {
		if (!moduleData.isRegistered) {
			this.$store.registerModule("customers", moduleData);
			moduleData.isRegistered = true;
		}
	},
	data() {
		return {
			more: ["Information", "Finance", "Consultation"],
			tab: "Information"
		};
	},
	computed: {
		visitId() {
			return this.$route.params.id;
		},
		...mapGetters("customers", {
			customer: "getCustomer",
			visit: "getVisit"
		})
	},
	methods: {
		changeTab(item) {
			this.tab = item;
		},
		goBack() {
			console.log("going back");
		}
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
