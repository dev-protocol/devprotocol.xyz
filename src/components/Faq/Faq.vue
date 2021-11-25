<template>
  <div class="flex flex-col justify-center pt-20 pb-10 md:pt-28">
    <p class="text-center text-4xl">Frequently Asked Questions</p>
    <p class="text-center text-sm m-3">
      If you don't find the answer to your questions, please contact us at
      <a href="https://discord.gg/VwJp4KM" class="underline hover:text-blue-600"
        >discord</a
      >.
    </p>
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
      Translate {{ lang === "English" ? "(JPN)" : "ENG" }}
    </button>
  </div>
  <div
    class="grid md:grid-cols-2 justify-items-stretch md:-mt-20 lg:-mt-40 mb-28"
  >
    <div v-for="(item, index) in tranlatedList" v-bind:key="index" class="my-2">
      <div class="mx-5 my-4 h-full bg-gray-300 rounded-md dark:bg-indigo-600">
        <input type="checkbox" :id="'question' + index" class="peer hidden" />
        <div
          class="
            absolute
            leading-normal
            ml-3
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
          class="relative text-xl pl-10 p-2 block w-full cursor-pointer"
        >
          {{ item.ques }}
        </label>
        <div
          class="
            peer-checked:pt-3
            tracking-wider
            peer-checked:h-full peer-checked:opacity-100 peer-checked:px-10
            !w-full
            bg-white
            dark:bg-darkPrimary
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
          ans: "Best place to find the current roadmap is on our website: https://devprotocol.xyz",
          lang: "English",
          tag: "all",
        },
        {
          ques: "What is liquidity?",
          ans: "Liquidity is a characteristic of a market that tells how easy it is to buy and sell an asset without moving the price. In crypto providing liquidity is the act of depositing tokens in a pool with another token (usually ETH) to form a market. Liquidity providers usually get shares of that market and can receive a bonus - Liquidity program bonus - (Geyser on Dev Protocol for example).",
          lang: "English",
          tag: "all",
        },
        {
          ques: "What is the Dev Protocol?",
          ans: "The Dev Protocol is a way for creators who run projects such as OSS and Open Access to earn income opportunities and achieve sustainability. The Dev Protocol aims to create a world where innovators can take on challenges and solve problems that might not be financially viable, but offer value. Creators who create technically socially valuable projects that might not be economically viable are now able to find an alternative way for funding. Reference article: https://initto.devprotocol.xyz/en/what-is-protocol/",
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
          ans: "Creators can stop using Dev Protocol if they de-authenticate their markets. Stakers can quit if they stop their staking. Unlike memberships of fitness clubs or subscription service, you don't have any particular procedures to quit such as submitting documents.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "What should I do if I want to stop the activity?",
          ans: "You can stop accepting staking by de-authentication.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "When can I withdraw my creators' fees? (Project Owner)",
          ans: "You can withdraw your Creator Reward at any time. Just pay attention to gas fees, they may vary and can affect your decision to withdraw. There is a yearly limit in place for larger creators which you can learn more about by looking at DIP-55.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "When can project team members withdraw their creator fees?",
          ans: "Project team members can withdraw Creator Reward at any time they want. Just pay attention to gas fees, they may vary and can affect your decision to withdraw. Also, remember that there is a yearly limit in place (DIP-55).",
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
          ans: "Projects that are being developed can be registered. However, development must be recent and ongoing.",
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
          ans: "Only through cryptocurrencies is a complex, unique and sustainable system like Dev Protocol currently possible. The token emission and all the incentives we create are only possible using our token.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "How to use stakes.social?",
          ans: "It is straightforward. Just visit https://stakes.social, connect your wallet find the project you like the most, and stake DEV tokens to sustainably fund them.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "How to promote my OSS project to get sponsor on stakes.social?",
          ans: "The best way is by sharing DEV within your community. Explain to them how Dev Protocol allows sustainable funding, how patrons also receive rewards, and how it's different from a simple donation. The bigger the project gets, the more you have the chance for others outside your community to find your project.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "How is the gas price calculated?",
          ans: "The gas fees depend on the usage of the Ethereum network. Every operation that happens on this network requires gas to be executed, so the bigger the demand for the network, the bigger the gas fees fill be.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "How can creators make money with Dev Protocol?",
          ans: "Creators have to onboard their projects on https://stakes.social, Patrons can Stake DEV tokens on their project's pool and sustainably fund them via DEV Token Rewards.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "Can Property Token's name be changed ?",
          ans: "To rename or rename a PropertyToken, you can look for the address of the Property on Etherscan and execute changeName / changeSymbol from the Write Contract of the Contract.",
          lang: "English",
          tag: "creators",
        },
        {
          ques: "Is the DEV token a security?",
          ans: "We don't believe DEV tokens are considered securities for multiple reasons. First, even if creators don't hold any DEV, they can receive DEV as their reward in compensation for their activities. While there is a staking reward built in to incentivize interaction. Users that stake on creators are doing so to signal their importance rather than an expectation of a reward. The DEV token in our eyes is strictly a utility token used to aid the ecosystem.",
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
          ans: "The mission of Dev Protocol is to maximize creativity for every creator of the world, using the power of Blockchain and DeFi to redirect individuals self-interest to sustainably fund projects and creators.",
          lang: "English",
          tag: "developers",
        },
        {
          ques: "What can you do with a Dapp, for example?",
          ans: "You can interact with the smart contract easily with a web experience, it can be anything, from taking a loan to buying an NFT, to funding a creator, the possibilities are endless.",
          lang: "English",
          tag: "developers",
        },
        {
          ques: "Can I establish a new market?",
          ans: "To establish a new market, get in touch with the Dev Protocol team, preferably through Discord. After discussions, if the market is approved it will go through the DAO voting to be implemented. ",
          lang: "English",
          tag: "developers",
        },
        {
          ques: "When can I withdraw my staking rewards?",
          ans: "You can withdraw your Staking Reward at any time you want. Just pay attention to gas fees, they may vary and can affect your decision to withdraw. ",
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
          ans: "The DEV Token is the utility token that allows the Dev Protocol ecosystem to exist, through it Creators and Patrons are rewarded.",
          lang: "English",
          tag: "stake_holders",
        },
        {
          ques: "What is the benefits of using stakes.social?",
          ans: "For Patrons, using stakes social allows you to receive rewards while funding your favorite Creator; For Creators, using stakes social allows you to monetize your OSS Project and receive rewards from your Patrons.",
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
          ques: "Dev Protocolのロードマップはどこで見ることができますか？",
          ans: "我々のウェブサイト、devprotocol.xyzにて現在のロードマップを確認することができます。",
          lang: "Japanese",
          tag: "all",
        },
        {
          ques: "流動性とは何ですか？",
          ans: "流動性は市場の特徴の一つで、値段が変動せずに資産を簡単に購入できるかどうかを示すものです。暗号資産における流動性提供とは、マーケットを形作るために別のトークン（多くの場合ETH）のプールにトークンをデポジットする行為のことです。流動性提供者は多くの場合その市場のシェアを得て、流動性プログラムボーナスというボーナスを受け取ることができます（Dev ProtocolではGeyserがそのボーナスの例です）。",
          lang: "Japanese",
          tag: "all",
        },
        {
          ques: "Devprotocolとはなんですか？",
          ans: "Dev Protocolは、OSSやオープンアクセスといったプロジェクトでクリエイターが収益を得る機会と持続可能性を達成する方法です。Dev Protocolの目標は資金的な理由で存続が難しいイノベーターが挑戦をして社会問題を解決し、価値を提供する世界を創造することです。技術的にも社会的にも価値があるプロジェクトを作り出すが経済的な困難を抱えるクリエイターが資金提供の新たな方法を利用することができます。詳しくはこちらの関連記事をご参照ください：https://initto.devprotocol.xyz/en/what-is-protocol/",
          lang: "Japanese",
          tag: "all",
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
          ques: "クリエイター報酬はいつ引き出せますか？（プロジェクトオーナー）",
          ans: "クリエイター報酬はいつでも引き出すことが可能です。ただし引き出す際にはガス代がかかり、ガス代は変動するので、引き出すかどうかの決定に多少影響する可能性があります。また大規模クリエイターの場合には毎年上限が設けられています。この件に関してはDIP-55をご参照ください。",
          lang: "Japanese",
          tag: "creators",
        },
        {
          ques: "プロジェクトのチームメンバーは、クリエイター報酬をいつ引き出せますか？",
          ans: "プロジェクトのチームメンバーはクリエイター報酬をいつでも引き出すことが可能です。ただし引き出す際にはガス代がかかり、ガス代は変動するので、引き出すかどうかの決定に多少影響する可能性があります。また、毎年の上限が設けられていることにご注意ください（DIP-55を参照）。",
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
          ques: "なぜ暗号通貨を選ぶのか？",
          ans: "Dev Protocolのように複雑かつ独特で、持続可能なシステムを実現可能にしてくれるのは、暗号通貨のみです。トークンエミッションやあらゆるインセンティブはDEVトークンを利用しているからこそ可能になっています。",
          lang: "Japanese",
          tag: "creators",
        },
        {
          ques: "stakes.socialの使い方は？",
          ans: "使い方は非常にシンプルです。stakes.socialにアクセスし、ご自身のウォレットを好きなプロジェクトに接続すれば、持続的な資金提供をプロジェクトにするためにDEVトークンをステーキングすることができます。",
          lang: "Japanese",
          tag: "creators",
        },
        {
          ques: "OSSプロジェクトを宣伝してstakes.socialでスポンサーを獲得するには？",
          ans: "最も良い方法は自分自身のコミュニティ内でDEVを共有することです。そこでDev Protocolが持続可能な資金提供を可能にする方法を説明し、パトロンの報酬受け取り方法についても説明し、単なる寄付とは違うことを説明することです。プロジェクトが大きくなればなるほど、コミュニティ外の人々がプロジェクトを見つけやすくなります。",
          lang: "Japanese",
          tag: "creators",
        },
        {
          ques: "ガス代はどのようにして算出されますか？",
          ans: "ガス代はイーサリアムネットワークの使用によって変化します。イーサリアムネットワーク上で発生するあらゆる動作にガス代が実行されるので、ネットワークの需要が大きいほどガス代も高くなります。",
          lang: "Japanese",
          tag: "creators",
        },
        {
          ques: "クリエイターはどうやってDev Protocolで稼ぐことができますか？",
          ans: "クリエイターはstakes.social上にプロジェクトをオンボードする必要があります。パトロンはプロジェクトのプールにDEVトークンをステーキングし、DEVトークンん報酬を通じて持続可能な資金提供をすることができます。",
          lang: "Japanese",
          tag: "creators",
        },
        {
          ques: "プロパティトークンの名前変更はできますか？",
          ans: "プロパティトークンの名前変更をするためには、イーサスキャンのプロパティアドレスを確認して、コントラクトのWrite Contractから changeName / changeSymbol を実行してください。",
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
          ques: "ガス料金は何のためにあるのですか？",
          ans: "ガス代は手数料のことで、イーサリアムブロックチェーンで確実に取引を実行する際の計算リソースを機能させるために必要となります。",
          lang: "Japanese",
          tag: "beginners",
        },
        {
          ques: "ブロックチェーンとは何か、なぜそれが暗号通貨にとって重要なのか。",
          ans: "ブロックチェーンとは変更不可能な一連のタイムスタンプされたデータ記録のことで、単一の団体によって所有されていないコンピューター集団が監督しています。ブロックチェーンは暗号通貨に関するテクノロジーの基礎となっており、オープンで、安全な、速いP2Pの取引を可能にします。",
          lang: "Japanese",
          tag: "beginners",
        },
        {
          ques: "DEVトークンを購入する際の用途は何ですか？",
          ans: "DEVトークンを購入する最も簡単な方法はウォレットにイーサリアムを置き、Uniswap V2でDEVと交換することです。",
          lang: "Japanese",
          tag: "beginners",
        },
        {
          ques: "DEVトークンはどこで使用できますか？",
          ans: "DEVトークンはOSSプロジェクトへのステーキング（資金提供）、流動性提供、通貨として使用されることがあります。",
          lang: "Japanese",
          tag: "beginners",
        },
        {
          ques: "DEV Tokenの価格は変動しますか？",
          ans: "はい。DEVトークンの価格は市場によって決まります。",
          lang: "Japanese",
          tag: "beginners",
        },
        {
          ques: "Dev Protocolのミッションとビジョンは何ですか？",
          ans: "Dev Protocolのミッションは世界中にいるあらゆるクリエイターの創造性を最大化することで、ブロックチェーンとDeFiの力を使うことで、プロジェクトとクリエイターに持続可能な資金提供をして、個人が自分で利益を生み出せるような方向に向かえるようにします。",
          lang: "Japanese",
          tag: "developers",
        },
        {
          ques: "Dappを使って例えばどういったことができますか。",
          ans: "ユーザーはウェブ体験で簡単にスマートコントラクトを利用することが可能で、融資を受ける、NFTを購入する、クリエイターに資金提供をする等の様々なことが可能となり、可能性は無限大です。",
          lang: "Japanese",
          tag: "developers",
        },
        {
          ques: "新マーケットを開設することはできますか？",
          ans: "新マーケットの開設を希望をする方は、Dev Protocolチームに連絡をください。Discord上での連絡が好ましいです。ヒアリングをさせていただいた後、ご提案のマーケットが承認された場合、開設するためのDAO投票に移ります。",
          lang: "Japanese",
          tag: "developers",
        },
        {
          ques: "ステーキングすると、全てのプロジェクトに報酬が分散されますか？",
          ans: "報酬はDEVをステーキングしたプロジェクトのみに配布されます。",
          lang: "Japanese",
          tag: "stake_holders",
        },
        {
          ques: "ステーキング報酬はいつ引き出せますか？",
          ans: "ステーキング報酬はいつでも引き出すことが可能です。ただし引き出す際にはガス代かかり、ガス代は変動するので、引き出すかどうかの決定に多少影響する可能性があります。",
          lang: "Japanese",
          tag: "stake_holders",
        },
        {
          ques: "DEVトークンを引き出すにはどうすればいいですか？",
          ans: "stakes.socialにご自身のウォレットを接続し、ステーキングをしているクリエイターのページに行って、「引き出す（withdraw）」ボタンを押す、というものがシンプルな方法です。もし全額を引き出したい場合、右側のボックスにあるDEVをクリックすれば、ご自身がステーキングした金額の上限が自動的に表示されます。一定量のDEVのみを引き出したい場合は、その額を入力してください。報酬だけを引き出したい場合は、0と入力し、引き出すボタンを押してくださいい。",
          lang: "Japanese",
          tag: "stake_holders",
        },
        {
          ques: "DEVトークンとは何か、そのメリットは何か？",
          ans: "DEVトークンはDev Protocolのエコシステムが存続するためのユーティリティトークンです。このエコシステムによってクリエイターとパトロンの両者が報酬を得ます。",
          lang: "Japanese",
          tag: "stake_holders",
        },
        {
          ques: "stakes.socialを利用するメリットは何ですか？",
          ans: "パトロンがstakes.socialを利用することにより、好きなクリエイターに資金提供をしながら報酬を得ることが可能となります。クリエイターがstakes.socialを利用することにより、OSSプロジェクトを収益化してパトロンから報酬を得ることが可能となります。",
          lang: "Japanese",
          tag: "stake_holders",
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
