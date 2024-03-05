/* eslint-disable no-unused-vars */
import axios from 'axios';

export default { // this is not a namespaced module
  state: {
    user: null,
    foo: 'users-foo',
    hi: 'hey',
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    foo(state, getters, rootState) {
      // return `users-getter/${rootState.foo}`; // return users-getter/root-foo from the root state
      // return `users-getter/${state.hi}`; // return users-getter/hey
      return `users-getter/${state.foo}`; // return users-getter/users-foo from the local state from this module
    },
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then((result) => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
    addRobotToCart() {
      // addRobotToCart() is called if the namespaced is false
      console.log('module users > addRobotToCart() action');
    },
  },
};
