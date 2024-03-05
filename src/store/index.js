/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { createStore } from 'vuex';
import robotsModule from './modules/robots';
import usersModule from './modules/users';

export default createStore({
  // define root state here
  state: {
    foo: 'root-foo',
    hello: 'root-helloworld',
  },
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
  getters: {
    foo(state) {
      return `root-getter/${state.foo}`;
    },
    helloworld(state) {
      return `root-getter/${state.hello}`;
    },
  },
});
