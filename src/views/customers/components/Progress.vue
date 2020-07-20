<template>
<v-container fluid id='item'>
    <v-row>
        <v-col
            cols="12"
            md="8"
            class="pl-0">
            <v-timeline dense>
                <v-slide-x-reverse-transition group hide-on-leave>
                    <v-timeline-item
                        icon="mdi-hospital-building"
                        :color="visit.hotel.status ? 'success':'error'"
                        key="hotel"
                        fill-dot
                        right>
                        <v-card>
                            <v-list-group
                                class=""
                                no-action
                                dense>
                                <template v-slot:activator>
                                    <v-list-item-title class="headline">Reservation</v-list-item-title>
                                    <v-list-item-action>
                                        <v-icon
                                            :medium="$vuetify.breakpoint.smAndDown"
                                            :color="visit.hotel.status ? 'success ':'error'"
                                            v-text="visit.hotel.status ? 'mdi-check-all':'mdi-cancel'"></v-icon>
                                    </v-list-item-action>
                                </template>
                                <v-list-item class="px-0">

                                    <v-card
                                        flat
                                        :width="$vuetify.breakpoint.smAndDown ? '90%' : '60%'"
                                        class="px-2 mx-2">
                                        <v-alert v-if="costOfDay > 0" type="error" class="ma-2 text-center" dismissible>
                                        Extra Days Cost <span class="text-h5 text--white">{{costOfDay}}</span>
                                    </v-alert>
                                        <v-text-field
                                            label="Status"
                                            :error="!visit.hotel.status"
                                            :success="visit.hotel.status"
                                            readonly
                                            :value="visit.hotel.status? 'Confirmed' :'Not Confirmed'"></v-text-field>
                                        <v-text-field
                                            label="Hotel Name"
                                            readonly
                                            :value="visit.hotel.hotel_name"></v-text-field>
                                        <v-text-field
                                            label="Price Per Night"
                                            readonly
                                            :value="cost"></v-text-field>
                                        <v-text-field
                                            label="Days To Stay"
                                            readonly
                                            :value="stay"></v-text-field>
                                        <v-text-field
                                            label="Total Days"
                                            readonly
                                            :value="totalstay"></v-text-field>
                                    </v-card>

                                </v-list-item>
                            </v-list-group>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item
                        icon="mdi-airplane-landing"
                        :color="visit.arrival.status ? 'success':'error'"
                        key="arrival"
                        fill-dot
                        right>
                        <v-card>
                            <v-list-group
                                class=""
                                no-action
                                dense>
                                <template v-slot:activator>
                                    <v-list-item-title class="headline">Arrival</v-list-item-title>
                                    <v-list-item-action>
                                        <v-icon
                                            :medium="$vuetify.breakpoint.smAndDown"
                                            :color="visit.arrival.status ? 'success ':'error'"
                                            v-text="visit.arrival.status ? 'mdi-check-all':'mdi-cancel'"></v-icon>
                                    </v-list-item-action>
                                </template>
                                <v-list-item class="px-0">
                                    <v-row full-width class="v-picker__title primary mx-auto ma-sm-2">
                                        <v-col
                                            cols="4"
                                            sm="2"
                                            class="text-sm-body-2 text-subtitle-1">2020</v-col>
                                        <v-col
                                            cols="8"
                                            sm="6"
                                            class="text-sm-h4 text-h5">
                                            <div>Sun, Jul 19</div>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="4"
                                            class="text-sm-h4 text-h5  justify-between">
                                            <span>1 :05</span> <span class="text-body-1">AM</span>
                                        </v-col>
                                    </v-row>
                                </v-list-item>
                            </v-list-group>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item
                        icon="mdi-cash-usd"
                        :color="visit.payments.status ? 'success':'error'"
                        key="payment"
                        fill-dot
                        right>
                        <v-card>
                            <v-list-group class="justify-start" no-action>
                                <template v-slot:activator>
                                    <v-list-item-title class="headline">Payments </v-list-item-title>
                                    <v-list-item-action>
                                        <v-icon :color="visit.payments.status ? 'success ':'error'" v-text="visit.payments.status ? 'mdi-check-all':'mdi-cancel'"></v-icon>
                                    </v-list-item-action>
                                </template>
                                <v-list-item class="px-0">
                                    <v-container fluid class="px-0 px-sm-3">
                                        <v-data-iterator :items="visit.payments.items" hide-default-footer>
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
                                        </v-data-iterator>
                                        <!-- <v-simple-table class="text-h5">
                                        <template v-slot:default>
                                            <thead>
                                                <tr
                                                    v-if="index==0"
                                                    v-for="row,index in visit.payments.items"
                                                    :key="index">
                                                    <th
                                                        v-for="(col,title,i) in row"
                                                        :key="i"
                                                        class="text-left text-h6">{{title}}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="row,index in visit.payments.items" :key="index">
                                                    <td
                                                        class="text-left subtitle-2"
                                                        v-for="col in row"
                                                        :key="col.id">{{ col }}</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td class="text-left subtitle-2"> TOTAL</td>
                                                    <td class="text-left subtitle-2">{{ visit.payments.total }}</td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table> -->
                                    </v-container>
                                </v-list-item>
                            </v-list-group>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item
                        icon="mdi-stethoscope"
                        :color="visit.operation.status ? 'success':'error'"
                        key="operation"
                        fill-dot
                        right>
                        <v-card>
                            <v-list-group
                                class="justify-start"
                                no-action
                                dense>
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
                                                            <v-card-title class="subheading font-weight-bold">No : {{ item.id }}</v-card-title>

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
                    </v-timeline-item>
                    <v-timeline-item
                        icon="mdi-doctor"
                        :color="visit.control.status ? 'success':'error'"
                        fill-dot
                        key="control"
                        right>
                        <v-card>
                            <v-list-group class="justify-start" no-action>
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
                    </v-timeline-item>
                    <v-timeline-item
                        icon="mdi-airplane-takeoff"
                        :color="visit.departure.status ? 'success':'error'"
                        key="departure"
                        fill-dot
                        right>
                        <v-card>
                            <v-list-group
                                class=""
                                no-action
                                dense>
                                <template v-slot:activator>
                                    <v-list-item-title class="headline">Departure</v-list-item-title>
                                    <v-list-item-action>
                                        <v-icon
                                            :medium="$vuetify.breakpoint.smAndDown"
                                            :color="visit.departure.status ? 'success ':'error'"
                                            v-text="visit.departure.status ? 'mdi-check-all':'mdi-cancel'"></v-icon>
                                    </v-list-item-action>
                                </template>
                                <v-list-item class="px-0">
                                    <v-container fluid class="px-0">
                                        <v-row full-width class="v-picker__title primary mx-auto ma-sm-2 align-end">
                                            <v-col
                                                cols="4"
                                                sm="2"
                                                class="text-sm-body-2 text-subtitle-1">2020</v-col>
                                            <v-col
                                                cols="8"
                                                sm="6"
                                                class="text-sm-h4 text-h5">
                                                <div>Sun, Jul 19</div>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                sm="4"
                                                class="text-sm-h4 text-h5  justify-between"><span>1 :05</span> <span class="text-body-1">AM</span>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-list-item>
                            </v-list-group>
                        </v-card>
                    </v-timeline-item>
                </v-slide-x-reverse-transition>
            </v-timeline>
        </v-col>
        <v-col>
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
                    class="mb-4 pa-2 outlined"
                    outlined>
                    <v-card-title class="subheading font-weight-bold">System Note:</v-card-title>
                    Patient need to move his own hotel 'klikya Resort Hotel at 19 June 2020

                </v-card>
                <v-card
                    color=""
                    elevation="5"
                    class="mb-2 pa-2">
                    <v-card-title class="subheading font-weight-bold">Surgery Note:</v-card-title>
                    {{visit.surgery_note}}
                </v-card>
            </v-container>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import tree from "@/components/tree.vue";
export default {
    name: "PatientProgress",
    data() {
        return {
            payed: false,
            stay:'',
            proposal:'',
            totalstay:'',
            icons: {
                arrival: "mdi-airplane-landing",
                payments: "mdi-cash-usd",
                operation: "mdi-stethoscope",
                control: "mdi-doctor",
                departure: "mdi-airplane-takeoff"
            }
        };
    },
    props: {
        visit: {
            type: Object,
            default: () => {},
            required: true
        }
    },
    computed: {
        costOfDay() {
            return this.hotelExtraPayments()
        }
    },
    methods: {
        hotelExtraPayments() {
            let checkin = this.$moment(this.visit.hotel.checkin);
            let checkout = this.$moment(this.visit.hotel.checkout);
            let arrival = this.$moment(this.visit.arrival.items.arrival_date);
            let departure = this.$moment(this.visit.departure.items.departure_date);
            this.cost = this.visit.hotel.cost_per_night;
            this.proposal = this.visit.hotel.our_proposal;
            this.totalstay = departure.diff(arrival, 'days');
            this.stay = checkout.diff(checkin, 'days');
            return (this.stay - this.proposal) * this.cost;
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
