<template>
  <div style="position: relative;" class="parent">
    <vue-picture-swipe
      :items="photos"
      :options="{ modal: true, preload: [1, 3] }"
    ></vue-picture-swipe>
  </div>
</template>

<script>
import VuePictureSwipe from "vue-picture-swipe";
export default {
  name:'pictureSwipeComponent',
  props: {
    photos: {
      type: Array,
      default: () => []
    }
  },
  components: {
    VuePictureSwipe
  }
};
</script>
<style lang="scss">
.pswp {
  z-index: 43000;
}
</style>
