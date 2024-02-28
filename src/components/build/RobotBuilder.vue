<!-- eslint-disable vuejs-accessibility/alt-text -->
<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart()">Add to cart</button>
    <div class="cart">
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(r, index) in cart" :key="index">
            <td>{{  r.head.title }}</td>
            <td>{{  r.cost }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="top-row">
      <!-- inline style by using :style -->
      <!-- <div class="top part" :style="{ border: '3px solid red' }"> -->

      <!-- override the more styles to the head border style -->
      <!-- <div class="top part" :style="[headBorderStyle, moreStyles]"> -->
      <div class="top part" :style="headBorderStyle">
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <!-- <span v-show="selectedRobot.head.onSale" class="sale">Sale!</span> -->
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <img :src="selectedRobot.head.src" title="head"/>
        <button @click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm"/>
        <button @click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="torsos"/>
        <button @click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
        <button @click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="right arm"/>
        <button @click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="bases"/>
        <button @click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button @click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>

</template>

<script>
import availableParts from '../../data/parts';

function getPreviousValidIndex(index, length) {
  const prevIndex = index - 1;
  return prevIndex < 0 ? length - 1 : prevIndex;
}
function getNextValidIndex(index, length) {
  const nextIndex = index + 1;
  return nextIndex > length - 1 ? 0 : nextIndex;
}

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedRightArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedBaseIndex: 0,
      cart: [],
    };
  },
  computed: {
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
        leftArm: availableParts.arms[this.selectedLeftArmIndex],
        rightArm: availableParts.arms[this.selectedRightArmIndex],
        torso: availableParts.torsos[this.selectedTorsoIndex],
        base: availableParts.bases[this.selectedBaseIndex],
      };
    },
    headBorderStyle() {
      if (this.selectedRobot.head.onSale) {
        return { border: '3px solid red' };
      // eslint-disable-next-line no-else-return
      } else {
        return { border: '3px solid green' };
      }
    },
  },
  methods: {
    selectNextHead() {
      console.log('selectNextHead...');
      this.selectedHeadIndex = getNextValidIndex(this.selectedHeadIndex, availableParts.heads.length);
    },
    selectPreviousHead() {
      console.log('selectPreviousHead...');
      this.selectedHeadIndex = getPreviousValidIndex(this.selectedHeadIndex, availableParts.heads.length);
    },
    selectPreviousLeftArm() {
      this.selectedLeftArmIndex = getPreviousValidIndex(this.selectedLeftArmIndex, availableParts.arms.length);
    },
    selectNextLeftArm() {
      this.selectedLeftArmIndex = getNextValidIndex(this.selectedLeftArmIndex, availableParts.arms.length);
    },
    selectPreviousRightArm() {
      this.selectedRightArmIndex = getPreviousValidIndex(this.selectedRightArmIndex, availableParts.arms.length);
    },
    selectNextRightArm() {
      this.selectedRightArmIndex = getNextValidIndex(this.selectedRightArmIndex, availableParts.arms.length);
    },
    selectPreviousTorso() {
      this.selectedTorsoIndex = getPreviousValidIndex(this.selectedTorsoIndex, availableParts.torsos.length);
    },
    selectNextTorso() {
      this.selectedTorsoIndex = getNextValidIndex(this.selectedTorsoIndex, availableParts.torsos.length);
    },
    selectPreviousBase() {
      this.selectedBaseIndex = getPreviousValidIndex(this.selectedBaseIndex, availableParts.bases.length);
    },
    selectNextBase() {
      this.selectedBaseIndex = getNextValidIndex(this.selectedBaseIndex, availableParts.bases.length);
    },
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost + robot.leftArm.cost + robot.rightArm.cost + robot.torso.cost + robot.base.cost;
      this.cart.push({ ...robot, cost });
    },
  },
};

</script>

<!-- local scope css -->
<style scope src="./RobotBuilder.css"></style>
