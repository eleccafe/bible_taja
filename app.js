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
    words: ["하나님", "만나", "나라", "하나", "한나", "아론", "하란", "마라", "나아만", "아나니아"],
  },
  {
    name: "2단계",
    label: "가운데 + 윗 자판",
    rows: ["middle", "top"],
    words: ["성전", "성경", "선지자", "제자", "기도", "사랑", "제단", "광야", "세례", "예배"],
  },
  {
    name: "3단계",
    label: "가운데 + 아랫 자판",
    rows: ["middle", "bottom"],
    words: ["나훔", "무리", "풍랑", "눈물", "마음", "울음", "푸른", "품", "흠", "춤"],
  },
  {
    name: "4단계",
    label: "전체 자판",
    rows: ["middle", "top", "bottom"],
    words: ["예수님", "성령", "십자가", "복음", "구원", "은혜", "말씀", "믿음", "천국", "베드로", "요한복음", "임마누엘"],
  },
];

const levels = RAW_LEVELS.map((level) => ({
  ...level,
  words: level.words.filter((word) => wordUsesOnlyRows(word, level.rows)),
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
  wordIndex: 0,
  currentWord: "",
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
  state.wordIndex = 0;
  state.locked = false;
  buildLevelTabs();
  setNextWord();
}

function setNextWord() {
  const level = levels[state.levelIndex];
  state.currentWord = level.words[state.wordIndex % level.words.length];
  state.wordIndex += 1;
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
