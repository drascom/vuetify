<template>
<v-tooltip bottom>
    <template v-slot:activator="{ on,attrs }">
        <v-btn icon @click="openSearch" v-bind="attrs" v-on="on">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
    </template>
    <span>Search Customer</span>
</v-tooltip>
</template>

<script>
import {
    mapGetters
} from 'vuex';

export default {
    name: 'AppSearch',
    computed: {
        ...mapGetters([
            'searchBar'
        ]),

    },
    methods: {
        openSearch() {
            this.$store.dispatch('SetSearchBar', true);
        },
    },
};
</script>
