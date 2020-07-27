<template>
<v-container fluid>
    <v-data-table
        :headers="headersIncome"
        :items="table1"
        disable-filtering
        disable-sort
        item-key="id+type"
        hide-default-footer
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
                <v-btn
                    color="orange"
                    dark
                    class="mb-2"
                    @click="dialog=true,editedItem.type='credit'">Tahsilat</v-btn>
                <v-btn
                    color="primary"
                    dark
                    class="mb-2">Hizmet Ekle</v-btn>
                <v-dialog v-model="dialog" max-width="500px">
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
                                        <v-text-field
                                            v-model="editedItem.date"
                                            label="Date"
                                            name="date"
                                            color="primary"
                                           @click="date1=true">
                                            <v-icon slot="prepend" color="primary">mdi-calendar</v-icon>
                                        </v-text-field>
                                        <v-menu
                                            v-model="date1"
                                            close-on-content-click
                                            transition="scale-transition"
                                            min-width="290px">
                                            <v-date-picker
                                                v-model="editedItem.date"
                                                locale="tr"
                                                :min="date">
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4">
                                        <v-select
                                            v-model="editedItem.type"
                                            :items="paymentTypes"
                                            label="Type"></v-select>

                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4">
                                        <v-select
                                            v-model="editedItem.account"
                                            :items="accountTypes"
                                            label="Account"></v-select>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4">
                                        <v-text-field v-model="editedItem.amount" label="Amount (€)"></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4">
                                        <v-text-field v-model="editedItem.note" label="Note"></v-text-field>
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
                <td
                    class="d-block d-sm-table-cell"
                    v-for="(header,i) in headers"
                    :key="i">
                    <div v-if="header.value == 'account'">
                        Debt
                    </div>
                    <div v-if="header.value == 'amount'">
                        {{ payments.debt }}
                    </div>
                    <div v-else>
                        <!-- empty table cells for columns that don't need a sum -->
                    </div>

                </td>
            </tr>
        </template>

        <template v-slot:item.date="{ item }">
            {{item.date | moment("Do MMM") }}
        </template>
        <template v-slot:item.amount="{ item }">
            {{ (item.type=='alacak') ? '- ' + item.amount :'+ '+item.amount }}
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon
                medium
                class="mr-2"
                @click="editItem('table1',item)">
                mdi-pencil
            </v-icon>
            <v-icon medium @click="deleteItem('table1',item)">
                mdi-delete
            </v-icon>
        </template>
        <template v-slot:no-data>
            No Data...
        </template>
    </v-data-table>
    <v-data-table
        :headers="headersOutgoing"
        :items="table2"
        disable-filtering
        disable-sort
        hide-default-footer
        item-key="id+type"
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
                            color="error"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            @click="editedItem.type='credit'"
                            v-on="on">Gider Ekle</v-btn>
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
                                        <v-menu
                                            v-model="date2"
                                            close-on-content-click
                                            :nudge-right="40"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="290px">
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    v-model="editedItem.date"
                                                    label="Date"
                                                    :name="date"
                                                    value=""
                                                    color="primary"
                                                    v-on="on">
                                                    <v-icon slot="prepend" color="primary">mdi-calendar</v-icon>
                                                </v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="editedItem.date"
                                                locale="tr"
                                                :min="date">
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4">
                                        <v-select
                                            v-model="editedItem.type"
                                            :items="paymentTypes"
                                            label="Type"></v-select>

                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4">
                                        <v-select
                                            v-model="editedItem.account"
                                            :items="accountTypes"
                                            label="Account"></v-select>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4">
                                        <v-text-field v-model="editedItem.amount" label="Amount (€)"></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4">
                                        <v-text-field v-model="editedItem.note" label="Note"></v-text-field>
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
        <template v-slot:item.date="{ item }">
            {{item.date | moment("Do MMM") }}
        </template>
        <template v-slot:item.amount="{ item }">
            {{ (item.type=='alacak') ? '- ' + item.amount :'+ '+item.amount }}
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
        date1: false,
        date2:false,
        date: new Date().toISOString().substr(0, 10),
        headersIncome: [{
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
        headersOutgoing: [{
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
            }, {
                text: 'Owner',
                value: 'owner',
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
        paymentTypes: ['tahsilat', 'odeme'],
        accountTypes: ['Operation', 'Bank Transfer', 'Cash', 'Credit Card'],
        items: [],
        editedIndex: -1,
        editedItem: {
            date: '',
            type: '',
            account: '',
            amount: 0,
            note: '',
        },
        defaultItem: {
            date: '',
            type: '',
            account: '',
            amount: 0,
            note: '',
        },
    }),

    computed: {
        table1() {
            return this.payments.income;
        },
        table2() {
            return this.payments.outgoing;
        },
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
            this.items = Object.keys(this.table1).map((key) => {
                return this.table1[key]
            })
        },

        editItem(table, item) {
            this.editedIndex = this.items.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            const index = this.items.indexOf(item)
            confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        sumField(key) {
            // sum data in give key (property)
            return this.payments.income.reduce((a, b) => a + (b[key] || 0), 0)
        },
        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.items[this.editedIndex], this.editedItem)
            } else {
                this.items.push(this.editedItem)
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
