<template>
  <h1>Projects</h1>

  <div class="content projects">
    <div class="card-container">
      <div
        v-for="projects in projectdata.projects"
        :key="projects"
        class="card"
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
};
</script>

<style lang="scss" scoped>
.card-container {
  margin-top: 50px;
}

.card {
  margin-left: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  width: 300px;
  height: 200px;
  background-color: rgb(46, 46, 46) !important;
  box-shadow: 4px 4px 3px white;
  display: inline-block;
  * {
    background-color: rgb(46, 46, 46) !important;
  }
  img {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    display: block;
    width: 280px;
    height: 141px;
    filter: blur(1px);
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
</style>
