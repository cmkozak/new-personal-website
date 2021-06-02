<template>
  <h1>Projects</h1>

  <div class="content projects">
    <div class="card-container">
      <div
        v-for="(projects, idx) in projects"
        :key="projects"
        class="card"
        :id="`${idx}`"
        @click="expandCard(idx)"
      >
        <div class="top-card-content">
          <img :src="`${projects.img}`" />
          <span v-if="projects.expanded === true" class="expanded side">
            <p class="language">{{ projects.languages[0] }}</p>
            <p class="live-demo" v-if="projects.demolink">
              {{ projects.demolink }}
            </p>
            <a
              class="github-link"
              :href="`${projects.githublink}`"
              target="_blank"
            >
              <span>View on Github</span>
              <img src="../assets/images/GitHub-Mark-Light-64px.png" />
            </a>
          </span>
        </div>
        <p>{{ projects.name }}</p>
        <span
          v-if="projects.expanded === true"
          class="expanded content"
          v-html="projects.info"
        >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Old Portfolio Website",
          languages: ["React"],
          img: require("@/assets/images/old-portfolio-website.png"),
          githublink: "https://github.com/cmkozak/personal-website",
          demolink: "",
          inprogress: false,
          expanded: false,
          info: `In my previous portfolio, my goal was to expand my knowledge on React and Javascript by creating a single page website that features a large amount of animations and transitions.<br/>
      Before starting this website I had never used React before but I knew that I wanted to make my portfolio interactive so I started learning React a few months prior to creating this website.<br/>
      I eventaully scrapped the project in early 2019.`,
        },
        {
          name: "Currency Converter",
          languages: ["Javascript"],
          img: require("@/assets/images/currency-converter.png"),
          githublink: "https://github.com/cmkozak/currency-converter",
          demolink: "",
          inprogress: false,
          expanded: false,
          info: `"I created this project mostly to familiarize myself with using HTTP GET requests. Creating a simple single-page website that converts from 12 different currencies types to many different currencies used all over the world.<br/>
          The website I use to get the information from is http://www.floatrates.com/json-feeds.html which offers free currency converters from many different countries updated daily.</br>
          The project doesn’t look very pretty and I didn’t spend a lot of time on the design parts of it. I mostly just wanted to quickly throw some design together and get used to utilizing API requests."`,
        },
        {
          name: "New Portfolio Website",
          languages: ["Vue"],
          img: "",
          githublink: "https://github.com/cmkozak/new-personal-website",
          demolink: "",
          inprogress: true,
          expanded: false,
          info: `""`,
        },
      ],
    };
  },
  methods: {
    expandCard(index) {
      // TODO: Need better logic here
      let cardElements = document.getElementsByClassName("card");
      for (let i = 0; i < this.projects.length; i++) {
        if (
          cardElements[i].id == index &&
          !cardElements[i].classList.contains("active")
        ) {
          cardElements[i].classList.add("active");
          this.projects[i].expanded = true;
        } else if (cardElements[i].classList.contains("active")) {
          cardElements[i].classList.remove("active");
          cardElements[i].classList.add("active-fadeout");
          this.projects[i].expanded = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  margin-top: 50px;
}

.card {
  margin-left: 40px;
  margin-bottom: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  width: 300px;
  height: 200px;
  background-color: rgb(46, 46, 46) !important;
  box-shadow: 4px 4px 3px white;
  display: inline-block;
  vertical-align: top;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
  * {
    background-color: rgb(46, 46, 46);
  }
  img {
    margin-left: 10px;
    margin-right: auto;
    margin-top: 10px;
    display: block;
    width: 280px;
    height: 141px;
    filter: blur(1px);
    -webkit-transition: filter 1s ease-in-out;
    -moz-transition: filter 1s ease-in-out;
    -o-transition: filter 1s ease-in-out;
    transition: filter 1s ease-in-out;
  }
  p {
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
    margin-right: 20px;
  }
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
  &:hover img {
    transform: scale(1.01);
  }
}

.active {
  width: 600px;
  height: 400px;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
  .content {
    display: block;
    padding-left: 8px;
  }
  .top-card-content {
    display: flex;
    justify-content: space-between;
    img {
      filter: none;
      -webkit-transition: filter 1s ease-in-out;
      -moz-transition: filter 1s ease-in-out;
      -o-transition: filter 1s ease-in-out;
      transition: filter 1s ease-in-out;
    }
    .side {
      vertical-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

.github-link {
  display: inline-block;
  background-color: black;
  padding: 7px 7px 7px 7px;
  border-radius: 20px;
  align-content: center;
  text-align: center;
  color: #fff;
  * {
    background-color: black;
  }
  span {
    display: inline-block;
  }
  img {
    width: 32px;
    height: 32px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 0 0 10px;
  }
}
</style>
