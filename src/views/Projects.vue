<template>
  <h1>Projects</h1>

  <div class="content projects">
    <div class="card-container">
      <div
        v-for="(projects, idx) in projectdata.projects"
        :key="projects"
        class="card"
        :id="`${idx}`"
        @click="expandCard(idx)"
      >
        <img :src="`${projects.img}`" />
        <p>{{ projects.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["projectdata"]),
  },
  methods: {
    expandCard(index) {
      let cardElements = document.getElementsByClassName("card");
      for (let i = 0; i < this.projectdata.projects.length; i++) {
        if (
          cardElements[i].id == index &&
          !cardElements[i].classList.contains("active")
        ) {
          cardElements[i].classList.add("active");
          this.$store.state.projectdata.projects[i].expanded = true;
        } else if (cardElements[i].classList.contains("active")) {
          cardElements[i].classList.remove("active");
          cardElements[i].classList.add("active-fadeout");
          this.$store.state.projectdata.projects[i].expanded = false;
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
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
  * {
    background-color: rgb(46, 46, 46) !important;
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
  img {
    filter: none;
    -webkit-transition: filter 1s ease-in-out;
    -moz-transition: filter 1s ease-in-out;
    -o-transition: filter 1s ease-in-out;
    transition: filter 1s ease-in-out;
  }
}
</style>
