import axios from 'axios';

export default {
  state: {
    user: null,
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
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
