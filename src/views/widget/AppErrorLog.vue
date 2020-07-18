<template>
	<v-card v-if="errors">
           <v-sheet v-if="alert" transition="scale-transition" color="orange lighten-2" v-for="(error,index) in errors" :key="index">	{{error}}</v-sheet>
	</v-card>
</template>

<script>
export default {
	name: "AppErrorLog",
	data() {
		return {
			alert: true
		};
	},
	props: {
		errors: {
			type: Array,
			default: null
		}
	},
	created() {
		setTimeout(() => {
			this.alert = false;
		}, 1000);
	}
};
</script>
