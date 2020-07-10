<template>
    <BodyMessage icon="spinner" color="gray" animation="rotate" />
</template>

<script>
import BodyMessage from './BodyMessage'
import { mapActions } from 'vuex'

export default {
    name: 'AuthHandler',
    components: {
        BodyMessage
    },
    methods: {
        ...mapActions(['finalizeLogin'])
    },
    created(){
        this.finalizeLogin(window.location.hash)
    }
}
</script>