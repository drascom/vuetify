<template>
	<div>
		<v-card color="primary lighten-3" class="pt-1" v-if="listMode" flat>
			<v-alert border="left" type="info" colored-border color="error accent-4" class="my-4 mx-4" elevation="1">
				Last reservation is Not Confirmed Yet !
			</v-alert>
			<v-list>
				<v-list-item>
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
				</v-list-item>
				<v-hover v-slot="{ hover }" v-for="(item,index) in visitList" :key="index">
					<v-list-item :to="`visit/${item.id}`" :class="`elevation-${hover ? 6 : 1}`">
						<v-list-item-content>
							<v-container>
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
							</v-container>
						</v-list-item-content>
					</v-list-item>
				</v-hover>
			</v-list>
		</v-card>

	</div>
</template>

<script>
export default {
	name: "VisitsList",
	data() {
		return {
			itemId: "",
			listMode: true
		};
	},
	props: {
		visitList: {
			type: Array,
			default: () => [],
			required: true
		}
	},
	methods: {
		setItem(id) {
			this.itemId = parseInt(id);
			(this.listMode = false), this.$emit("panelOpen", id);
		},

		none() {
			this.$emit("panelOpen", "");
			this.item = {};
			this.listMode = true;
		}
	}
};
</script>

<style lang="scss" scoped>
.v-list-item {
	transition: all 0.3s ease;
	background: #fff;
}

.v-list-item :hover {
	transform: translateY(-2px);
}
</style>
