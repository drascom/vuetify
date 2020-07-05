<template>
	<v-expansion-panels>
		<v-expansion-panel v-for="(panel,i) in panels" :key="i">
			<v-expansion-panel-header>{{panel.header}}</v-expansion-panel-header>
			<v-expansion-panel-content>
				{{ panel.content}}</v-expansion-panel-content>
		</v-expansion-panel>
	</v-expansion-panels>
</template>

<script>
export default {
	name: "ExpansionPanels",
	props: {
		panels: {
			type: Array,
			required: true,
			default: () => []
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
