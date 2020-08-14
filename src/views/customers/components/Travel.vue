<template>
<v-card flat class="mx-auto">
<v-card outlined class="pa-4 mx-auto mb-4">
			<v-card flat height="70" class="ml-n2  pl-2 mb-2">
				<v-card-text style=" position: relative" class="text-h5 d-flex justify-space-between mb-5">
					Flights
					<v-btn outlined bottom right color="primary" :small="$vuetify.breakpoint.xs" @click.stop="dialog1=true">
						Edit
					</v-btn>
				</v-card-text>
			</v-card>
			<v-row class="mt-5">
				<v-col cols="12" sm="6">
					<v-text-field placeholder="No Data..." :error="!visit.travel.flights.arrivalDate" readonly :value='visit.travel.flights.arrivalDate | moment("Do MMM ,dddd HH:mm")'>
						<template v-slot:label>
							<v-icon style="vertical-align: middle">mdi-airplane-landing</v-icon>
							<strong class="text-uppercase font-weight-medium">{{$t('customer.arrival') }}</strong>
						</template>
					</v-text-field>
				</v-col>
				<v-col cols="12" sm="6">
					<v-text-field placeholder="No Data..." :error="!visit.travel.flights.arrivalFlight" readonly :value='visit.travel.flights.arrivalFlight'>
						<template v-slot:label>
							<v-icon style="vertical-align: middle">mdi-airplane-landing</v-icon>
							<strong class="text-uppercase font-weight-medium">{{$t('customer.flightnumber') }}</strong>
						</template>
						<template v-slot:append-outer>
							<v-btn v-if="visit.travel.flights.arrivalFlight" class="mt-sm-n2 text-caption secondary dark" :small="$vuetify.breakpoint.xs" @click="checkFlight">
								<v-icon medium left>mdi-target</v-icon>
								Check Flight
							</v-btn>
						</template>
					</v-text-field>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="6">
					<v-text-field placeholder="No Data..." :error="!visit.travel.flights.departureDate" readonly :value='visit.travel.flights.departureDate | moment("Do MMM ,dddd HH:mm")'>
						<template v-slot:label>
							<v-icon style="vertical-align: middle">mdi-airplane-takeoff</v-icon>
							<strong class="text-uppercase font-weight-medium">{{$t('customer.departure') }}</strong>
						</template>
					</v-text-field>
				</v-col>
				<v-col cols="12" sm="6">
					<v-text-field placeholder="No Data..." :error="!visit.travel.flights.departureFlight" readonly :value='visit.travel.flights.departureFlight'>
						<template v-slot:label>
							<v-icon style="vertical-align: middle">mdi-airplane-takeoff</v-icon>
							<strong class="text-uppercase font-weight-medium">{{$t('customer.flightnumber') }}</strong>
						</template>
						<template v-slot:append-outer>
							<v-btn v-if="visit.travel.flights.departureFlight" class="mt-sm-n2 text-caption secondary" :small="$vuetify.breakpoint.xs" @click="checkFlight">
								<v-icon medium left>mdi-target</v-icon>
								Check Flight
							</v-btn>
						</template>
					</v-text-field>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-text-field placeholder="No Data..." :outlined="!visit.travel.extraDaysPayment" readonly success :error="!visit.travel.extraDaysPayment" value="1 day 80€">
						<template v-slot:label>
							<v-icon style="vertical-align: middle">mdi-calendar-check</v-icon>
							<strong class="text-uppercase font-weight-medium"> {{$t('customer.extradays') }}</strong>
						</template>
						<template v-if="!visit.travel.extraDaysPayment" v-slot:append>
							Not Payed
						</template>
						<template v-else v-slot:append>
							Payed
						</template>
					</v-text-field>
				</v-col>
			</v-row>
			<v-dialog v-model="dialog1" fullscreen hide-overlay scrollable transition="dialog-bottom-transition">
				<v-card>
					<v-card-title class="pa-0">
						<v-toolbar dark fixed>
							<v-toolbar-title>{{formTitle}}</v-toolbar-title>
							<v-spacer></v-spacer>
							<v-btn class="mr-2" color="error lighten-1" :small="$vuetify.breakpoint.xs" @click.stop="close">Cancel</v-btn>
							<v-btn color="success lighten-1" :small="$vuetify.breakpoint.xs" @click="saveTravelForm">Save</v-btn>
						</v-toolbar>
					</v-card-title>

					<v-card-text>
						<v-container>
							<v-row>
								<v-col cols="12" sm="6">
									<VueCtkDateTimePicker v-model="visit.travel.flights.arrivalDate" id="arrivalDate" label="Arrival Date" :format="'YYYY-MM-DD HH:mm'" formatted="Do MMM ,dddd HH:mm" @input="editedItem.arrivalDate=$event" locale="tr" />
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field placeholder="No Data..." :error="!visit.travel.flights.arrivalFlight" outlined dense v-model="editedItem.arrivalFlight" :value="visit.travel.flights.arrivalFlight">
										<template v-slot:label>
											<v-icon style="vertical-align: middle">mdi-airplane-landing</v-icon>
											<strong class="text-uppercase font-weight-medium">{{$t('customer.flightnumber') }} </strong>
										</template>
									</v-text-field>
								</v-col>
								<v-col cols="12" sm="6">
									<VueCtkDateTimePicker id="departureDate" label="Departure Date" v-model="visit.travel.flights.departureDate" :format="'YYYY-MM-DD HH:mm'" formatted="Do MMM ,dddd HH:mm" @input="editedItem.departureDate=$event" locale="tr" />
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field placeholder="No Data..." :error="!visit.travel.flights.departureFlight" outlined dense v-model="editedItem.departureFlight" :value='visit.travel.flights.departureFlight'>
										<template v-slot:label>
											<v-icon style="vertical-align: middle">mdi-airplane-takeoff</v-icon>
											<strong class="text-uppercase font-weight-medium">{{$t('customer.flightnumber') }} {{visit.travel.flights.departureFlight}}</strong>
										</template>
									</v-text-field>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field outlined dense placeholder="No Data..." :error="!visit.travel.extraDaysPayment" :value="visit.travel.extraDays" v-model="editedItem.extraDays">
										<template v-slot:label>
											<v-icon style="vertical-align: middle">mdi-calendar-check</v-icon>
											<strong class="text-uppercase font-weight-medium"> {{$t('customer.extradays') }}</strong>
										</template>
									</v-text-field>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field outlined dense placeholder="No Data..." :error="!visit.travel.extraDaysPayment" :value="visit.travel.costPerNight" v-model="editedItem.costPerNight">
										<template v-slot:label>
											<v-icon style="vertical-align: middle">mdi-calendar-check</v-icon>
											<strong class="text-uppercase font-weight-medium"> {{$t('customer.costpernight') }}</strong>
										</template>
									</v-text-field>
								</v-col> -->
							</v-row>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="error darken-1" :small="$vuetify.breakpoint.xs" @click.stop="close">Cancel</v-btn>
								<v-btn color="success darken-1" :small="$vuetify.breakpoint.xs" @click="save">Save</v-btn>
							</v-card-actions>
						</v-container>
					</v-card-text>
				</v-card>
			</v-dialog>
       </v-card>
			<v-divider></v-divider>
      <v-card outlined class="pa-4 mx-auto">
			<v-card height="70" flat class="ml-n2 mt-5 mr-2 pl-4">
				<v-card-text style=" position: relative" class="text-h5 d-flex justify-space-between mb-5">
					Transfers
					<v-btn outlined bottom right :small="$vuetify.breakpoint.xs" color="primary" @click.stop="newTransfer()">
						Add New
					</v-btn>
				</v-card-text>

			</v-card>
			<v-list>
				<v-hover v-slot="{ hover }" v-for="transfer,i in visit.travel.transfers" :key="transfer.date+i">
					<v-list-item :class="`elevation-${hover ? 6 : 1}`" class="pr-0">
						<v-list-item-content>
							<v-container fluid class=pa-0 px-1>
								<v-row no-gutters class="d-flex justify-start align-center text-subtitle-2 text-sm-body-1 text-md-button">
									<v-col cols="12" sm="5">
										<v-icon style="vertical-align: middle">mdi-bus-side</v-icon>
										{{ transfer.date | moment('Do MMM, dddd') }}
									</v-col>
									<v-col cols="5" sm="3" class="my-1">
										<span class="text-uppercase text-caption text-sm-body-1"> {{transfer.fromplace}} </span>
									</v-col>
									<v-col cols="2" sm="1">
										<v-icon style="">mdi-arrow-right</v-icon>
									</v-col>
									<v-col cols="5" sm="3">
										<span class="text-uppercase text-caption text-sm-body-1">{{transfer.toplace}} </span>
									</v-col>
									<v-col cols="12" :class="transfer.status ? 'success--text' : 'error--text'">
										<span class="text-uppercase ">Status :</span>{{ transfer.status ? 'Confirmed': 'Not confirmed'}}
									</v-col>
								</v-row>
							</v-container>
						</v-list-item-content>
						<v-list-item-action>
							<v-menu bottom left>
								<template v-slot:activator="{ on, attrs }">
									<v-btn icon v-bind="attrs" v-on="on">
										<v-icon>mdi-dots-vertical</v-icon>
									</v-btn>
								</template>
								<v-list>
									<v-list-item @click="editTransfer(transfer)">
										<v-list-item-action>
											<v-icon>mdi-pencil</v-icon>
										</v-list-item-action>
										<v-list-item-content>Edit</v-list-item-content>
										<v-list-item-action>
										</v-list-item-action>
									</v-list-item>
									<v-list-item @click="">
										<v-list-item-action>
											<v-icon>mdi-trash-can-outline</v-icon>
										</v-list-item-action>
										<v-list-item-title>Delete</v-list-item-title>
										<v-list-item-action>
										</v-list-item-action>
									</v-list-item>
								</v-list>
							</v-menu>
						</v-list-item-action>
					</v-list-item>
				</v-hover>
			</v-list>
			<v-dialog v-model="dialog2" fullscreen scrollable hide-overlay transition="dialog-bottom-transition">
				<v-card class="">
					<v-card-text>
						<v-card-title class="pa-0">
							<v-toolbar dark>
								<v-toolbar-title>{{formTitle}}</v-toolbar-title>
								<v-spacer></v-spacer>
								<v-btn :small="$vuetify.breakpoint.xs" class="mr-2" color="error lighten-1" @click.stop="close">Cancel</v-btn>
								<v-btn :small="$vuetify.breakpoint.xs"  color="success lighten-1" @click="save">Save</v-btn>
							</v-toolbar>
						</v-card-title>
						<v-container>
							<v-row>
								<v-col cols="12">
									<v-card outlined>
										<transfers-component :transfer="editedItem" :editedIndex="editedIndex"></transfers-component>
										<v-card-actions>
											<v-spacer></v-spacer>
											<v-btn color="error darken-1" :small="$vuetify.breakpoint.xs" @click.stop="close">Cancel</v-btn>
											<v-btn color="success darken-1" :small="$vuetify.breakpoint.xs" @click="save">Save</v-btn>
										</v-card-actions>
									</v-card>
								</v-col>
							</v-row>
						</v-container>
					</v-card-text>
				</v-card>
			</v-dialog>
      </v-card>
</v-card>

</template>

<script>
const asyncDatePicker = import("vue-ctk-date-time-picker");
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
const transferEdit = import("./transferEdit.vue");

export default {
	name: "travel",
	data() {
		return {
			dialog1: false,
			dialog2: false,
			datemenu: false,
			editedItem: {},
			editedIndex: -1,
			hotels: ["1. otel", "2. otel"],
			date: new Date().toISOString().substr(0, 10)
		};
	},
	props: {
		visit: {
			type: Object,
			default: () => {}
		}
	},
	components: {
		VueCtkDateTimePicker: () => asyncDatePicker,
		transfersComponent: () => transferEdit
	},
	computed: {
		formTitle() {
			return this.editedIndex === -1 ? "New Item" : "Edit Item";
		}
	},
	methods: {
		checkFlight() {
			alert("Uçuş bilgisi geldi");
		},
		updateForm(item) {
			this.editedItem.arrivalDate = item;
		},
		editTransfer(item) {
			this.editedItem = item;
			this.dialog2 = true;
			this.editedIndex = 0;
		},
		newTransfer() {
			this.dialog2 = true;
			this.editedItem = {};
			this.editedIndex = -1;
		},
		close() {
			this.dialog1 = false;
			this.dialog2 = false;
		},
		save() {
			this.close();
		},
		saveTravelForm(id) {
			this.$store.dispatch("customers/updateTransfer", id).catch(err => {
				console.error(err);
			});
		}
	},
	mounted() {}
};
</script>

<style lang="scss" scoped>
</style>
