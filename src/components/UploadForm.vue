<template>
  <div id="uploadWrapper">
    <div v-if="isLoggedIn" class="dropper">
      <input
        type="file"
        multiple
        accept="image/*"
        @change="uploadImages($event.target.files)"
      />
      <BodyMessage message1="Drag and drop your images here." message2="... or click, if you must." icon="images" color="green" />
    </div>
    <BodyMessage v-else message2="Please log in." icon="circle info" color="yellow" />
  </div>
</template>

<script>
import BodyMessage from './BodyMessage.vue'
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "UploadForm",
  components: {
    BodyMessage
  },
  methods: {
    ...mapActions(["uploadImages"]),
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style scss scoped>

#uploadWrapper {
  height: 100%;
}


.dropper {
  height: 80%;
  border: 2px dashed gray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.dropper:hover {
  border-color: green;
}


input {
  opacity: 0;
  width: 100%;
  height: 30vh;
  position: absolute;
}
</style>
