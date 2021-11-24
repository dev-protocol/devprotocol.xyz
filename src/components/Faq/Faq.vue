<template>
  <div class="flex flex-col justify-center pt-20 pb-10 md:pt-28">
    <p class="text-center text-4xl">Frequently Asked Questions</p>
    <button
      @click="translate"
      class="
        text-xl
        mt-4
        select-none
        bg-gray-300
        dark:bg-indigo-600
        w-max
        mx-auto
        p-2
        rounded-lg
      "
    >
      Transalate {{ lang === "English" ? "(JPN)" : "ENG" }}
    </button>
  </div>
  <div
    class="grid md:grid-cols-2 justify-items-stretch md:-mt-20 lg:-mt-32 mb-5"
  >
    <div v-for="(item, index) in tranlatedList" v-bind:key="index">
      <div class="mx-10 my-2 h-full">
        <input type="checkbox" :id="'question' + index" class="peer hidden" />
        <div
          class="
            absolute
            leading-normal
            ml-4
            z-10
            text-3xl
            duration-200
            ease-in-out
            peer-checked:transform
            peer-checked:transition-transform
            peer-checked:rotate-45
          "
        >
          +
        </div>
        <label
          :for="'question' + index"
          class="
            bg-gray-300
            rounded-md
            dark:bg-indigo-600
            relative
            text-xl
            pl-10
            p-2
            block
            w-full
            cursor-pointer
          "
        >
          {{ item.ques }}
        </label>
        <div
          class="
            peer-checked:pt-3
            tracking-wider
            peer-checked:h-auto peer-checked:opacity-100 peer-checked:px-10
            !w-full
            h-0
            overflow-hidden
            opacity-0
            transition-all
            duration-200
            ease-in-out
          "
        >
          {{ item.ans }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      questionAndAnswers: [
        {
          ques: "Where can I find the Dev Protocol roadmap?",
          ans: "Best place to find the current roadmap is on our website, devprotocol.xyz",
          lang: "English",
          tag: "all",
        },
        {
          ques: "What is liquidity?",
          ans: "Liquidity is a characteristic of a market that tells how easy it is to buy and sell an asset without moving the price. In crypto proividing liquidity is the act of depositing tokens in a pool with another token (usually ETH) to form a market. Liquidity providers usually get shares of that market and can receive a bonus - Liquidity program bonus - (Geyser on Dev Protocol for example).",
          lang: "English",
          tag: "all",
        },
        {
          ques: "What is the Dev Protocol?",
          ans: "The Dev Protocol is a way for creators who run projects such as OSS and Open Access to earn income opportunities and achieve sustainability.The Dev Protocol aims to create a world where innovators can take on challenges and solve problems that might not be financially viable, but offer value. Creators who create technically socially valuable project that might not be economically viable are now able to find an alternative way for funding. Reference article: https://initto.devprotocol.xyz/en/what-is-protocol/",
          lang: "English",
          tag: "all",
        },
        {
          ques: "Are Property tokens securities? Are there any risks involved in issuing them?",
          ans: "We also don't believe that Property tokens are considered securities either. They are more like a membership for projects to join them or access them as a member.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "Can I stop using the Dev Protocol?",
          ans: "Creators can stop using Dev Protocol if they deauthenticate their markets. Stakers can quit if they stop their staking. Unlike memberships of fitness clubs or subscription service, you don't have any particular procedures to quit such as submitting documents.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "What should I do if I want to stop the activity?",
          ans: "You can stop accepting staking by deauthentication.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "When can I withdraw my creators' fees? (Project Owner)",
          ans: "You can withdraw your Creator Reward at any time. Just pay attention to gas fees, they are varaible and can affect your decision to withdraw. There is a yearly limit in place for larger creators which you can learn more about by looking at DIP-55.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "When can project team members withdraw their creator fees?",
          ans: "Project team members can withdraw Creator Reward at any time they want. Just pay attention to gas fees, they are varaible and can affect your decision to withdraw. Also, remember that there is a yearly limit in place (DIP-55).",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "Can I only register OSS?",
          ans: "Stakes social allows onboarding of only OSS developers at the moment, but we are moving towards more creators through stakes social and other platforms.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "Can I register a project that is under development (not yet completed)?",
          ans: "Projects that are being developed can be registered. However development must be recent and ongoing.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "Can I register a project that is raising funds?",
          ans: "Projects that are being fund-raised can be registered.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "Why we choose cryptocurrency?",
          ans: "Only through cryptocurrencies is a complex, unique and sustainable system like Dev Protocol currently possible. The token emission and all the incentives we create are only possible using our own token.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "How to use stakes.social?",
          ans: "It is really straight forward, visit stakes.social, connect your wallet find the project you like the most and stake DEV tokens to sustainably fund them.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "How to promote my OSS project to get sponsor on stakes.social?",
          ans: "The best way is by sharing DEV within your own community. Explain to them how Dev Protocol allows sustainable fundingl, how patrons also receive rewards, and how it's different from a simple donation. The bigger the project gets, the more you have the chance for others outside your community to find your project.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "How is the gas price calculated?",
          ans: "The gas fees depends on the usage of the Ethereum network. Every operation that happens on this network requires gas to be executed, so the bigger the demand for the network, the bigger the gas fees fill be.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "How can creators make money with Dev Protocol?",
          ans: "Creators have to onboard their projects on stakes.social, Patrons can Stake DEV tokens on their project's pool and sustainably fund them via DEV Token Rewards.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "Can Property Token's name be changed ?",
          ans: "To rename or rename a PropertyToken, you can look for the address of the Property on Etherscan and execute changeName / changeSimbol from the Write Contract of the Contract.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "Is the DEV token a security?",
          ans: "We don't believe DEV tokens are considered securities for multiple reasons. First even if creators don't hold any DEV, they can receive DEV as their reward in compensation for their activities. While there is a staking reward built in to incentivize interaction. Users that stake on creators are doing so to signal their importance rather than an expectation of a reward. The DEV token in our eyes is strictly a utility token used to aid the ecosystem.",
          lang: "English",
          tag: "beginners",
        },
        {
          ques: "What is the gas fee for?",
          ans: "Gas is the fee that is required to run computational resources to successfully execute a transaction on the Ethereum blockchain. ",
          lang: "English",
          tag: "beginners",
        },
        {
          ques: "What is blockchain and why is it important to cryptocurrency?",
          ans: "A blockchain refers to an immutable time-stamped series of data records supervised by a cluster of computers not owned by any single entity. Blockchain serves as the base technology for cryptocurrencies, enabling peer-to-peer transactions that are open, secure and fast.",
          lang: "English",
          tag: "beginners",
        },
        {
          ques: "What are the application for buying DEV token?",
          ans: "The easiest way to buy DEV tokens is to get Ethereum in a wallet and swap it for DEV on Uniswap V2",
          lang: "English",
          tag: "beginners",
        },
        {
          ques: "Where can I use my DEV token?",
          ans: "The DEV Tokens can be used to stake (fund) for an OSS Project, provide liquidity or used as a currency.",
          lang: "English",
          tag: "beginners",
        },
        {
          ques: "Will DEV Token prices fluctuate?",
          ans: "Yes. The price of the DEV token is determined by the market.",
          lang: "English",
          tag: "beginners",
        },
        {
          ques: "What is a blockchain wallet?",
          ans: "A blockchain wallet allows users to store and manage their Bitcoin, Ether, and other cryptocurrencies,  it also allows transactions to occur and interacts with dApps, like stakes.social.",
          lang: "English",
          tag: "beginners",
        },
        {
          ques: "What is the mission and vision of Dev Protocol?",
          ans: "The mission of Dev Protocol is to maximize creativity for every creator of the world, using the power of Blockchain and DeFi to redirect individuals self-interest to sustianably fund projects and creators.",
          lang: "English",
          tag: "developers",
        },
        {
          ques: "What can you do with a Dapp, for example?",
          ans: "You can interact with the smart contract easily with a web experience, it can be anything, from taking a loan to buying an NFT, to funding a creator, the possiblities are endless.",
          lang: "English",
          tag: "developers",
        },
        {
          ques: "Can I establish a new market?",
          ans: "To establish a new market, get in touch with the Dev Protocol team, preferrably through Discord, after discussions, if the market is approved it will go through the DAO voting to be implemented. ",
          lang: "English",
          tag: "developers",
        },
        {
          ques: "When can I withdraw my staking rewards?",
          ans: "You can withdraw your Staking Reward at any time you want. Just pay attention to gas fees they are varaible and can affect your decision to withdraw. ",
          lang: "English",
          tag: "stake_holders",
        },
        {
          ques: "How can I assure that DEV token is safe?",
          ans: "DEV tokens are ERC-20 compliant. As long as you have a wallet that supports ERC-20, your DEV tokens are secured. Please make sure that you save your secret key in a safe place, or make backups for it. Do NOT upload or share your keys.",
          lang: "English",
          tag: "stake_holders",
        },
        {
          ques: "If I stake on a project, will the reward be spread across all projects?",
          ans: "The Reward will only be given for the projects you stake DEV to.",
          lang: "English",
          tag: "stake_holders",
        },
        {
          ques: "How to withdraw my DEV token?",
          ans: "Simply connect your wallet to stakes.social, go to the creator page that you're staking on, and you'll find a withdraw button. If you want to withdraw everything, click on DEV on the right side of the box and it should automatically show the maximum value you have staked. If you want to withdraw only a certain amount of DEV, just type that number. If you want to just withdraw your Rewards, type 0 and click on the withdraw button.",
          lang: "English",
          tag: "stake_holders",
        },
        {
          ques: "What is a DEV token and what its benefits?",
          ans: "The DEV Token is the unitility token that allows the Dev Protocol ecosystem to exist, through it Creators and Patrons are rewarded.",
          lang: "English",
          tag: "stake_holders",
        },
        {
          ques: "What is the benefits of using stakes.social?",
          ans: "For Patrons, using stakes social allows you to recieve rewards while funding your favorite Creator; For Creators, using stakes social allows you to monetize your OSS Project and receive rewards from your Patrons.",
          lang: "English",
          tag: "stake_holders",
        },
        {
          ques: "What are the wallet that DEV Protocol supported?",
          ans: "You can use various wallets such as Metamask, WalletConnect, Fortmatic, WalletLink, etc.",
          lang: "English",
          tag: "stake_holders",
        },
        {
          ques: "Propertyトークンは証券ですか？発行する際のリスクはありますか？",
          ans: "プロパティトークンが証券とみなされるとは想定していません。\nプロパティトークンはプロジェクトの会員権のようなものであり、プロジェクトのガバナンスに参加したり、プロジェクトにチームの一員としてアクセスができたりするものです",
          lang: "Japanese",
          tag: "creators",
        },
        {
          ques: "Dev Protocolの利用を辞めることはできますか？",
          ans: "クリエイターならマーケットの認証を解除することで辞めることができます。ステイカーは、ステーキングを解除することで辞めることができます。スポーツクラブやサブスクリプションサービスのような退会手続きはございません。",
          lang: "Japanese",
          tag: "creators",
        },
        {
          ques: "活動を辞める場合はどうしたらいいですか？",
          ans: "アセットの認証を解除することでステーキングの受付を終了することができます。",
          lang: "Japanese",
          tag: "creators",
        },
        {
          ques: "開発中のプロジェクト（未完成）は登録できませんか？",
          ans: "開発中のプロジェクトでも登録可能です。",
          lang: "Japanese",
          tag: "creators",
        },
        {
          ques: "資金調達をしているプロジェクトは登録できませんか？",
          ans: "資金調達をしているプロジェクトも登録可能です。",
          lang: "Japanese",
          tag: "creators",
        },
        {
          ques: "DEVトークンは証券ですか？",
          ans: "DEVトークンが証券とみなされるとは予想しておりません。具体的には、クリエイターはDEVを保有していなくても、自分の活動の対価としてDEVを報酬として受け取ることができ、支援者はステーキングにより自分の保有DEVをロックした対価として報酬を受け取ることができます。また、ステーキングを解除することでロックしていた自分のDEVを全額引き出すことができます。",
          lang: "Japanese",
          tag: "beginners",
        },
        {
          ques: "DEVプロトコルが対応しているウォレットは？",
          ans: "Metamaskをはじめ、WalletConnectやFortmatic, WalletLinkで様々なWalletを使用することが可能です。",
          lang: "Japanese",
          tag: "stake_holders",
        },
      ],
      lang: "English",
    };
  },
  methods: {
    translate: function () {
      this.lang = this.lang === "English" ? "Japanese" : "English";
    },
  },
  computed: {
    tranlatedList: function () {
      return this.questionAndAnswers.filter((item) => item.lang === this.lang);
    },
  },
};
</script>
