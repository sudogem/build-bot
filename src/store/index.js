/* eslint-disable import/no-extraneous-dependencies */
import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
  },
});
