<template>
  <div
    id="app"
    class="fixed top-0 z-50 w-full bg-white text-gray-900 antialiased dark:bg-darkPrimary dark:text-white"
  >
    <Navbar />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  name: 'app',
  components: {
    Navbar,
  },
}
</script>
