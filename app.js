const ROWS = {
  top: [
    ["q", "ㅂ"],
    ["w", "ㅈ"],
    ["e", "ㄷ"],
    ["r", "ㄱ"],
    ["t", "ㅅ"],
    ["y", "ㅛ"],
    ["u", "ㅕ"],
    ["i", "ㅑ"],
    ["o", "ㅐ"],
    ["p", "ㅔ"],
  ],
  middle: [
    ["a", "ㅁ"],
    ["s", "ㄴ"],
    ["d", "ㅇ"],
    ["f", "ㄹ"],
    ["g", "ㅎ"],
    ["h", "ㅗ"],
    ["j", "ㅓ"],
    ["k", "ㅏ"],
    ["l", "ㅣ"],
  ],
  bottom: [
    ["z", "ㅋ"],
    ["x", "ㅌ"],
    ["c", "ㅊ"],
    ["v", "ㅍ"],
    ["b", "ㅠ"],
    ["n", "ㅜ"],
    ["m", "ㅡ"],
  ],
};

const JAMO_TO_KEYS = {
  ㄱ: ["r"],
  ㄲ: ["r", "r"],
  ㄳ: ["r", "t"],
  ㄴ: ["s"],
  ㄵ: ["s", "w"],
  ㄶ: ["s", "g"],
  ㄷ: ["e"],
  ㄸ: ["e", "e"],
  ㄹ: ["f"],
  ㄺ: ["f", "r"],
  ㄻ: ["f", "a"],
  ㄼ: ["f", "q"],
  ㄽ: ["f", "t"],
  ㄾ: ["f", "x"],
  ㄿ: ["f", "v"],
  ㅀ: ["f", "g"],
  ㅁ: ["a"],
  ㅂ: ["q"],
  ㅃ: ["q", "q"],
  ㅄ: ["q", "t"],
  ㅅ: ["t"],
  ㅆ: ["t", "t"],
  ㅇ: ["d"],
  ㅈ: ["w"],
  ㅉ: ["w", "w"],
  ㅊ: ["c"],
  ㅋ: ["z"],
  ㅌ: ["x"],
  ㅍ: ["v"],
  ㅎ: ["g"],
  ㅏ: ["k"],
  ㅐ: ["o"],
  ㅑ: ["i"],
  ㅒ: ["i", "o"],
  ㅓ: ["j"],
  ㅔ: ["p"],
  ㅕ: ["u"],
  ㅖ: ["u", "p"],
  ㅗ: ["h"],
  ㅘ: ["h", "k"],
  ㅙ: ["h", "o"],
  ㅚ: ["h", "l"],
  ㅛ: ["y"],
  ㅜ: ["n"],
  ㅝ: ["n", "j"],
  ㅞ: ["n", "p"],
  ㅟ: ["n", "l"],
  ㅠ: ["b"],
  ㅡ: ["m"],
  ㅢ: ["m", "l"],
  ㅣ: ["l"],
};

const KEY_TO_ROW = Object.fromEntries(
  Object.entries(ROWS).flatMap(([row, keys]) => keys.map(([key]) => [key, row])),
);

const CHOSEONG = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];
const JUNGSEONG = [
  "ㅏ",
  "ㅐ",
  "ㅑ",
  "ㅒ",
  "ㅓ",
  "ㅔ",
  "ㅕ",
  "ㅖ",
  "ㅗ",
  "ㅘ",
  "ㅙ",
  "ㅚ",
  "ㅛ",
  "ㅜ",
  "ㅝ",
  "ㅞ",
  "ㅟ",
  "ㅠ",
  "ㅡ",
  "ㅢ",
  "ㅣ",
];
const JONGSEONG = [
  "",
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];

const RAW_LEVELS = [
  {
    name: "1단계",
    label: "가운데 자판",
    rows: ["middle"],
      words: [
        "하나님",
        "한나",
        "아론",
        "하란",
        "마라",
        "나아만",
        "아나니아",
      "모리아",
      "암몬",
      "아람",
      "노아",
      "마노아",
      "라마",
      "로마",
        "마리아",
        "오난",
        "말라",
        "말론",
        "호론",
        "아모리",
        "하몰",
        "나홀",
        "나함",
        "하람",
        "오홀라",
        "나오미",
        "나인",
        "로암미",
        "로루하마",
        "아미",
      ],
  },
  {
    name: "2단계",
    label: "가운데 + 윗 자판",
      rows: ["middle", "top"],
      words: [
        "가나안",
        "갈릴리",
        "갈멜",
        "길갈",
        "겟세마네",
        "골고다",
        "고라",
        "고멜",
        "솔로몬",
        "고린도",
        "골로새",
        "데살로니가",
        "디모데",
        "디도",
        "빌레몬",
        "빌립보",
        "사마리아",
        "사사기",
        "사도행전",
        "사라",
        "사렙다",
        "삼손",
        "세일",
        "소돔",
        "아담",
        "아벨",
        "아모스",
        "아비멜렉",
        "야고보",
        "야곱",
        "에녹",
        "에덴",
        "에베소",
        "에스더",
        "에스라",
        "엘리야",
        "엘리사",
        "엘리멜렉",
        "여리고",
        "예레미야",
        "예수",
        "요엘",
        "요셉",
        "요한",
        "요한복음",
        "이사야",
        "이스라엘",
        "호세아",
        "하갈",
        "바알",
      ],
  },
  {
    name: "3단계",
    label: "가운데 + 아랫 자판",
    rows: ["middle", "bottom"],
      words: [
        "나훔",
        "우르",
        "우림",
        "후람",
        "훌",
        "후르",
        "미리암",
        "느훔",
        "므라리",
        "루포",
        "울라",
        "울람",
      ],
  },
  {
    name: "4단계",
    label: "전체 자판",
    rows: ["middle", "top", "bottom"],
      words: [
        "예수님",
        "예수",
        "그리스도",
        "성령",
        "베드로",
        "요한복음",
        "임마누엘",
      "사무엘",
      "다윗",
      "아브라함",
      "이삭",
      "야곱",
      "요셉",
      "모세",
      "여호수아",
      "사사기",
      "룻",
      "다니엘",
      "느헤미야",
      "에스더",
      "욥",
      "시편",
      "잠언",
      "전도서",
      "이사야",
      "예레미야",
      "에스겔",
      "호세아",
      "요엘",
      "아모스",
      "오바댜",
      "요나",
      "미가",
      "나훔",
      "하박국",
      "스바냐",
      "학개",
      "스가랴",
      "말라기",
        "마태복음",
        "마가복음",
        "누가복음",
        "사도행전",
        "로마서",
        "고린도전서",
        "고린도후서",
        "갈라디아서",
        "에베소서",
        "빌립보서",
        "골로새서",
        "데살로니가전서",
        "데살로니가후서",
        "디모데전서",
        "디모데후서",
        "디도서",
        "빌레몬서",
        "히브리서",
        "야고보서",
        "베드로전서",
        "베드로후서",
        "요한일서",
        "요한이서",
        "요한삼서",
        "유다서",
        "요한계시록",
        "창세기",
        "출애굽기",
        "레위기",
        "민수기",
        "신명기",
        "여호수아",
        "사사기",
        "사무엘상",
        "사무엘하",
        "열왕기상",
        "열왕기하",
        "역대상",
        "역대하",
        "에스라",
        "베들레헴",
        "갈릴리",
        "겟세마네",
        "골고다",
        "예루살렘",
        "이스라엘",
        "가나안",
        "애굽",
        "나사렛",
        "사마리아",
      ],
  },
];

const WORD_VERSES = {
  하나님: "(창1:1) 태초에 하나님이 천지를 창조하시니라",
  예수님: "(마1:21) 아들을 낳으리니 이름을 예수라 하라",
  예수: "(마1:21) 아들을 낳으리니 이름을 예수라 하라",
  그리스도: "(마16:16) 주는 그리스도시요 살아 계신 하나님의 아들이시니이다",
  성령: "(행1:8) 오직 성령이 너희에게 임하시면 너희가 권능을 받고",
  임마누엘: "(마1:23) 임마누엘이라 하리라 이를 번역한즉 하나님이 우리와 함께 계시다 함이라",
  아담: "(창2:7) 여호와 하나님이 땅의 흙으로 사람을 지으시고",
  아벨: "(창4:4) 아벨은 자기도 양의 첫 새끼와 그 기름으로 드렸더니",
  에녹: "(창5:24) 에녹이 하나님과 동행하더니 하나님이 그를 데려가시므로 세상에 있지 아니하였더라",
  노아: "(창6:8) 그러나 노아는 여호와께 은혜를 입었더라",
  아브라함: "(창12:1) 여호와께서 아브람에게 이르시되 너는 너의 고향과 친척과 아버지의 집을 떠나",
  이삭: "(창21:3) 아브라함이 그 낳은 아들 곧 사라가 자기에게 낳은 아들을 이름하여 이삭이라 하였고",
  야곱: "(창32:28) 네 이름을 다시는 야곱이라 부를 것이 아니요 이스라엘이라 부를 것이니",
  요셉: "(창39:2) 여호와께서 요셉과 함께 하시므로 그가 형통한 자가 되어",
  모세: "(출3:10) 이제 내가 너를 바로에게 보내어 너에게 내 백성 이스라엘 자손을 애굽에서 인도하여 내게 하리라",
  미리암: "(출15:20) 아론의 누이 선지자 미리암이 손에 소고를 잡으매",
  사라: "(창17:15) 네 아내 사래는 이름을 사래라 하지 말고 사라라 하라",
  하갈: "(창16:13) 하갈이 자기에게 이르신 여호와의 이름을 감찰하시는 하나님이라 하였으니",
  여호수아: "(수1:9) 강하고 담대하라 두려워하지 말며 놀라지 말라",
  룻: "(룻1:16) 어머니의 백성이 나의 백성이 되고 어머니의 하나님이 나의 하나님이 되시리니",
  사무엘: "(삼상3:10) 여호와께서 이르시되 사무엘아 사무엘아 하시는지라",
  다윗: "(삼상16:13) 사무엘이 기름 뿔병을 가져다가 그의 형제 중에서 그에게 부었더니",
  솔로몬: "(왕상3:12) 내가 네 말대로 하여 네게 지혜롭고 총명한 마음을 주노니",
  엘리야: "(왕상18:39) 모든 백성이 보고 엎드려 말하되 여호와 그는 하나님이시로다",
  엘리사: "(왕하2:15) 여리고에 있는 선지자의 제자들이 그를 보며 말하기를 엘리야의 성령이 엘리사 위에 머물렀다 하고",
  느헤미야: "(느1:4) 내가 이 말을 듣고 앉아서 울고 수일 동안 슬퍼하며",
  에스더: "(에4:14) 네가 왕후의 자리를 얻은 것이 이 때를 위함이 아닌지 누가 알겠느냐",
  욥: "(욥1:1) 우스 땅에 욥이라 불리는 사람이 있었는데 그 사람은 온전하고 정직하여",
  베드로: "(마16:18) 또 내가 네게 이르노니 너는 베드로라",
  요한: "(요1:6) 하나님께로부터 보내심을 받은 사람이 있으니 그의 이름은 요한이라",
  마리아: "(눅1:38) 마리아가 이르되 주의 여종이오니 말씀대로 내게 이루어지이다",
  한나: "(삼상1:20) 한나가 임신하고 때가 이르매 아들을 낳아 사무엘이라 이름하였으니",
  아론: "(출4:14) 레위 사람 네 형 아론이 있지 아니하냐",
  나오미: "(룻1:20) 나를 나오미라 부르지 말고 나를 마라라 부르라",
  다니엘: "(단6:10) 다니엘이 전에 하던 대로 하루 세 번씩 무릎을 꿇고 기도하며",
  이사야: "(사6:8) 내가 또 주의 목소리를 들으니 내가 누구를 보내며 누가 우리를 위하여 갈꼬",
  예레미야: "(렘1:5) 내가 너를 모태에 짓기 전에 너를 알았고",
  에스겔: "(겔2:3) 인자야 내가 너를 이스라엘 자손 곧 패역한 백성에게 보내노라",
  호세아: "(호1:1) 웃시야와 요담과 아하스와 히스기야가 유다 왕이 된 시대에",
  요엘: "(욜2:28) 그 후에 내가 내 영을 만민에게 부어 주리니",
  아모스: "(암1:1) 유다 왕 웃시야의 시대 곧 이스라엘 왕 요아스의 아들 여로보암의 시대에",
  오바댜: "(옵1:1) 오바댜의 묵시라 주 여호와께서 에돔에 대하여 이와 같이 말씀하시니라",
  요나: "(욘1:1) 여호와의 말씀이 아밋대의 아들 요나에게 임하니라",
  미가: "(미6:8) 여호와께서 네게 구하시는 것은 오직 정의를 행하며 인자를 사랑하며",
  나훔: "(나1:7) 여호와는 선하시며 환난 날에 산성이시라",
  하박국: "(합2:4) 의인은 그의 믿음으로 말미암아 살리라",
  스바냐: "(습3:17) 너의 하나님 여호와가 너의 가운데에 계시니 그는 구원을 베푸실 전능자이시라",
  학개: "(학1:8) 너희는 산에 올라가서 나무를 가져다가 성전을 건축하라",
  스가랴: "(슥9:9) 보라 네 왕이 네게 임하시나니 그는 공의로우시며 구원을 베푸시며",
  말라기: "(말3:10) 만군의 여호와가 이르노라 너희의 온전한 십일조를 창고에 들여",
  시편: "(시23:1) 여호와는 나의 목자시니 내게 부족함이 없으리로다",
  잠언: "(잠1:7) 여호와를 경외하는 것이 지식의 근본이거늘",
  전도서: "(전1:2) 전도자가 이르되 헛되고 헛되며 헛되고 헛되니 모든 것이 헛되도다",
  창세기: "(창1:1) 태초에 하나님이 천지를 창조하시니라",
  출애굽기: "(출20:2) 나는 너를 애굽 땅 종 되었던 집에서 인도하여 낸 네 하나님 여호와니라",
  레위기: "(레19:2) 너희는 거룩하라 이는 나 여호와 너희 하나님이 거룩함이니라",
  민수기: "(민6:24) 여호와는 네게 복을 주시고 너를 지키시기를 원하며",
  신명기: "(신6:5) 너는 마음을 다하고 뜻을 다하고 힘을 다하여 네 하나님 여호와를 사랑하라",
  사사기: "(삿21:25) 그 때에 이스라엘에 왕이 없으므로 사람이 각기 자기의 소견에 옳은 대로 행하였더라",
  사무엘상: "(삼상16:7) 사람은 외모를 보거니와 나 여호와는 중심을 보느니라",
  사무엘하: "(삼하7:22) 주 여호와여 주는 위대하시니 이는 우리 귀로 들은 대로는 주와 같은 이가 없고",
  열왕기상: "(왕상8:61) 그런즉 너희의 마음을 우리 하나님 여호와와 온전히 같이하여",
  열왕기하: "(왕하17:39) 오직 너희의 하나님 여호와만 경외하라",
  역대상: "(대상16:34) 여호와께 감사하라 그는 선하시며 그의 인자하심이 영원함이로다",
  역대하: "(대하7:14) 내 이름으로 일컫는 내 백성이 그들의 악한 길에서 떠나 스스로 낮추고 기도하여",
  에스라: "(스7:10) 에스라가 여호와의 율법을 연구하여 준행하며",
  마태복음: "(마1:1) 아브라함과 다윗의 자손 예수 그리스도의 계보라",
  마가복음: "(막1:1) 하나님의 아들 예수 그리스도의 복음의 시작이라",
  누가복음: "(눅1:3) 그 모든 일을 근원부터 자세히 미루어 살핀 나도 데오빌로 각하에게 차례대로 써 보내는 것이 좋은 줄 알았노니",
  요한복음: "(요1:1) 태초에 말씀이 계시니라 이 말씀이 하나님과 함께 계셨으니",
  사도행전: "(행1:8) 오직 성령이 너희에게 임하시면 너희가 권능을 받고",
  로마서: "(롬1:17) 오직 의인은 믿음으로 말미암아 살리라 함과 같으니라",
  고린도전서: "(고전13:13) 그런즉 믿음 소망 사랑 이 세 가지는 항상 있을 것인데 그 중의 제일은 사랑이라",
  고린도후서: "(고후5:17) 그런즉 누구든지 그리스도 안에 있으면 새로운 피조물이라",
  갈라디아서: "(갈2:20) 내가 그리스도와 함께 십자가에 못 박혔나니",
  에베소서: "(엡2:8) 너희는 그 은혜에 의하여 믿음으로 말미암아 구원을 받았으니",
  빌립보서: "(빌4:13) 내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라",
  골로새서: "(골3:2) 위의 것을 생각하고 땅의 것을 생각하지 말라",
  데살로니가전서: "(살전5:16) 항상 기뻐하라",
  데살로니가후서: "(살후3:3) 주는 미쁘사 너희를 굳건하게 하시고 악한 자에게서 지키시리라",
  디모데전서: "(딤전4:12) 누구든지 네 연소함을 업신여기지 못하게 하고",
  디모데후서: "(딤후3:16) 모든 성경은 하나님의 감동으로 된 것으로",
  디도서: "(딛2:11) 모든 사람에게 구원을 주시는 하나님의 은혜가 나타나",
  빌레몬서: "(몬1:6) 이로써 네 믿음의 교제가 우리 가운데 있는 선을 알게 하고",
  히브리서: "(히11:1) 믿음은 바라는 것들의 실상이요 보이지 않는 것들의 증거니",
  야고보서: "(약2:17) 이와 같이 행함이 없는 믿음은 그 자체가 죽은 것이라",
  베드로전서: "(벧전5:7) 너희 염려를 다 주께 맡기라 이는 그가 너희를 돌보심이라",
  베드로후서: "(벧후3:18) 오직 우리 주 곧 구주 예수 그리스도의 은혜와 그를 아는 지식에서 자라 가라",
  요한일서: "(요일4:8) 사랑하지 아니하는 자는 하나님을 알지 못하나니 이는 하나님은 사랑이심이라",
  요한이서: "(요이1:6) 또 사랑은 이것이니 우리가 그 계명을 따라 행하는 것이요",
  요한삼서: "(요삼1:4) 내가 내 자녀들이 진리 안에서 행한다 함을 듣는 것보다 더 기쁜 일이 없도다",
  유다서: "(유1:3) 성도에게 단번에 주신 믿음의 도를 위하여 힘써 싸우라는 편지로 권하여야 할 필요를 느꼈노니",
  요한계시록: "(계1:8) 주 하나님이 이르시되 나는 알파와 오메가라",
  가나안: "(창12:5) 마침내 가나안 땅에 들어갔더라",
  애굽: "(출20:2) 나는 너를 애굽 땅 종 되었던 집에서 인도하여 낸 네 하나님 여호와니라",
  갈릴리: "(마4:23) 예수께서 온 갈릴리에 두루 다니사",
  겟세마네: "(마26:36) 예수께서 제자들과 함께 겟세마네라 하는 곳에 이르러",
  골고다: "(요19:17) 예수께서 자기의 십자가를 지시고 해골이라 하는 곳에 나가시니 히브리 말로 골고다라",
  예루살렘: "(시122:6) 예루살렘을 위하여 평안을 구하라",
  이스라엘: "(창32:28) 네 이름을 다시는 야곱이라 부를 것이 아니요 이스라엘이라 부를 것이니",
  베들레헴: "(미5:2) 베들레헴 에브라다야 너는 유다 족속 중에 작을지라도",
  나사렛: "(마2:23) 나사렛이란 동네에 가서 사니",
  사마리아: "(요4:4) 사마리아를 통과하여야 하겠는지라",
  에덴: "(창2:8) 여호와 하나님이 동방의 에덴에 동산을 창설하시고",
  여리고: "(수6:20) 백성이 외치고 제사장들이 나팔을 불매",
  소돔: "(창19:24) 여호와께서 하늘 곧 여호와께로부터 유황과 불을 소돔과 고모라에 비같이 내리사",
  바알: "(왕상18:21) 너희가 어느 때까지 둘 사이에서 머뭇머뭇 하려느냐",
  하란: "(창11:31) 갈대아인의 우르를 떠나 가나안 땅으로 가고자 하더니 하란에 이르러 거기 거류하였으며",
  마라: "(출15:23) 마라에 이르렀더니 그 곳 물이 써서 마시지 못하겠으므로 그 이름을 마라라 하였더라",
  나아만: "(왕하5:1) 아람 왕의 군대 장관 나아만은 그의 주인 앞에서 크고 존귀한 자니",
  아나니아: "(행9:10) 다메섹에 아나니아라 하는 제자가 있더니",
  모리아: "(창22:2) 모리아 땅으로 가서 내가 네게 일러 준 한 산 거기서 그를 번제로 드리라",
  암몬: "(창19:38) 작은 딸도 아들을 낳아 이름을 벤암미라 하였으니 오늘날 암몬 자손의 조상이었더라",
  아람: "(창10:22) 셈의 아들은 엘람과 앗수르와 아르박삿과 룻과 아람이요",
  마노아: "(삿13:2) 소라 땅에 단 지파의 가족 중에 마노아라 이름하는 자가 있더라",
  라마: "(삼상1:19) 엘가나가 라마의 자기 집에 이르니라",
  로마: "(행28:16) 우리가 로마에 들어가니 바울에게는 자기를 지키는 한 군인과 함께 따로 있게 허락하더라",
  오난: "(창38:9) 오난이 그 씨가 자기 것이 되지 않을 줄 알므로",
  말라: "(룻1:20) 나를 나오미라 부르지 말고 나를 마라라 부르라",
  말론: "(룻1:2) 그 두 아들의 이름은 말론과 기룐이니",
  호론: "(느2:10) 호론 사람 산발랏과 종이었던 암몬 사람 도비야가 듣고",
  아모리: "(창15:16) 네 자손은 사대 만에 이 땅으로 돌아오리니 이는 아모리 족속의 죄악이 아직 가득 차지 아니함이니라",
  하몰: "(창33:19) 세겜의 아버지 하몰의 아들들의 손에서 백 크시타에 샀으며",
  나홀: "(창11:26) 데라는 칠십 세에 아브람과 나홀과 하란을 낳았더라",
  나함: "(대상4:19) 나함의 누이 호디야의 아내의 아들들은",
  하람: "(대상2:46) 갈렙의 첩 에바가 하란과 모사와 가세스를 낳았고",
  오홀라: "(겔23:4) 그 이름이 형은 오홀라요 아우는 오홀리바라",
  나인: "(눅7:11) 예수께서 나인이란 성으로 가실새",
  로암미: "(호1:9) 여호와께서 이르시되 그의 이름을 로암미라 하라",
  로루하마: "(호1:6) 여호와께서 호세아에게 이르시되 그의 이름을 로루하마라 하라",
  아미: "(스2:57) 스바댜 자손과 핫딜 자손과 보게렛하스바임 자손과 아미 자손이니",
  갈멜: "(왕상18:20) 아합이 이에 이스라엘 모든 자손에게로 사람을 보내 선지자들을 갈멜 산으로 모으니라",
  길갈: "(수5:9) 그러므로 그 곳 이름을 오늘까지 길갈이라 하느니라",
  고라: "(민16:1) 레위의 증손 고핫의 손자 이스할의 아들 고라와",
  고멜: "(호1:3) 이에 그가 가서 디블라임의 딸 고멜을 맞이하였더니",
  고린도: "(행18:1) 그 후에 바울이 아덴을 떠나 고린도에 이르러",
  골로새: "(골1:2) 골로새에 있는 성도들 곧 그리스도 안에서 신실한 형제들에게 편지하노니",
  데살로니가: "(행17:1) 암비볼리와 아볼로니아로 다녀가 데살로니가에 이르니",
  디모데: "(딤후1:5) 이는 네 속에 거짓이 없는 믿음이 있음을 생각함이라",
  디도: "(딛1:4) 같은 믿음을 따라 된 나의 참 아들 디도에게 편지하노니",
  빌레몬: "(몬1:1) 그리스도 예수를 위하여 갇힌 자 된 바울과 형제 디모데는 우리의 사랑을 받는 자요 동역자인 빌레몬에게",
  빌립보: "(행16:12) 거기서 빌립보에 이르니 이는 마게도냐 지방의 첫 성이요",
  사렙다: "(왕상17:9) 너는 일어나 시돈에 속한 사르밧으로 가서 거기 머물라",
  삼손: "(삿13:24) 그 여인이 아들을 낳으매 그의 이름을 삼손이라 하니라",
  세일: "(창36:8) 이에 에서 곧 에돔이 세일 산에 거주하니라",
  아비멜렉: "(창20:2) 그랄 왕 아비멜렉이 사람을 보내어 사라를 데려갔더니",
  야고보: "(마4:21) 또 거기서 더 가시다가 세베대의 아들 야고보와 그 형제 요한을 보시니",
  에베소: "(행18:19) 에베소에 와서 그들을 거기 머물게 하고",
  엘리멜렉: "(룻1:2) 그 사람의 이름은 엘리멜렉이요 그의 아내의 이름은 나오미라",
  우르: "(창11:31) 갈대아인의 우르를 떠나 가나안 땅으로 가고자 하더니",
  우림: "(출28:30) 우림과 둠밈을 판결 흉패 안에 넣어",
  후람: "(대하2:13) 내가 이제 재주 있고 총명한 사람을 보내오니 전에 내 아버지 후람에게 속하였던 자라",
  훌: "(출17:12) 아론과 훌이 한 사람은 이쪽에서 한 사람은 저쪽에서 모세의 손을 붙들어 올렸더니",
  후르: "(출17:10) 여호수아가 모세의 말대로 행하여 아말렉과 싸우고 모세와 아론과 훌은 산 꼭대기에 올라가서",
  느훔: "(느7:7) 스룹바벨과 예수아와 느헤미야와 아사랴와 라아먀와 나하마니와 모르드개와 빌산과 미스베렛과 비그왜와 느훔과 바아나와 함께 나온 자라",
  므라리: "(민3:17) 레위의 아들들의 이름은 이러하니 게르손과 고핫과 므라리요",
  루포: "(롬16:13) 주 안에서 택하심을 입은 루포와 그의 어머니에게 문안하라",
  울라: "(대상7:39) 울라의 아들들은 아라와 한니엘과 리시아이니",
  울람: "(대상7:16) 마아가가 베레스와 세레스를 낳았고 그의 형제는 울람과 라겜이며",
};

function verseForWord(word) {
  return WORD_VERSES[word] ?? "(요20:31) 오직 이것을 기록함은 너희로 예수께서 하나님의 아들 그리스도이심을 믿게 하려 함이요";
}

const levels = RAW_LEVELS.map((level) => ({
  ...level,
  words: [...new Set(level.words)].filter((word) => wordUsesOnlyRows(word, level.rows)),
}));

const els = {
  levelTabs: document.querySelector("#levelTabs"),
  levelLabel: document.querySelector("#levelLabel"),
  targetWord: document.querySelector("#targetWord"),
  wordVerse: document.querySelector("#wordVerse"),
  typingInput: document.querySelector("#typingInput"),
  feedback: document.querySelector("#feedback"),
  progressBar: document.querySelector("#progressBar"),
  typedCount: document.querySelector("#typedCount"),
  accuracy: document.querySelector("#accuracy"),
  speed: document.querySelector("#speed"),
  skipButton: document.querySelector("#skipButton"),
  resetButton: document.querySelector("#resetButton"),
};

const state = {
  levelIndex: 0,
  remainingWords: [],
  currentWord: "",
  previousWord: "",
  completed: 0,
  wordStartedAt: null,
  lastWordSpeed: 0,
  totalInput: 0,
  mistakes: 0,
  isComposing: false,
  locked: false,
};

function decomposeHangul(text) {
  const jamo = [];

  for (const char of text) {
    const code = char.charCodeAt(0);
    if (code < 0xac00 || code > 0xd7a3) {
      if (JAMO_TO_KEYS[char]) jamo.push(char);
      continue;
    }

    const offset = code - 0xac00;
    const jong = offset % 28;
    const jung = ((offset - jong) / 28) % 21;
    const cho = Math.floor(offset / 588);

    jamo.push(CHOSEONG[cho], JUNGSEONG[jung]);
    if (JONGSEONG[jong]) jamo.push(JONGSEONG[jong]);
  }

  return jamo;
}

function keysForText(text) {
  return decomposeHangul(text).flatMap((jamo) => JAMO_TO_KEYS[jamo] ?? []);
}

function rowsForText(text) {
  return new Set(keysForText(text).map((key) => KEY_TO_ROW[key]));
}

function wordUsesOnlyRows(word, allowedRows) {
  const allowed = new Set(allowedRows);
  return [...rowsForText(word)].every((row) => allowed.has(row));
}

function buildLevelTabs() {
  els.levelTabs.innerHTML = "";
  levels.forEach((level, index) => {
    const button = document.createElement("button");
    button.className = "level-tab";
    button.type = "button";
    button.role = "tab";
    button.setAttribute("aria-selected", index === state.levelIndex ? "true" : "false");
    button.textContent = `${level.name} ${level.label}`;
    button.addEventListener("click", () => setLevel(index));
    els.levelTabs.append(button);
  });
}

function buildKeyboard() {
  Object.entries(ROWS).forEach(([row, keys]) => {
    const rowEl = document.querySelector(`.keyboard-row[data-row="${row}"]`);
    rowEl.innerHTML = "";
    keys.forEach(([key, jamo]) => {
      const keyEl = document.createElement("div");
      keyEl.className = "key";
      keyEl.dataset.key = key;
      keyEl.dataset.row = row;
      keyEl.innerHTML = `<strong>${jamo}</strong><span>${key.toUpperCase()}</span>`;
      rowEl.append(keyEl);
    });
  });
}

function setLevel(index) {
  state.levelIndex = index;
  state.remainingWords = [];
  state.locked = false;
  buildLevelTabs();
  setNextWord();
}

function setNextWord() {
  const level = levels[state.levelIndex];
  if (state.remainingWords.length === 0) {
    state.remainingWords = shuffleWords(level.words);
    if (state.remainingWords[0] === state.currentWord && state.remainingWords.length > 1) {
      const first = state.remainingWords.shift();
      state.remainingWords.push(first);
    }
  }

  state.previousWord = state.currentWord;
  state.currentWord = state.remainingWords.shift();
  state.locked = false;

  els.targetWord.textContent = state.currentWord;
  els.wordVerse.textContent = verseForWord(state.currentWord);
  els.levelLabel.textContent = `${level.name} · ${level.label} · ${level.words.length}개 단어`;
  els.typingInput.value = "";
  els.typingInput.classList.remove("is-wrong");
  els.feedback.classList.remove("is-wrong");
  els.feedback.textContent = "한글 두벌식 입력 상태에서 시작하세요.";
  state.wordStartedAt = null;
  updateProgress();
  updateKeyboard();
  els.typingInput.focus();
}

function shuffleWords(words) {
  const shuffled = [...words];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function updateKeyboard() {
  const level = levels[state.levelIndex];
  const allowedRows = new Set(level.rows);
  const activeKeys = new Set(keysForText(state.currentWord));

  document.querySelectorAll(".key").forEach((keyEl) => {
    keyEl.classList.toggle("is-allowed", allowedRows.has(keyEl.dataset.row));
    keyEl.classList.toggle("is-active", activeKeys.has(keyEl.dataset.key));
  });
}

function updateProgress() {
  const typedLength = [...els.typingInput.value].length;
  const targetLength = [...state.currentWord].length;
  const percent = Math.min(100, Math.round((typedLength / targetLength) * 100));
  els.progressBar.style.width = `${Number.isFinite(percent) ? percent : 0}%`;
}

function updateStats() {
  const correct = Math.max(0, state.totalInput - state.mistakes);
  const accuracy = state.totalInput === 0 ? 100 : Math.round((correct / state.totalInput) * 100);

  els.typedCount.textContent = state.completed;
  els.accuracy.textContent = `${Math.max(0, accuracy)}%`;
  els.speed.textContent = state.lastWordSpeed;
}

function handleTyping(event) {
  if (state.locked) return;
  if (state.isComposing || event?.isComposing) return;

  const value = els.typingInput.value.trim();
  if (value && !state.wordStartedAt) state.wordStartedAt = Date.now();
  state.totalInput += 1;
  updateProgress();

  if (!state.currentWord.startsWith(value)) {
    state.mistakes += 1;
    els.typingInput.classList.add("is-wrong");
    els.feedback.classList.add("is-wrong");
    els.feedback.textContent = "현재 단어와 다른 글자가 있습니다.";
    updateStats();
    return;
  }

  els.typingInput.classList.remove("is-wrong");
  els.feedback.classList.remove("is-wrong");
  els.feedback.textContent =
    value === state.currentWord ? "Enter를 눌러 완료하세요." : "좋습니다. 계속 입력하세요.";

  updateStats();
}

function completeCurrentWord() {
  if (state.locked) return;

  const value = els.typingInput.value.trim();
  if (value !== state.currentWord) {
    els.feedback.classList.add("is-wrong");
    els.feedback.textContent = "단어를 정확히 입력한 뒤 Enter를 누르세요.";
    return;
  }

  const elapsedMinutes = Math.max((Date.now() - (state.wordStartedAt ?? Date.now())) / 60000, 1 / 60000);
  const wordKeystrokes = keysForText(state.currentWord).length;

  state.completed += 1;
  state.lastWordSpeed = Math.round(wordKeystrokes / elapsedMinutes);
  state.locked = true;
  els.feedback.classList.remove("is-wrong");
  els.feedback.textContent = "완료했습니다.";
  updateStats();
  window.setTimeout(setNextWord, 450);
}

function resetStats() {
  state.completed = 0;
  state.wordStartedAt = null;
  state.lastWordSpeed = 0;
  state.totalInput = 0;
  state.mistakes = 0;
  updateStats();
  setNextWord();
}

els.typingInput.addEventListener("input", handleTyping);
els.typingInput.addEventListener("compositionstart", () => {
  state.isComposing = true;
});
els.typingInput.addEventListener("compositionend", () => {
  state.isComposing = false;
  handleTyping();
});
els.typingInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  if (state.isComposing || event.isComposing) return;
  event.preventDefault();
  completeCurrentWord();
});
els.skipButton.addEventListener("click", setNextWord);
els.resetButton.addEventListener("click", resetStats);

buildKeyboard();
buildLevelTabs();
setNextWord();
updateStats();
