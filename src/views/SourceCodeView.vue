<script setup>
import Diff from '../components/Diff.vue'
</script>

<template>
  <main>
    <h1>Surviving mutants for the current source code</h1>
    <Diff :diffs="diffs" />
  </main>
</template>

<script>
export default {
  components: {
    Diff
  },
  data() {
    return {
      diffs: []
    };
  },
  mounted() {
    const jsonDataUrl = `${import.meta.env.BASE_URL}/source.json`;
    fetch(jsonDataUrl)
      .then(response => response.json())
      .then(data => {
        this.diffs = data;
      })
      .catch(error => {
        console.error('Error loading diffs:', error);
      });
  },
};
</script>

<style scoped>
main {
  margin-top: 5%;
}

h1 {
  text-align: center;
}

h2 {
  text-align: center;
}
</style>