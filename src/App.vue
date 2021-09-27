<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: { Navbar, Footer },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@500;700&display=swap");

h1 {
  font-weight: 700;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Exo", sans-serif;
}

body {
  font-family: "Exo", sans-serif;
}
</style>
