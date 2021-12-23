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
            @click="toggleModal"
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
              w-full
              md:w-9/12
              2xl:w-7/12
            "
          >

          <form class="dark:bg-gray-800" autocomplete="off" v-on:submit.prevent="handleFormSubmit">
            <div class="flex">
              <div class="text-white md:flex flex-col bg-indigo-700 dark:bg-indigo-800 w-1/3 hidden p-8 2xl:p-10 gap-7">
              <p class="text-xl ">Contact Information</p>
              <p class="text-lg">Have any questions/comments? Reach out to our team members via
                <a href="https://discord.gg/VwJp4KM"
                  class="underline underline-offset-4 hover:decoration-2">
                  Discord</a>.
              </p>
              <div class="flex flex-wrap gap-4">
                <img class="filter invert" src="/assets/email.png" alt="email icon" />
                <p>community@devprotocol.xyz</p>
              </div>
              <div class="flex gap-8">
                <a href="https://discord.com/invite/VwJp4KM">
                  <img class="w-6 h-6" src="/assets/discord.svg" alt="discord icon" />
                </a>
                <a href="https://github.com/dev-protocol">
                  <img class="w-6 h-6" src="/assets/github.png" alt="github icon" />
                </a>
                <a href="https://twitter.com/devprtcl">
                  <img class="w-6 pt-1 filter invert brightness-0" src="/assets/twitter.svg" alt="twitter icon" />
                </a>
              </div>
              </div>
              <div class="grid grid-cols-2 gap-6 md:w-2/3 p-8 2xl:p-10 w-full">
                <!-- Feedback -->
                <div v-show="isModalFailed" class="modal-alert text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800">
                  <span class="font-bold">Error!</span> Something went wrong, please try again.
                </div>
                <div v-show="isModalSuccessful" class="modal-alert text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800">
                  <span class="font-bold">Success!</span> Your response has been submitted successfully.
                </div>
                <!-- ./Feedback -->

                <div class="col-span-2 flex items-center">
                  <p class="h-8 text-xl">Application Form</p>
                </div>
                <div class="col-span-2 md:col-span-1">
                  <label for="founderName" class="community-partners-label">Founder Name</label>
                  <input type="text" id="founderName" v-model="founderName" class="community-partners-input" :class="isModalLoading && 'opacity-50'" :readonly="isModalLoading" required>
                </div>
                <div class="col-span-2 md:col-span-1">
                  <label for="communityName" class="community-partners-label">Community Name</label>
                    <input type="text" id="communityName" v-model="communityName" class="community-partners-input" :class="isModalLoading && 'opacity-50'" :readonly="isModalLoading" required>
                </div>
                <div class="col-span-2 md:col-span-1">
                  <label for="website" class="community-partners-label">Website</label>
                  <input type="text" id="website" v-model="website" class="community-partners-input" :class="isModalLoading && 'opacity-50'" :readonly="isModalLoading" required>
                </div>
                <div class="col-span-2 md:col-span-1">
                  <label for="email" class="community-partners-label">Email</label>
                  <input type="email" id="email" v-model="email" class="community-partners-input" :class="isModalLoading && 'opacity-50'" :readonly="isModalLoading" required>
                </div>
                <div class="col-span-2">
                  <label for="whyPartnerWithUs" class="community-partners-label">Why do you want to partner with us?</label>
                  <input type="text" id="whyPartnerWithUs" v-model="whyPartnerWithUs" class="community-partners-input" :class="isModalLoading && 'opacity-50'" :readonly="isModalLoading" required>
                </div>
                <div class="col-span-2">
                  <label for="howYouHearAboutUs" class="community-partners-label">How did you hear about us?</label>
                  <textarea id="howYouHearAboutUs" v-model="howYouHearAboutUs" rows="4" class="community-partners-input" :class="isModalLoading && 'opacity-50'" :readonly="isModalLoading"  required></textarea>
                </div>
                <div class="flex items-center place-content-between mt-5 md:mt-0 md:place-content-end col-span-2 gap-6">
                  <img
                    v-show="isModalLoading"
                    class="animate-spin filter dark:invert"
                    src="/assets/spinner.png"
                    alt="spinner"
                  />
                  <button type="button" @click="toggleModal" class="community-partners-button bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700">Back</button>
                  <button type="submit" class="community-partners-button text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700" :class="isModalLoading && 'opacity-50'" :disabled="isModalLoading">Submit</button>
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
    isModalLoading: Boolean,
    isModalFailed: Boolean,
    isModalSuccessful: Boolean,
    toggleModal: Function,
    handleFormSubmitProp: Function
  },
  data() {
    return {
      founderName: "",
      communityName: "",
      website: "",
      email: "",
      whyPartnerWithUs: "",
      howYouHearAboutUs: "",
    };
  },
  methods: {
    handleFormSubmit: function () {
      this.handleFormSubmitProp({
        founderName: this.founderName,
        communityName: this.communityName,
        website: this.website,
        email: this.email,
        whyPartnerWithUs: this.whyPartnerWithUs,
        howYouHearAboutUs: this.howYouHearAboutUs
      });
    },
    clearForm: function () {
      this.founderName = "";
      this.communityName = "";
      this.website = "";
      this.email = "";
      this.whyPartnerWithUs = "";
      this.howYouHearAboutUs = "";
    }
  }
};
</script>


<style lang="postcss" scoped>
.modal-alert {
  @apply p-4 text-sm col-span-2;
}

.community-partners-button {
  @apply h-12 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800;
}

.community-partners-label {
  @apply block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300;
}

.community-partners-input {
  @apply focus:outline-none focus:ring focus:border-indigo-500 bg-gray-100 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white;
}

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
