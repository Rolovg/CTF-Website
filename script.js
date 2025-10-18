let currentLang = "ca";

// --- Load and render challenges ---
function loadChallenges() {
  const ch = translations[currentLang].challenges;
  challenges = ch;
  populateGrid();
}

const completed = new Set();
const grid = document.getElementById("challenge-grid");

function mkCard(ch) {
  const el = document.createElement("div");
  el.className = "card";
  el.tabIndex = 0;
  el.setAttribute("role", "button");
  el.setAttribute("aria-label", ch.title + " — " + ch.category);
  el.innerHTML = `
    <div>
      <div class="ctitle">${ch.title}</div>
      <div class="category">${ch.category}</div>
    </div>
    <div class="meta-row">
      <div>ID: ${ch.id}</div>
      <div class="difficulty">${ch.difficulty}</div>
    </div>
  `;
  el.addEventListener("click", () => openModal(ch));
  el.addEventListener("keyup", e => {
    if (e.key === "Enter" || e.key === " ") openModal(ch);
  });
  if (completed.has(ch.id)) {
    el.style.opacity = "0.5";
  }
  return el;
}

function populateGrid() {
  grid.innerHTML = "";
  challenges.forEach(ch => grid.appendChild(mkCard(ch)));
}

// --- Modal logic ---
const modalRoot = document.getElementById("modal-root");

function openModal(ch) {
  modalRoot.innerHTML = `
    <div class="modal-backdrop" id="modal-backdrop" role="dialog" aria-modal="true">
      <div class="pane">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:12px">
          <div>
            <h2>${ch.title}</h2>
            <div class="meta">${ch.category} · ${ch.difficulty} · ${ch.id}</div>
          </div>
          <div><button id="modal-close" class="btn" style="background:#ff5c7a">${translations[currentLang].close}</button></div>
        </div>

        <div style="margin-top:12px;color:#dfecef">${ch.desc}</div>

        <div class="flag-area">
          <input id="flag-input" placeholder="flag{...}" />
          <button id="submit-flag" class="btn">${translations[currentLang].submit}</button>
        </div>

        <div style="margin-top:8px;">
          <button id="solution-btn" class="btn" style="background:#6f42c1;">${translations[currentLang].view_solution}</button>
        </div>

        <div id="feedback" style="margin-top:12px;font-weight:700;"></div>
      </div>
    </div>
  `;

  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("submit-flag").addEventListener("click", () => submitFlag(ch));
  document.getElementById("solution-btn").addEventListener("click", () => window.open(ch.solution, "_blank"));
}

function closeModal() {
  modalRoot.innerHTML = "";
}

function submitFlag(ch) {
  const input = document.getElementById("flag-input");
  const fb = document.getElementById("feedback");
  const val = input.value.trim();
  if (!val) {
    fb.style.color = "#ff9b9b";
    fb.textContent = translations[currentLang].no_flag;
    return;
  }
  if (val === ch.flag) {
    fb.style.color = "#9bffdd";
    fb.textContent = translations[currentLang].correct;
    completed.add(ch.id);
    closeModal();
    populateGrid();
  } else {
    fb.style.color = "#ff9b9b";
    fb.textContent = translations[currentLang].wrong;
  }
}

// --- Sections toggle ---
const btnCtf = document.getElementById("btn-ctf");
const btnLearning = document.getElementById("btn-learning");
const secCtf = document.getElementById("section-ctf");
const secLearning = document.getElementById("section-learning");

function showSection(name) {
  if (name === "ctf") {
    secCtf.classList.add("active");
    secLearning.classList.remove("active");
    btnCtf.classList.add("active");
    btnLearning.classList.remove("active");
  } else {
    secCtf.classList.remove("active");
    secLearning.classList.add("active");
    btnCtf.classList.remove("active");
    btnLearning.classList.add("active");
  }
}

btnCtf.addEventListener("click", () => showSection("ctf"));
btnLearning.addEventListener("click", () => showSection("learning"));

// --- Documentation topics ---
let topics = [];

function loadDocs() {
  topics = translations[currentLang].docs;
  populateTOC();
}

const tocList = document.getElementById("toc-list");
const learnMain = document.getElementById("learn-main");
const learnTitle = document.getElementById("learn-title");
const learnBody = document.getElementById("learn-body");

function populateTOC() {
  tocList.innerHTML = "";
  topics.forEach((t, idx) => {
    const li = document.createElement("li");
    li.textContent = t.title;
    li.tabIndex = 0;
    li.addEventListener("click", () => showTopic(idx));
    li.addEventListener("keyup", e => {
      if (e.key === "Enter" || e.key === " ") showTopic(idx);
    });
    if (idx === 0) li.classList.add("active");
    tocList.appendChild(li);
  });
  showTopic(0);
}

function showTopic(i) {
  const t = topics[i];
  Array.from(tocList.children).forEach((n, idx) => {
    n.classList.toggle("active", idx === i);
  });
  learnTitle.textContent = t.title;
  learnBody.innerHTML = t.body;
  learnMain.focus();
}

// --- Initialization + language toggle ---
document.addEventListener("DOMContentLoaded", () => {
  loadChallenges();
  loadDocs();
  applyTranslations(currentLang);

  const langToggle = document.getElementById("lang-toggle");
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "ca" ? "no" : "ca";
    applyTranslations(currentLang);
    loadChallenges();
    loadDocs();
  });
});
