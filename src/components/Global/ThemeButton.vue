<template>
  <div class="flex justify-end items-center space-x-2">
    <span class="text-sm text-gray-800">Light</span>
    <div>
      <input
        @click="toggleDarkMode"
        type="checkbox"
        name=""
        id="toggle"
        v-model="isDarkMode"
        class="hidden"
      />
      <label for="toggle">
        <div
          class="
            w-6
            h-2
            sm:w-9 sm:h-5
            flex
            items-center
            bg-gray-300
            rounded-full
            sm:p-1
          "
        >
          <div
            class="
              toggle-dot
              w-3
              h-3
              sm:w-4 sm:h-4
              bg-white
              rounded-full
              shadow-md
              transform
              duration-300
              ease-in-out
            "
          ></div>
        </div>
      </label>
    </div>
    <span class="text-sm text-gray-400">Dark</span>
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
      console.log("here");
    } else {
      document.documentElement.classList.remove("dark");
      this.isDarkMode = false;
      localStorage.removeItem("theme");
    }
  },
};
</script>
