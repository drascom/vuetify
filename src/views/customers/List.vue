<template>
	<div id="top">
		<v-toolbar fixed clipped left color="primary accent-4" dark>
			<v-text-field class="mt-5 mx-3" v-model="search" dense light solo prepend-icon="mdi-search" placeholder="Search in Customers...">
			</v-text-field>
			<v-btn icon>
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</v-toolbar>

		<v-divider></v-divider>
		<v-list subheader class="mb-5">
			<v-subheader>All customers</v-subheader>
			<v-list-item>
				<v-list-item-avatar>

				</v-list-item-avatar>
				<v-list-item-content>
					<v-container>
						<v-row no-gutters>
							<v-col cols="6" sm="3" md="2">
								Name
							</v-col>
							<v-col cols="6" sm="3" md="2">
								Phone
							</v-col>
							<v-col cols="2" sm="3" md="2" class="d-none d-sm-flex">
								Email
							</v-col>
							<v-col cols="2" sm="3" md="2" class="d-none d-sm-flex">
								Country
							</v-col>
							<v-col cols="2" sm="2" md="2" class="d-none d-md-flex">
								Agent
							</v-col>
							<v-col cols="1" sm="1" md="1" class="d-none d-md-flex">
								Active
							</v-col>
						</v-row>
					</v-container>
				</v-list-item-content>
			</v-list-item>
			<v-hover v-slot="{ hover }" v-for="item in filteredItems" :key="item.title">
				<v-list-item :to="`detail/${item.id}`" :class="`elevation-${hover ? 6 : 1}`">
					<v-list-item-avatar>
						<v-img :src="item.avatar"></v-img>
					</v-list-item-avatar>
					<v-list-item-content>
						<v-container>
							<v-row no-gutters>
								<v-col cols="6" sm="3" md="2">
									{{item.name}}
								</v-col>
								<v-col cols="6" sm="3" md="2">
									{{item.mobile_phone}}
								</v-col>
								<v-col cols="2" sm="3" md="2" class="d-none d-sm-flex">
									{{item.email}}
								</v-col>
								<v-col cols="2" sm="3" md="2" class="d-none d-sm-flex">
									{{item.country}}
								</v-col>
								<v-col cols="2" sm="2" md="2" class="d-none d-md-flex">
									{{item.recordedBy}}
								</v-col>
								<v-col cols="1" sm="1" md="1" class="d-none d-md-flex">
									{{item.status}}
								</v-col>
							</v-row>
						</v-container>
					</v-list-item-content>
				</v-list-item>
			</v-hover>
		</v-list>
	</div>
</template>

<script>
import moduleData from "./store/index";
import { mapGetters } from "vuex";
export default {
	name: "CustomerList",
	beforeCreate() {
		if (!moduleData.isRegistered) {
			this.$store.registerModule("customers", moduleData);
			moduleData.isRegistered = true;
		}
	},
	data: () => ({
		loading: false,
		search: "",
		select: null,
		items: []
	}),
	watch: {
		search(val) {
			val && val !== this.select && this.querySelections(val);
		}
	},
	computed: {
		...mapGetters("customers", { customers: "getCustomersList" }),
		filteredItems() {
			return this.customers.filter(item => {
				return (
					(item.name || "")
						.toLowerCase()
						.indexOf((this.search || "").toLowerCase()) > -1 ||
					(item.email || "")
						.toLowerCase()
						.indexOf((this.search || "").toLowerCase()) > -1 ||
					(item.mobile_phone || "")
						.toLowerCase()
						.indexOf((this.search || "").toLowerCase()) > -1
				);
			});
		}
	},
	methods: {
		querySelections(v) {
			this.loading = true;
			// Simulated ajax query
			setTimeout(() => {
				this.items = this.customers.filter(e => {
					return (
						(e.name || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
					);
				});
				this.loading = false;
			}, 500);
		}
	},
	mounted() {
		// this.$store.dispatch('customerMaganement/fetchCustomers').catch(err => {
		//       console.error(err)
		//   })
	}
};
</script>

<style lang="scss" scoped>
v-list-item v-list-item--link {
	transition: all 0.3s ease;
	background: #fff;
}

v-list-item :hover {
	transform: translateY(-4px);
}
</style>
