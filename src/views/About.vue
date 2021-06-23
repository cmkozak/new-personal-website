<template>
  <div class="content about fade-in fade-in-normal">
    <div class="left">
      I was born and raised in Little Rock, Arkansas. I attendned Henderson
      State University and graduated with a Bachelors in Computer Science in May
      2020.
      <br />
      At Henderson, I discovered that I had a passion for problem solving and
      troubleshooting. Which helped a lot with
    </div>
    <img src="@/assets/images/headshot.jpg" alt="Headshot" class="right" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  .left {
    width: 500px;
    height: 30vh;
    border-radius: 5vw;
    padding: 40px;
    border: 1px solid white;
    background-color: #222222;
    box-shadow: -4px 4px 3px white;
    font-size: 18px;
  }
  .right {
    height: 40vh;
    border-radius: 20%;
    margin-left: -40px;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 50%,
      transparent 100%
    );
  }
}
</style>
