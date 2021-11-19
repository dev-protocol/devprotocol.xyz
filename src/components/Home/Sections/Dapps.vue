<template>
  <div class="px-10 sm:px-20">
    <h1 class="text-center text-5xl mb-5 font-display">Dapps</h1>
    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"
      :wrap-around="true"
      :autoplay="4000"
      class=""
    >
      <Slide v-for="slide in dapps" :key="slide">
        <div
          class="
            w-full
            min-h-[300px]
            flex flex-col
            justify-center
            items-center
            bg-gray-300
            dark:text-white dark:bg-indigo-600
            rounded-lg
          "
        >
          <img
            :alt="`${slide?.name}logo`"
            :src="`${slide?.logo}`"
            class="w-2/3 h-40 m-auto object-scale-down"
          />
          <div class="flex flex-col flex-grow">
            <h1 class="text-2xl">{{ slide.name }}</h1>
            <p class="text-sm mt-3">{{ slide.description }}</p>
          </div>
          <a
            :href="slide.link"
            :alt="slide.name"
            class="
              tracking-wider
              font-semibold
              text-black
              dark:text-gray-200
              mb-4
              underline
              text-sm
            "
            >Learn More</a
          >
        </div>
      </Slide>
      <template #addons>
        <Navigation
          class="!bg-gray-300 dark:!bg-indigo-600 dark:!border-darkPrimary"
        />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Slider",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      dapps: [
        {
          name: "stakes.social",
          logo: "/assets/stakes.social.png",
          description: "First and official Dapp of Dev Protocol",
          link: "https://stakes.social",
        },
        {
          name: "μ-zomia",
          logo: "/assets/m-zomia.png",
          description:
            "Support musicians and people involved in music production",
          link: "https://github.com/mzomia00/m-zomia/blob/main/README.md",
        },
        {
          name: "Cobogo",
          logo: "/assets/cobogo.png",
          description: "The next generation of YouTube Monetization",
          link: "https://cobogo.social",
        },
        {
          name: "Anime Bank",
          logo: "/assets/anime-bank.png",
          description: "Anime x Blockchain new service (beta)",
          link: "#",
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "start",
      },

      breakpoints: {
        700: {
          itemsToShow: 1,
          snapAlign: "center",
        },

        // 1024 and up
        900: {
          itemsToShow: 2,
          snapAlign: "center",
        },

        // 1024 and up
        1024: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
    };
  },
});
</script>
<style>
.carousel__slide {
  padding: 5px;
}

.carousel__prev,
.carousel__next {
  width: 4rem !important;
  height: 4rem !important;
  border-radius: 100% !important;
  box-sizing: content-box;
  border: 5px solid !important;
  user-select: none !important;
}

@media (max-width: 767px) {
  .carousel__prev,
  .carousel__next {
    width: 3rem !important;
    height: 3rem !important;
    border-radius: 100% !important;
  }
}
</style>
