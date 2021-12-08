<template>
  <div id="slider-1" class="container items-center px-5 mx-auto">
    <div
      class="
        flex flex-wrap
        justify-center
        mb-12
        divide-y-2
        lg:divide-y-0 lg:divide-x-2
      "
    >
      <div class="w-full lg:w-1/3">
      <img :src="`/assets/${currentItem.image}`" alt="" class="pt-0 lg:pt-24"/>
      </div>
       <div class="p-4 rounded-t-xl lg:rounded-l-xl lg:p-8 bg-blueGray-50">
          <a target="_blank" :href="currentItem.link" class="no-underline"></a>
        </div>

      <div class="w-full lg:w-2/4">
        <div
          class="
            h-full
            p-4
            space-y-4
            lg:rounded-r-xl
            rounded-b-xl
            lg:p-8
            bg-blueGray-50
          "
        >
          <p class="font-mono text-base mb-4 text-dark-400">
            Creator Success Stories
          </p>
          <a
            target="_blank"
            :href="currentItem.link"
            class="text-black no-underline dark:text-white"
          >
            <h3 class="font-black font-display text-3xl my-8">
              {{ currentItem.title }}
            </h3>
          </a>
          <p
            class="
              mx-auto
              mb-16
              text-base
              font-medium
              leading-relaxed
              text-blueGray-700
            "
          >
            {{ currentItem.description }}
          </p>
        </div>
      </div>

      <div class="w-full lg:w-1/3"></div>
      <div class="w-full lg:w-2/4 flex justify-between justify-items-stretch">
        <p
          class="
            px-4
            lg:px-8
            underline
            font-bold
            mt-6
            font-mono
            justify-self-start
            cursor-pointer
          "
          v-on:click="setCurrentItem(prevItem())"
        >
          &lt; {{ prevItem().title }}
        </p>
        <p
          class="
            px-4
            lg:px-8
            underline
            font-bold
            mt-6
            font-mono
            justify-self-end
            cursor-pointer
          "
          v-on:click="setCurrentItem(nextItem())"
        >
          {{ nextItem().title }} &gt;
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      items: [
        {
          name: "vyper",
          title: "Vyper",
          image: "vyper.png",
          description:
            `Vyper is a Python-like language for writing EVM smart contracts. Vyper is used in Uniswap v1 and CurveFinance contracts. They had trouble collecting donations even though they were bringing in a lot of revenue for many blockchain projects. They raised $20,000 in donations in one year, but received about 10 times that amount, $240,000, in one year with Dev Protocol.`,
          link: "https://stakes.social/0x90168f9Ba07B95f629f8b77F789d46A549d6470F",
        },
        {
          name: "sindre",
          title: "Sindre",
          image: "chalk.png",
          description:
            `Sindre is one of the great full-time open-sourcerer who have developed over 1000 OSS projects. One of his famous OSS projects, Chalk is downloaded 90 million times a week, but was not receiving sufficient revenue from donations. He has been involved with Dev Protocol as an MVP user since 2019, and has given back about $2.1M in revenue earned there to GitHub's most active developers this year.`,
          link: "https://stakes.social/0x44d871aebF0126Bf646753E2C976Aa7e68A66c15",
        },
        {
          name: "hide",
          title: "HiDE",
          image: "hide2.png",
          description:
            `HiDE is a decentralized blogging platform from Japan. They used the Dev Protocol to monetize bloggers and create a sustainable reward distribution model for users. They are a newly founded startup, but have made $60,000 in revenue in six months with Stakes.social and are about to start giving back to their bloggers.`,
          link: "https://stakes.social/0x528010540517Dd3B708d8Ff7036f841FEA0135b2",
        },
      ],
      currentItem: {
        name: "vyper",
        title: "Vyper",
        image: "vyper.png",
        description:
          `Vyper is a Python-like language for writing EVM smart contracts. Vyper is used in Uniswap v1 and CurveFinance contracts. They had trouble collecting donations even though they were bringing in a lot of revenue for many blockchain projects. They raised $20,000 in donations in one year, but received about 10 times that amount, $240,000, in one year with Dev Protocol.`,
        link: "https://stakes.social/0x90168f9Ba07B95f629f8b77F789d46A549d6470F",
      },
    };
  },
  mounted() {
    this.items.forEach((item) => {
      const img = new Image();
      img.src = `/assets/${item.image}`;
    });
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
