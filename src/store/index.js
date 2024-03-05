/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  // NOTE: anything that we add to our state, we need to add here a default value
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      console.log('mutations.addRobotToCart robot:', robot);
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      console.log('updateParts() parts:', parts);
      state.parts = parts;
    },
  },
  getters: {
    getCartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    getParts({
      state,
      getters,
      commit,
      dispatch,
    }) {
      // Using this approach will get CORS issues because
      //  we're accessing different port than what vue app is running under.
      // e.g. axios.get('http://localhost:8081/api/parts')
      //
      // Vue has a built-in proxy that we can proxy the API through our dev server
      // We use axios to call our API, and then we commit the returned data to our store through the updateParts() mutation.
      // So whenever we need this data, we need first to dispatch this action and then get the parts from the store.
      axios.get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch(console.error);
    },
    // using Actions to save data to an API
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios.post('/api/cart', cart) // If we want axios to return a promise, just add return
        .then(() => commit('addRobotToCart', robot));
    },
  },
});
