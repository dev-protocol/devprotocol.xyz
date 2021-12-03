<template>
  <div class="flex flex-col justify-center items-center pt-32 pb-10 md:pt-28">
    <h2
      class="text-center mx-auto w-full font-display text-5xl dark:text-white"
    >
      Frequently Asked Questions
    </h2>
    <p class="text-center text-sm m-3">
      If you don't find the answer to your questions, please contact us via
      <a href="https://discord.gg/VwJp4KM" class="underline hover:text-blue-600"
        >Discord</a
      >.
    </p>
    <div class="flex align-baseline justify-center mt-10">
      <h2 class="text-xl p-2.5">Language:</h2>
      <button
        @click="toggleDropdown"
        class="
          text-xl
          select-none
          bg-gray-300
          dark:bg-indigo-600
          w-max
          p-2.5
          rounded-lg
          underline
          capitalize
        "
      >
        {{ selectedLanguage }}
        <img
          src="/assets/dropdown-arrow.svg"
          alt="arrow"
          class="dropdown-arrow inline"
        />
      </button>
    </div>

    <div
      :class="
        isDropdownActive
          ? 'opacity-100 scale-100 duration-100'
          : 'invisible absolute opacity-0 scale-95 duration-100'
      "
      class="
        transform
        transition
        right-0
        mt-2
        w-56
        rounded-md
        shadow-lg
        bg-white
        ring-1 ring-black ring-opacity-5
        focus:outline-none
      "
    >
      <div class="py-1">
        <a
          v-for="(language, index) in languagesArr"
          :key="index"
          href="#"
          @click="translate(language)"
          class="
            hover:bg-indigo-600 hover:text-gray-100
            text-gray-700
            block
            px-4
            py-2
            text-sm
            capitalize
          "
          >{{ language }}</a
        >
      </div>
    </div>

    <div class="md:max-w-4xl overflow-x-auto mt-10">
      <ul class="flex flex-col text-center md:flex-row flex-nowrap mb-2.5">
        <li
          v-for="(category, index) in categoriesArr"
          :key="index"
          class="pt-2 md:pt-0 md:mr-10 flex-shrink-0 text-xl"
        >
          <button
            @click="changeCategory(category)"
            class="capitalize"
            :class="
              selectedCategory === category && 'border-b-4 border-indigo-600'
            "
          >
            {{ category }}
          </button>
        </li>
      </ul>
    </div>
  </div>

  <div
    class="flex flex-col justify-center items-center md:-mt-20 lg:-mt-40 mb-28"
  >
    <div
      v-for="(item, index) in translatedList"
      v-bind:key="item.question + index"
      class="mx-5 my-4 md:w-6/12 md:max-w-2xl h-full w-11/12"
    >
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
        class="
          relative
          text-xl
          pl-10
          p-2
          block
          w-full
          cursor-pointer
          bg-gray-300
          dark:bg-indigo-600
          rounded-md
        "
      >
        {{ item.question }}
      </label>
      <div
        class="
          tracking-wider
          peer-checked:pt-3 peer-checked:h-auto peer-checked:opacity-100
          w-full
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
        <p class="px-10 break-words">{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import langCsv from "./lang.csv";

export default {
  name: "FAQ",
  data() {
    return {
      categories: {
        /*
          "For Everyone": [
            {
              question: {
                english: "",
                japanese: ""
              },
              answer: {
                english: "",
                japanese: ""
              },
            },
            ...
          ],
          ...
        */
      },
      selectedCategory: "",
      selectedLanguage: "english",
      categoriesArr: [],
      languagesArr: [],
      isDropdownActive: false,
      /**
       * columnHeaderLanguageNameConfig
       *
       * Determines how language type is extracted
       * delimiter - determines where to split the value
       * substrEnd - determines how many characters to omit from right to left
       * eg:
       *  delimiter: "(", substrEnd: 1 - This is will work for "someText(Japanese)"
       *  delimiter: "---", substrEnd: 0 - This is will work for "someText --- Japanese"
       */
      columnHeaderLanguageNameConfig: {
        delimiter: "(",
        substrEnd: 1,
      },
    };
  },
  created() {
    langCsv
      // don't include fields that have empty values
      .filter(
        (langObj) => !Object.values(langObj).every((value) => value === "")
      )
      // convert to an easy to use object
      .forEach((langObj) => {
        const category = langObj.categories.toLowerCase();

        // add the first category as default category
        if (Object.keys(this.categories).length === 0) {
          this.selectedCategory = category;
        }

        // store unique category
        if (this.categoriesArr.indexOf(category) === -1) {
          this.categoriesArr.push(category);
        }

        // initialize category
        if (!this.categories[category]) {
          this.categories[category] = [];
        }

        const faqObj = {
          answer: {},
          question: {},
        };

        Object.entries(langObj).forEach(([key, value]) => {
          const keyLowerCased = key.toLowerCase();

          if (keyLowerCased.includes("question")) {
            const languageName = this.extractLanguageName(keyLowerCased);
            faqObj.question[languageName] = value.trim();
          }

          if (keyLowerCased.includes("answer")) {
            const languageName = this.extractLanguageName(keyLowerCased);
            faqObj.answer[languageName] = value.trim();
          }
        });

        this.categories[category].push(faqObj);
      });
  },
  methods: {
    changeCategory: function (category) {
      this.selectedCategory = category;
    },
    storeUniqueLanguageName: function (languageName) {
      if (this.languagesArr.indexOf(languageName) === -1)
        this.languagesArr.push(languageName);
    },
    extractLanguageName: function (keyLowerCased) {
      let languageName = keyLowerCased
        .split(this.columnHeaderLanguageNameConfig.delimiter)[1]
        .trim();
      languageName = languageName.substring(
        0,
        languageName.length - this.columnHeaderLanguageNameConfig.substrEnd
      );

      this.storeUniqueLanguageName(languageName);

      return languageName;
    },
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
      return this.categories[this.selectedCategory].map((faqItem) => ({
        question: faqItem.question[this.selectedLanguage],
        answer: faqItem.answer[this.selectedLanguage],
      }));
    },
  },
};
</script>
