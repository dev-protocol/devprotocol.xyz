<template>
  <div class="mx-4 flex items-center">
    <button
      class="flex h-5 w-10 items-center rounded-2xl bg-white shadow transition duration-300 focus:outline-none md:h-6 md:w-12"
      @click="toggleDarkMode"
    >
      <div
        id="switch-toggle"
        :class="
          isDarkMode
            ? 'translate-x-full bg-gray-700'
            : '-translate-x-2 bg-yellow-500'
        "
        class="h-6 w-6 transform select-none rounded-full p-1 text-white transition duration-500 focus:outline-none md:h-7 md:w-7"
      >
        <img
          v-if="!isDarkMode"
          class="invert"
          alt="light"
          src="/assets/light.svg"
        />
        <img
          v-if="isDarkMode"
          class="invert"
          alt="Dark"
          src="/assets/dark.svg"
        />
      </div>
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isDarkMode: false
    }
  },
  methods: {
    toggleDarkMode () {
      // var checkbox = document.getElementById('#toggle')
      if (this.isDarkMode) {
        localStorage.removeItem('theme')
        this.isDarkMode = false
        document.documentElement.classList.remove('dark')
      } else {
        document.documentElement.classList.add('dark')
        this.isDarkMode = true
        localStorage.setItem('theme', 'dark')
      }
    }
  },
  mounted () {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      this.isDarkMode = true
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      this.isDarkMode = false
      localStorage.removeItem('theme')
    }
  }
}
</script>
