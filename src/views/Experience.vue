<template>
  <div class="content experience">
    <div class="apptegy-header">
      <div class="name">
        Apptegy
      </div>
      <div class="date">
        August 2016 - Present
      </div>
    </div>

    <div class="role">
      <div class="role-header">
        <div class="title">
          Technical Operations
        </div>
        <div class="time">
          June 2020 - Present
        </div>
      </div>
      <div class="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt
        iste accusantium quidem, libero reprehenderit tempore error iure
        molestias provident temporibus ea illo et hic, commodi eum ut voluptatum
        fuga.
      </div>
    </div>

    <hr />

    <div class="role">
      <div class="role-header">
        <div class="title">
          Intern
        </div>
        <div class="time">
          August 2016 - June 2020
        </div>
      </div>
      <div class="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        aperiam laudantium? Dignissimos, officia possimus odit molestiae atque,
        non omnis sint ratione cum aperiam quam eligendi incidunt placeat, unde
        ad modi?
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.apptegy-header {
  text-align: center;
  line-height: 45px;
  width: 80%;
  margin: auto;
  margin-bottom: 40px;
  .name {
    color: white;
    font-size: 50px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    &:before,
    &:after {
      content: "";
      flex: 1 1;
      border-bottom: 4px dotted;
    }
    &:before {
      margin-right: 40px;
    }
    &:after {
      margin-left: 40px;
    }
  }
  .date {
    font-style: italic;
  }
}
.role {
  margin-left: 20%;
  margin-right: 20%;
  .role-header {
    text-align: center;
    line-height: 30px;
    margin-bottom: 20px;
  }
  .title {
    font-size: 30px;
    font-weight: bold;
  }
  .time {
    font-style: italic;
    font-size: 14px;
  }
}

hr {
  width: 40%;
  margin-top: 35px;
  margin-bottom: 35px;
}
</style>
