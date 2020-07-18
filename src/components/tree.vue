<template>
	<div>
		<v-list-item v-for="item,title,index in node" :key="index" class="d-flex justify-space-between">
			<div v-show="title !='children'" class="pl-5">
				<span class="title"> {{ title.toUpperCase().replace(/_/g, " ") }} : </span>
				<span class="subtitle">{{item}}</span>
			</div>
		</v-list-item>
		<v-list v-if="node.children && node.children.length">
			<tree v-for="child in node.children" :node="child" :key="child.label"></tree>
		</v-list>
	</div>
</template>

<script>
export default {
	name: "tree",
	props: {
		node: {
			type: Object,
			default: () => {}
		}
	},
	methods: {
		hasChild(item) {
			return typeof item == "object" ? true : false;
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
