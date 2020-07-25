<template>
<div>
    <v-timeline dense>
        <v-slide-x-reverse-transition group hide-on-leave>
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
                                <v-card
                                    flat
                                    outlined
                                    class="d-flex grey lighten-4">
                                    <v-list-item class="text-h5 d-flex justify-space-between">
                                        <div><span class="info--text font-weight-bold">Received : </span>{{ visit.payments.total_received }} </div>
                                        <div v-if="visit.payments.debt > 0"><span class="error--text font-weight-bold">Debt : </span>{{ visit.payments.debt }}</div>
                                    </v-list-item>
                                </v-card>
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
                                            <tr v-for="row,index in visit.payments.items" :key="index">
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

</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
