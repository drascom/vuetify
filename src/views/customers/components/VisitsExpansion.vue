<template>
	<v-card color="primary lighten-3" class="pt-1">
		<v-alert v-if="panel < 0 || !panel " border="left" type="info" colored-border color="error accent-4" class="my-4 mx-4" elevation="1">
			Last reservation is Not Confirmed Yet !
		</v-alert>

		<v-toolbar>
			<v-icon v-if="panel > 0 " @click="none" right>mdi-arrow-left</v-icon>
			<v-toolbar-title class="pl-3">All Visits</v-toolbar-title>
		</v-toolbar>
		<v-expansion-panels v-model="panel" hover focusable inset @change="panelClick($event)">
			<v-expansion-panel readonly>
				<v-expansion-panel-header color="grey lighten-4">
					<v-row no-gutters class="d-flex justify-start align-center text-uppercase font-weight-bold">
						<v-col cols="4" sm="3">
							Type
						</v-col>
						<v-col cols="3" sm="3">
							Date
						</v-col>
						<v-col cols="3" class="d-none d-sm-flex">
							Treatment
						</v-col>
						<v-col cols="4" sm="3">
							Status
						</v-col>
					</v-row>
				</v-expansion-panel-header>
			</v-expansion-panel>
			<v-expansion-panel focusable v-for="(item,index) in visits" :key="index">
				<v-expansion-panel-header>
					<v-row no-gutters class="d-flex justify-start align-center text-subtitle-2 text-sm-body-1 text-md-button">
						<v-col cols="4" sm="3" class="">
							{{item.type}}
						</v-col>
						<v-col cols="3" sm="3">
							{{item.date}}
						</v-col>
						<v-col cols="3" class="d-none d-sm-flex">
							{{item.treatment}}
						</v-col>
						<v-col cols="4" sm="3">
							<v-chip class="ma-2" :color="item.status_color" small>
								{{item.status}}
							</v-chip>
						</v-col>
					</v-row>
					<template v-slot:actions>
						<v-icon large @click="">
							mdi-chevron-right
						</v-icon>
					</template>
				</v-expansion-panel-header>
				<v-expansion-panel-content color="" elevation="6" class="px-0">
					<visit :item="item" />
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</v-card>
</template>

<script>
import visit from "./visit.vue";
export default {
	name: "VisitsList",
	data() {
		return {
			panel: -1
		};
	},
	props: {
		visits: {
			type: Array,
			default: () => [],
			required: true
		}
	},
	components: {
		visit
	},
	methods: {
		panelClick(event) {
			console.log("panel click event ", event);
			this.$emit("panelOpen", event);
		},
		none() {
			(this.panel = -1),
				setTimeout(() => {
					this.$emit("panelOpen", "");
				}, 500);
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
