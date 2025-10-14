const translations = {
  ca: {
    title: "CTF ENTI",
    subtitle: "practica · aprèn",
    hero_title: "ENTI",
    hero_sub: "Plataforma per aprendre ciberseguretat",
    challenges_title: "Reptes Disponibles",
    challenges_hint: "Pressiona un repte per començar",
    toc_title: "Llista de continguts",
    learn_intro: "Trieu un tema a l'esquerra per veure contingut d'aprenentatge.",
    roadmap_title: "Roadmap d'aprenentatge",
    roadmap_sub: "Segueix un camí aleatori de reptes CTF"
  },
  no: {
    title: "CTF ENTI",
    subtitle: "praktiser · lær",
    hero_title: "ENTI",
    hero_sub: "Plattform for å lære cybersikkerhet",
    challenges_title: "Tilgjengelige utfordringer",
    challenges_hint: "Trykk på en utfordring for å starte",
    toc_title: "Innholdsfortegnelse",
    learn_intro: "Velg et tema til venstre for å se læringsinnholdet.",
    roadmap_title: "Læringsvei",
    roadmap_sub: "Følg en tilfeldig vei med CTF-utfordringer"
  }
};

let currentLang = "ca";

function applyTranslations(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "ca" ? "no" : "ca";
      applyTranslations(currentLang);
    });
  }
});
