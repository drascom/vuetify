<template>
	<v-card class="mx-auto mb-4" color="white" tile>
		<v-list rounded>
			<v-subheader>Information</v-subheader>
			<v-list-item-group v-model="customer" color="primary">
				<v-list-item>
					<v-list-item-content>
						<v-textarea readonly name="input-7-1" label="Personal note" :value="customer.note" hint="Personal note"></v-textarea>
					</v-list-item-content>
				</v-list-item>

				<v-list-item>
					<v-list-item-icon>
						<v-icon color="indigo">mdi-account</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>{{ customer.recordedBy}}</v-list-item-title>
						<v-list-item-subtitle>Agent</v-list-item-subtitle>
					</v-list-item-content>
					<v-list-item-icon>
						<v-icon>mdi-message-text</v-icon>
					</v-list-item-icon>
				</v-list-item>

				<v-list-item @click="">
					<v-list-item-icon>
						<v-icon color="indigo">mdi-phone</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>{{ customer.mobile_phone}}</v-list-item-title>
						<v-list-item-subtitle>Mobile</v-list-item-subtitle>
					</v-list-item-content>

					<v-list-item-icon>
						<a :href="`tel:${customer.phone}`" class="text-decoration-none">
							<v-icon color="green">mdi-phone</v-icon>
						</a>
					</v-list-item-icon>
				</v-list-item>

				<v-list-item @click="">
					<v-list-item-icon>
						<v-icon color="indigo">mdi-email</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>{{ customer.email}}</v-list-item-title>
						<v-list-item-subtitle>Email</v-list-item-subtitle>
					</v-list-item-content>
					<v-list-item-icon>
						<a :href="`mailto:${customer.email}`" class="text-decoration-none">
							<v-icon>mdi-send</v-icon>
						</a>
					</v-list-item-icon>
				</v-list-item>

				<v-list-item>
					<v-list-item-icon>
						<v-icon color="indigo">mdi-flag</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Adress</v-list-item-title>
						<v-list-item-subtitle v-for="(item,i) in customer.location" :key="i">{{ item}} </v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>

			</v-list-item-group>
		</v-list>
	</v-card>
</template>

<script>
export default {
	name: "cutomerInformation",
	props: {
		customer: {
			type: Object,
			default: () => {},
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
