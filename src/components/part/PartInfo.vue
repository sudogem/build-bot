<template>
  <div>
    <h1>{{ part.title }}</h1>
    <p>{{ part.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'PartInfo',
  data() {
    return {
      part: {
        title: 'title here',
        description: 'desc here',
      },
    };
  },
};
</script>
