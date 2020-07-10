<template>
	<v-card v-if="errors">
		<v-alert :value="alert" dense dismissible outlined transition="scale-transition" close-icon="mdi-delete" type="info" v-for="(error,index) in errors" :key="index">
			{{error}}
		</v-alert>
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
