<template>
  <AppHeader />
  <div class="main">
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
* {
  background-color: inherit;
}

html {
  background-image: linear-gradient(to bottom right, #0b0c10, #24262c);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #d1d1d1;
}

.fade-in {
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.fade-in-normal {
  -webkit-animation-name: fadeInNormal;
  animation-name: fadeInNormal;
}

.fade-in-delay {
  -webkit-animation-name: fadeInDelay;
  animation-name: fadeInDelay;
}

@-webkit-keyframes fadeInNormal {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}

@keyframes fadeInNormal {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@-webkit-keyframes fadeInDelay {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
  }
  50% {
    opacity: 0;
    -webkit-transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}

@keyframes fadeInDelay {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 0;
    -webkit-transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
