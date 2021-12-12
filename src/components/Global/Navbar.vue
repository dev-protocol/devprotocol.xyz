<template>
  <header
    class="
      text-black
      dark:text-white
      burger:flex
      burger:justify-between
      burger:items-center
      burger:px-4
      burger:py-3
      border-b-2
      dark:border-b-0 dark:shadow-xl
    "
  >
    <div
      class="
        flex flex-wrap
        burger:flex-nowrap
        w-full
        items-center
        justify-between
        align-baseline
        px-4
        py-3
        burger:p-0
      "
    >
      <!-- Dev Protocol Icon -->
      <a href="https://devprotocol.xyz" class="text-gray-900 md:p-4 py-4">
        <svg
          width="224"
          height="38.4"
          viewBox="0 0 1112 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="text-gray-900 dark:text-white"
        >
          <path d="M48 144H0V192H48V144Z" fill="#00D0FD" />
          <path d="M96 144V96H48V144V192H96V144Z" fill="#5B8BF5" />
          <path
            d="M288 0H240V48V96H192H144H96V144H144H192H240H288V96V48H336H384V0H336H288Z"
            fill="#FF3815"
          />
          <path d="M144 96V48V0H96H48V48V96H96H144Z" fill="#D500E6" />
          <path
            d="M458 0H486.74C509.868 0 526.023 16.1555 526.023 40.4737C526.023 66.1525 510.378 81.6277 486.06 81.6277H458V0ZM484.189 70.744C503.916 70.744 513.609 60.5406 513.609 40.4737C513.609 22.2776 503.916 10.7136 484.869 10.7136H469.564V70.744H484.189Z"
            class="fill-current"
          />
          <path
            d="M544.389 0H602.039V10.7136H555.953V34.0116H590.135V44.5551H555.953V70.744H602.039V81.4577H544.389V0Z"
            class="fill-current"
          />
          <path
            d="M613.433 0H626.357L643.023 53.7383C645.063 60.2004 645.574 65.1321 645.914 72.1045H650.845C651.016 65.9824 651.866 60.5406 653.906 53.9083L670.742 0H683.497L656.968 81.4577H639.792L613.433 0Z"
            class="fill-current"
          />
          <path
            d="M458 109.007H491.161C508.167 109.007 518.37 119.21 518.37 133.835C518.37 148.63 508.167 158.834 490.991 158.834H469.564V190.465H458V109.007ZM488.951 148.46C500.174 148.46 506.126 142.168 506.126 133.665C506.126 125.162 500.344 119.551 488.951 119.551H469.564V148.46H488.951Z"
            class="fill-current"
          />
          <path
            d="M533.505 109.007H568.367C584.863 109.007 594.726 118.53 594.726 131.114C594.726 137.407 592.686 141.998 588.604 144.889C584.523 147.78 579.591 149.311 573.639 149.651V154.582C585.373 154.753 589.795 158.834 592.175 170.058L596.087 190.635H583.332L579.931 171.248C578.231 160.875 572.959 156.963 561.905 156.963H545.069V190.465H533.505V109.007ZM566.667 146.25C576.36 146.25 582.482 141.658 582.482 132.815C582.482 123.972 576.36 119.551 566.667 119.551H545.239V146.25H566.667Z"
            class="fill-current"
          />
          <path
            d="M650.165 107.306C673.293 106.966 691.149 124.822 690.809 149.651C691.149 174.649 673.293 192.335 650.165 191.995C627.038 192.335 608.841 174.479 609.181 149.651C608.841 124.822 627.208 106.966 650.165 107.306ZM650.165 117.85C632.479 117.85 621.766 131.455 621.766 149.651C621.766 168.187 632.479 181.452 650.165 181.452C667.681 181.452 678.565 168.187 678.565 149.651C678.565 131.455 667.681 117.85 650.165 117.85Z"
            class="fill-current"
          />
          <path
            d="M725.501 119.721H696.761V109.007H766.995V119.721H737.235V190.465H725.671V119.721H725.501Z"
            class="fill-current"
          />
          <path
            d="M813.591 107.306C836.719 106.966 854.575 124.822 854.234 149.651C854.575 174.649 836.719 192.335 813.591 191.995C790.463 192.335 772.267 174.479 772.607 149.651C772.267 124.822 790.463 106.966 813.591 107.306ZM813.421 117.85C795.735 117.85 785.021 131.455 785.021 149.651C785.021 168.187 795.735 181.452 813.421 181.452C830.937 181.452 841.82 168.187 841.82 149.651C841.82 131.455 830.937 117.85 813.421 117.85Z"
            class="fill-current"
          />
          <path
            d="M907.803 107.306C927.699 107.306 940.114 119.211 943.515 131.455L931.951 135.706C930.42 130.944 927.699 126.863 923.958 123.292C920.217 119.721 914.945 117.85 907.803 117.85C891.307 117.85 880.253 129.584 880.253 148.801C880.253 168.357 891.307 181.282 907.803 181.282C921.918 181.282 928.72 174.139 932.461 162.915L943.685 167.167C939.774 181.112 927.189 191.995 907.803 191.995C882.974 192.335 867.499 172.949 867.839 148.971C867.499 125.503 884.675 106.796 907.803 107.306Z"
            class="fill-current"
          />
          <path
            d="M995.892 107.306C1019.02 106.966 1036.88 124.822 1036.54 149.651C1036.88 174.649 1019.02 192.335 995.892 191.995C972.765 192.335 954.569 174.479 954.909 149.651C954.569 124.822 972.935 106.966 995.892 107.306ZM995.892 117.85C978.206 117.85 967.493 131.455 967.493 149.651C967.493 168.187 978.206 181.452 995.892 181.452C1013.41 181.452 1024.29 168.187 1024.29 149.651C1024.29 131.455 1013.41 117.85 995.892 117.85Z"
            class="fill-current"
          />
          <path
            d="M1055.41 109.007H1066.98V179.581H1111.02V190.465H1055.41V109.007Z"
            class="fill-current"
          />
        </svg>
      </a>
      <!-- Hamburger icon and close icon -->

      <!-- all dropdown icons -->
      <nav
        :class="
          smIsOpen ? 'block w-full pt-4 order-1 burger:order-none' : 'hidden'
        "
        class="px-2 pt-2 pb-4 burger:flex burger:p-0"
      >
        <div
          class="
            flex flex-col
            space-y-3
            burger:space-y-0 burger:flex-row
            space-x-3
          "
        >
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
              class="px-3 burger:px-0 navbar-item"
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
              <a href="/about" class="sub-navbar-item">About</a>
              <a
                href="https://trello.com/b/oFu5uWJF/roadmap"
                class="sub-navbar-item"
                >Roadmap</a
              >
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
              <a
                href="https://github.com/community-builders"
                class="sub-navbar-item"
                >Builders Program</a
              >
              <a href="/community-partners" class="sub-navbar-item"
                >Community Partners</a
              >
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
              Help
              <img
                src="/assets/dropdown-arrow.svg"
                alt="arrow"
                class="dropdown-arrow"
              />
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
              <a href="/faq" class="sub-navbar-item">FAQ</a>
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
          <div class="burger:hidden relative">
            <a class="navbar-item" href="https://stakes.social/">
              Launch App
            </a>
          </div>
        </div>
      </nav>
      <div class="flex">
        <ThemeButton />
        <div class="burger:hidden visible">
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
        <!-- Lauch Icon -->
        <a
          class="
            bg-indigo-600
            p-2
            hidden
            burger:flex
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
