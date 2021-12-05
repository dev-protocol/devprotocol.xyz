<template>
  <section class="bg-white dark:bg-darkPrimary overflow-hidden text-center px-8">
    <h2 class="mx-auto w-full font-display text-5xl m-8 dark:text-white">Testimonials</h2>
    <div
      class="
        relative
        max-w-7xl
        mx-auto
        pt-20
        pb-12
        px-4
        sm:px-6
        lg:px-8 lg:py-20
      "
    >
      <svg
        class="
          absolute
          top-full
          left-0
          transform
          translate-x-80
          -translate-y-24
          lg:hidden
        "
        width="784"
        height="404"
        fill="none"
        viewBox="0 0 784 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200 dark:text-gray-800"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="784"
          height="404"
          fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
        />
      </svg>

      <svg
        class="
          hidden
          lg:block
          absolute
          right-full
          top-1/2
          transform
          translate-x-1/2
          -translate-y-1/2
        "
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="56409614-3d62-4985-9a10-7ca758a8f4f0"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200 dark:text-gray-800"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
        />
      </svg>

      <div class="relative lg:flex lg:items-center">
        <a :href="currentItem.link" class="hidden lg:block lg:flex-shrink-0">
          <img
            class="h-64 w-64 bg-white rounded-full xl:h-80 xl:w-80"
            :src="currentItem.image"
            alt=""
          />
        </a>

        <div class="relative lg:ml-10">
          <svg
            class="
              absolute
              top-0
              left-0
              transform
              -translate-x-8 -translate-y-24
              h-36
              w-36
              text-indigo-200
              opacity-50
            "
            stroke="currentColor"
            fill="none"
            viewBox="0 0 144 144"
            aria-hidden="true"
          >
            <path
              stroke-width="2"
              d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
            />
          </svg>
          <blockquote class="relative">
            <div
              class="
                text-2xl
                leading-9
                font-medium
                text-gray-900
                dark:text-gray-100
              "
            >
              <p>
                {{ currentItem.description }}
              </p>
            </div>
            <footer class="mt-8">
              <a :href="currentItem.link">
                <div class="flex">
                  <div class="flex-shrink-0 lg:hidden">
                    <img
                      class="h-12 w-12 bg-white rounded-full"
                      :src="currentItem.image"
                      alt=""
                    />
                  </div>
                  <div class="ml-4 lg:ml-0">
                    <div
                      class="
                        text-xl
                        font-medium
                        text-gray-900
                        dark:text-gray-100
                        underline
                        inline-flex
                        items-center
                        justify-around
                      "
                    >
                      {{ currentItem.name }}
                    </div>
                  </div>
                </div>
              </a>
            </footer>
            <div class="py-8 flex justify-between items-center">
              <p
                class="
                  pl-0
                  px-4
                  lg:px-8
                  lg:pl-0
                  underline
                  font-bold
                  mt-6
                  font-mono
                  justify-self-end
                  cursor-pointer
                "
                v-on:click="setCurrentItem(prevItem())"
              >
                &lt; Previous
              </p>
              <p
                class="
                  pr-0
                  px-4
                  lg:px-8
                  lg:pr-0
                  underline
                  font-bold
                  mt-6
                  font-mono
                  justify-self-end
                  cursor-pointer
                "
                v-on:click="setCurrentItem(nextItem())"
              >
                Next &gt;
              </p>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonial",
  data() {
    return {
      items: [
        {
          name: "Sindre",
          image: "https://github.com/sindresorhus.png",
          description: `I like how the Dev Protocol is improving open source sustainability in an innovative way`,
          link: "https://twitter.com/sindresorhus",
        },
        {
          name: "μ-zomia",
          image: "/assets/m-zomia-rounded.jpg",
          description: `DevProtocol is born out of the love of people supporting people. Once you understand that, there's no reason not to be part of the team.`,
          link: "https://twitter.com/zomia12",
        },
        {
          name: "HiDE",
          image: "/assets/hide.png",
          description: `DEV protocol is a sustainable source of funding for the community ecosystem that uses our services to operate.
It is a core feature of the HiÐΞ protocol and is a very important financial resource. As OSS creators, we feel free to use some DEV tokens for development and redistribute them in our services. I will continue to do my best for the further development of the DEV community that you have staked out for us.`,
          link: "https://twitter.com/HideProtocol",
        },
        {
          name: "ScytheSwap",
          image: "/assets/scythe_swap.png",
          description: `Being a part of Dev Protocol has been an incredible experience. When I was on boarded to stakes.social I was exposed to an audience of OSS creators and enthusiasts alike who helped to fund our project while simultaneously engaging with us, creating long-term connections with some of the most intelligent developers in the world. Dev Protocol, and all that it offers to OSS contributors, along with its community are truly one of a kind.`,
          link: "https://github.com/ScytheSwapProtocol",
        },
        {
          name: "IslandViewDigital",
          image: "/assets/islandviewdigital.jpg",
          description: `Being part of Dev Protocol not only means being able to sustainably raise capital for our immersive, revenue-generating VR real estate development projects, it means being part of a community of talented innovators with whom we can synergize to bring even more value to the protocol.`,
          link: "https://twitter.com/IslandVDigital",
        },
        {
          name: "Samuil / SQ-UI",
          image: "/assets/samuil.jpg",
          description: `DEV protocol jump-started our project and helped us do what we love.`,
          link: "https://twitter.com/samuil4",
        },
      ],
      currentItem: {
        name: "Sindre",
        image: "https://github.com/sindresorhus.png",
        description: `I like how the Dev Protocol is improving open source sustainability in an innovative way`,
        link: "https://twitter.com/sindresorhus",
      },
    };
  },
  mounted() {
    setInterval(() => setCurrentItem(nextItem()), 5000);
  },
  methods: {
    setCurrentItem(item) {
      this.currentItem = item;
    },
    nextItem() {
      let nextItem;
      this.items.forEach((item, index) => {
        if (item.name == this.currentItem.name) {
          if (index + 1 < this.items.length) {
            nextItem = this.items[index + 1];
          } else {
            nextItem = this.items[0];
          }
        }
      });
      return nextItem;
    },
    prevItem() {
      let prevItem;
      this.items.forEach((item, index) => {
        if (item.name == this.currentItem.name) {
          if (index - 1 >= 0) {
            prevItem = this.items[index - 1];
          } else {
            prevItem = this.items[this.items.length - 1];
          }
        }
      });
      return prevItem;
    },
  },
};
</script>

<style scoped>
div {
  border: 0;
}
</style>
