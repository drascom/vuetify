<template>
	<div>

		<!-- SOLDA STEPPER ORTADA TABLO ŞEKLİNDE DETAYLI GÖRÜNTÜ -->
		<v-row>

			<v-col cols="12" md="3">

				<v-stepper vertical>

					<v-list disabled color="secondary lighten-5 pa-1 ">

						<v-subheader class="secondary--text headline">Status</v-subheader>

					</v-list>

					<v-stepper-step v-for="(value, name,index) in progress " :step="index + 1" :complete="value ? true : false">{{ name }}</v-stepper-step>

				</v-stepper>

			</v-col>

			<v-col cols="12" md="9">

				<v-row>

					<v-col cols="12" md="12" class="pt-0">

						<v-card class="mx-auto" outlined color="">

							<v-list disabled color="secondary lighten-5 pa-1 ">

								<v-btn absolute fab small right color="accent">

									<v-icon>mdi-pencil</v-icon>

								</v-btn>

								<v-subheader class="secondary--text headline">Travel Information</v-subheader>

							</v-list>

							<v-divider></v-divider>

							<v-row class="p-md-4">

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

													<v-list-item-title v-html="visit.arrival_date"></v-list-item-title>

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

													<v-list-item-title v-html="visit.estimated_price "></v-list-item-title>

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

													<v-list-item-title v-html="visit.arrival_flight "></v-list-item-title>

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

														<v-list-item-title v-html="visit.departure_date"></v-list-item-title>

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

														<v-list-item-title v-html="visit.departure_price "></v-list-item-title>

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

														<v-list-item-title v-html="visit.departure_flight "></v-list-item-title>

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

					<v-col cols="12" md="6" class="p-0 ">

						<v-card class="mx-auto" outlined color="warning lighten-2">

							<v-list disabled class="p-0">

								<v-sheet color="secondary lighten-5 pt-2 ">

									<v-btn absolute fab small right color="accent">

										<v-icon>mdi-pencil</v-icon>

									</v-btn>

									<v-subheader class=" headline">Pre Op Information</v-subheader>

								</v-sheet>

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

											<v-list-item-title v-html="visit.estimated_grafts"></v-list-item-title>

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

											<v-list-item-title v-html="visit.estimated_price "></v-list-item-title>

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

											<v-list-item-title v-html="visit.deposits "></v-list-item-title>

										</v-list-item-action>

									</v-list-item>

								</v-list-item-group>

							</v-list>

						</v-card>

					</v-col>

					<v-col cols="12" md="6" class="p-0 m-0">

						<v-card class="mx-auto" outlined color="success lighten-2">

							<v-list disabled>

								<v-sheet color="secondary lighten-5 ">

									<v-subheader class="success--text headline">Post Op Information</v-subheader>

								</v-sheet>

								<v-divider></v-divider>

								<v-list-group>

									<template v-slot:activator>

										<v-list-item-icon>

											<v-icon>mdi-head-dots-horizontal</v-icon>

										</v-list-item-icon>

										<v-list-item-content>

											<v-list-item-title class="heading">Current Grafts</v-list-item-title>

										</v-list-item-content>

										<v-list-item-action>

											<v-list-item-title v-html="visit.current_grafts"></v-list-item-title>

										</v-list-item-action>

									</template>

									<v-list-item>

										<v-list-item-content> Single Grafts : </v-list-item-content>

										<v-list-item-action> 500 </v-list-item-action>

									</v-list-item>

									<v-list-item>

										<v-list-item-content> Multiple Grafts : </v-list-item-content>

										<v-list-item-action> 2500 </v-list-item-action>

									</v-list-item>

								</v-list-group>

								<v-list-item-group v-model="model">

									<v-list-item active-class="border" color="secondary">

										<v-list-item-icon>

											<v-icon>mdi-cash-usd</v-icon>

										</v-list-item-icon>

										<v-list-item-content>

											<v-list-item-title class="heading">Current Price</v-list-item-title>

										</v-list-item-content>

										<v-list-item-action>

											<v-list-item-title class="font-weight-bold" v-html="visit.current_price "></v-list-item-title>

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

				</v-row>

			</v-col>

		</v-row>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
