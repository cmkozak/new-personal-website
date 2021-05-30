import { createStore } from "vuex";

export default createStore({
  state: {
    projectdata: {
      projects: [
        {
          name: "Old Portfolio Website",
          languages: ["React"],
          img: require("@/assets/images/old-portfolio-website.png"),
          githublink: "https://github.com/cmkozak/personal-website",
          demolink: "",
          inprogress: false,
          expanded: false,
          info: `"With this portfolio website, I wanted to gain some knowledge on React and Javascript by creating a single page website that features a large amount of animations and transitions.
      Before starting this website I had never used React before but I knew that I wanted to make my portfolio interactive so I started learning React a few months prior to creating this website. While I'm still not great at React I'm learning more and more everyday.
      What you see now is not a finished project. As I learn more about Javascript and it's frameworks, I'll push out new updates here and on Github."`,
        },
        {
          name: "Currency Converter",
          languages: ["Javascript"],
          img: require("@/assets/images/currency-converter.png"),
          githublink: "https://github.com/cmkozak/currency-converter",
          demolink: "",
          inprogress: false,
          expanded: false,
          info: `"I created this project mostly to familiarize myself with using HTTP GET requests. Creating a simple single-page website that converts from 12 different currencies types to many different currencies used all over the world.
          The website I use to get the information from is http://www.floatrates.com/json-feeds.html which offers free currency converters from many different countries updated daily.
          The project doesn’t look very pretty and I didn’t spend a lot of time on the design parts of it. I mostly just wanted to quickly throw some design together and get used to utilizing API requests. In the future, I want to clean up the website to look more appealing."`,
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
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
