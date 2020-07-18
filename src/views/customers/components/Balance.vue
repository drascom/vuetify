<template>
<div>
    <v-card class="mx-auto">
        <v-list rounded>
            <v-list-item  v-for="(item,index) in visit" :key="item.id">
                <v-list-item-content>
                    <v-container>
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
                    </v-container>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</div>
</template>

<script>
export default {
  name:'Balance',
    props: {
        visit: {
            type: Object,
            default: () => {},
            required: true
        }
    },
}
</script>
