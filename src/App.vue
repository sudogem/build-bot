<!-- eslint-disable vuejs-accessibility/alt-text -->
<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img class="logo" src="./assets/build-a-bot-logo.png" />
          <router-link :to="{name: 'Home'}" class="nav-link" exact>Build a bot</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'Build'}" class="nav-link" exact>Build</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>

export default {
  name: 'App',
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
.nav-link {
  text-decoration: none;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.nav-link:hover {
  text-decoration: underline;
}
.router-link-active {
  color: #fff;
  font-weight: bold;
}
</style>
