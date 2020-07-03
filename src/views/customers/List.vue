<template>
<div>
    <v-toolbar
        fixed
        clipped-left
        app
        color="primary accent-4"
        dark>
        <v-text-field
            class="mt-5"
            dense
            light
            solo
            prepend-icon="mdi-search"
            placeholder="Search Customers...">
        </v-text-field>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list subheader class="mb-5">
        <v-subheader>All customers</v-subheader>
        <v-hover v-slot="{ hover }" v-for="item in filteredItems" :key="item.title">
            <v-list-item @click="" :class="`elevation-${hover ? 6 : 1}`">
                <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-container>
                        <v-row no-gutters>
                            <v-col cols="12" sm="4" md="4">
                                {{item.title}}
                            </v-col>
                            <v-col cols="1">
                                <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'">mdi-account-edit</v-icon>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-list-item-content>
            </v-list-item>
        </v-hover>
    </v-list>
</div>
</template>

<script>
import moduleData from './store/index'
export default {
    name: 'CustomerList',
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
    computed: {
        filteredItems() {
            return this.customers.filter(item => {
                return (item.title || '').toLowerCase().indexOf((this.search || '').toLowerCase()) > -1
            })
        }
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
        }
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
v-list-item v-list-item--link {
    transition: all .3s ease;
    background: #fff;
}

v-list-item :hover {
    transform: translateY(-4px);
}
</style>
