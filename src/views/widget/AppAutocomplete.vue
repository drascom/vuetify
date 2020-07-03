<template>
    <!-- <v-icon @click="closeSearch">mdi-arrow-left</v-icon> -->
    <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        item-text="title"
        item-value="title"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        clearable
        hide-no-data
        hide-details
        single-line
        label="Type minimum 3 letters.."
        solo
        clearable
        clear-icon="mdi-cancel">
    </v-autocomplete>
</template>

<script>
import moduleData from '@/views/customers/store/index'

export default {
    name: 'SearchClient',
    data: () => ({
        loading: false,
        search: '',
        select: null,
        items: [],
        customers: [{
                active: true,
                title: 'Jason Oner',
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
            },
            {
                active: true,
                title: 'Ranee Carlson',
                avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
            },
            {
                title: 'Cindy Baker',
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
            },
            {
                title: 'Ali Connors',
                avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
            },
        ],
    }),
    watch: {
        search(val) {
            val && val !== this.select && this.querySelections(val)
        },
    },
    methods: {
        querySelections(v) {
            this.loading = true
            // Simulated ajax query
            setTimeout(() => {
                this.items = this.customers.filter(e => {
                    return (e.title || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                })
                this.loading = false
            }, 500)
        },
        closeSearch() {
            this.$store.dispatch('SetSearchBar', false);
        },
    },
    created() {
        if (!moduleData.isRegistered) {
            this.$store.registerModule('userManagement', moduleData)
            moduleData.isRegistered = true
        }
        // this.$store.dispatch('userManagement/fetchUsers').catch(err => {
        //     console.error(err)
        // })
    }
}
</script>

<style lang="scss" scoped>

</style>
