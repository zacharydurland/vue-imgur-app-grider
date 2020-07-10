<template>
    <div v-if="message1 || message2 || icon" class="message-container">
      <h1>{{message1}}</h1>
      <i :class="applyIcon"></i>
      <h3>{{message2}}</h3>
    </div>
    <div v-else class="message-container">
      <div>
        <i class="info circle icon"></i>
      </div>
      <h2>An Unknown Error Occured</h2>
      <h5>...or the error message is not available.</h5>
    </div>


</template>

<script>
export default {
    name: 'BodyMessage',
    props:['message1','message2','icon','animation','color'],
    computed: {
      applyIcon(){
        return `icon ${this.icon} ${this.animation ? this.animation : ''} ${this.color}`
      }
    }
}
</script>

<style scoped>
.message-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

h1 {
  font-size: 3em;
}

.icon {
  font-size: 50px;
  transition: all .2s;
  line-height: 50px;
  vertical-align: middle;
  margin: 0;
}

.rotate {
  animation-name: rotate360;
  animation-fill-mode: forwards;
  animation-duration: 1.25s;
}
@keyframes rotate360 {
  100% {
    transform: rotate(360deg)
  }
}
</style>
