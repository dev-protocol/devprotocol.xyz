<template>
  <div class="flex flex-col items-center justify-center pt-32 pb-10 md:pt-28">
    <h2 class="mx-auto w-full text-center text-5xl dark:text-white">
      Frequently Asked Questions
    </h2>
    <p class="m-3 text-center text-sm">
      If you don't find the answer to your questions, please contact us via
      <a href="https://discord.gg/VwJp4KM" class="underline hover:text-blue-600"
        >Discord</a
      >.
    </p>
    <div class="mt-10 flex justify-center align-baseline">
      <h2 class="p-2.5 text-xl">Language:</h2>
      <button
        @click="toggleDropdown"
        class="w-max select-none rounded-lg bg-gray-300 p-2.5 text-xl capitalize underline dark:bg-indigo-600"
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
          ? 'scale-100 opacity-100 duration-100'
          : 'invisible absolute scale-95 opacity-0 duration-100'
      "
      class="right-0 mt-2 w-56 transform rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
    >
      <div class="py-1">
        <a
          v-for="(language, index) in languagesArr"
          :key="index"
          href="#"
          @click="translate(language)"
          class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-indigo-600 hover:text-gray-100"
          >{{ language }}</a
        >
      </div>
    </div>

    <div class="mt-10 overflow-x-auto md:max-w-4xl">
      <ul class="mb-2.5 flex flex-col flex-nowrap text-center md:flex-row">
        <li
          v-for="(category, index) in categoriesArr"
          :key="index"
          class="flex-shrink-0 pt-2 text-xl md:mr-10 md:pt-0"
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

  <div class="mb-28 flex flex-col items-center justify-center">
    <div
      v-for="(item, index) in translatedList"
      v-bind:key="item.question + index"
      class="mx-5 my-4 h-full w-11/12 md:w-6/12 md:max-w-2xl"
    >
      <input type="checkbox" :id="'question' + index" class="peer hidden" />
      <div
        class="absolute z-10 ml-3 text-3xl leading-normal duration-200 ease-in-out peer-checked:rotate-45 peer-checked:transform peer-checked:transition-transform"
      >
        +
      </div>
      <label
        :for="'question' + index"
        class="relative block w-full cursor-pointer rounded-md bg-gray-300 p-2 pl-10 text-xl dark:bg-indigo-600"
      >
        {{ item.question }}
      </label>
      <div
        class="h-0 w-full overflow-hidden bg-white tracking-wider opacity-0 transition-all duration-200 ease-in-out peer-checked:h-auto peer-checked:pt-3 peer-checked:opacity-100 dark:bg-darkPrimary"
      >
        <p class="break-words px-10">{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import langCsv from './lang.json'

export default {
  name: 'FAQ',
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
      selectedCategory: '',
      selectedLanguage: 'english',
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
        delimiter: '(',
        substrEnd: 1,
      },
    }
  },
  created() {
    langCsv
      // don't include fields that have empty values
      .filter(
        (langObj) => !Object.values(langObj).every((value) => value === '')
      )
      // convert to an easy to use object
      .forEach((langObj) => {
        const category = langObj.categories.toLowerCase()

        // add the first category as default category
        if (Object.keys(this.categories).length === 0) {
          this.selectedCategory = category
        }

        // store unique category
        if (this.categoriesArr.indexOf(category) === -1) {
          this.categoriesArr.push(category)
        }

        // initialize category
        if (!this.categories[category]) {
          this.categories[category] = []
        }

        const faqObj = {
          answer: {},
          question: {},
        }

        Object.entries(langObj).forEach(([key, value]) => {
          const keyLowerCased = key.toLowerCase()

          if (keyLowerCased.includes('question')) {
            const languageName = this.extractLanguageName(keyLowerCased)
            faqObj.question[languageName] = value.trim()
          }

          if (keyLowerCased.includes('answer')) {
            const languageName = this.extractLanguageName(keyLowerCased)
            faqObj.answer[languageName] = value.trim()
          }
        })

        this.categories[category].push(faqObj)
      })
  },
  methods: {
    changeCategory: function (category) {
      this.selectedCategory = category
    },
    storeUniqueLanguageName: function (languageName) {
      if (this.languagesArr.indexOf(languageName) === -1)
        this.languagesArr.push(languageName)
    },
    extractLanguageName: function (keyLowerCased) {
      let languageName = keyLowerCased
        .split(this.columnHeaderLanguageNameConfig.delimiter)[1]
        .trim()
      languageName = languageName.substring(
        0,
        languageName.length - this.columnHeaderLanguageNameConfig.substrEnd
      )

      this.storeUniqueLanguageName(languageName)

      return languageName
    },
    translate: function (selectedLanguage) {
      this.selectedLanguage = selectedLanguage
      this.toggleDropdown()
    },
    toggleDropdown: function () {
      this.isDropdownActive = !this.isDropdownActive
    },
  },
  computed: {
    translatedList: function () {
      return this.categories[this.selectedCategory].map((faqItem) => ({
        question: faqItem.question[this.selectedLanguage],
        answer: faqItem.answer[this.selectedLanguage],
      }))
    },
  },
}
</script>
