<template>
<v-container fluid>
  <datatable
    :headers="headersIncome"
    :rows="payments.income"
    :debt="payments.debt"
    typeOfTable="income"
    :defaultItem="defaultIncome" />
  <v-divider class="my-4" inset></v-divider>
  <datatable
    tableTitle="Giderler"
    :headers="headersOutgoing"
    :rows="payments.outgoing"
    debt=""
    typeOfTable="outgoing"
    :defaultItem="defaultOutgoing" />
</v-container>
</template>

<script>
import datatable from './datatable.vue';
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
    headersIncome: [{
        text: 'id',
        align: 'start',
        sortable: false,
        value: 'id',
        groupable: false
      },
      {
        text: 'date',
        value: 'date',
        groupable: false
      },
      {
        text: 'account',
        value: 'account',
        groupable: false
      },
      {
        text: 'amount',
        value: 'amount',
        groupable: false
      },
      {
        text: 'note',
        value: 'note',
        groupable: false
      },
      {
        text: 'actions',
        value: 'actions',
        groupable: false
      },

    ],
    defaultIncome: {
      id: "",
      date: "",
      type: "",
      account: "",
      amount: "",
      note: ""
    },
    headersOutgoing: [{
        text: 'id',
        align: 'start',
        sortable: false,
        value: 'id',
        groupable: false
      },
      {
        text: 'date',
        value: 'date',
        groupable: false
      }, {
        text: 'owner',
        value: 'owner',
        groupable: false
      },
      {
        text: 'amount',
        value: 'amount',
        groupable: false
      },
      {
        text: 'note',
        value: 'note',
        groupable: false
      },
      {
        text: 'status',
        value: 'status',
        groupable: false
      },
      {
        text: 'actions',
        value: 'actions',
        groupable: false
      },

    ],
    defaultOutgoing: {
      id: "",
      relatedCustomer: '',
      date: "",
      type: "",
      account: "",
      amount: "",
      owner: '',
      note: ""
    },
  }),
  components: {
    datatable,
  },
  computed: {
    test() {
      return this.data
    }
  },
}
</script>

<style lang="scss">
</style>
