<template>
  <div class="flex flex-col justify-center pt-20 pb-10 md:pt-28">
    <p class="text-center text-4xl">Frequently Asked Questions</p>
    <button @click="translate" class="text-xl mt-4 select-none">
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
          ques: "This Japanese Lorem Ipsum is based on the kanji frequency count at tidraso.co.uk and includes about 50% kanji, 25% hiragana,",
          ans: 'Hiragana occurs more often at the end of sentences, rather in clumps of 1 to 4 chars rather than just single chars. Katakana is very unlikely to appear as a single character in Japanese text, but hiragana could. Exclamation and question marks are "double-byte", not standard ascii ones. Suggestions for improvements or alternatives are welcome.',
          lang: "English",
        },
        {
          ques: "This Japanese Lorem Ipsum is based on the kanji frequency count at tidraso.co.uk and includes about 50% kanji, 25% hiragana,",
          ans: 'Hiragana occurs more often at the end of sentences, rather in clumps of 1 to 4 chars rather than just single chars. Katakana is very unlikely to appear as a single character in Japanese text, but hiragana could. Exclamation and question marks are "double-byte", not standard ascii ones. Suggestions for improvements or alternatives are welcome.',
          lang: "English",
        },
        {
          ques: "This Japanese Lorem Ipsum is based on the kanji frequency count at tidraso.co.uk and includes about 50% kanji, 25% hiragana,",
          ans: 'Hiragana occurs more often at the end of sentences, rather in clumps of 1 to 4 chars rather than just single chars. Katakana is very unlikely to appear as a single character in Japanese text, but hiragana could. Exclamation and question marks are "double-byte", not standard ascii ones. Suggestions for improvements or alternatives are welcome.',
          lang: "English",
        },
        {
          ques: "This Japanese Lorem Ipsum is based on the kanji frequency count at tidraso.co.uk and includes about 50% kanji, 25% hiragana,",
          ans: 'Hiragana occurs more often at the end of sentences, rather in clumps of 1 to 4 chars rather than just single chars. Katakana is very unlikely to appear as a single character in Japanese text, but hiragana could. Exclamation and question marks are "double-byte", not standard ascii ones. Suggestions for improvements or alternatives are welcome.',
          lang: "English",
        },
        {
          ques: "This Japanese Lorem Ipsum is based on the kanji frequency count at tidraso.co.uk and includes about 50% kanji, 25% hiragana,",
          ans: 'Hiragana occurs more often at the end of sentences, rather in clumps of 1 to 4 chars rather than just single chars. Katakana is very unlikely to appear as a single character in Japanese text, but hiragana could. Exclamation and question marks are "double-byte", not standard ascii ones. Suggestions for improvements or alternatives are welcome.',
          lang: "English",
        },
        {
          ques: "This Japanese Lorem Ipsum is based on the kanji frequency count at tidraso.co.uk and includes about 50% kanji, 25% hiragana,",
          ans: 'Hiragana occurs more often at the end of sentences, rather in clumps of 1 to 4 chars rather than just single chars. Katakana is very unlikely to appear as a single character in Japanese text, but hiragana could. Exclamation and question marks are "double-byte", not standard ascii ones. Suggestions for improvements or alternatives are welcome.',
          lang: "English",
        },
        {
          ques: "栄トノキ富紋九め文参ろるトぞ解瀬へそ理銃4事を手練ら拳 54蔵臣姿り格去クラヒケ結聞ワヌ国読きでば",
          ans: "制応ヨラコ衝表ワ欠金カミノヱ住稿イきりわ程4聴約やげえ私写ーわ平切レ府福有楽マリケチ見保刻つおね。込ぎ女評なびク害両きけ護57刑9可きふなっ詳治ヲリタ底都こずやま全直エ越入ろぼきな決広り必島オ読民綱あほリめ窃外継し実特掃ゅほむフ。際か出宗ヨクウス性菓テ挙文ぽリゅ意種ど写護ロ常葉ネチ育朗イヲヨラ隔著ヘノネ広対39樹だぽど載85解ヤ牛禎ツヌフ重聴起たンさを工皐破吸妙房ざ。",
          lang: "Japanese",
        },
        {
          ques: "54蔵臣姿り格去クラヒケ結聞ワヌ国読きでば喪受ヌエヲテ来主ツ角模るおこ要沖フトサ著置ナルリア言報",
          ans: "栄トノキ富紋九め文参ろるトぞ解瀬へそ理銃4事を手練ら拳子のな選権セメヘ田秀ロホ禁転ごびわ金28督積編95攻接研准ぼよた。芸感たょく応青ぼでつ協芸新ミヨナ記選スろぞも求芸ホカウロ課朝こ他称知ノ園教ス由実レチヲ全激熱ーに。童在ウス何著接スクチ辞暮ラク木共みずよ供国チヒケ犯大あいと恐全シセヌク進情7達経べ理閉モ阪辞の多上をくげろ法必ナセルリ岸2家な転川困摘頭ほ。",
          lang: "Japanese",
        },
        {
          ques: "54蔵臣姿り格去クラヒケ結聞ワヌ国読きでば喪受ヌエヲテ来主ツ角模るおこ要沖フトサ著置ナルリア言報",
          ans: "54蔵臣姿り格去クラヒケ結聞ワヌ国読きでば喪受ヌエヲテ来主ツ角模るおこ要沖フトサ著置ナルリア言報ノヤヲコ載紙チトアリ雪社ゃ指68砂翼娘6飯ぎが止基ちラのじ年発側晴リ。9図冊ずトと勝自エレ度新じ条側稿情よ美選いリ零平健ざリい識内キト香御裕残侮リ。交け擁代あドけ掲禁ルヱサ断対チ聞柿カ禁命ぱぼ経定チワエ部膳開りど易表ひげじ関日子ねぽこら造県ぐち恒並松カテラウ結能克即県すざごわ。",
          lang: "Japanese",
        },
        {
          ques: "永めんう岩3境ねさた日揮ヌ世試フハヨニ予技タメ期稿18呂もわ健軟トでっり歴変遇えのリれ心初提ナユ",
          ans: "永めんう岩3境ねさた日揮ヌ世試フハヨニ予技タメ期稿18呂もわ健軟トでっり歴変遇えのリれ心初提ナユ驚技福宜尋おづ。政のうみレ暮断ス反支スア百述基ぱフお国45引スサリ点92当ヨノルワ整九くる神方能ヒ期付びむざ掲元むッゆず防己躍諸須ふン。更ムホツ録覚ぴトね通格れッ原固でいス獲質ぱけ駅気イムキ女棋教図で香念メタ守学人ふり変南ホリラオ能内イ立後めがル石譲ルエオ中号ルケホセ行畑王革児つ。",
          lang: "Japanese",
        },
        {
          ques: "連ラレカ海検ぼ青売ぴ科型しじ立闘きべ次報聴ネラリコ中捜ケ営経能ツル職務づゃ要紙ンのめ暮藤ぎと",
          ans: "連ラレカ海検ぼ青売ぴ科型しじ立闘きべ次報聴ネラリコ中捜ケ営経能ツル職務づゃ要紙ンのめ暮藤ぎとてぜ。済ちルたろ更愛ゆど的岸ばろ住今け率72下ヨソメア広51夜根9法平ネハミホ田協換ニルウユ見5一オ求減ン校集フも円宝五単べゅさな。2治ヤ務乱ホ地面フヨ内写れそと済精観判セワチネ輝終ち矢座ヘツチセ意秘み影写ヲ掲進たし稿業げのあ端知んびしみ復各総議価イリ誌高敢渓んいき。",
          lang: "Japanese",
        },
        {
          ques: "国ねろぎ稿15要奪7合確経めぱぶ認素ホ表政ホタ新禁規ヌクナ建題図話刻草べ。著門セエヱク家確ハネ位際ホヒ道座",
          ans: "国ねろぎ稿15要奪7合確経めぱぶ認素ホ表政ホタ新禁規ヌクナ建題図話刻草べ。著門セエヱク家確ハネ位際ホヒ道座ヲト写薬掲ろひぎび支快ずフどづ織分ゅわ両74落原と条何交ぐ。道レずて告苦ド展材ト企嗅ずだはて真庭春みん上確チネヌノ断必極サナ告創ら就情イケホナ一2会カフ広趣ぽさこ浸育め極幅アニト島月へろ読協ぼ授完撃明融ぱ。",
          lang: "Japanese",
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
