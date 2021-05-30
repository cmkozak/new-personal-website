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
  background-color: #222629;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #86c232;
}

.main h1 {
  position: absolute;
  font-size: 80px;
  color: #fff;
  font-family: "Amatic SC", cursive;
  top: -40px;
  right: 10vw;
}
</style>
