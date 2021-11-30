<template>
  <header
    class="
      text-black
      dark:text-white
      sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3
      border-b-2
      dark:border-b-0 dark:shadow-xl
    "
  >
    <div
      class="
        flex flex-wrap
        sm:flex-nowrap
        w-full
        items-center
        justify-between
        align-baseline
        px-4
        py-3
        sm:p-0
      "
    >
      <!-- Dev Protocol Icon -->
      <a href="https://devprotocol.xyz" class="text-gray-900">
        <img src="/assets/logo.png" alt="DevProtocol" class="max-h-8" />
      </a>
      <!-- Hamburger icon and close icon -->

    <!-- all dropdown icons -->
    <nav
      :class="smIsOpen ? 'block w-full pt-4 order-1 sm:order-none' : 'hidden'"
      class="px-2 pt-2 pb-4 sm:flex sm:p-0 "
    >
      <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row space-x-3">
        <!-- Overview Section -->
        <div class="relative">
          <!-- Main Button with dropdown arrow
          On Click - when current dropdown needs to be opened change all other states to false-->
          <button
            @click="
              isOpen[0]
                ? (isOpen[0] = false)
                : (isOpen = [true, false, false, false])
            "
            class="px-3 sm:px-0 navbar-item"
          >
            Overview
            <img
              src="/assets/dropdown-arrow.svg"
              alt="arrow"
              class="dropdown-arrow"
            />
          </button>
          <!-- Background for the subnavbar
          So Clicking outside the navbar will close it -->
          <button
            v-if="isOpen[0]"
            @click="isOpen[0] = false"
            tabindex="-1"
            class="navbar-item-background"
          ></button>
          <!-- Subnavbar block -->
          <div v-if="isOpen[0]" class="sub-navbar-block">
            <a href="/creators" class="sub-navbar-item">For Creators</a>
            <a href="/patrons" class="sub-navbar-item">For Patrons</a>
            <a href="/developers" class="sub-navbar-item">For Developers</a>
            <a
              href="https://trello.com/b/oFu5uWJF/roadmap"
              class="sub-navbar-item"
              >Roadmap</a
            >
              Overview
              <img
                src="/assets/dropdown-arrow.svg"
                alt="arrow"
                class="dropdown-arrow"
              />
            </button>
            <!-- Background for the subnavbar 
          So Clicking outside the navbar will close it -->
            <button
              v-if="isOpen[0]"
              @click="isOpen[0] = false"
              tabindex="-1"
              class="navbar-item-background"
            ></button>
            <!-- Subnavbar block -->
            <div v-if="isOpen[0]" class="sub-navbar-block">
              <a href="/creators" class="sub-navbar-item">For Creators</a>
              <a href="/patrons" class="sub-navbar-item">For Patrons</a>
              <a href="/developers" class="sub-navbar-item">For Developers</a>
              <a
                href="https://trello.com/b/oFu5uWJF/roadmap"
                class="sub-navbar-item"
                >Roadmap</a
              >
            </div>
          </div>
        </div>
        <!-- DAO Section -->
        <div class="relative">
          <!-- Main Button with dropdown arrow
          On Click - when current dropdown needs to be opened change all other states to false-->
          <button
            @click="
              isOpen[1]
                ? (isOpen[1] = false)
                : (isOpen = [false, true, false, false])
            "
            class="navbar-item"
          >
            DAO
            <img
              src="/assets/dropdown-arrow.svg"
              alt="arrow"
              class="dropdown-arrow"
            />
          </button>
          <!-- Background for the subnavbar
          So Clicking outside the navbar will close it -->
          <button
            v-if="isOpen[1]"
            @click="isOpen[1] = false"
            tabindex="-1"
            class="navbar-item-background"
          ></button>
          <div v-if="isOpen[1]" class="sub-navbar-block">
            <a href="https://govern.devprotocol.xyz/" class="sub-navbar-item"
              >Voting Portal</a
            >
              DAO
              <img
                src="/assets/dropdown-arrow.svg"
                alt="arrow"
                class="dropdown-arrow"
              />
            </button>
            <!-- Background for the subnavbar 
          So Clicking outside the navbar will close it -->
            <button
              v-if="isOpen[1]"
              @click="isOpen[1] = false"
              tabindex="-1"
              class="navbar-item-background"
            ></button>
            <div v-if="isOpen[1]" class="sub-navbar-block">
              <a href="https://govern.devprotocol.xyz/" class="sub-navbar-item"
                >Voting Portal</a
              >
            </div>
          </div>
        </div>
        <!-- Community Section -->
        <div class="relative">
          <!-- Main Button with dropdown arrow
          On Click - when current dropdown needs to be opened change all other states to false-->
          <button
            @click="
              isOpen[2]
                ? (isOpen[2] = false)
                : (isOpen = [false, false, true, false])
            "
            class="navbar-item"
          >
            Community
            <img
              src="/assets/dropdown-arrow.svg"
              alt="arrow"
              class="dropdown-arrow"
            />
          </button>
          <!-- Background for the subnavbar
          So Clicking outside the navbar will close it -->
            <button
              v-if="isOpen[2]"
              @click="isOpen[2] = false"
              tabindex="-1"
              class="navbar-item-background"
            ></button>
            <div v-if="isOpen[2]" class="sub-navbar-block">
              <a
                href="https://community.devprotocol.xyz/"
                class="sub-navbar-item"
                >Forum</a
              >
              <a href="https://github.com/community-builders" class="sub-navbar-item">Builders Program</a>
            </div>
          </div>
          <!-- Help Section -->
          <div class="relative">
            <!-- Main Button with dropdown arrow 
          On Click - when current dropdown needs to be opened change all other states to false-->
            <button
              @click="
                isOpen[3]
                  ? (isOpen[3] = false)
                  : (isOpen = [false, false, false, true])
              "
              class="navbar-item"
            >
            <a href="#" class="sub-navbar-item">Builders Program</a>
            <a href="/community-partners" class="sub-navbar-item">Community Partners</a>
          </div>
        </div>
        <!-- Help Section -->
        <div class="relative">
          <!-- Main Button with dropdown arrow
          On Click - when current dropdown needs to be opened change all other states to false-->
          <button
            @click="smIsOpen = !smIsOpen"
            type="button"
            class="
              block
              text-gray-800
              dark:text-white
              hover:text-black
              focus:text-black focus:outline-none
            "
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="smIsOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!smIsOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
          <!-- Background for the subnavbar
          So Clicking outside the navbar will close it -->
          <button
            v-if="isOpen[3]"
            @click="isOpen[3] = false"
            tabindex="-1"
            class="navbar-item-background"
          ></button>
          <div v-if="isOpen[3]" class="sub-navbar-block">
            <a href="#" class="sub-navbar-item">FAQ</a>
            <a href="https://initto.devprotocol.xyz/" class="sub-navbar-item"
              >Tutorials</a
            >
            <a href="https://docs.devprotocol.xyz/" class="sub-navbar-item"
              >Documentation</a
            >

            <a
              href="https://github.com/dev-protocol/community/blob/main/CODE_OF_CONDUCT.md"
              class="sub-navbar-item"
              >Code of Conduct</a
            >
          </div>
        </div>
        <div class="sm:hidden relative">
          <a class="navbar-item" href="https://stakes.social/"> Launch App </a>
        </div>
        <!-- Lauch Icon -->
        <a
          class="
            bg-indigo-600
            p-2
            hidden
            sm:flex
            space-x-3
            align-baseline
            text-white
            rounded-md
            whitespace-nowrap
          "
          href="https://stakes.social/"
        >
          Launch App
        </a>
      </div>
    </nav>
    <div class="flex">
    <ThemeButton/>
    <div class="sm:hidden visible">
      <button
        @click="smIsOpen = !smIsOpen"
        type="button"
        class="
          block
          text-gray-800
          dark:text-white
          hover:text-black
          focus:text-black focus:outline-none
        "
      >
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path
            v-if="smIsOpen"
            fill-rule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
          <path
            v-if="!smIsOpen"
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
import ThemeButton from "./ThemeButton.vue";
export default {
  data() {
    return {
      // states for each of the 4 dropdowns
      isOpen: [false, false, false, false],
      // state for mobile view (hamburger icon)
      smIsOpen: false,
    };
  },
  components: {
    ThemeButton,
  },
};
</script>
