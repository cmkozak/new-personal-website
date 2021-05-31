<template>
  <div id="nav" :class="{ home: this.$route.path == '/' }">
    <h1 id="logo">Michael Kozak</h1>
    <div class="nav-buttons">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/experience">Experience</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#nav {
  text-align: center;
  width: 40%;
  #logo {
    font-size: 70px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .nav-buttons {
    font-size: 20px;
  }
  a {
    font-weight: bold;
    color: rgb(172, 172, 172);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

hr {
  margin-top: 20px;
  width: 100%;
}

.home {
  #logo {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  hr {
    display: none;
  }
}
</style>
