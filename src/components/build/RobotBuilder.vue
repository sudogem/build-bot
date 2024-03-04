<!-- eslint-disable vuejs-accessibility/alt-text -->
<template>
  <div class="content">
    <div class="part-info" id="partInfo"></div>
    <div class="preview">
      <CollapsibleSection>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.head.src"/>
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
            <img :src="selectedRobot.torso.src"/>
            <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.base.src"/>
          </div>
        </div>
      </CollapsibleSection>
      <button class="add-to-cart" @click="addToCart()">Add to cart</button>
    </div>
    <div class="cart">
      <h2>Cart</h2>
      <ol class="item-list">
        <li v-for="(r, index) in cart" :key="index">
          {{  r.head.title }}
        </li>
      </ol>
    </div>
    <div class="top-row">
      <!-- inline style by using :style -->
      <!-- <div class="top part" :style="{ border: '3px solid red' }"> -->

      <!-- override the more styles to the head border style -->
      <!-- <div class="top part" :style="[headBorderStyle, moreStyles]"> -->

      <!-- applying the css class name sale-border -->
      <!-- <div class="top part" :class="['sale-border']"> -->

      <!-- applying computed saleBorderClass -->
      <div class="top part" :class="[saleBorderClass]">
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <!-- <span v-show="selectedRobot.head.onSale" class="sale">Sale!</span> -->
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <!-- <img :src="selectedRobot.head.src" title="head"/>
        <button @click="selectPreviousHead()" class="prev-selector"></button>
        <button @click="selectNextHead()" class="next-selector"></button> -->
        <PartSelector
          :parts="availableParts.heads"
          position="top"
          @partSelected="part => selectedRobot.head=part"
        />
      </div>
    </div>
    <div class="middle-row">
      <!-- <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm"/>
        <button @click="selectPreviousLeftArm()" class="prev-selector"></button>
        <button @click="selectNextLeftArm()" class="next-selector"></button>
      </div> -->
      <PartSelector
        :parts="availableParts.arms"
        position="left"
        @partSelected="part => selectedRobot.leftArm=part"
      />

      <!-- <div class="center part">
        <img :src="selectedRobot.torso.src" title="torsos"/>
        <button @click="selectPreviousTorso()" class="prev-selector"></button>
        <button @click="selectNextTorso()" class="next-selector"></button>
      </div> -->
      <PartSelector
        :parts="availableParts.torsos"
        position="center"
        @partSelected="part => selectedRobot.torso=part"
      />

      <!-- <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="right arm"/>
        <button @click="selectPreviousRightArm()" class="prev-selector"></button>
        <button @click="selectNextRightArm()" class="next-selector"></button>
      </div> -->
      <PartSelector
        :parts="availableParts.arms"
        position="right"
        @partSelected="part => selectedRobot.rightArm=part"
      />
    </div>
    <div class="bottom-row">
      <!-- <div class="bottom part">
        <img :src="selectedRobot.base.src" title="bases"/>
        <button @click="selectPreviousBase()" class="prev-selector"></button>
        <button @click="selectNextBase()" class="next-selector"></button>
      </div> -->
      <PartSelector
        :parts="availableParts.bases"
        position="bottom"
        @partSelected="part => selectedRobot.base=part"
      />
    </div>
  </div>

</template>

<script>
import availableParts from '../../data/parts';
import PartSelector from './PartSelector.vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';

export default {
  name: 'RobotBuilder',
  beforeRouteLeave(to, from, next) {
    if (this.addToCartOption) {
      next(true);
    } else {
      // eslint-disable-next-line no-restricted-globals
      const response = confirm('You have not added your robot to your cart, are you sure you want to leave?');
      next(response);
    }
  },
  components: { PartSelector, CollapsibleSection },
  data() {
    return {
      availableParts,
      addToCartOption: false,
      selectedRobot: {
        // head: availableParts.heads[this.selectedHeadIndex],
        head: {},
        leftArm: {},
        rightArm: {},
        torso: {},
        base: {},
      },
    };
  },
  computed: {
    saleBorderClass() {
      return this.selectedRobot.head.onSale ? 'sale-border' : '';
    },
    headBorderStyle() {
      if (this.selectedRobot.head.onSale) {
        return { border: '3px solid red' };
      // eslint-disable-next-line no-else-return
      } else {
        return { border: '3px solid green' };
      }
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost + robot.leftArm.cost + robot.rightArm.cost + robot.torso.cost + robot.base.cost;
      // this.cart.push({ ...robot, cost });
      this.$store.commit('addRobotToCart', { ...robot, cost });
      this.addToCartOption = true;
    },
  },
};

</script>

<!-- local scope css -->
<style scope src="./RobotBuilder.css"></style>
