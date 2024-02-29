<!-- eslint-disable vuejs-accessibility/alt-text -->
<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img class="logo" src="./assets/build-a-bot-logo.png" />Build a bot
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <SearchPage />
  </main>
</template>

<script>
// import HomePage from './components/home/HomePage.vue';
// import RobotBuilder from './components/build/RobotBuilder.vue';
import SearchPage from './components/search/SearchPage.vue';

export default {
  name: 'App',
  components: {
    SearchPage,
  },
};
</script>

<!-- global css here -->
<style src="./App.global.css"></style>

<!-- local scope css -->
<style scoped>
.content >>> .robot-name { /* deep target to the child component css class robot-name */
  color: green;
  font-weight: bold;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}

</style>
