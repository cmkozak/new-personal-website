<template>
  <div id="nav">
    <nav id="logo">
      <h1>Michael Kozak</h1>
      <p v-if="this.$route.path == '/'"></p>
    </nav>
    <div id="nav-buttons">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/experience">Experience</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <hr id="logo-hr" />
  </div>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
      if (to.path == "/") {
        document.getElementById("logo").classList.add("logo-translate");
        document.getElementById("nav-buttons").classList.add("nav-translate");
        document.getElementById("logo-hr").classList.add("hr-translate");
      } else if (from.path == "/") {
        document.getElementById("logo").classList.add("normal");
        document.getElementById("nav-buttons").classList.add("normal");
        document.getElementById("logo-hr").classList.add("normal");
        document
          .getElementById("nav-buttons")
          .classList.remove("nav-translate");
        document.getElementById("logo").classList.remove("logo-translate");
        document.getElementById("logo-hr").classList.remove("hr-translate");
      }
      if (from.path == "/" && to.name == "Home") {
        // TODO: Add typing/loading in animation logic
      }
    },
  },
};
</script>

<style lang="scss">
#nav {
  text-align: center;
  width: 40%;
  height: 155px;
  #logo h1 {
    font-size: 70px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  #nav-buttons {
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

.logo-translate {
  transform: translate(30vw, 20vw);
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
.nav-translate {
  transform: translate(0px, -120px);
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
.hr-translate {
  opacity: 0;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
.normal {
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
</style>
