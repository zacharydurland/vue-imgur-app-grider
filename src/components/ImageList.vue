<template>
  <!-- this template could be structured better. -->
  <div class="images-wrapper">
    <div v-if="isLoggedIn" class="images-wrapper">
      <div v-if="allImages.length">
        <div class="images-container">
          <GalleryImage
            v-for="image in allImages"
            :deletehash="image.deletehash"
            :key="image.link"
            :src="image.link"
          />
        </div>
      </div>

      <BodyMessage
        v-else
        message1="Oops! No images to show, yet."
        message2='Click "upload" in the menu to get started.'
        icon="meh circle"
        color="pink"
      />
    </div>
    <BodyMessage
      v-else
      message1="Welcome to Pixup."
      message2="Log in above to begin."
      icon="images"
      color="green"
    />
  </div>
</template>

<script>
import BodyMessage from "./BodyMessage.vue";
import GalleryImage from "./GalleryImage";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "ImageList",
  components: {
    BodyMessage,
    GalleryImage,
  },
  methods: {
    ...mapActions(["fetchImages"]),
  },
  created() {
    this.fetchImages();
  },
  computed: {
    ...mapGetters(["allImages", "isLoggedIn"]),
  },
};
</script>

<style scoped>
.images-wrapper {
  height: 100%;
}

.images-container {
  column-count: 4;
  column-gap: 0;
}
</style>

<style>
.images-container img {
  max-width: 100%;
  padding: 5px;
}
</style>
