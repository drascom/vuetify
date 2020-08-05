<template>
<v-container fluid class="mx-auto mb-5">
  <VueCtkDateTimePicker
    id="Date"
    label="Date"
    :value="transfer.date"
    :format="'YYYY-MM-DD HH:mm'"
    formatted="Do MMM ,dddd HH:mm"
    @input="editedItem.date=$event"
    class="mb-5"
    locale="tr" />
  <v-text-field
    placeholder="No Data..."
    v-if="transfer.title"
    :error="!editedItem.title"
    :success="editedItem.title"
    :value="transfer.title"
    @input="editedItem.title=$event">
    <template v-slot:label>
      <v-icon style="vertical-align: middle">mdi-all-inclusive</v-icon>
      <strong class="text-uppercase font-weight-medium"> Title
      </strong>
    </template>
  </v-text-field>
  <v-text-field
    placeholder="No Data..."
    :error="!editedItem.fromplace"
    :success="editedItem.fromplace"
    :value="transfer.fromplace"
    @input="editedItem.date=$event">
    <template v-slot:label>
      <v-icon style="vertical-align: middle">mdi-bus-side</v-icon>
      <strong class="text-uppercase font-weight-medium"> From
      </strong>
    </template>
  </v-text-field>
  <v-text-field
    placeholder="No Data..."
    :error="!editedItem.toplace"
    :success="editedItem.toplace"
    :value="transfer.toplace"
    @input="editedItem.date=$event">
    <template v-slot:label>
      <v-icon style="vertical-align: middle">mdi-bus-side</v-icon>
      <strong class="text-uppercase font-weight-medium"> To..
      </strong>
    </template>
  </v-text-field>
  <v-switch
      v-model="editedItem.status"
      :input-value="transfer.status"
      label=" Confirmed ?"
    ></v-switch>
</v-container>
</template>

<script>
const asyncDatePicker = import("vue-ctk-date-time-picker");
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
export default {
  name: "visitTransfers",
  data() {
    return {
      editedItem: {}
    };
  },
  props: {
    transfer: {
      type: Object,
      default: () => {}
    },
    editedIndex: {
      type: Number,
      default: ''
    }
  },
  components: {
    VueCtkDateTimePicker: () => asyncDatePicker,
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
