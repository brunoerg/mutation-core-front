<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Mutation Core" />
      <nav>
        <!--<RouterLink to="/">Home</RouterLink>-->
        <RouterLink to="/functional">Functional tests</RouterLink>
        <RouterLink to="/pulls/list">Pull Requests</RouterLink>
        <RouterLink to="/source">Source Code</RouterLink>
        <!--<RouterLink to="/about">About</RouterLink>-->
      </nav>
    </div>
  </header>
  <!-- Add margin-top to push content below fixed header -->
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
/* Ensure the header is fixed at the top and centered */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #181818; /* Optional background color */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow */
  z-index: 1000; /* Make sure the header stays on top */
  text-align: center; /* Center the content horizontally */
  padding: 1rem 0; /* Padding for better spacing */
}

/* Wrapper to center content and align elements */
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center; /* Align content in the center vertically */
}

/* Navigation styling */
nav {
  margin-top: 1rem;
}

nav a {
  padding: 0.5rem 1rem;
  display: inline-block;
  color: #e7bc57;
  text-decoration: none;
  border-left: 1px solid #ddd;
}

nav a:first-of-type {
  border-left: none;
}

nav a.router-link-exact-active {
  color: #e7bc57;
}

nav a:hover {
  text-decoration: underline;
}

/* Ensure the main content appears below the fixed header */
main {
  margin-top: 100px; /* Adjust according to the height of your header */
  padding: 2rem;
}
</style>
