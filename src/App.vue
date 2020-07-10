<template>
    <div id="app">
        <Header />
        <main>
            <vue-page-transition name="fade-in-right">
                <router-view class="ui container"></router-view>
            </vue-page-transition>
        </main>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    name: 'App',
    components: { Header }
}
</script>

<style >
#app {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

/* force main and whatever first dynamic element is to page height */
main, main >  * {
    height: 100%;
}
.ui.container {
    margin-top: 50px;
    height: 100%;
}

body {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ececec' fill-opacity='0.43'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>