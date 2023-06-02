<template>
  <div class="mt-28 flex max-w-full flex-col gap-y-8 text-center md:gap-y-4">
    <CommunityPartnersModal
      :isModalOpen="isModalOpen"
      :toggleModal="toggleModal"
      :isModalLoading="isModalLoading"
      :isModalSuccessful="isModalSuccessful"
      :isModalFailed="isModalFailed"
      :handleFormSubmitProp="handleFormSubmit"
      ref="modal"
    />

    <h2 class="font-display mx-auto w-full text-5xl dark:text-white">
      Community Partners
    </h2>
    <h4
      class="font-display mx-auto w-full px-8 text-xl dark:text-gray-100 md:p-0"
    >
      Community Partners help us educate people about web3 and, become a part of
      their creator success
    </h4>
    <a class="m-auto w-fit" href="#" @click="toggleModal">
      <button
        class="w-max select-none rounded-lg bg-gray-300 p-2.5 text-xl dark:bg-indigo-600"
      >
        Become a community partner
      </button>
    </a>
    <ul
      role="list"
      class="flex min-w-min max-w-max flex-wrap items-center justify-center px-8 pb-6 md:pt-2"
    >
      <li
        v-for="(partner, index) in partners"
        :key="index"
        class="col-span-1 m-8 flex flex-col divide-y divide-gray-200 rounded-lg text-center shadow dark:bg-white"
      >
        <div
          class="flex flex-col rounded-t-lg p-8 text-gray-900 dark:bg-gray-100 dark:text-gray-900"
        >
          <img
            :class="`mx-auto h-32 w-32 flex-shrink-0 ${partner.extraClass}`"
            :src="partner.image"
            :alt="`${partner.name}\'s Logo`"
          />
          <h3 class="font-display mt-6 text-lg font-bold">
            {{ partner.name }}
          </h3>
          <p class="mt-6 max-w-para text-sm">{{ partner.description }}</p>
        </div>
        <div
          class="-mt-px flex divide-x divide-gray-200 rounded-b-lg bg-gray-100 dark:bg-white"
        >
          <div class="flex w-0 flex-1">
            <a
              :href="partner.link"
              class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
              <span class="ml-3">Visit Site</span>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CommunityPartnersModal from './CommunityPartnersModal.vue'

export default {
  name: 'CommunityPartners',
  data() {
    return {
      partners: [
        {
          name: 'The Algorithms',
          image: 'https://github.com/TheAlgorithms.png',
          link: 'https://the-algorithms.com',
          description:
            'Open Source resource for learning Data Structures & Algorithms and their implementation in any Programming Language',
          extraClass: 'rounded-full',
        },
        {
          name: 'GitHub',
          image: 'https://github.com/github.png',
          link: 'https://github.com',
          description:
            'GitHub is one of the world’s largest community of developers. It’s an intricate platform that fosters collaboration and communication between developers.',
          extraClass: 'rounded-full',
        },
        {
          name: 'WebXDAO',
          image: 'https://github.com/WebXDAO.png',
          link: 'https://webxdao.xyz',
          description:
            'An Open Source Community that focuses on the future of the web',
          extraClass: 'rounded-full',
        },
        {
          name: 'Experify',
          image: '/assets/experify.png',
          link: 'https://www.facebook.com/Experify3DPrint',
          description:
            'A 3D printing and 3D scanning service placed in Plovdiv. We provide wide variety of services and materials: prototyping, cosplay props, educational projects, robotics, etc.',
          extraClass: '',
        },
        {
          name: 'Microsoft For Startups',
          image: '/assets/microsoft.png',
          link: 'https://startups.microsoft.com/',
          description:
            'We believe that entrepreneurship should be open to all and that anyone with an idea deserves a way to innovate and grow.  Founders Hub helps remove traditional barriers to building a tech company by democratizing historically inaccessible resources including expert mentorship.',
          extraClass: '',
        },
        {
          name: 'Intlify',
          image: 'https://github.com/intlify.png',
          link: 'https://intlify.dev/',
          description:
            'Intlify is a project that aims to improve Developer Experience in software internationalization. We will aim to improve the Developer Experience of internationalization by providing libraries, frameworks, and tools that break down barriers to internationalization.',
          extraClass: 'rounded-full',
        },
        {
          name: 'Code for Japan',
          image: '/assets/code_for_japan.jpg',
          link: 'https://www.code4japan.org/',
          description:
            'Code for Japan is one of the largest communities of civic hackers in Japan. We organize hackathons to improve and promote civic tech and collaborate with local governments and communities.',
          extraClass: 'rounded-full',
        },
        {
          name: 'Chainwhiz',
          image: 'https://github.com/chainwhiz.png',
          link: 'https://www.chainwhiz.app/',
          description:
            'Chainwhiz provides developers a platform to discover, and solve open-source dapp bounties and earn bounty rewards. Join us and start building better Web3 goods.',
          extraClass: 'rounded-full',
        },
      ],
      isModalOpen: false,
      isModalLoading: false,
      isModalSuccessful: false,
      isModalFailed: false,
      sheetDbBaseUrl: 'https://sheetdb.io/api/v1/',
      sheetDbConfig: {
        address: import.meta.env.PUBLIC_SHEETDB_API_ID,
        auth_login: import.meta.env.PUBLIC_SHEETDB_LOGIN,
        auth_password: import.meta.env.PUBLIC_SHEETDB_PASSWORD,
      },
    }
  },
  methods: {
    toggleModal: function () {
      const htmlEl = document.documentElement
      const headerEl = document.querySelector('#app')

      if (this.isModalOpen) {
        htmlEl.classList.remove('overflow-y-hidden')
        headerEl.classList.remove('hidden')
      } else {
        htmlEl.classList.add('overflow-y-hidden')
        headerEl.classList.add('hidden')
      }

      this.isModalOpen = !this.isModalOpen
    },
    fetchSendPostData: async function (url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(
            `${this.sheetDbConfig.auth_login}:${this.sheetDbConfig.auth_password}`
          )}`,
        }),
        body: JSON.stringify(data),
      })
      if (response.ok) return response.json()
      throw new Error(response.status)
    },
    sheetDBCreateRow: async function (address, data) {
      return this.fetchSendPostData(this.sheetDbBaseUrl + address, {
        data: { ...data },
      })
    },
    handleFormSubmit: async function ({
      founderName,
      communityName,
      website,
      email,
      whyPartnerWithUs,
      howYouHearAboutUs,
    }) {
      this.isModalLoading = true

      this.sheetDBCreateRow(this.sheetDbConfig.address, {
        'Founder Name': founderName,
        'Community Name': communityName,
        Website: website,
        Email: email,
        'Why do you want to partner with us?': whyPartnerWithUs,
        'How did you hear about us?': howYouHearAboutUs,
      })
        .then((data) => {
          this.isModalLoading = false
          this.isModalSuccessful = true
          this.$refs.modal.clearForm()
        })
        .catch((err) => {
          this.isModalLoading = false
          this.isModalFailed = true
        })
    },
  },
  components: {
    CommunityPartnersModal,
  },
}
</script>
