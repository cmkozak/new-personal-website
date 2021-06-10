<template>
  <div id="nav">
    <nav id="logo">
      <h1>Michael Kozak</h1>
      <p v-if="this.$route.path == '/'">
        Software Developer
      </p>
    </nav>
    <div id="nav-buttons">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/experience">Experience</router-link> |
      <router-link to="/projects">Projects</router-link>
    </div>
    <hr id="logo-hr" />
  </div>

  <div class="social-media-icons">
    <div v-for="social in social" :key="social.name" class="social-icon">
      <a :href="`${social.link}`" target="_blank">
        <img :src="`${social.image}`" :alt="`${social.name}`" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          name: "Github",
          image: require("@/assets/images/github.png"),
          link: "https://github.com/cmkozak",
        },
        {
          name: "LinkedIn",
          image: require("@/assets/images/linkedin.png"),
          link: "https://www.linkedin.com/in/charlesmichaelkozak/",
        },
        {
          name: "Instagram",
          image: require("@/assets/images/instagram.png"),
          link: "https://www.instagram.com/cmkozak4",
        },
        {
          name: "Resume",
          image: require("@/assets/images/document.png"),
          link:
            "https://docs.google.com/document/d/1ggZys3WpinWR53gihvgWKtQV0h0J7jTj-uZ9OQi0sQA/edit?usp=sharing",
        },
      ],
    };
  },
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
  #logo {
    h1 {
      font-size: 70px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    p {
      font-size: 40px;
      position: absolute;
      left: 0;
      right: 0;
      margin: -20px auto auto 0;
      width: 100%;
    }
  }
  #nav-buttons {
    font-size: 20px;
  }
  a {
    font-weight: bold;
    color: rgb(172, 172, 172);

    &.router-link-exact-active {
      color: #08fdd8;
    }
  }
  hr {
    margin-top: 20px;
    width: 100%;
  }
}

.content {
  margin-top: 40px;
}

.social-media-icons {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 40px;
  right: 5vw;
  .social-icon {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    a {
      img {
        width: 64px;
      }
    }
  }
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
