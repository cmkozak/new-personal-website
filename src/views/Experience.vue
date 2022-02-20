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
          Developer
        </div>
        <div class="time">
          January 2022 - Present
        </div>
      </div>
      <div class="info">
        My emphasis is front-end development using the Vue.js Javascript
        framework, however, I will sometimes handle backend Ruby on Rails
        changes such as API endpoint modifications, schema modifications, etc.
      </div>
    </div>
    <hr />
    <div class="role">
      <div class="role-header">
        <div class="title">
          Technical Operations
        </div>
        <div class="time">
          June 2020 - January 2022
        </div>
      </div>
      <div class="info">
        My primary role on Tech Ops was leading the Tech Ops testing team. On
        the testing team, we tested changes that developers make to our products
        before release to ensure that the changes lived up to the acceptance
        criteria and heavily focused on ensuring that no new bugs were
        introduced in those changes. In addition to testing, I also write many
        Ruby console scripts to interact with our database, assisted clients
        through our customer support chat, and help in assisting the Client
        Experience team overall with technical support.
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
        Operations where I researched prospective clients and gathered
        information, and the Content Migration team where I migrated static
        content from clients' old websites to our platform.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience {
  margin-bottom: 40px;
}
.apptegy-header {
  text-align: center;
  line-height: 45px;
  width: 70%;
  margin: auto;
  margin-bottom: 40px;
  @media only screen and (max-width: 849px) {
    width: 90%;
  }
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
  @media only screen and (max-width: 849px) {
    margin-left: 5%;
    margin-right: 5%;
  }
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
  .info {
    margin-left: 15%;
    margin-right: 15%;
    @media only screen and (max-width: 1100px) {
      margin: 0;
    }
  }
}
hr {
  width: 40%;
  margin-top: 35px;
  margin-bottom: 35px;
}
</style>
