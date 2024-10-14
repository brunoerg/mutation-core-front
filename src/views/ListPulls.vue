<template>
  <main>
    <h1>Mutation testing report is available for the following PRs:</h1>
    <!--<RouterLink v-for="(pull, index) in pulls" :key="index" to="`${pull}`">{{ pull }}</RouterLink>-->
    <RouterLink to="30116" class="link">p2p: Fill reconciliation sets (Erlay) attempt 2 #30116</RouterLink>
    <RouterLink to="29415" class="link">Broadcast own transactions only via short-lived Tor or I2P connections #29415</RouterLink>
    <RouterLink to="30951" class="link">net: option to disallow v1 connection on ipv4 and ipv6 peers #30951</RouterLink>
    <RouterLink to="31065" class="link">rest: Support transaction broadcast in REST interface #31065</RouterLink>
    <RouterLink to="30595" class="link">kernel: Introduce initial C header API #30595</RouterLink>
  </main>
</template>

<script>
export default {
  data() {
    return {
      pulls: [
        "p2p: Fill reconciliation sets (Erlay) attempt 2 #30116",
        "Broadcast own transactions only via short-lived Tor or I2P connections #29415",
        "net: option to disallow v1 connection on ipv4 and ipv6 peers #30951",
        "rest: Support transaction broadcast in REST interface #31065",
        "kernel: Introduce initial C header API #30595"
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