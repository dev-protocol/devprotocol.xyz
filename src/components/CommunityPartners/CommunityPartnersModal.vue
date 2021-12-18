<template>
  <transition leave-active-class="duration-300">
    <div
      v-show="isModalOpen"
      class="fixed z-10 inset-0 overflow-y-auto"
      role="dialog"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block sm:p-0
        "
      >
        <transition name="ease-out-overlay">
          <div
            v-show="isModalOpen"
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          ></div>
        </transition>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <transition name="ease-out-modal">
          <!-- Modal Content -->
          <div
            v-show="isModalOpen"
            class="
              inline-block
              align-middle
              bg-white
              rounded-lg
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              w-6/12
            "
          >

          <form class="dark:bg-gray-800">
            <div class="flex">
              <div class="flex flex-row bg-indigo-700 w-1/3">
              </div>
              <div class="grid grid-cols-2 grid-rows-6 gap-6 w-2/3 p-6">
                <div class="col-span-2 flex items-center">
                  <p class="h-8">Send us a message</p>
                </div>
                <div>
                  <label for="founderName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Founder Name</label>
                  <input type="text" id="founderName" v-model="founderName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="">
                </div>
                <div>
                  <label for="communityName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Community Name</label>
                    <input type="text" id="communityName" v-model="communityName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="">
                </div>
                <div>
                  <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Website</label>
                  <input type="text" id="website" v-model="website" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="">
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                  <input type="email" id="email" v-model="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="">
                </div>
                <div class="col-span-2">
                  <label for="whyPartnerWithUs" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Why do you want to be partner with us?</label>
                  <input type="text" id="whyPartnerWithUs" v-model="whyPartnerWithUs" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="">
                </div>
                <div class="col-span-2">
                  <label for="howYouHearAboutUs" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">How did you hear about us?</label>
                  <input type="text" id="howYouHearAboutUs" v-model="howYouHearAboutUs" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="">
                </div>
                <div class="flex items-center place-content-end col-span-2 gap-6">
                  <button type="button" @click="toggleModal" class="h-12 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800">Back</button>
                  <button type="button" @click="handleFormSubmit" class="h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                </div>
              </div>
            </div>
          </form>

          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CommunityPartnersModal",
  props: {
    isModalOpen: Boolean,
    toggleModal: Function,
    handleFormSubmitProp: Function
  },
  data() {
    return {
      founderName: "founderName Test",
      communityName: "communityName Test",
      website: "website Test",
      email: "email Test",
      whyPartnerWithUs: "whyPartnerWithUs Test",
      howYouHearAboutUs: "howYouHearAboutUs Test",
    };
  },
  methods: {
    handleFormSubmit: function () {
      this.handleFormSubmitProp({
        founderName,
        communityName,
        website,
        email,
        whyPartnerWithUs,
        howYouHearAboutUs
      });
    }
  }
};
</script>


<style lang="postcss" scoped>
.ease-out-overlay-enter-active,
.ease-out-overlay-leave-active {
  @apply opacity-100 duration-300;
}

.ease-out-overlay-enter, .ease-out-overlay-leave-to /* .fade-leave-active below version 2.1.8 */ {
  @apply opacity-0 duration-200;
}

.ease-out-modal-enter-active,
.ease-out-modal-leave-active {
  @apply opacity-100 translate-y-0 sm:scale-100 duration-300;
}

.ease-out-modal-enter, .ease-out-modal-leave-to /* .fade-leave-active below version 2.1.8 */ {
  @apply ease-in opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 duration-200;
}
</style>