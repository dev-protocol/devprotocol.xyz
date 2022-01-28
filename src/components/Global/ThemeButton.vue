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
      var currentTheme = document.documentElement.getAttribute('data-theme');
      var targetTheme = 'light';
      if(currentTheme==='light'){
        targetTheme='dark';
        document.documentElement.classList.add('dark');
        this.isDarkMode = true;
      }else{
        document.documentElement.classList.remove('dark');
        this.isDarkMode=false;
      }
      document.documentElement.setAttribute('data-theme',targetTheme);
      localStorage.setItem('theme',targetTheme);
    },
  },
  mounted() {
    var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (storedTheme){
      document.documentElement.setAttribute('data-theme', storedTheme)
      document.documentElement.classList.add("dark");
      if(storedTheme==='light'){
        this.isDarkMode = false;
        document.documentElement.classList.remove('dark');
      }
      else
        this.isDarkMode = true;
    }
  },
};
</script>
