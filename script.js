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

// ==============================
// SECCIONS I NAVEGACIÓ
// ==============================
const btnCtf      = document.getElementById("btn-ctf");
const btnLearning = document.getElementById("btn-learning");
const btnWelcome  = document.getElementById("btn-welcome");
const btnStory    = document.getElementById("btn-story");

const secCtf      = document.getElementById("section-ctf");
const secLearning = document.getElementById("section-learning");
const secWelcome  = document.getElementById("section-welcome");
const secStory    = document.getElementById("section-story");

function clearActive() {
  document.querySelectorAll(".topbar .nav button").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".content .section").forEach(s => s.classList.remove("active"));
}

function showSection(name) {
  clearActive();

  if (name === "ctf") {
    secCtf.classList.add("active");
    btnCtf.classList.add("active");
    return;
  }
  if (name === "learning") {
    secLearning.classList.add("active");
    btnLearning.classList.add("active");
    // configurar docs per a Documentació
    currentDocsKey = "docs";
    currentTOC  = tocListLearning;
    currentBody = bodyLearning;
    currentTitle = titleLearning;
    loadDocs();
    return;
  }
  if (name === "welcome") {
    secWelcome.classList.add("active");
    btnWelcome.classList.add("active");
    // configurar docs per a Benvingut
    currentDocsKey = "welcome_docs";
    currentTOC  = tocListWelcome;
    currentBody = bodyWelcome;
    currentTitle = titleWelcome;
    loadDocs();
    return;
  }
  if (name === "story") {
    secStory.classList.add("active");
    btnStory.classList.add("active");
    // configurar docs per a Mode Història
    currentDocsKey = "story_docs";
    currentTOC  = tocListStory;
    currentBody = bodyStory;
    currentTitle = titleStory;
    loadDocs();
    return;
  }
}

btnCtf.addEventListener("click", () => showSection("ctf"));
btnLearning.addEventListener("click", () => showSection("learning"));
btnWelcome.addEventListener("click", () => showSection("welcome"));
btnStory.addEventListener("click", () => showSection("story"));

// ==============================
// DOCUMENTACIÓ / VISTES TIPUS "LEARN"
// (reutilitzat per: Documentació, Benvingut, Mode història)
// ==============================

// Elements de Documentació
const tocListLearning = document.getElementById("toc-list");
const titleLearning   = document.getElementById("learn-title");
const bodyLearning    = document.getElementById("learn-body");
const mainLearning    = document.getElementById("learn-main");

// Elements de Benvingut
const tocListWelcome = document.getElementById("toc-list-welcome");
const titleWelcome   = document.getElementById("learn-title-welcome");
const bodyWelcome    = document.getElementById("learn-body-welcome");
const mainWelcome    = document.getElementById("learn-main-welcome");

// Elements de Mode Història
const tocListStory = document.getElementById("toc-list-story");
const titleStory   = document.getElementById("learn-title-story");
const bodyStory    = document.getElementById("learn-body-story");
const mainStory    = document.getElementById("learn-main-story");

// Estat de la vista learn actual
let currentDocsKey = "docs"; // "docs" | "welcome_docs" | "story_docs"
let topics = [];
let currentTOC = tocListLearning;
let currentBody = bodyLearning;
let currentTitle = titleLearning;

function loadDocs() {
  topics = translations[currentLang][currentDocsKey] || [];
  populateTOC();
}

function populateTOC() {
  currentTOC.innerHTML = "";
  topics.forEach((t, idx) => {
    const li = document.createElement("li");
    li.textContent = t.title;
    li.tabIndex = 0;
    li.addEventListener("click", () => showTopic(idx));
    li.addEventListener("keyup", e => {
      if (e.key === "Enter" || e.key === " ") showTopic(idx);
    });
    if (idx === 0) li.classList.add("active");
    currentTOC.appendChild(li);
  });
  showTopic(0);
}

function showTopic(i) {
  const t = topics[i];
  Array.from(currentTOC.children).forEach((n, idx) => {
    n.classList.toggle("active", idx === i);
  });
  // Títol + cos
  if (currentTitle) currentTitle.textContent = t?.title || "";
  currentBody.innerHTML = t?.body || "";

  // Focus accessible al main de la vista actual
  if (currentBody === bodyLearning) mainLearning.focus();
  else if (currentBody === bodyWelcome) mainWelcome.focus();
  else if (currentBody === bodyStory) mainStory.focus();
}

// --- Initialization + language toggle ---
document.addEventListener("DOMContentLoaded", () => {
  loadChallenges();
  // Documentació és la vista "learn" per defecte de dades
  currentDocsKey = "docs";
  currentTOC  = tocListLearning;
  currentBody = bodyLearning;
  currentTitle = titleLearning;
  loadDocs();

  applyTranslations(currentLang);

  const langToggle = document.getElementById("lang-toggle");
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "ca" ? "no" : "ca";
    applyTranslations(currentLang);
    loadChallenges();
    // tornar a pintar la vista learn actual (welcome/docs/story)
    loadDocs();
  });
});
