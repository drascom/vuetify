<template>
<v-row class="mx-2">
    <v-col cols="12" class="ml-3">
        <v-text-field
            placeholder="No Data..."
            outlined
            :error="!visit.travel.arrival_date"
            readonly
            :value='visit.travel.arrival_date | moment("Do MMM ,dddd") +"  "+ visit.travel.arrival_time'>
            <template v-slot:label>
                <v-icon style="vertical-align: middle">mdi-airplane-landing</v-icon>
                <strong class="text-uppercase font-weight-medium">Arrival</strong>
            </template>
        </v-text-field>
        <v-text-field
            placeholder="No Data..."
            :error="!visit.travel.arrival_flight"
            readonly
            :value='visit.travel.arrival_flight'>
            <template v-slot:label>
                <v-icon style="vertical-align: middle">mdi-airplane-landing</v-icon>
                <strong class="text-uppercase font-weight-medium">Flight Number</strong>
            </template>
            <template v-slot:append-outer>
                <v-btn
                    v-if="visit.travel.arrival_flight"
                    class="mt-n4 text-caption text-sm-body-1 primary"
                    @click="checkFlight"
                    >
                    <v-icon medium left>mdi-target</v-icon>
                    Check Flight
                </v-btn>
            </template>
        </v-text-field>
        <v-text-field
            placeholder="No Data..."
            readonly
            :error="!visit.travel.airport_to_hotel_status"
            :value='visit.travel.airport_to_hotel | moment("Do MMM ,dddd")'>
            <template v-slot:label>
                <v-icon style="vertical-align: middle">mdi-bus-side</v-icon>

                <strong class="text-uppercase font-weight-medium">  Airport <v-icon style="vertical-align: middle">mdi-arrow-right</v-icon>  {{visit.travel.first_hotel}}</strong>
            </template>
            <template v-slot:append-outer>
                <v-icon
                    class="mt-n2"
                    :color="visit.travel.airport_to_hotel_status ? 'success ':'error'"
                    v-text="visit.travel.airport_to_hotel_status ? 'mdi-check-all':'mdi-cancel'"
                    left></v-icon>
            </template>
        </v-text-field>
        <v-text-field
            placeholder="No Data..."
            readonly
            :error="!visit.travel.airport_to_hotel_status"
            :value="visit.travel.our_hotel +'  '+visit.travel.our_proposal+' days'">
            <template v-slot:label>
                <v-icon style="vertical-align: middle">mdi-hospital-building</v-icon>
                <strong class="text-uppercase font-weight-medium"> Our Hotel</strong>
            </template>
            <template v-slot:append-outer>
                <v-icon
                    class="mt-n2"
                    :color="visit.travel.our_hotel_status ? 'success ':'error'"
                    v-text="visit.travel.our_hotel_status ? 'mdi-check-all':'mdi-cancel'"
                    left></v-icon>
            </template>
        </v-text-field>
        <v-text-field
            placeholder="No Data..."
            readonly
            :error="!visit.travel.extra_days_payment"
            value="1 day 80€">
            <template v-slot:label>
                <v-icon style="vertical-align: middle">mdi-calendar-check</v-icon>
                <strong class="text-uppercase font-weight-medium"> Extra Days</strong>
            </template>
            <template v-slot:append-outer>
                <v-icon
                    class="mt-n2"
                    :color="visit.travel.extra_days_payment ? 'success ':'error'"
                    v-text="visit.travel.extra_days_payment ? 'mdi-check-all':'mdi-cancel'"
                    left></v-icon>
            </template>
        </v-text-field>
        <v-text-field
            v-if="visit.travel.second_hotel"
            placeholder="No Data..."
            readonly
            :error="!visit.travel.hotel_to_hotel"
            :value='visit.travel.hotel_to_hotel | moment("Do MMM ,dddd")'>
             <template v-slot:label>
                <v-icon style="vertical-align: middle">mdi-bus-side</v-icon>
                 <strong class="text-uppercase font-weight-medium">  {{visit.travel.first_hotel}} <v-icon style="vertical-align: middle">mdi-arrow-right</v-icon> {{visit.travel.second_hotel}}</strong>
            </template>

            <template v-slot:append-outer>
                <v-icon
                    class="mt-n2"
                    :color="visit.travel.hotel_to_hotel ? 'success ':'error'"
                    v-text="visit.travel.hotel_to_hotel ? 'mdi-check-all':'mdi-cancel'"
                    left></v-icon>
            </template>
        </v-text-field>
        <v-text-field
            placeholder="No Data..."
            readonly
            :error="!visit.travel.hotel_to_airport_status"
            :value='visit.travel.hotel_to_airport | moment("Do MMM ,dddd")'>
            <template v-slot:label>
                <v-icon style="vertical-align: middle">mdi-hospital-building</v-icon>
                <strong class="text-uppercase font-weight-medium"> Transport <v-icon style="vertical-align: middle">mdi-arrow-right</v-icon> Airport</strong>
            </template>
            <template v-slot:append-outer>
                <v-icon
                    class="mt-n2"
                    :color="visit.travel.hotel_to_airport_status ? 'success ':'error'"
                    v-text="visit.travel.hotel_to_airport_status ? 'mdi-check-all':'mdi-cancel'"
                    left></v-icon>
            </template>
        </v-text-field>
        <v-text-field
            placeholder="No Data..."
            :error="!visit.travel.departure_date"
            readonly
            :value='visit.travel.departure_date | moment("Do MMM ,dddd") +"  "+ visit.travel.departure_time'>
            <template v-slot:label>
                <v-icon style="vertical-align: middle">mdi-airplane-takeoff</v-icon>
                <strong class="text-uppercase font-weight-medium">departure</strong>
            </template>
        </v-text-field>
    </v-col>

</v-row>
</template>

<script>
export default {
    name: "progress_new",
    props: {
        visit: {
            type: Object,
            default: () => {}
        },
    },
    methods: {
        checkFlight() {
            alert('Uçuş bilgisi geldi')
        }
    },

}
</script>

<style lang="scss" scoped>

</style>
