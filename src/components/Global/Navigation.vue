<template>
  <div
    id="app"
    class="
      antialiased
      text-gray-900
      fixed
      top-0
      z-50
      w-full
      bg-white
      dark:bg-darkPrimary dark:text-white
    "
  >
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "app",
  components: {
    Navbar,
  },
};
</script>
