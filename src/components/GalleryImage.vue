<template>
  <div :class="imageState">
    <img :src="src" />
    <i class="icon trash white" @click="showDeleteModal" />
    <div class="delete-prompt">
      <h3>Delete Image?</h3>
      <div class="ui buttons">
        <div
          @click="handleDelete"
          class="ui button red"
        >
          Delete
        </div>
        <div @click="hideDeleteModal" class="ui button">Cancel</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["src", "deletehash"],
  data() {
    return {
      promptIsActive: false,
    };
  },
  methods: {
    ...mapActions(["deleteImage","fetchImages"]),
    showDeleteModal() {
      this.promptIsActive = true;
    },
    hideDeleteModal() {
      this.promptIsActive = false;
    },
    handleDelete() {
      this.deleteImage(this.deletehash)
      .then(()=>{
          this.fetchImages();
      })
    },
  },
  computed: {
    imageState() {
      return this.promptIsActive ? "image-group prompt-active" : "image-group";
    },
  },
};
</script>

<style lang="scss" scoped>
.image-group {
  position: relative;
  cursor: pointer;
}

.image-group img {
  position: relative;
}

.image-group .icon {
  opacity: 0;
  position: absolute;
  top: 15px;
  right: 15px;
  color: white;
  transition: 0.15s ease-in-out;
}

.image-group:hover .icon {
  opacity: 1;
}

.image-group:hover .icon:hover {
  opacity: 1;
  color: red;
}

.image-group.prompt-active {
  color: white;
  img {
    filter: brightness(0.33);
  }
  .icon {
    opacity: 0;
  }
  .delete-prompt {
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.8);
  }
}

.image-group .delete-prompt {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  pointer-events: unset;
  transition: 0.2s ease-in-out;
}

.image-group {
  &.prompt-active {
    .delete-prompt {
      opacity: 1;
    }
  }
}
</style>
