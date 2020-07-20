<template>
<v-container fluid>
    <v-card color="" class="pa-6 mx-auto">
        <div class="d-flex flex-justify-center mx-auto">
            <div class="my-2 ">
                <v-btn>Normal</v-btn>
            </div>
            <div class="my-2">
                <v-btn color="primary">Primary</v-btn>
            </div>
            <div class="my-2">
                <v-btn color="error">Error</v-btn>
            </div>
            <div class="my-2">
                <v-btn disabled>Disabled</v-btn>
            </div>
        </div>
    </v-card>
    <v-data-table
        :headers="headers"
        :items="desserts"
        disable-filtering
        disable-sort
        item-key="type"
        show-group-by
        sort-by="amount"
        class="elevation-4 pt-5 font-weight-medium">
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-toolbar-title>Balance</v-toolbar-title>
                <v-divider
                    class="mx-4"
                    inset
                    vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on">New Item</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4">
                                        <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4">
                                        <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4">
                                        <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4">
                                        <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4">
                                        <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="close">Cancel</v-btn>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:body.append="{ headers }">
            <tr>
                <td v-for="(header,i) in headers" :key="i">
                    <div v-if="header.value == 'amount'">
                        {{payments.total}}
                    </div>
                    <div v-else>
                        <!-- empty table cells for columns that don't need a sum -->
                    </div>

                </td>
            </tr>
        </template>

        <template v-slot:item.amount="{ item }">
            {{ (item.type=='debit') ? '+ '+item.amount :'- '+item.amount }}
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon
                medium
                class="mr-2"
                @click="editItem(item)">
                mdi-pencil
            </v-icon>
            <v-icon medium @click="deleteItem(item)">
                mdi-delete
            </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
    </v-data-table>
</v-container>
</template>

<script>
export default {
    name: 'Balance',
    props: {
        payments: {
            type: Object,
            default: () => {},
            required: true
        }
    },
    data: () => ({
        dialog: false,
        headers: [{
                text: 'Id',
                align: 'start',
                sortable: false,
                value: 'id',
                groupable: false
            },
            {
                text: 'Date',
                value: 'date',
                groupable: false
            },
            {
                text: 'Type ',
                value: 'type',
                groupable: true
            },
            {
                text: 'Account ',
                value: 'account',
                groupable: false
            },
            {
                text: 'Amount (€ Euro)',
                value: 'amount',
                groupable: false
            },
            {
                text: 'Note ',
                value: 'note',
                groupable: false
            },
            {
                text: 'Actions',
                value: 'actions',
                groupable: false
            },

        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            date: '',
            type: '',
            amount: 0,
            note: '',
        },
        defaultItem: {
            date: '',
            type: '',
            amount: 0,
            note: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.desserts = Object.keys(this.payments.items).map((key) => {
                return this.payments.items[key]
            })
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            const index = this.desserts.indexOf(item)
            confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>

<style lang="scss">
th,
td {
    font-size: 16px !important;
}
</style>
