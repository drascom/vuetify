<template>
<v-card class="" color="primary lighten-3">
    <v-card-title class="headline"> All Visits</v-card-title>

    <v-expansion-panels hover focusable accordion>
        <v-expansion-panel readonly>
            <v-expansion-panel-header color="grey lighten-4">
                <v-row no-gutters class="d-flex justify-start align-center text-uppercase font-weight-bold">
                    <v-col cols="4" sm="3">
                        Type
                    </v-col>
                    <v-col cols="3" sm="3">
                        Date
                    </v-col>
                    <v-col cols="3" class="d-none d-sm-flex">
                        Treatment
                    </v-col>
                    <v-col cols="4" sm="3">
                        Status
                    </v-col>
                </v-row>
            </v-expansion-panel-header>
        </v-expansion-panel>
        <v-expansion-panel focusable v-for="(item,index) in visits" :key="index">
            <v-expansion-panel-header>
                <v-row no-gutters class="d-flex justify-start align-center">
                    <v-col cols="4" sm="3">
                        {{item.type}}
                    </v-col>
                    <v-col cols="3" sm="3">
                        {{item.date}}
                    </v-col>
                    <v-col cols="3" class="d-none d-sm-flex">
                        {{item.treatment}}
                    </v-col>
                    <v-col cols="4" sm="3">
                        <v-chip class="ma-2" :color="item.status_color" x-small>
                            {{item.status}}
                        </v-chip>
                    </v-col>
                </v-row>
                <template v-slot:actions>
                    <v-icon large @click="">
                        mdi-chevron-right
                    </v-icon>
                </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content color="" elevation="6"class="px-0">
                <v-list color="" >
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
                    <v-btn class="ma-2" color="secondary darken 1" block elevation="4">More Details
                    <v-icon dark right>mdi-chevron-right</v-icon>
                </v-btn>
                </v-list>

            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>

    <!-- <v-list class="ml-2">

<v-list-item border="left" type="info">

<v-list-item-content>

<v-row no-gutters class="d-flex justify-start align-center">

<v-col cols="4" sm="3">

Type

</v-col>

<v-col cols="3" sm="3">

Date

</v-col>

<v-col cols="3" class="d-none d-sm-flex">

Treatment

</v-col>

<v-col cols="4" sm="3">

Status

</v-col>

</v-row>

</v-list-item-content>

</v-list-item>

<v-hover v-slot="{ hover }" v-for="item in visits" :key="item.title">

<v-list-item :class="`elevation-${hover ? 6 : 1}`" class="px-1">

<v-list-item-content>

<v-row no-gutters class="d-flex justify-start align-center">

<v-col cols="4" sm="3">

{{item.type}}

</v-col>

<v-col cols="3" sm="3">

{{item.date}}

</v-col>

<v-col cols="3" class="d-none d-sm-flex">

{{item.treatment}}

</v-col>

<v-col cols="4" sm="3">

<v-chip class="ma-2" :color="item.status_color" x-small>

{{item.status}}

</v-chip>

</v-col>

</v-row>

</v-list-item-content>

<v-list-item-action class="ml-1">

<v-icon color="deep-purple accent-4">mdi-dots-vertical</v-icon>

</v-list-item-action>

</v-list-item>

</v-hover>

</v-list> -->
</v-card>
</template>

<script>
export default {
    name: "VisitsList",
    props: {
        visits: {
            type: Array,
            default: () => [],
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
