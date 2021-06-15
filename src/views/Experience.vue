<template>
  <div class="content experience fade-in fade-in-normal">
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
        My primary role on Tech Ops is being the lead for the testing team. On
        the testing team, we test changes that dev made to our products before
        release to ensure that the changes lived up to the acceptance criteria
        and to ensure that no new bugs were introduced in the changes. In
        addition to testing, I wrote many Ruby console scripts to interact with
        our database, assist clients in our customer support chat, and help in
        assisting the Client Experience team.
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
        I started interning at Apptegy when I was in my senior year of high
        school and continued to come back every summer and winter break when I
        was in college. I interned for many different teams, most notably the
        People team where I assisted with an HR platform migration, Sales
        Operations where I researched the sales team on prospective clients, and
        the Content Migration team where I migrated static content from clients'
        old website to our platform.
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
