/* eslint-disable import/no-extraneous-dependencies */
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
import RobotBuilder from '../components/build/RobotBuilder.vue';
import PartInfo from '../components/part/PartInfo.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  }, {
    path: '/parts/:partType/:id',
    name: 'Part Info',
    component: PartInfo,
    props: true,
  }],
});
