<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="part" :class="position">
    <div>User: {{ user.username }}</div>
    <img :src="selectedPart.src" title="arm" @click="showPartInfo = !showPartInfo" />
    <button @click="selectPreviousPart()" class="prev-selector"></button>
    <button @click="selectNextPart()" class="next-selector"></button>
    <span class="sale" v-show="selectedPart.onSale">Sale!</span>
    <!-- render this teleport section to the #partInfo in another component -->
    <Teleport to="#partInfo" v-if="showPartInfo">
      <div>
        <div>{{  selectedPart.title }}</div>
        <div>{{  selectedPart.type }}</div>
        <div>{{  selectedPart.cost }}</div>
        <div>{{  selectedPart.description }}</div>
        <hr />
    </div>
    </Teleport>
  </div>
</template>

<script>
function getPreviousValidIndex(index, length) {
  const prevIndex = index - 1;
  return prevIndex < 0 ? length - 1 : prevIndex;
}
function getNextValidIndex(index, length) {
  const nextIndex = index + 1;
  return nextIndex > length - 1 ? 0 : nextIndex;
}

export default {
  inject: ['user'],
  props: ['parts', 'position'],
  data() {
    return { selectedPartIndex: 0, showPartInfo: false };
  },
  computed: {
    selectedPart() {
      return this.parts[this.selectedPartIndex];
    },
  },
  created() {
    this.emitSelectedPart();
  },
  methods: {
    emitSelectedPart() {
      // passing data to Parent component is by using $emit event
      this.$emit('partSelected', this.selectedPart);
    },
    selectNextPart() {
      this.selectedPartIndex = getNextValidIndex(
        this.selectedPartIndex,
        this.parts.length,
      );
      this.emitSelectedPart();
    },
    selectPreviousPart() {
      this.selectedPartIndex = getPreviousValidIndex(
        this.selectedPartIndex,
        this.parts.length,
      );
      this.emitSelectedPart();
    },
  },
};

</script>

<style scope src="./RobotBuilder.css"></style>
