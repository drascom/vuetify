<template>
  <v-data-table dense :headers="headers" :items="desserts" item-key="name" class="elevation-1"></v-data-table>
</template>

<script>
  export default {
    data: () => ({
      desserts: [
        {
          type: 'sell',
          title: 'Treatment',
          amount: 2000,
          status: 'prepared',
        },
        {
          type: 'sell',
          title: 'invoice',
          amount: 100,
          status: 'confirmed',
        },

      ],
      headers: [
        {
          text: 'Type',
          align: 'start',
          sortable: false,
          value: 'type',
        },
        { text: 'Title', value: 'title' },
        { text: 'Amonut ', value: 'amount' },
        { text: 'Status (g)', value: 'status' },
      ],
    }),
  }
</script>
