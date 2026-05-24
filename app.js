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

const levels = RAW_LEVELS.map((level) => ({
  ...level,
  words: [...new Set(level.words)].filter((word) => wordUsesOnlyRows(word, level.rows)),
}));

const els = {
  levelTabs: document.querySelector("#levelTabs"),
  levelLabel: document.querySelector("#levelLabel"),
  targetWord: document.querySelector("#targetWord"),
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
  totalInput: 0,
  mistakes: 0,
  startedAt: null,
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
  els.levelLabel.textContent = `${level.name} · ${level.label} · ${level.words.length}개 단어`;
  els.typingInput.value = "";
  els.typingInput.classList.remove("is-wrong");
  els.feedback.classList.remove("is-wrong");
  els.feedback.textContent = "한글 두벌식 입력 상태에서 시작하세요.";
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
  const minutes = state.startedAt ? (Date.now() - state.startedAt) / 60000 : 0;
  const speed = minutes > 0 ? Math.round(correct / minutes) : 0;

  els.typedCount.textContent = state.completed;
  els.accuracy.textContent = `${Math.max(0, accuracy)}%`;
  els.speed.textContent = speed;
}

function handleTyping() {
  if (state.locked) return;
  if (!state.startedAt) state.startedAt = Date.now();

  const value = els.typingInput.value.trim();
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
  els.feedback.textContent = value === state.currentWord ? "완료했습니다." : "좋습니다. 계속 입력하세요.";

  if (value === state.currentWord) {
    state.completed += 1;
    state.locked = true;
    updateStats();
    window.setTimeout(setNextWord, 450);
    return;
  }

  updateStats();
}

function resetStats() {
  state.completed = 0;
  state.totalInput = 0;
  state.mistakes = 0;
  state.startedAt = null;
  updateStats();
  setNextWord();
}

els.typingInput.addEventListener("input", handleTyping);
els.skipButton.addEventListener("click", setNextWord);
els.resetButton.addEventListener("click", resetStats);

buildKeyboard();
buildLevelTabs();
setNextWord();
updateStats();
