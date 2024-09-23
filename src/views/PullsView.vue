<script setup>
import Diff from '../components/Diff.vue'
</script>

<template>
  <main>
    <h1>{{ pr_title }}</h1>
    <h3>Surviving mutants</h3>
    <Diff :diffs="diffs" />
  </main>
</template>

<script>
export default {
  components: {
    Diff
  },
  props: ['pr'],
  mounted() {
    fetch(`/pulls/${this.pr}.json`)
      .then(response => response.json())
      .then(data => {
        this.diffs = data.diffs;
        this.pr_title = data.pr_title;
      })
      .catch(error => {
        console.error('Error loading diffs:', error);
      });
  },
  data() {
    return {
      pr_title: "",
      diffs: []
    };
  }
};
</script>

<style scoped>
main {
  margin-top: 5%;
}
h1 {
  text-align: center;
}
h3 {
  text-align: center;
}
</style>