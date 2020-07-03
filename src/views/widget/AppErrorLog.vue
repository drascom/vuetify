<template>
<v-card v-if="errors">
   <v-alert
   dense
   dismissible
   outlined
   transition="scale-transition"
   close-icon="mdi-delete"
   type="info"
   v-for="(error,index) in errors"  :key="index">
      {{error}}
    </v-alert>
</v-card>
</template>

<script>
export default {
  name: 'AppErrorLog',
  props: {
    errors: {
      type: Array,
      default:null
    },
  },
};
</script>
