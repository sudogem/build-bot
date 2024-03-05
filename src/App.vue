<!-- eslint-disable vuejs-accessibility/alt-text -->
<template>
  <div>
    Root foo: {{ rootFoo }} <br />
    Root hello: {{ rootHello }} <br />
    Robots foo: {{ robotsFoo }} <br />
    Users foo: {{ usersFoo }} <br />
    <br />
    Root Getter foo: {{ rootGetterFoo }} <br />
    Root Getter helloworld: {{ rootGetterHelloworld }} <br />
    <br />
    Robots Getter foo: {{ robotsGetterFoo }} <br />
    Users Getter foo: {{ usersGetterFoo }} <br />
  </div>
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
        <li class="nav-item shopping_cart">
          <router-link to="/cart" class="nav-link" exact>Cart</router-link>
          <div class="cart-items">{{  cartItems.length }}</div>
        </li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <aside class="aside">
      <router-view name="sidebar"></router-view>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    rootFoo() {
      return this.$store.state.foo;
    },
    rootHello() {
      return this.$store.state.hello;
    },
    robotsFoo() {
      return this.$store.state.robots.foo;
    },
    usersFoo() {
      return this.$store.state.users.foo;
    },
    rootGetterFoo() {
      return this.$store.getters.foo;
    },
    rootGetterHelloworld() {
      // return this.$store.getters.hello; // return empty string
      return this.$store.getters.helloworld; // return root-getter/root-helloworld
    },
    robotsGetterFoo() {
      return this.$store.getters['robots/foo']; // return robots-getter/robots-foo from namespaced module
    },
    usersGetterFoo() {
      return this.$store.getters['users/foo']; // return empty string bec. this is not a namespaced module
    },
    cartItems() {
      console.log('cartItems this.$store.state:', this.$store.state);
      // return this.$store.state.cart;
      return this.$store.state.robots.cart;
    },
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
  width: 1184px;
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
.shopping_cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.cart-items {
  position: absolute;
  top: -5px;
  text-align: center;
  display: inline-block;
  border-radius: 50%;
  background-color: #2907ee;
  font-family: sans-serif;
  font-weight: bold;
  color: #fff;
  width: 25px;
  height: 25px;
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

.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #ccc;
  width: 100px;
  min-height: 300px;
}
</style>
