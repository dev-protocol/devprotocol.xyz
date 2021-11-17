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
