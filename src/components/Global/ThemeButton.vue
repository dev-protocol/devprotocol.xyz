<template>
  <div class="flex items-center mx-4">
    <button
      class="
        w-10
        h-5
        md:w-12 md:h-6
        rounded-2xl
        bg-white
        flex
        items-center
        transition
        duration-300
        focus:outline-none
        shadow
      "
      @click="toggleDarkMode"
    >
      <div
        id="switch-toggle"
        :class="
          isDarkMode
            ? 'bg-gray-700 translate-x-full'
            : 'bg-yellow-500 -translate-x-2'
        "
        class="
          w-6
          h-6
          md:w-7 md:h-7
          rounded-full
          transition
          duration-500
          transform
          p-1
          text-white
          focus:outline-none
          select-none
        "
      >
        <svg
          v-if="!isDarkMode"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <svg
          v-if="isDarkMode"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      // var checkbox = document.getElementById('#toggle')
      if (this.isDarkMode) {
        localStorage.removeItem("theme");
        this.isDarkMode = false;
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
        this.isDarkMode = true;
        localStorage.setItem("theme", "dark");
      }
    },
  },
  mounted() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      this.isDarkMode = true;
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      this.isDarkMode = false;
      localStorage.removeItem("theme");
    }
  },
};
</script>
