<template>
  <div id="app" class="antialiased text-gray-900">
    <div>
      <Navbar />
    </div>
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
