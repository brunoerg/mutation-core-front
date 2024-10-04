<script setup>
import Diff from '../components/Diff.vue'
</script>

<template>
  <main>
    <h1>{{ pr_title }}</h1>
    <h3>Head: {{ head }}</h3>
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
    const jsonDataUrl = `${import.meta.env.BASE_URL}/pulls/${this.pr}.json`;
    fetch(jsonDataUrl)
      .then(response => response.json())
      .then(data => {
        let diffs = [];
        for (let i of data.diffs) {
          if (i.head == data.head) diffs.push(i);
        }
        this.diffs = diffs;
        this.pr_title = data.pr_title;
        this.head = data.head;
      })
      .catch(error => {
        console.error('Error loading diffs:', error);
      });
  },
  data() {
    return {
      pr_title: "",
      head: "",
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