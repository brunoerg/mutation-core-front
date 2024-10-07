<template>
  <main>
    <h1>Mutation testing report is available for the following PRs:</h1>
    <!--<RouterLink v-for="(pull, index) in pulls" :key="index" to="`${pull}`">{{ pull }}</RouterLink>-->
    <RouterLink to="30116" class="link">p2p: Fill reconciliation sets (Erlay) attempt 2 #30116</RouterLink>
    <RouterLink to="29415" class="link">Broadcast own transactions only via short-lived Tor or I2P connections #29415</RouterLink>
  </main>
</template>

<script>
export default {
  data() {
    return {
      pulls: [
        "p2p: Fill reconciliation sets (Erlay) attempt 2 #30116",
        "Broadcast own transactions only via short-lived Tor or I2P connections #29415"
      ]
    };
  },
};
</script>

<style scoped>
.link {
  padding: 1%;
  text-align: center;
  font-family: monospace;
  display: block;
  margin: 0 auto;
  margin-top: 3%;
  background-color: #2a2a2a;
  color: rgb(230, 158, 14);
}

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