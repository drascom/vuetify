<template>
	<v-card class="mx-auto px-2">
		<v-card-title>{{$t('customer.gallery') }}</v-card-title>
		<v-row >
			<v-col v-for="photo,index in photos" :key="index" class="d-flex child-flex" cols="4">
				<v-card flat tile class="d-flex">
					<v-img :src="photo.thumbnail" :lazy-src="photo.src" aspect-ratio="1" class="grey lighten-2">
						<template v-slot:placeholder>
							<v-row class="fill-height ma-0" align="center" justify="center">
								<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
							</v-row>
						</template>
					</v-img>
				</v-card>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
export default {
	name: "CustomerGallery",
	props: {
		photos: {
			type: Array,
			default: () => [],
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
