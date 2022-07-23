<template>
  <div class="content about fade-in fade-in-normal">
    <div class="left">
      In the summer of 2020, I graduated from Henderson State University with a
      Bachelors's in Computer Science. I've always enjoyed programming but,
      after school, I discovered that I had a passion for web development.
      <br />
      I started working at Apptegy in Technical Operations where I lead client
      focused support shifts, tested software changes before releasing to
      production, and helped write scripts for various client needs
      <br />
      After working in Tech Ops for about a year and a half, I joined the
      engineering team as a front end developer working primarily in the Vue.js
      framework, but also doing various backend changes using Ruby on Rails as
      well.
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
  height: 43vh;
  border-radius: 20%;
  margin-left: -40px;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 50%, transparent 100%);
  @media only screen and (max-width: 800px) {
    display: none;
  }
}
</style>
