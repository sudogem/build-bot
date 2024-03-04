/* eslint-disable import/no-extraneous-dependencies */
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
import RobotBuilder from '../components/build/RobotBuilder.vue';
import PartInfo from '../components/part/PartInfo.vue';
import BrowsePart from '../components/part/BrowsePart.vue';
import RobotHead from '../components/part/RobotHead.vue';
import RobotArms from '../components/part/RobotArms.vue';
import RobotTorsos from '../components/part/RobotTorsos.vue';
import RobotBases from '../components/part/RobotBases.vue';
import SidebarStandard from '../components/sidebar/SidebarStandard.vue';
import SidebarBuild from '../components/sidebar/SidebarBuild.vue';
import ShoppingCart from '../components/cart/ShoppingCart.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      // sidebar - should match in the router-view name="sidebar"
      sidebar: SidebarStandard,
    },
  }, {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
  }, {
    path: '/parts/browse',
    name: 'Browse Parts',
    component: BrowsePart,
    children: [
      {
        name: 'BrowseHead',
        path: 'heads',
        component: RobotHead,
      },
      {
        name: 'BrowseArm',
        path: 'arms',
        component: RobotArms,
      },
      {
        name: 'BrowseTorso',
        path: 'torsos',
        component: RobotTorsos,
      },
      {
        name: 'BrowseBase',
        path: 'bases',
        component: RobotBases,
      },
    ],
  }, {
    path: '/parts/:partType/:id',
    name: 'Part Info',
    component: PartInfo,
    props: true,
    beforeEnter: (to) => {
      const isValidId = Number.isInteger(Number(to.params.id));
      if (isValidId) return true;
      return false;
    },
  }, {
    path: '/cart',
    name: 'Cart',
    components: {
      default: ShoppingCart,
    },
  }],
});
