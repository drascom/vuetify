<template>
<v-card>
    <v-card color="primary lighten-3" class="pt-1" v-if="listMode">
       <v-alert
            border="left"
            type="info"
            colored-border
            color="error accent-4"
            class="my-4 mx-4"
            elevation="1">
            Last reservation is Not Confirmed Yet !
        </v-alert>
        <v-list>
            <v-list-item-group>
                <v-list-item>
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
                </v-list-item>
                <v-list-item focusable v-for="(item,index) in visits" :key="index" @click="setItem(item)">
                    <v-row no-gutters class="d-flex justify-start align-center text-subtitle-2 text-sm-body-1 text-md-button">
                        <v-col cols="4" sm="3" class="">
                            {{item.type}}
                        </v-col>
                        <v-col cols="3" sm="3">
                            {{item.date}}
                        </v-col>
                        <v-col cols="3" class="d-none d-sm-flex">
                            {{item.treatment}}
                        </v-col>
                        <v-col cols="4" sm="3">
                            <v-chip class="ma-2" :color="item.status_color" small>
                                {{item.status}}
                            </v-chip>
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
    <v-card v-if="!listMode">
        <v-toolbar>
            <v-icon @click="none" right>mdi-arrow-left</v-icon>
            <v-toolbar-title class="pl-3">All Visits</v-toolbar-title>
        </v-toolbar>
        <visit :key="item.id" :item="item" />
    </v-card>
</v-card>
</template>

<script>
import visit from "./visit.vue";
export default {
    name: "VisitsList",
    data() {
        return {
            item: {},
            listMode: true
        };
    },
    props: {
        visits: {
            type: Array,
            default: () => [],
            required: true
        }
    },
    components: {
        visit
    },
    methods: {
        setItem(payload) {
            this.item = payload;
            (this.listMode = false), this.$emit("panelOpen", this.item.id);
        },
        none() {
            this.$emit("panelOpen", "");
            (this.item = {});
            (this.listMode = true);
        },
    }
};
</script>

<style lang="scss" scoped>
</style>
