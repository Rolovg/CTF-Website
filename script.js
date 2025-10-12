// --- Activitats ---
const challenges = [
  { 
    id:'Artur', 
    title:'Xifrat Cèsar', 
    category:'Criptografía', 
    difficulty:'Fàcil',
    desc:'Desxifra el següent missatge: sdamvobzxznvmhjgv',
    solution:'solucions/Xifrat_Cesar.txt',
    flag:'flag{xifratgecesarmola}'
  },
  
  { 
    id:'Pol', 
    title:'Base64', 
    category:'Criptografía', 
    difficulty:'Fàcil',
    desc:'Desxifra el següent missatge: ZmxhZ3tzZV9kZWNvZGlmaWNhcl9lbl9iYXNlNjR9',
    solution:'solucions/Base64.txt',
    flag:'flag{se_decodificar_en_base64}'
  },
  { 
    id: 'Pol', 
    title: 'Xifrat Vigenère', 
    category: 'Criptografía', 
    difficulty: 'Fàcil',
    desc: 'Desxifra el següent missatge amb la clau "oberta": wkhvixphqkcjddnx',
    solution: 'solucions/Xifrat_Vigenere.txt',
    flag: 'flag{vigenere_et_completa}'
  },
  
  { 
    id: 'Pol', 
    title: 'Codi ASCII', 
    category: 'Criptografia', 
    difficulty: 'Fàcil',
    desc: 'Desxifra el següent missatge codificat en ASCII: 72 101 108 108 111 32 87 111 114 108 100',
    solution: 'solucions/ASCII.txt',
    flag: 'flag{desxifrat_asciiactiu}'
  },
  { 
    id: 'Pol', 
    title: 'Codi Morse', 
    category: 'Criptografia', 
    difficulty: 'Fàcil',
    desc: 'Desxifra el següent missatge en codi Morse: .... . .-.. .-.. --- / .-- --- .-. .-.. -..',
    solution: 'solucions/Morse.txt',
    flag: 'flag{codi_morse_primer_conegut}'
  },
  {
    id: "Pol",
    title: "Triple Capa",
    category: "Criptografía",
    difficulty: "Mitjà",
    desc: "Desxifra aquest missatge codificat en múltiples capes: Q1ZsbmdmcXJqcWZmYnd2Z3Y=",
    solution: "solucions/Triple_Capa.txt",
    flag: "flag{cryptography_is_fun}"
  },
  {
    id: "Pol",
    title: "XOR Brutal",
    category: "Criptografía",
    difficulty: "Mitjà",
    desc: "Aquest text ha estat xifrat amb XOR i una clau d’1 caràcter desconeguda (en ASCII): 1f0c190e0409110f171a",
    solution: "solucions/XOR_Brutal.txt",
    flag: "flag{xor_clau_simple}"
  }

  






];

const completed = new Set();
const grid = document.getElementById('challenge-grid');

function mkCard(ch) {
  const el = document.createElement('div');
  el.className = 'card';
  el.tabIndex = 0;
  el.setAttribute('role','button');
  el.setAttribute('aria-label', ch.title + ' — ' + ch.category);
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
  el.addEventListener('click', ()=> openModal(ch));
  el.addEventListener('keyup', (e)=> { if (e.key === 'Enter' || e.key === ' ') openModal(ch); });
  if (completed.has(ch.id)) el.style.opacity = '0.5';
  return el;
}

function populateGrid(){
  grid.innerHTML = '';
  challenges.forEach(ch => grid.appendChild(mkCard(ch)));
}
populateGrid();

const modalRoot = document.getElementById('modal-root');
// --- Estructura Activitat --- 
function openModal(ch) {
  modalRoot.innerHTML = `
    <div class="modal-backdrop" id="modal-backdrop" role="dialog" aria-modal="true">
      <div class="pane">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:12px">
          <div>
            <h2>${ch.title}</h2>
            <div class="meta">${ch.category} · ${ch.difficulty} · ${ch.id}</div>
          </div>
          <div><button id="modal-close" class="btn" style="background:#ff5c7a">Tanca</button></div>
        </div>

        <div style="margin-top:12px;color:#dfecef">${ch.desc}</div>

        <div class="flag-area">
          <input id="flag-input" placeholder="flag{...}" />
          <button id="submit-flag" class="btn">Enviar</button>
        </div>

        <div style="margin-top:8px;">
          <button id="solution-btn" class="btn" style="background:#6f42c1;">Veure solució</button>
        </div>

        <div id="feedback" style="margin-top:12px;font-weight:700;"></div>
      </div>
    </div>
  `;

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('submit-flag').addEventListener('click', ()=> submitFlag(ch));
  document.getElementById('solution-btn').addEventListener('click', ()=> window.open(ch.solution, '_blank'));
}

function closeModal() {
  modalRoot.innerHTML = '';
}

function submitFlag(ch) {
  const input = document.getElementById('flag-input');
  const fb = document.getElementById('feedback');
  const val = input.value.trim();
  if (!val) {
    fb.style.color = '#ff9b9b';
    fb.textContent = '⚠️ Introdueix una flag';
    return;
  }

  if (val === ch.flag) {
    fb.style.color = '#9bffdd';
    fb.textContent = '✅ Correcte!';
    completed.add(ch.id);
    closeModal();
    populateGrid();
  } else {
    fb.style.color = '#ff9b9b';
    fb.textContent = '❌ Incorrecte';
  }
}


const btnCtf = document.getElementById('btn-ctf');
const btnLearning = document.getElementById('btn-learning');
const secCtf = document.getElementById('section-ctf');
const secLearning = document.getElementById('section-learning');

function showSection(name) {
  if (name === 'ctf') {
    secCtf.classList.add('active');
    secLearning.classList.remove('active');
    btnCtf.classList.add('active');
    btnLearning.classList.remove('active');
  } else {
    secCtf.classList.remove('active');
    secLearning.classList.add('active');
    btnCtf.classList.remove('active');
    btnLearning.classList.add('active');
  }
}

btnCtf.addEventListener('click', ()=> showSection('ctf'));
btnLearning.addEventListener('click', ()=> showSection('learning'));

// --- Documentació ---
const topics = [
  { id:'rev', title:'Encriptació', body:`<p><strong>L'encriptació</strong> 
  L'encriptació porta amb nosaltres des de temps immemorials, evitant que enemics o persones alienes als nostres interessos puguin llegir els nostres missatges o instruccions. 

  Un dels primers mètodes d'encriptació va ser el mètode Caesar, que es basava a moure la posició de la lletra X posicions en una direcció al diccionari.  

  Per exemple en el cas de la paraula CASA passaria a ser HEXE, movent cada paraula en 4 posicions (en aquest cas) 

  </p>` },
  { id:'rev', title:'Atacs força bruta', body:`<p><strong>Els atacs de força bruta</strong> 
     es basen a provar combinacions fins que es dóna amb la que ens dóna accés a l'objectiu que ens trobem atacant. 

    Hi ha diversos tipus d'atacs de força bruta: 

    Simples: provar combinacions aleatòries de números, lletres i caràcters especials fins que es dóna amb la clau correcta 

    Diccionari: amb un fitxer de claus filtrades per provar-les contra un usuari

  </p>` },

];

const tocList = document.getElementById('toc-list');
const learnMain = document.getElementById('learn-main');
const learnTitle = document.getElementById('learn-title');
const learnBody = document.getElementById('learn-body');

function populateTOC(){
  tocList.innerHTML = '';
  topics.forEach((t, idx) => {
    const li = document.createElement('li');
    li.textContent = t.title;
    li.tabIndex = 0;
    li.addEventListener('click', ()=> showTopic(idx));
    li.addEventListener('keyup', (e)=> { if (e.key === 'Enter' || e.key === ' ') showTopic(idx); });
    if (idx === 0) li.classList.add('active');
    tocList.appendChild(li);
  });
  showTopic(0);
}

function showTopic(i){
  const t = topics[i];
  [...tocList.children].forEach((n,idx)=> n.classList.toggle('active', idx === i));
  learnTitle.textContent = t.title;
  learnBody.innerHTML = t.body;
  learnMain.focus();
}

populateTOC();


