<template>
  <div class="content about fade-in fade-in-normal">
    <div class="left">
      In the summer of 2020, I graduated from Henderson State University with a
      Bachelors's in Computer Science. I've always enjoyed programming but,
      after school, I discovered that I had a passion for web development.
      <br />
      I currently work in Technical Operations at Apptegy, but I try to work on
      projects and learn code in my free time. I’m currently focusing on
      learning more about Vue and I'm working on a new social media application
      to help. Feel free to view my progress in the Projects tab!
    </div>
    <img src="@/assets/images/headshot.jpg" alt="Headshot" class="right" />
  </div>
</template>

<style lang="scss" scoped>
.about {
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
.left {
  width: 500px;
  min-height: fit-content;
  border-radius: 5vw;
  padding: 40px;
  border: 1px solid white;
  background-color: #222222;
  box-shadow: -4px 4px 3px white;
  font-size: 18px;
  line-height: 28px;
}
.right {
  height: 40vh;
  border-radius: 20%;
  margin-left: -40px;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 50%, transparent 100%);
  @media only screen and (max-width: 800px) {
    display: none;
  }
}
</style>
