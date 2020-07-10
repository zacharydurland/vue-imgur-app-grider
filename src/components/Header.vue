<template>
  <header>
    <nav>
      <div id="nav" class="ui menu">
        <a class="item">
          <strong>PIXUP.io</strong>
        </a>
        <span v-if="username" class="item">Hello, {{ username }}</span>
        <span v-else class="item"> Made with Imgur</span>
        <div class="right menu" v-if="isLoggedIn">
          <router-link to="/" class="item">Images</router-link>
          <router-link to="/upload" class="item">Upload</router-link>
          <a class="item" @click="logout">Logout</a>
        </div>
        <div class="right menu" v-else>
          <a class="item" @click="login"> Log In </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  methods: {
    ...mapActions(["login","logout"]),
  },
  computed: {
    ...mapGetters(["isLoggedIn","username"]),
  },
};
</script>

<style scoped>
  #nav {
    border-radius: 0;
  }
</style>
