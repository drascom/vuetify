<template>
<v-data-table
  :headers="headers"
  :items="items"
  disable-filtering
  disable-sort
  item-key="id"
  hide-default-header
  hide-default-footer
  sort-by="amount"
  class="elevation-4 pt-5 font-weight-medium">
  <template v-slot:top>
    <v-toolbar flat color="white">
      <v-toolbar-title>{{tableTitle}}</v-toolbar-title>
      <v-divider
        class="mx-4"
        inset
        vertical></v-divider>
      <v-spacer></v-spacer>
      <v-btn
        v-if="typeOfTable == 'income'"
        color="orange"
        dark
        small
        class="mx-2"
        @click.stop="dialog=true,editedItem.type='gelir'">
        Tahsilat</v-btn>
      <v-btn
        v-if="typeOfTable == 'income'"
        color="primary"
        dark
        small
        class="mx-2"
        @click.stop="dialog=true,editedItem.type='alacak'">
        Hizmet Ekle</v-btn>
      <v-btn
        v-if="typeOfTable == 'outgoing'"
        color="error"
        dark
        small
        class="mx-2"
        @click.stop="dialog=true,editedItem.type='gider'">
        Gider Ekle
      </v-btn>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition">
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
                    v-model="datemenu"
                    close-on-content-click
                    transition="scale-transition"
                    min-width="290px">
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="editedItem.date"
                        label="Date"
                        name="date"
                        color="primary"
                        v-on="on"
                        autocomplete="off">
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
                  v-if="typeOfTable == 'outgoing'"
                  cols=" 12"
                  sm="6"
                  md="4">
                  <v-select
                    v-model="editedItem.owner"
                    :items="owners"
                    label="Owner"></v-select>
                </v-col>
                <v-col
                  v-if="typeOfTable == 'outgoing'"
                  cols="12"
                  sm="6"
                  md="4">
                  <v-select
                    v-model="editedItem.categories"
                    :items="categories"
                    label="categories"></v-select>
                </v-col>
                <v-col
                  v-if="editedItem.type=='gelir'"
                  cols="12"
                  sm="6"
                  md="4">
                  <v-select
                    v-model="editedItem.account"
                    :items="incomeAccounts"
                    label="accounts"
                    autocomplete="off"></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4">
                  <v-text-field
                    type="number"
                    v-model="editedItem.amount"
                    label="Amount (€)"></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4">
                  <v-text-field v-model="editedItem.note" label="Note"></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4">
                  <v-switch
                    v-model="editedItem.status"
                    value
                    input-value="true"
                    label="Ödendi"></v-switch>
                </v-col>

              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error darken-1" @click="close">Cancel</v-btn>
            <v-btn color="success darken-1" @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
  </template>
  <template v-slot:header="{ props:{headers} }">
    <thead>
      <tr>
        <th
          v-for="(header,i) in headers"
          :key="i"
          >
          {{ $t(`tablefields.${header.text}`) }}
        </th>
      </tr>
    </thead>
  </template>
  <template v-slot:body.append="{ headers }">
    <tr>
      <th
        class="d-block d-sm-table-cell"
        v-for="(header,i) in headers"
        :key="i">
        <div v-if="header.value == 'amount'">
          {{ debt ? 'Debt : ' + debt : 'Total Expense : ' + sumField('amount')  }}{{ }}
        </div>
        <div v-else>
          <!-- empty table cells for columns that don't need a sum -->
        </div>

      </th>
    </tr>
  </template>
  <template v-slot:item.status="{ item }">
    <v-chip
      small
      :color="getColor(item.status)"
      dark>{{ item.status ? 'Ödendi':'Ödenmedi' }}</v-chip>
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
      @click="editItem('items',item)">
      mdi-pencil
    </v-icon>
    <v-icon medium @click="deleteItem('items',item)">
      mdi-delete
    </v-icon>
  </template>
  <template v-slot:no-data>
    No Data...
  </template>
</v-data-table>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    rows: {
      type: Array,
      default: () => [],
      required: true
    },
    headers: {
      type: Array,
      default: () => [],
      required: true
    },
    defaultItem: {
      type: Object,
      default: () => {},
      required: true
    },
    debt: {
      type: String,
      default: false,
      required: false
    },
    tableTitle: {
      type: String,
      default: 'Muhasebe',
      required: false
    },
    typeOfTable: {
      type: String,
      default: 0,
      required: false
    }
  },
  data: () => ({
    dialog: false,
    datemenu: false,
    paymentTypes: ['gelir', 'alacak', 'gider', 'odeme'],
    incomeAccounts: ['Bank Transfer', 'Cash', 'Credit Card'],
    incomeTypes: ['Invoice', 'Sell', 'Deposit'],
    owners: ['Rusya', 'HRM Turizm', 'Rixos Hotel', 'Anadolu Hastanesi'],
    categories: ['Genel Harcama', 'Acenta Ödemesi', 'Otel Gideri', 'Transfer Gideri', 'Hastane Gideri'],
    editedIndex: -1,
    editedItem: {},
    date: new Date().toISOString().substr(0, 10),

  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    items() {
      return this.rows
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
  },

  methods: {
    sumField(key) {
      // sum data in give key (property)
      return this.rows.reduce((a, b) => Number(a) + (Number(b[key]) || 0), 0)
    },
    getColor(item) {
      if (item) return 'success'
      else return 'error'
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

<style lang="scss" scoped>
th,
td {
  font-size: 16px !important;
}
</style>
