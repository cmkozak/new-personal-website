<template>
  <div id="nav">
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

<style lang="scss" scoped>
#nav {
  text-align: center;
  width: 33%;
  #logo {
    font-size: 50px;
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
</style>
