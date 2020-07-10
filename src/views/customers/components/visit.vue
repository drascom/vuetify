<template>
<v-container>
    <v-row>
        <v-col cols="12" md="6" class="p-0 justify-start align-left">
            <v-card class="mx-auto" outlined color="warning lighten-2">
                <v-list>
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
                <v-list>
                    <v-subheader class="success--text headline">Post Op Information</v-subheader>
                    <v-divider></v-divider>
                    <v-list-item-group>
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
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-cash-usd</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="heading">Current Price</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-list-item-title v-html="item.current_price "></v-list-item-title>
                            </v-list-item-action>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-cash-usd</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="heading">Payment Type</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-list-item-title v-html="item.payment_type "></v-list-item-title>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-col>
        <v-col cols="12" md="12">
            <v-card class="mx-auto" outlined color="">
                <v-list-item>
                    <v-subheader class="secondary--text headline">Travel Information</v-subheader>
                </v-list-item>
                <v-row no-gutters class="p-0 m-0">

                    <v-col cols="12" md="6">
                        <v-card class="mx-auto" flat>
                            <v-list disabled>

                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-head-dots-horizontal</v-icon>
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
                                        <v-icon>mdi-cash-usd</v-icon>
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
                                        <v-icon>mdi-cash-usd</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title class="heading">Departure Time</v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-list-item-title v-html="item.arrival_flight "></v-list-item-title>
                                    </v-list-item-action>
                                </v-list-item>

                            </v-list>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-card class="mx-auto" flat>
                            <v-list disabled>
                                <v-list-item-group>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-head-dots-horizontal</v-icon>
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
                                            <v-icon>mdi-cash-usd</v-icon>
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
                                            <v-icon>mdi-cash-usd</v-icon>
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
    </v-row>
</v-container>
<!-- <v-list color="">

<v-list-item>

<v-list-item-content>

<v-row no-gutters class="d-flex justify-center align-center">

<v-col cols="5" sm="3">

Estimated Grafts

<v-list-item-title v-html="item.estimated_graft"></v-list-item-title>

</v-col>

<v-col cols="2" sm="1">

<v-list-item-icon>

<v-icon color="info">mdi-forwardburger</v-icon>

</v-list-item-icon>

</v-col>

<v-col cols="5" sm="3">

Current Grafts

<v-list-item-title v-html="item.grafts_total"></v-list-item-title>

</v-col>

</v-row>

</v-list-item-content>

</v-list-item>

<v-list-item>

<v-list-item-content>

<v-row no-gutters class="d-flex justify-center align-center">

<v-col cols="5" sm="3">

Estimated Price

<v-list-item-title v-html="item.estimated_price"></v-list-item-title>

</v-col>

<v-col cols="2" sm="1">

<v-list-item-icon>

<v-icon color="info">mdi-forwardburger</v-icon>

</v-list-item-icon>

</v-col>

<v-col cols="5" sm="3">

Current Price

<v-list-item-title v-html="item.current_price"></v-list-item-title>

</v-col>

</v-row>

</v-list-item-content>

</v-list-item>

<v-list-item>

<v-list-item-content>

<v-row no-gutters class="d-flex justify-center align-center">

<v-col cols="5" sm="3">

Doctor

<v-list-item-subtitle v-html="item.doctor"></v-list-item-subtitle>

</v-col>

<v-col cols="2" sm="1">

<v-list-item-icon>

<v-icon color="info">mdi-slash-forward</v-icon>

</v-list-item-icon>

</v-col>

<v-col cols="5" sm="3">

Department

<v-list-item-subtitle v-html="item.department"></v-list-item-subtitle>

</v-col>

</v-row>

</v-list-item-content>

</v-list-item>

<v-btn class="ma-2 float-right" color="primary darken 1" elevation="4">More Details

<v-icon dark right>mdi-chevron-right</v-icon>

</v-btn>

</v-list> -->
</template>

<script>
export default {
    name: "visit",
    props: {
        item: {
            type: Object,
            default: () => {},
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
