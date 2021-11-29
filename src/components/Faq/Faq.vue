<template>
  <div class="flex flex-col justify-center items-center pt-20 pb-10 md:pt-28">
    <p class="text-center font-display text-4xl">Frequently Asked Questions</p>
    <p class="text-center text-sm m-3">
      If you don't find the answer to your questions, please contact us via
      <a href="https://discord.gg/VwJp4KM" class="underline hover:text-blue-600"
        >Discord</a
      >.
    </p>
    <button
      @click="toggleDropdown"
      class="
        text-xl
        mt-4
        select-none
        bg-gray-300
        dark:bg-indigo-600
        w-max
        p-2.5
        rounded-lg
      "
    >
      Translate to <span class="underline">{{ selectedLanguage }}</span>
      <img
        src="/assets/dropdown-arrow.svg"
        alt="arrow"
        class="dropdown-arrow inline"
      />
    </button>

    <div
      :class="isDropdownActive ? 'opacity-100 scale-100 duration-100' : 'invisible absolute opacity-0 scale-95 duration-100'"
      class="transform transition right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div class="py-1">
        <a v-for="(language, index) in languagesArr" :key="index" href="#" @click="translate(language)" class="hover:bg-indigo-600 hover:text-gray-100 text-gray-700 block px-4 py-2 text-sm">{{ language }}</a>
      </div>
    </div>
  </div>
  <div
    class="grid md:grid-cols-2 justify-items-stretch md:-mt-20 lg:-mt-40 mb-28"
  >
    <div v-for="(item, index) in translatedList" v-bind:key="index" class="my-2">
      <div class="mx-5 my-4 h-full bg-gray-300 rounded-md dark:bg-indigo-600">
        <input type="checkbox" :id="'question' + index" class="peer hidden" />
        <div
          class="
            absolute
            leading-normal
            ml-3
            z-10
            text-3xl
            duration-200
            ease-in-out
            peer-checked:transform
            peer-checked:transition-transform
            peer-checked:rotate-45
          "
        >
          +
        </div>
        <label
          :for="'question' + index"
          class="relative text-xl pl-10 p-2 block w-full cursor-pointer"
        >
          {{ item.question }}
        </label>
        <div
          class="
            peer-checked:pt-3
            tracking-wider
            peer-checked:h-full peer-checked:opacity-100 peer-checked:px-10
            !w-full
            bg-white
            dark:bg-darkPrimary
            h-0
            overflow-hidden
            opacity-0
            transition-all
            duration-200
            ease-in-out
          "
        >
          {{ item.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import langCsv from './lang.csv';

export default {
  name: "FAQ",
  data() {
    return {
      questionAndAnswers: [],
      selectedLanguage: "English",
      languagesArr: [],
      isDropdownActive: false
    };
  },
  created() {
    this.questionAndAnswers = langCsv.reduce((acc, langObj) => {
        const newLanguagesArr = [...Object.entries(langObj).map(([key, value]) => {
            if (this.languagesArr.indexOf(key) === -1) this.languagesArr.push(key); // get unique languages for our dropdown
            return { ...JSON.parse(value), language: key };
        })];

        acc.push(...newLanguagesArr);
        return acc;
      }, []);
  },
  methods: {
    translate: function (selectedLanguage) {
      this.selectedLanguage = selectedLanguage;
      this.toggleDropdown();
    },
    toggleDropdown: function () {
      this.isDropdownActive = !this.isDropdownActive;
    },
  },
  computed: {
    translatedList: function () {
      return this.questionAndAnswers.filter((item) => item.language === this.selectedLanguage);
    },
  },
};
</script>
