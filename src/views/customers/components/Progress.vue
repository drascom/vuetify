<template>
<v-container fluid id='item'>
    <v-row>
        <v-col cols="12" md="8">
            <v-timeline dense>

                <!--<v-timeline-item
    v-for="item1,key,i in visit.progress_items"
    :key="i"
    :icon="icons[key]"
    :color="item1.status ? 'success':'error'"
    fill-dot
    right>

<v-card>

<v-list-group
    :value="!item1.satus"
    class="justify-start"
    no-action
    dense>

<template v-slot:activator>

<v-list-item-title class="headline">{{key.toUpperCase().replace(/_/g, " ")}} </v-list-item-title>

<v-list-item-action>

<v-icon
    :medium="$vuetify.breakpoint.smAndDown"
    :color="item1.status ? 'success ':'error'"
    v-text="item1.status ? 'mdi-check-all':'mdi-cancel'"></v-icon>

</v-list-item-action>

</template>

<v-list-item
    v-for="item2,title,i in item1.children"
    :key="i"
    class="d-flex justify-start">

<tree :node="item2"/>

</v-list-item>

</v-list-group>

</v-card>

</v-timeline-item> -->
                <v-timeline-item
                    icon="mdi-airplane-landing"
                    :color="visit.progress_items.arrival.status ? 'success':'error'"
                    fill-dot
                    right>
                    <v-card>
                        <v-list-group
                            :value="!visit.progress_items.arrival.status"
                            class=""
                            no-action
                            dense>
                            <template v-slot:activator>
                                <v-list-item-title class="headline">Arrival</v-list-item-title>
                                <v-list-item-action>
                                    <v-icon
                                        :medium="$vuetify.breakpoint.smAndDown"
                                        :color="visit.progress_items.arrival.status ? 'success ':'error'"
                                        v-text="visit.progress_items.arrival.status ? 'mdi-check-all':'mdi-cancel'"></v-icon>
                                </v-list-item-action>
                            </template>
                            <v-list-item class="pl-5">
                                <div class="text-sm-h5 text-xs-body-1">
                                    <p>Date :<strong>{{visit.progress_items.arrival.items.arrival_date}}</strong>
                                        Time :<strong>{{visit.progress_items.arrival.items.arrival_time}}</strong></p>
                                    <p>Flight Number : <strong>{{visit.progress_items.arrival.items.arrival_flight}}.</strong></p>
                                </div>
                            </v-list-item>
                        </v-list-group>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item
                    icon="mdi-cash-usd"
                    :color="visit.progress_items.payments.status ? 'success':'error'"
                    fill-dot
                    right>
                    <v-card>
                        <v-list-group
                            :value="!visit.progress_items.payments.status"
                            class="justify-start"
                            no-action>
                            <template v-slot:activator>
                                <v-list-item-title class="headline">payments </v-list-item-title>
                                <v-list-item-action>
                                    <v-icon :color="visit.progress_items.payments.status ? 'success ':'error'" v-text="visit.progress_items.payments.status ? 'mdi-check-all':'mdi-cancel'"></v-icon>
                                </v-list-item-action>
                            </template>
                            <v-list-item>
                               <v-container fluid >
                                  <v-simple-table class="text-h5">
                                    <template v-slot:default>
                                        <thead>
                                            <tr v-if="index==0" v-for="row,index in visit.progress_items.payments.items" :key="index">
                                                <th  v-for="(col,title,i) in row" :key="i" class="text-left text-h6">{{title}}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="row,index in visit.progress_items.payments.items" :key="index">
                                                <td class="text-left subtitle-2" v-for="col in row" :key="col.id">{{ col }}</td>
                                            </tr>
                                            <tr >
                                              <td></td>
                                              <td></td>
                                              <td class="text-left subtitle-2"> TOTAL</td>
                                                <td class="text-left subtitle-2">{{ visit.progress_items.payments.total }}</td>
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
                    :color="visit.progress_items.operation ? 'success':'error'"
                    fill-dot
                    right>
                    <v-card>
                        <v-list-group
                            :value="!visit.progress_items.operation"
                            class="justify-start"
                            no-action>
                            <template v-slot:activator>
                                <v-list-item-title class="headline">Treatment </v-list-item-title>
                                <v-list-item-action>
                                    <v-icon :color="visit.progress_items.operation ? 'success ':'error'" v-text="visit.progress_items.operation ? 'mdi-check-all':'mdi-cancel'"></v-icon>
                                </v-list-item-action>
                            </template>
                            <v-list-item class="d-flex justify-space-between">
                                <span class="title"> Single Grafts :</span>
                                <span class="title">500</span>
                            </v-list-item>
                            <v-list-item class="d-flex justify-space-between">
                                <span class="title"> Multiple Grafts :</span>
                                <span class="title"> 2500</span>
                            </v-list-item>
                        </v-list-group>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item
                    v-if="visit.progress_items.control"
                    icon="mdi-doctor"
                    :color="visit.progress_items.control ? 'success':'error'"
                    fill-dot
                    right>
                    <v-card>
                        <v-list-group class="justify-start" no-action>
                            <template v-slot:activator>
                                <v-list-item-title class="headline">Post Op. Check </v-list-item-title>
                                <v-list-item-action>
                                    <v-icon :color="visit.progress_items.control ? 'success ':'error'" v-text="visit.progress_items.control ? 'mdi-check-all':'mdi-cancel'"></v-icon>
                                </v-list-item-action>
                            </template>
                        </v-list-group>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item
                    icon="mdi-airplane-takeoff"
                    :color="visit.progress_items.departure ? 'success':'error'"
                    fill-dot
                    right>
                    <v-card>
                        <v-list-group
                            :value="!visit.progress_items.departure"
                            class="justify-start"
                            no-action>
                            <template v-slot:activator>
                                <v-list-item-title class="headline">Departure </v-list-item-title>
                                <v-list-item-action>
                                    <v-icon :color="visit.progress_items.departure ? 'success ':'error'" v-text="visit.progress_items.departure ? 'mdi-check-all':'mdi-cancel'"></v-icon>
                                </v-list-item-action>
                            </template>
                            <v-list-item class="d-flex justify-space-between">
                                <span class="title"> Date : </span>
                                <span class="title">{{visit.departure_date}}</span>
                            </v-list-item>
                            <v-list-item class="d-flex justify-space-between">
                                <span class="title"> Time : </span>
                                <span class="title">{{visit.departure_time}}</span>
                            </v-list-item>
                            <v-list-item class="d-flex justify-space-between">
                                <span class="title"> Flight No : </span>
                                <span class="title">{{visit.departure_flight}}</span>
                            </v-list-item>
                        </v-list-group>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import tree from '@/components/tree.vue';
export default {
    name: "PatientProgress",
    data() {
        return {
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
    methods: {

    },
    components: {
        tree,
    },
};
</script>

<style lang="scss" scoped>
.border {
    border: 2px dashed orange;
}
</style>
