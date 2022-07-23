<template>
  <div class="content projects fade-in fade-in-normal">
    <p id="instruction">Click on a card to view more information.</p>
    <div class="card-container">
      <div
        v-for="(projects, idx) in projects"
        class="card"
        :key="projects"
        :class="idx === active && 'active'"
        @click="expandCard(idx)"
      >
        <div class="top-card-content">
          <img :src="projects.img" :alt="projects.name" />
          <p class="project-name-xs">{{ projects.name }}</p>
          <span class="expanded fade-in fade-in-delay">
            <p class="language fade-in fade-in-delay">
              {{ projects.languages[0] }}
            </p>
            <p class="live-demo fade-in fade-in-delay" v-if="projects.demolink">
              {{ projects.demolink }}
            </p>
            <a
              v-if="projects.githublink"
              :href="projects.githublink"
              class="github-link fade-in fade-in-delay"
              target="_blank"
              @click.stop
            >
              <span>View on Github</span>
              <img src="../assets/images/github.png" class="github-img" />
            </a>
          </span>
        </div>
        <p class="project-name">{{ projects.name }}</p>
        <span
          class="expanded content fade-in fade-in-delay"
          v-html="projects.info"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      projects: [
        {
          name: "Old Portfolio Website",
          languages: ["React"],
          img: require("@/assets/images/old-portfolio-website.png"),
          githublink: "https://github.com/cmkozak/personal-website",
          demolink: "",
          info: `In my previous portfolio, my goal was to expand my knowledge on React and Javascript by creating a single page website that features a large amount of animations and transitions.<br/>
      Before starting this website I had never used React before but I knew that I wanted to make my portfolio interactive so I started learning React a few months prior to creating this website.<br/>
      I eventaully scrapped the project in early 2020.`,
        },
        {
          name: "Currency Converter",
          languages: ["Javascript"],
          img: require("@/assets/images/currency-converter.png"),
          githublink: "https://github.com/cmkozak/currency-converter",
          demolink: "",
          info: `I created this project mostly to familiarize myself with API's and GET requests. It's a simple single-page website that converts currencies.<br/>
          The website I use to get the information from is Floatrates which offers free currency converters from many different countries.</br>
          The project isn't pretty but I mostly just wanted to throw something together to get used to utilizing API requests.`,
        },
        {
          name: "New Portfolio Website",
          languages: ["Vue"],
          img: require("@/assets/images/new-website.png"),
          githublink: "https://github.com/cmkozak/new-personal-website",
          demolink: "",
          info: `After I started working at Apptegy, I decided to learn Vue in an attempt to better understand the code that I was testing<br>
          I also knew that my personal website needed to be updated since it had been a few years since I created my old website<br>
          Thus, I went on a journey to learn Vue and put together a new portfolio website with the skills I aquired.`,
        },
        {
          name: "Poetry Social Media App",
          languages: ["Vue"],
          img: require("@/assets/images/in_progress.png"),
          githublink: "https://github.com/cmkozak/social-poetry",
          demolink: "",
          info: `To continue learning Vue I decided to create a social media app specifically for poetry.<br>
          I wanted to give myself a large project that deals with database interaction (I'm using MongoDB) and a complex front end.<br>
          It's still a work in progress, you can check out my progress in my Github repo!`,
        },
      ],
    };
  },
  methods: {
    expandCard(index) {
      this.active === index ? (this.active = null) : (this.active = index);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-left: 40px;
  margin-bottom: 40px;
  border: 1px solid white;
  width: 300px;
  height: 200px;
  background-color: #2e2e2e;
  box-shadow: 4px 4px 3px white;
  display: inline-block;
  vertical-align: top;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
  * {
    background-color: #2e2e2e;
  }
  img {
    margin-left: 10px;
    margin-right: auto;
    margin-top: 10px;
    display: block;
    width: 280px;
    max-height: fit-content;
    filter: blur(1px);
    -webkit-transition: filter 1s ease-in-out;
    -moz-transition: filter 1s ease-in-out;
    -o-transition: filter 1s ease-in-out;
    transition: filter 1s ease-in-out;
  }
  p {
    text-align: center;
    font-weight: bold;
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
  .project-name {
    @media only screen and (max-width: 689px) {
      display: none;
    }
  }
  .top-card-content {
    .project-name-xs {
      @media only screen and (min-width: 690px) {
        display: none;
      }
    }
  }
  .expanded {
    display: none;
  }
}
.active {
  width: 600px;
  height: 400px;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
  &:hover {
    cursor: auto;
    transform: none;
  }
  .content {
    display: block;
    padding-left: 8px;
    padding-right: 8px;
  }
  .top-card-content {
    display: flex;
    justify-content: space-between;
    .project-name {
      display: none;
    }
    img {
      filter: none;
      -webkit-transition: filter 1s ease-in-out;
      -moz-transition: filter 1s ease-in-out;
      -o-transition: filter 1s ease-in-out;
      transition: filter 1s ease-in-out;
    }
  }
  .expanded {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
.github-link {
  display: block;
  background-color: black;
  padding: 7px 7px 7px 7px;
  border-radius: 20px;
  width: fit-content;
  margin: 0 auto;
  color: #fff;
  * {
    background-color: black;
  }
  span {
    display: inline-block;
  }
  .github-img {
    width: 32px;
    height: 32px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 0 0 10px;
  }
}
#instruction {
  margin-left: 10px;
}
@media only screen and (max-width: 690px) {
  .card-container {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
  .card {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    img {
      margin-left: auto;
      margin-right: auto;
    }
  }
  .active {
    height: 600px;
    .top-card-content {
      display: block;
    }
    .content {
      text-align: center;
      margin-top: 30px;
    }
    .language {
      font-size: 18px;
    }
  }
}
</style>
