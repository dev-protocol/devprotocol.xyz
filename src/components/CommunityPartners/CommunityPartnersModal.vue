<template>
  <transition leave-active-class="duration-300">
    <div
      v-show="isModalOpen"
      class="fixed inset-0 z-10 overflow-y-auto"
      role="dialog"
    >
      <div
        class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <transition name="ease-out-overlay">
          <div
            v-show="isModalOpen"
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            @click="toggleModal"
          ></div>
        </transition>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:h-screen sm:align-middle"
          >&#8203;</span
        >

        <transition name="ease-out-modal">
          <!-- Modal Content -->
          <div
            v-show="isModalOpen"
            class="inline-block w-full transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all md:w-9/12 2xl:w-7/12"
          >
            <form
              class="dark:bg-gray-800"
              autocomplete="off"
              v-on:submit.prevent="handleFormSubmit"
            >
              <div class="flex">
                <div
                  class="hidden w-1/3 flex-col gap-7 bg-indigo-700 p-8 text-white dark:bg-indigo-800 md:flex 2xl:p-10"
                >
                  <p class="text-xl">Contact Information</p>
                  <p class="text-lg">
                    Have any questions/comments? Reach out to our team members
                    via
                    <a
                      href="https://discord.gg/VwJp4KM"
                      class="underline underline-offset-4 hover:decoration-2"
                    >
                      Discord</a
                    >.
                  </p>
                  <div class="flex flex-wrap gap-4">
                    <img
                      class="invert filter"
                      src="/assets/email.png"
                      alt="email icon"
                    />
                    <p>community@devprotocol.xyz</p>
                  </div>
                  <div class="flex gap-8">
                    <a href="https://discord.gg/VwJp4KM">
                      <img
                        class="h-6 w-6"
                        src="/assets/discord.svg"
                        alt="Discord icon"
                      />
                    </a>
                    <a href="https://github.com/dev-protocol">
                      <img
                        class="h-6 w-6"
                        src="/assets/github.png"
                        alt="GitHub icon"
                      />
                    </a>
                    <a href="https://twitter.com/devprtcl">
                      <img
                        class="w-6 pt-1 brightness-0 invert filter"
                        src="/assets/twitter.svg"
                        alt="Twitter icon"
                      />
                    </a>
                  </div>
                </div>
                <div
                  class="grid w-full grid-cols-2 gap-6 p-8 md:w-2/3 2xl:p-10"
                >
                  <!-- Feedback -->
                  <div
                    v-show="isModalFailed"
                    class="modal-alert rounded-lg bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800"
                  >
                    <span class="font-bold">Error!</span> Something went wrong,
                    please try again.
                  </div>
                  <div
                    v-show="isModalSuccessful"
                    class="modal-alert rounded-lg bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800"
                  >
                    <span class="font-bold">Success!</span> Your response has
                    been submitted successfully.
                  </div>
                  <!-- ./Feedback -->

                  <div class="col-span-2 flex items-center">
                    <p class="h-8 text-xl">Application Form</p>
                  </div>
                  <div class="col-span-2 md:col-span-1">
                    <label for="founderName" class="community-partners-label"
                      >Founder Name</label
                    >
                    <input
                      type="text"
                      id="founderName"
                      v-model="founderName"
                      class="community-partners-input"
                      :class="isModalLoading && 'opacity-50'"
                      :readonly="isModalLoading"
                      required
                    />
                  </div>
                  <div class="col-span-2 md:col-span-1">
                    <label for="communityName" class="community-partners-label"
                      >Community Name</label
                    >
                    <input
                      type="text"
                      id="communityName"
                      v-model="communityName"
                      class="community-partners-input"
                      :class="isModalLoading && 'opacity-50'"
                      :readonly="isModalLoading"
                      required
                    />
                  </div>
                  <div class="col-span-2 md:col-span-1">
                    <label for="website" class="community-partners-label"
                      >Website</label
                    >
                    <input
                      type="text"
                      id="website"
                      v-model="website"
                      class="community-partners-input"
                      :class="isModalLoading && 'opacity-50'"
                      :readonly="isModalLoading"
                      required
                    />
                  </div>
                  <div class="col-span-2 md:col-span-1">
                    <label for="email" class="community-partners-label"
                      >Email</label
                    >
                    <input
                      type="email"
                      id="email"
                      v-model="email"
                      class="community-partners-input"
                      :class="isModalLoading && 'opacity-50'"
                      :readonly="isModalLoading"
                      required
                    />
                  </div>
                  <div class="col-span-2">
                    <label
                      for="whyPartnerWithUs"
                      class="community-partners-label"
                      >Why do you want to partner with us?</label
                    >
                    <input
                      type="text"
                      id="whyPartnerWithUs"
                      v-model="whyPartnerWithUs"
                      class="community-partners-input"
                      :class="isModalLoading && 'opacity-50'"
                      :readonly="isModalLoading"
                      required
                    />
                  </div>
                  <div class="col-span-2">
                    <label
                      for="howYouHearAboutUs"
                      class="community-partners-label"
                      >How did you hear about us?</label
                    >
                    <textarea
                      id="howYouHearAboutUs"
                      v-model="howYouHearAboutUs"
                      rows="4"
                      class="community-partners-input"
                      :class="isModalLoading && 'opacity-50'"
                      :readonly="isModalLoading"
                      required
                    ></textarea>
                  </div>
                  <div
                    class="col-span-2 mt-5 flex place-content-between items-center gap-6 md:mt-0 md:place-content-end"
                  >
                    <img
                      v-show="isModalLoading"
                      class="animate-spin filter dark:invert"
                      src="/assets/spinner.png"
                      alt="spinner"
                    />
                    <button
                      type="button"
                      @click="toggleModal"
                      class="community-partners-button bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      class="community-partners-button bg-blue-700 text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
                      :class="isModalLoading && 'opacity-50'"
                      :disabled="isModalLoading"
                    >
                      Submit
                    </button>
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
  name: 'CommunityPartnersModal',
  props: {
    isModalOpen: Boolean,
    isModalLoading: Boolean,
    isModalFailed: Boolean,
    isModalSuccessful: Boolean,
    toggleModal: Function,
    handleFormSubmitProp: Function
  },
  data () {
    return {
      founderName: '',
      communityName: '',
      website: '',
      email: '',
      whyPartnerWithUs: '',
      howYouHearAboutUs: ''
    }
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
      })
    },
    clearForm: function () {
      this.founderName = ''
      this.communityName = ''
      this.website = ''
      this.email = ''
      this.whyPartnerWithUs = ''
      this.howYouHearAboutUs = ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.modal-alert {
  @apply col-span-2 p-4 text-sm;
}

.community-partners-button {
  @apply h-12 rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800;
}

.community-partners-label {
  @apply mb-2 block text-lg font-medium text-gray-900 dark:text-gray-300;
}

.community-partners-input {
  @apply block w-full rounded-lg border bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring dark:bg-gray-700 dark:text-white;
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
  @apply translate-y-0 opacity-100 duration-300 sm:scale-100;
}

.ease-out-modal-enter, .ease-out-modal-leave-to /* .fade-leave-active below version 2.1.8 */ {
  @apply translate-y-4 opacity-0 duration-200 ease-in sm:translate-y-0 sm:scale-95;
}
</style>
