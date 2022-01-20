<template>
  <div class="flex flex-col md:gap-y-4 gap-y-8 mt-28 max-w-full text-center">
    <CommunityPartnersModal
      :isModalOpen="isModalOpen"
      :toggleModal="toggleModal"
      :isModalLoading="isModalLoading"
      :isModalSuccessful="isModalSuccessful"
      :isModalFailed="isModalFailed"
      :handleFormSubmitProp="handleFormSubmit"
      ref="modal"
    />

    <h2 class="mx-auto w-full font-display text-5xl dark:text-white">
      Community Partners
    </h2>
    <h4
      class="mx-auto w-full font-display text-xl px-8 md:p-0 dark:text-gray-100"
    >
      Community Partners help us educate people about web3 and, become a part of
      their creator success
    </h4>
    <a class="w-fit m-auto" href="#" @click="toggleModal">
      <button
        class="
          text-xl
          select-none
          bg-gray-300
          dark:bg-indigo-600
          w-max
          p-2.5
          rounded-lg
        "
      >
        Become a community partner
      </button>
    </a>
    <ul
      role="list"
      class="
        md:pt-2
        pb-6
        px-8
        flex flex-wrap
        min-w-min
        max-w-max
        items-center
        justify-center
      "
    >
      <li
        v-for="(partner, index) in partners"
        :key="index"
        class="
          m-8
          col-span-1
          flex flex-col
          text-center
          dark:bg-white
          rounded-lg
          shadow
          divide-y divide-gray-200
        "
      >
        <div
          class="
            flex flex-col
            p-8
            text-gray-900
            dark:text-gray-900 dark:bg-gray-100
            rounded-t-lg
          "
        >
          <img
            :class="`w-32 h-32 flex-shrink-0 mx-auto ${partner.extraClass}`"
            :src="partner.image"
            :alt="`${partner.name}\'s Logo`"
          />
          <h3 class="mt-6 font-display text-lg font-bold">
            {{ partner.name }}
          </h3>
          <p class="max-w-para mt-6 text-sm">{{ partner.description }}</p>
        </div>
        <div
          class="
            -mt-px
            flex
            divide-x divide-gray-200
            dark:bg-white
            bg-gray-100
            rounded-b-lg
          "
        >
          <div class="w-0 flex-1 flex">
            <a
              :href="partner.link"
              class="
                relative
                -mr-px
                w-0
                flex-1
                inline-flex
                items-center
                justify-center
                py-4
                text-sm text-gray-700
                font-medium
                border border-transparent
                hover:text-gray-500
              "
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
import CommunityPartnersModal from "./CommunityPartnersModal.vue";

export default {
  name: "CommunityPartners",
  data() {
    return {
      partners: [
        {
          name: "The Algorithms",
          image: "https://github.com/TheAlgorithms.png",
          link: "https://the-algorithms.com",
          description:
            "Open Source resource for learning Data Structures & Algorithms and their implementation in any Programming Language",
          extraClass: "rounded-full",
        },
        {
          name: "GitHub",
          image: "https://github.com/github.png",
          link: "https://github.com",
          description:
            "GitHub is one of the world’s largest community of developers. It’s an intricate platform that fosters collaboration and communication between developers.",
          extraClass: "rounded-full",
        },
        {
          name: "WebXDAO",
          image: "https://github.com/WebXDAO.png",
          link: "https://webxdao.github.io",
          description:
            "An Open Source Community that focuses on decentralized applications, web 3, and blockchain technologies 🚀",
          extraClass: "rounded-full",
        },
        {
          name: "Experify",
          image: "/assets/experify.png",
          link: "https://www.facebook.com/Experify3DPrint",
          description:
            "A 3D printing and 3D scanning service placed in Plovdiv. We provide wide variety of services and materials: prototyping, cosplay props, educational projects, robotics, etc.",
          extraClass: "",
        },
        {
          name: "Microsoft For Startups",
          image: "/assets/microsoft.png",
          link: "https://startups.microsoft.com/",
          description:
            "We believe that entrepreneurship should be open to all and that anyone with an idea deserves a way to innovate and grow.  Founders Hub helps remove traditional barriers to building a tech company by democratizing historically inaccessible resources including expert mentorship.",
          extraClass: "",
        },
        {
          name: "Intlify",
          image: "https://github.com/intlify.png",
          link: "https://intlify.dev/",
          description:
            "Intlify is a project that aims to improve Developer Experience in software internationalization. We will aim to improve the Developer Experience of internationalization by providing libraries, frameworks, and tools that break down barriers to internationalization.",
          extraClass: "rounded-full",
        },
        {
          name: "Code for Japan",
          image: "/assets/code_for_japan.jpg",
          link: "https://www.code4japan.org/",
          description:
            "Code for Japan is one of the largest communities of civic hackers in Japan. We organize hackathons to improve and promote civic tech and collaborate with local governments and communities.",
          extraClass: "rounded-full",
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
    };
  },
  methods: {
    toggleModal: function () {
      const htmlEl = document.documentElement;
      const headerEl = document.querySelector("#app");

      if (this.isModalOpen) {
        htmlEl.classList.remove("overflow-y-hidden");
        headerEl.classList.remove("hidden");
      } else {
        htmlEl.classList.add("overflow-y-hidden");
        headerEl.classList.add("hidden");
      }

      this.isModalOpen = !this.isModalOpen;
    },
    fetchSendPostData: async function (url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`${this.sheetDbConfig.auth_login}:${this.sheetDbConfig.auth_password}`)}`
        }),
        body: JSON.stringify(data)
      });
      if (response.ok) return response.json();
      throw new Error(response.status);
    },
    sheetDBCreateRow: async function(address, data) {
      return this.fetchSendPostData(this.sheetDbBaseUrl + address, {
        data: { ...data }
      });
    },
    handleFormSubmit: async function ({
        founderName,
        communityName,
        website,
        email,
        whyPartnerWithUs,
        howYouHearAboutUs
    }) {
      this.isModalLoading = true;

      this.sheetDBCreateRow(this.sheetDbConfig.address, {
          'Founder Name': founderName,
          'Community Name': communityName,
          'Website': website,
          'Email': email,
          'Why do you want to partner with us?': whyPartnerWithUs,
          'How did you hear about us?': howYouHearAboutUs,
      })
      .then((data) => {
        this.isModalLoading = false;
        this.isModalSuccessful = true;
        this.$refs.modal.clearForm();
      })
      .catch((err) => {
        this.isModalLoading = false;
        this.isModalFailed = true;
      });
    }
  },
  components: {
    CommunityPartnersModal,
  },
};
</script>
