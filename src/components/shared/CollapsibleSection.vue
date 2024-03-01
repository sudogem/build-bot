<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div class="header">
      <span v-if="open" @click="open = !open" class="toggled">Collapse</span>
      <span v-if="!open" @click="open = !open" class="toggled">Expand</span>
    </div>
    <slot v-if="open"></slot>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return { open: true };
  },
};
</script>

<style scoped>
  .header {
    background-color: #ccc;
    padding: 3px;
    cursor: pointer;
  }
  .toggled {
    width: 100%;
    display: block;
  }
</style>
