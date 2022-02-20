<template>
  <div id="nav">
    <nav id="logo" :class="home ? 'logo-translate' : ''">
      <h1>Michael Kozak</h1>
      <p v-if="this.$route.path == '/'" class="fade-in fade-in-delay">
        Programmer
      </p>
    </nav>

    <div class="social-media-icons">
      <div v-for="social in social" :key="social.name" class="social-icon">
        <a :href="`${social.link}`" target="_blank">
          <img :src="`${social.image}`" :alt="`${social.name}`" />
        </a>
      </div>
    </div>

    <div id="nav-btns" :class="home ? 'nav-translate' : ''">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/experience">Experience</router-link> |
      <router-link to="/projects">Projects</router-link>
    </div>
    <hr id="logo-hr" :class="home ? 'hr-translate' : ''" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: null,
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
          name: "Email",
          image: require("@/assets/images/email.png"),
          link: "mailto:charlesmichaelk@gmail.com",
        },
      ],
    };
  },
  watch: {
    $route(to, from) {
      if (to.path === "/") {
        this.home = true;
      } else if (from.path === "/") {
        this.home = false;
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
  @media only screen and (max-width: 1280px) and (min-width: 850px) {
    width: 50%;
  }
  #logo,
  #nav-btns,
  #logo-hr {
    transition: all 1s ease-in-out;
  }
  h1 {
    font-size: 70px;
    margin-top: 30px;
    margin-bottom: 30px;
    @media only screen and (max-width: 1000px) and (min-width: 850px) {
      font-size: 60px;
    }
    @media only screen and (max-width: 849px) {
      font-size: 40px;
    }
  }
  p {
    font-size: 35px;
    position: absolute;
    left: 0;
    right: 0;
    margin: -20px auto auto 0;
    width: 100%;
    @media only screen and (max-width: 849px) {
      font-size: 25px;
    }
  }
  #nav-btns {
    font-size: 20px;
  }
  a {
    font-weight: bold;
    color: rgb(145, 145, 145);
    text-decoration: none;
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
    a img {
      width: 64px;
    }
  }
}

.logo-translate {
  transform: translate(30vw, 20vw);
  @media only screen and (max-width: 849px) {
    transform: translateY(35vh);
  }
}
.nav-translate {
  transform: translate(0px, -120px);
}
.hr-translate {
  opacity: 0;
}

@media only screen and (max-width: 849px) {
  #nav {
    width: 100%;
  }
  .social-media-icons {
    position: initial;
    margin-top: -20px;
    margin-bottom: 10px;
    .social-icon a img {
      width: 40px;
    }
  }
  .content {
    margin-top: 50px;
  }
}
</style>
