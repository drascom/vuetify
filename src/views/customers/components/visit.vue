<template>
	<v-container id='item'>
		<v-row>
			<v-col cols="12" md="6" class="p-0 justify-start align-left">
				<v-card class="mx-auto" outlined color="warning lighten-2">
					<v-list disabled>
						<v-btn absolute fab small right color="accent">
							<v-icon>mdi-pencil</v-icon>
						</v-btn>
						<v-subheader class="secondary--text headline">Pre Op Information</v-subheader>

						<v-divider></v-divider>
						<v-list-item-group>
							<v-list-item>
								<v-list-item-icon>
									<v-icon>mdi-head-dots-horizontal</v-icon>
								</v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title class="heading">Estimated Grafts</v-list-item-title>
								</v-list-item-content>
								<v-list-item-action>
									<v-list-item-title v-html="item.estimated_grafts"></v-list-item-title>
								</v-list-item-action>
							</v-list-item>
							<v-list-item>
								<v-list-item-icon>
									<v-icon>mdi-cash-usd</v-icon>
								</v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title class="heading">Estimated Price</v-list-item-title>
								</v-list-item-content>
								<v-list-item-action>
									<v-list-item-title v-html="item.estimated_price "></v-list-item-title>
								</v-list-item-action>
							</v-list-item>
							<v-list-item>
								<v-list-item-icon>
									<v-icon>mdi-cash-usd</v-icon>
								</v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title class="heading">Deposits</v-list-item-title>
								</v-list-item-content>
								<v-list-item-action>
									<v-list-item-title v-html="item.deposits "></v-list-item-title>
								</v-list-item-action>
							</v-list-item>
						</v-list-item-group>
					</v-list>
				</v-card>
			</v-col>
			<v-col cols="12" md="6" class="p-0 m-0">
				<v-card class="mx-auto" outlined color="success lighten-2">
					<v-list disabled="">
						<v-subheader class="success--text headline">Post Op Information</v-subheader>
						<v-divider></v-divider>
						<v-list-item-group multiple v-model="model">
							<v-list-item>
								<v-list-item-icon>
									<v-icon>mdi-head-dots-horizontal</v-icon>
								</v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title class="heading">Current Grafts</v-list-item-title>
								</v-list-item-content>
								<v-list-item-action>
									<v-list-item-title v-html="item.current_grafts"></v-list-item-title>
								</v-list-item-action>
							</v-list-item>
							<v-list-item active-class="border" color="secondary">
								<v-list-item-icon>
									<v-icon>mdi-cash-usd</v-icon>
								</v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title class="heading">Current Price</v-list-item-title>
								</v-list-item-content>
								<v-list-item-action>
									<v-list-item-title class="font-weight-bold" v-html="item.current_price "></v-list-item-title>
								</v-list-item-action>
							</v-list-item>
							<v-list-item active-class="border" color="secondary">
								<v-list-item-icon>
									<v-icon>mdi-cash-usd</v-icon>
								</v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title class="heading">Commission</v-list-item-title>
								</v-list-item-content>
								<v-list-item-action>
									<v-list-item-title class="font-weight-bold"> 1122 Euros</v-list-item-title>
								</v-list-item-action>
							</v-list-item>
						</v-list-item-group>
					</v-list>
				</v-card>
			</v-col>
			<v-col cols="12" md="12">
				<v-card class="mx-auto" outlined color="">
					<v-list-item>
						<v-btn absolute fab small right color="accent">
							<v-icon>mdi-pencil</v-icon>
						</v-btn>
						<v-subheader class="secondary--text headline">Travel Information</v-subheader>
					</v-list-item>
					<v-divider></v-divider>
					<v-row  class="p-md-4">
						<v-col cols="12" md="6" class="p-2 mx-auto">
							<v-card class="mx-auto" flat>
								<v-list disabled>
									<v-list-item>
										<v-list-item-icon>
											<v-icon>mdi-airplane-landing</v-icon>
										</v-list-item-icon>
										<v-list-item-content>
											<v-list-item-title class="heading">Arrival Date</v-list-item-title>
										</v-list-item-content>
										<v-list-item-action>
											<v-list-item-title v-html="item.arrival_date"></v-list-item-title>
										</v-list-item-action>
									</v-list-item>
									<v-list-item>
										<v-list-item-icon>
											<v-icon>mdi-calendar-clock</v-icon>
										</v-list-item-icon>
										<v-list-item-content>
											<v-list-item-title class="heading">Arrival Time</v-list-item-title>
										</v-list-item-content>
										<v-list-item-action>
											<v-list-item-title v-html="item.estimated_price "></v-list-item-title>
										</v-list-item-action>
									</v-list-item>
									<v-list-item>
										<v-list-item-icon>
											<v-icon>mdi-alarm</v-icon>
										</v-list-item-icon>
										<v-list-item-content>
											<v-list-item-title class="heading">Flight No:</v-list-item-title>
										</v-list-item-content>
										<v-list-item-action>
											<v-list-item-title v-html="item.arrival_flight "></v-list-item-title>
										</v-list-item-action>
									</v-list-item>

								</v-list>
							</v-card>
						</v-col>
						<v-col cols="12" md="6" class="p-2 mx-auto">
							<v-card class="mx-auto" flat>
								<v-list disabled>
									<v-list-item-group>
										<v-list-item>
											<v-list-item-icon>
												<v-icon>mdi-airplane-takeoff</v-icon>
											</v-list-item-icon>
											<v-list-item-content>
												<v-list-item-title class="heading">Departure Date</v-list-item-title>
											</v-list-item-content>
											<v-list-item-action>
												<v-list-item-title v-html="item.departure_date"></v-list-item-title>
											</v-list-item-action>
										</v-list-item>
										<v-list-item>
											<v-list-item-icon>
												<v-icon>mdi-calendar-clock</v-icon>
											</v-list-item-icon>
											<v-list-item-content>
												<v-list-item-title class="heading">Departure Time</v-list-item-title>
											</v-list-item-content>
											<v-list-item-action>
												<v-list-item-title v-html="item.departure_price "></v-list-item-title>
											</v-list-item-action>
										</v-list-item>
										<v-list-item>
											<v-list-item-icon>
												<v-icon>mdi-alarm</v-icon>
											</v-list-item-icon>
											<v-list-item-content>
												<v-list-item-title class="heading">Flight Number</v-list-item-title>
											</v-list-item-content>
											<v-list-item-action>
												<v-list-item-title v-html="item.departure_flight "></v-list-item-title>
											</v-list-item-action>
										</v-list-item>
									</v-list-item-group>
								</v-list>
							</v-card>
						</v-col>
					</v-row>
				</v-card>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="mx-auto p-3" outlined color="red">

					<balance />
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Balance from "./Balance.vue";
export default {
	name: "visit",
	data() {
		return {
			model: [1, 2]
		};
	},
	props: {
		item: {
			type: Object,
			default: () => {},
			required: true
		}
	},
	components: {
		Balance
	}
};
</script>

<style lang="scss" scoped>
.border {
	border: 2px dashed orange;
}
</style>
