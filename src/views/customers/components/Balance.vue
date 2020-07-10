<template>
<div >
    <v-card class="mx-auto">
        <v-card-title>
            Details
        </v-card-title>
        <v-data-table :headers="headers" :items="desserts" item-key="name" class="elevation-1" />
    </v-card>
</div>
</template>

<script>
export default {
    data: () => ({
        desserts: [{
                type: 'Sell',
                title: 'Treatment',
                amount: 3400,
                currency: 'Euro',
                status: 'Charged',
            },
            {
                type: 'Buy',
                title: 'Comission',
                amount: 1122,
                currency: 'Euro',
                status: 'Not Payed',
            },

        ],
        headers: [{
                text: 'Type',
                align: 'start',
                sortable: false,
                value: 'type',
            },
            {
                text: 'Title',
                sortable: false,
                value: 'title'
            },
            {
                text: 'Amonut ',
                sortable: false,
                value: 'amount'
            },
            {
                text: 'Currency ',
                sortable: false,
                value: 'currency'
            },
            {
                text: 'Status (g)',
                sortable: false,
                value: 'status'
            },
        ],
    }),
}
</script>
