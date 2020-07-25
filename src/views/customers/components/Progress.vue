<template>
<v-container fluid id='item'>
    <v-row>
        <v-col
            cols="12"
            md="8"
            class="pl-2">
            <v-toolbar
                fixed
                clipped
                left
                color="secondary lighten-2"
                dark>
                <v-toolbar-title>Visit Progress</v-toolbar-title>

            </v-toolbar>
            <!-- <v-alert
                type="error"
                color="error accent-4 full-width"
                class="pa-2"
                elevation="1"
                dismissible>
                Extra Days Cost <span class="text-h5 text--white">{{costOfDay}}</span>
            </v-alert> -->
            <v-card class="mx-auto mt-4">
                <v-list-group
                    class="pa-2"
                    elevation="4"
                    no-action>
                    <template v-slot:activator>
                        <v-list-item-title class="headline">Travel Details</v-list-item-title>
                        <v-list-item-action>
                            <v-icon
                                :medium="$vuetify.breakpoint.smAndDown"
                                :color="!validTravel ? 'success ':'error'"
                                v-text="!validTravel ? 'mdi-check-all':'mdi-cancel'"></v-icon>
                        </v-list-item-action>
                    </template>
                    <v-list-item class="px-0">
                        <travel :visit="visit" />
                    </v-list-item>
                </v-list-group>
            </v-card>
            <v-card class="mx-auto mt-4">
                <v-list-group
                    class="pa-2"
                    elevation="4"
                    no-action>
                    <template v-slot:activator>
                        <v-list-item-title class="headline">Payments</v-list-item-title>
                        <v-list-item-action>
                            <v-icon
                                :medium="$vuetify.breakpoint.smAndDown"
                                :color="visit.payments.status  ? 'success ':'error'"
                                v-text="visit.payments.status  ? 'mdi-check-all':'mdi-cancel'"></v-icon>
                        </v-list-item-action>
                    </template>
                    <v-list-item class="px-0">
                        <v-container fluid class="px-0 px-sm-3">
                            <!-- <v-data-iterator :items="visit.payments.items" hide-default-footer>
                                <template v-slot:default="props">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-card
                                                flat
                                                outlined
                                                class="d-flex grey lighten-4">
                                                <v-list-item class="text-h5 d-flex justify-space-between">
                                                    <div><span class="info--text font-weight-bold">Received : </span>{{ visit.payments.total_received }} </div>
                                                    <div v-if="visit.payments.debt > 0"><span class="error--text font-weight-bold">Debt : </span>{{ visit.payments.debt }}</div>
                                                </v-list-item>
                                            </v-card>
                                        </v-col>
                                        <v-col
                                            v-for="item in props.items"
                                            v-if="item.type!='credit'"
                                            :key="'p'+item.id"
                                            cols="12"
                                            sm="6">
                                            <v-card color="grey lighten-4">
                                                <v-card-title class="subheading font-weight-bold">Date : {{ item.date }}</v-card-title>
                                                <v-divider></v-divider>
                                                <v-list dense>
                                                    <v-list-item
                                                        v-if="title !='stuff' && title !='id'&& title !='date'"
                                                        v-for="value,title in item"
                                                        :key="title">
                                                        <v-list-item-content>{{ title.toUpperCase().replace(/_/g, " ") }}</v-list-item-content>
                                                        <v-list-item-content :class="(title=='amount') ? 'font-weight-bold':''" class="secondary--text justify-end align-center">{{ value }}</v-list-item-content>
                                                    </v-list-item>
                                                </v-list>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </template>
                            </v-data-iterator> -->
                            <v-card
                                flat
                                outlined
                                class="d-flex grey lighten-4">
                                <v-list-item class="text-h5 d-flex justify-space-between">
                                    <div><span class="info--text font-weight-bold">Received : </span>{{ visit.payments.total_received }} </div>
                                    <div v-if="visit.payments.debt > 0"><span class="error--text font-weight-bold">Debt : </span>{{ visit.payments.debt }}</div>
                                </v-list-item>
                            </v-card>
                            <v-simple-table class="text-h5">
                                <template v-slot:default>
                                    <thead>
                                        <tr
                                            v-if="index==0"
                                            v-for="row,index in visit.payments.items"
                                            :key="index">
                                            <th
                                                v-for="(col,title,i) in row"
                                                v-if="title !='id' && title!='note' && title!='type'"
                                                :key="i+title"
                                                class="text-left text-h6">{{title}}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="row,index in visit.payments.items"
                                            :key="index"
                                            v-if="row.type!='debit'">
                                            <td
                                                class="text-left subtitle-2"
                                                v-for="col,title in row"
                                                v-if="title !='id' && title!='note' && title!='type'"
                                                :key="col.id+col.type">{{ col }}</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td class="text-left subtitle-2"> Balance</td>
                                            <td class="text-left subtitle-2">{{ visit.payments.debt }}</td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-container>
                    </v-list-item>
                </v-list-group>
            </v-card>
            <v-card class="mx-auto mt-4">
                <v-list-group
                    class=" pa-2"
                    elevation="4"
                    no-action>
                    <template v-slot:activator>
                        <v-list-item-title class="headline">Treatment </v-list-item-title>
                        <v-list-item-action>
                            <v-icon :color="visit.operation.status ? 'success ':'error'" v-text="visit.operation.status ? 'mdi-check-all':'mdi-cancel'"></v-icon>
                        </v-list-item-action>
                    </template>
                    <v-list-item class="px-0">
                        <v-container class="px-0 pa-sm-3" fluid>
                            <v-data-iterator :items="visit.operation.items" hide-default-footer>
                                <template v-slot:default="props">
                                    <v-row>
                                        <v-col
                                            v-for="item in props.items"
                                            :key="'o'+item.id"
                                            cols="12"
                                            sm="6">
                                            <v-card color="grey lighten-4">
                                                <v-card-title class="subheading font-weight-bold">{{ item.date }}</v-card-title>

                                                <v-divider></v-divider>

                                                <v-list dense>
                                                    <v-list-item
                                                        v-if="title !='stuff' && title !='id'"
                                                        v-for="value,title in item"
                                                        :key="title">
                                                        <v-list-item-content>{{ title.toUpperCase().replace(/_/g, " ") }}</v-list-item-content>
                                                        <v-list-item-content class="justify-end align-end">{{ value }}</v-list-item-content>
                                                    </v-list-item>
                                                </v-list>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </template>
                            </v-data-iterator>
                        </v-container>
                    </v-list-item>
                </v-list-group>
            </v-card>
            <v-card class="mx-auto mt-4">
                <v-list-group
                    class=" pa-2"
                    elevation="4"
                    no-action>
                    <template v-slot:activator>
                        <v-list-item-title class="headline">Post Op. Check </v-list-item-title>
                        <v-list-item-action>
                            <v-icon :color="visit.control.status ? 'success ':'error'" v-text="visit.control.status ? 'mdi-check-all':'mdi-cancel'"></v-icon>
                        </v-list-item-action>
                    </template>
                    <v-list-item
                        class="pl-5"
                        v-for="value,title in visit.control.items"
                        :key="title">
                        <v-list-item-content>{{ title.toUpperCase().replace(/_/g, " ") }}</v-list-item-content>
                        <v-list-item-content class="align-center">
                            <v-icon :color="value ? 'success ':'error'" v-text="value ? 'mdi-check-all':'mdi-minus'"></v-icon>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-card>
        </v-col>
        <v-col class="pl-1">
            <v-container fluid class="secondary lighten-2">
                <v-btn @click="payed=!payed">PAY</v-btn>
                <v-card
                    v-if="!payed"
                    class="primary lighten-2 mb-4"
                    elevation="5">
                    <v-row
                        nu-gutters
                        full-width
                        class="v-picker__title  mx-auto ma-sm-4 ">
                        <v-col cols="12" class="text-h6 d-flex justify-space-between align-end">
                            <span>Estimated Grafts</span> <span class="text-body-1">{{visit.estimated_grafts}}</span>
                        </v-col>
                        <v-col cols="12" class="text-h6 d-flex justify-space-between align-end ">
                            <span>Estimated Price</span> <span class="text-body-1">{{visit.estimated_price}}</span>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card v-else color="success">
                    <v-row full-width class="v-picker__title mx-auto ma-sm-4 ">
                        <v-col cols="12" class="text-h6 d-flex justify-space-between align-end">
                            <span>Current Grafts</span> <span class="text-body-1">{{visit.current_grafts}}</span>
                        </v-col>
                        <v-col cols="12" class="text-h6 d-flex justify-space-between align-end ">
                            <span>Current Price</span> <span class="text-body-1">{{visit.current_price}}</span>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card
                    color=""
                    elevation="5"
                    class="mb-4 pa-2 outlined"
                    outlined>
                    <v-card-title class="subheading font-weight-bold">Visit Note:</v-card-title>
                    {{visit.note}}
                </v-card>
                <v-card
                    color=""
                    elevation="5"
                    class="mb-2 pa-2">
                    <v-card-title class="subheading font-weight-bold">Surgery Note:</v-card-title>
                    {{visit.surgery_note}}
                </v-card>

                <photos :photos="customer.photos" />
            </v-container>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import Photos from "./Photos.vue";
import Travel from "./Travel.vue";
export default {
    name: "PatientProgress",
    data() {
        return {
            payed: false,
            stay: '',
            proposal: '',
            totalstay: '',
            icons: {
                arrival: "mdi-airplane-landing",
                payments: "mdi-cash-usd",
                operation: "mdi-stethoscope",
                control: "mdi-doctor",
                departure: "mdi-airplane-takeoff"
            },
            alerts: [
                'Patient need to move his own hotel klikya Resort Hotel at 19 June 2020',
                'Departure Transfer Not Set Yet !'
            ]
        };
    },
    props: {
        visit: {
            type: Object,
            default: () => {},
            required: true
        },
         customer: {
            type: Object,
            default: () => {},
            required: true
        }
    },
    components: {
        Travel,
        Photos
    },
    computed: {
        costOfDay() {
            return this.hotelExtraPayments()
        },
        validTravel() {
            return this.validateTravel();
        }
    },
    methods: {
        validateTravel() {
            let listOfObjects = Object.keys(this.visit.travel).map((key) => {
                return this.visit.travel[key]
            })
            return listOfObjects.includes(false)
        },
        hotelExtraPayments() {
            // let checkin = this.$moment(this.visit.hotel.checkin);
            // let checkout = this.$moment(this.visit.hotel.checkout);
            // let arrival = this.$moment(this.visit.arrival.items.arrival_date);
            // let departure = this.$moment(this.visit.departure.items.departure_date);
            // this.cost = this.visit.hotel.cost_per_night;
            // this.proposal = this.visit.hotel.our_proposal;
            // this.totalstay = departure.diff(arrival, 'days');
            // this.stay = checkout.diff(checkin, 'days');
            // return (this.stay - this.proposal) * this.cost;
            // return stay + '  /  ' + proposal + '  /  ' + (stay - proposal) * cost;
        },
    }
}
</script>

<style lang="scss" scoped>
.border {
    border: 2px dashed orange;
}
</style>
