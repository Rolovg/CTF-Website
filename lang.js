const translations = {
  ca: {
    // UI strings
    title: "CTF ENTI",
    subtitle: "practica · aprèn",
    hero_title: "ENTI",
    hero_sub: "Plataforma per aprendre ciberseguretat",
    btn_ctf: "CTF",
    btn_doc: "Documentació",
    btn_roadmap: "Roadmap",
    challenges_title: "Reptes Disponibles",
    challenges_hint: "Pressiona un repte per començar",
    toc_title: "Llista de continguts",
    learn_intro: "Trieu un tema a l'esquerra per veure contingut d'aprenentatge.",
    close: "Tanca",
    submit: "Enviar",
    view_solution: "Veure solució",
    no_flag: "⚠️ Introdueix una flag",
    correct: "✅ Correcte!",
    wrong: "❌ Incorrecte",
    roadmap_title: "Roadmap d'aprenentatge",
    roadmap_sub: "Segueix un camí aleatori de reptes CTF",
    roadmap_intro: "Cada vegada que carreguis aquesta pàgina es generarà un recorregut aleatori de reptes.",
    roadmap_generate: "Genera nou recorregut",
    final_unlocked: "Tots completats! Accés al repte final desbloquejat!",


    challenges: [

            { id:'Artur', title:'Base64 II', category:'Criptografia', difficulty:'Fàcil',
        desc:'Tens un text codificat en Base64 guardat a la variable b64. Has de decodificar-lo per obtenir la flag en format FLAG{...}. b64 = "RkxBR3tCYXNlNjRfU2ltcGxlfQ=="',
        solution:'solucions/Decodificacio_Base64.txt', flag:'FLAG{Base64_Simple}' },

      { id:'Artur', title:'Hex a ASCII', category:'Criptografia', difficulty:'Fàcil',
        desc:'Tens una cadena hexagonal a la variable hexs. Converteix cada parell de dígits en el seu caràcter ASCII corresponent. hexs = "464c41477b4865785f636f64655f4578616d706c657d"',
        solution:'solucions/Hex_a_ASCII.txt', flag:'FLAG{Hex_code_Example}' },

      { id:'Artur', title:'Hash MD5 simulat', category:'Criptografia', difficulty:'Fàcil',
        desc:'Tens una llista de contrasenyes. La correcta genera el hash "5f4dcc3b5aa765d61d8327deb882cf99" (que correspon a "password"). Troba la que coincideix i forma FLAG{paraula}.',
        solution:'solucions/Hash_MD5_simulat.txt', flag:'FLAG{password}' },

      { id:'Artur', title:'Força bruta PIN', category:'Anàlisi de seguretat', difficulty:'Mitjà',
        desc:'La funció check(pin) retorna True si el PIN és correcte. Descobreix el PIN provant totes les combinacions de 0000-9999.',
        solution:'solucions/Forca_Bruta_PIN.txt', flag:'FLAG{PIN_0420}' },

      { id:'Artur', title:'Detecció de patrons sospitosos (SQLi)', category:'Seguretat web', difficulty:'Mitjà',
        desc:'Analitza una llista d\'intents d\'inici de sessió. Detecta la línia sospitosa que conté la flag FLAG{...}.',
        solution:'solucions/Deteccio_SQLi.txt', flag:'FLAG{SQLI_detected}' },

      { id:'Artur', title:'Extreure flag d\'un script HTML', category:'Anàlisi web', difficulty:'Fàcil',
        desc:'Dins d\'una pàgina HTML hi ha un bloc script amb la flag. Has d\'extreure el text FLAG{...}.',
        solution:'solucions/Extract_HTML_flag.txt', flag:'FLAG{XSS_example}' },

      { id:'Artur', title:'Detecció d\'enllaç sospitós (phishing)', category:'Seguretat', difficulty:'Fàcil',
        desc:'Troba l\'enllaç amb FLAG{...} dins del text.',
        solution:'solucions/Deteccio_phishing.txt', flag:'FLAG{Phish_Example}' },

      { id:'Artur', title:'Esteganografia d\'espais', category:'Esteganografia', difficulty:'Mitjà',
        desc:'Cada línia acaba amb un espai (0) o una tabulació (1). Converteix els bits en caràcters ASCII i troba la flag.',
        solution:'solucions/Esteganografia_Espais.txt', flag:'U' },
      
      { id:'Artur', title:'Xifrat Cèsar', category:'Criptografia', difficulty:'Fàcil',
        desc:'Desxifra el següent missatge: sdamvobzxznvmhjgv', solution:'solucions/Xifrat_Cesar.txt', flag:'flag{xifratgecesarmola}' },

      { id:'Pol', title:'Base64', category:'Criptografia', difficulty:'Fàcil',
        desc:'Desxifra el següent missatge: ZmxhZ3tzZV9kZWNvZGlmaWNhcl9lbl9iYXNlNjR9', solution:'solucions/Base64.txt', flag:'flag{se_decodificar_en_base64}' },

      { id:'Pol', title:'Xifrat Vigenère', category:'Criptografia', difficulty:'Fàcil',
        desc:'Desxifra el següent missatge amb la clau "oberta": wkhvixphqkcjddnx', solution:'solucions/Xifrat_Vigenere.txt', flag:'flag{vigenere_et_completa}' },

      { id:'Pol', title:'Codi ASCII', category:'Criptografia', difficulty:'Fàcil',
        desc:'Desxifra el següent missatge codificat en ASCII: 72 101 108 108 111 32 87 111 114 108 100', solution:'solucions/ASCII.txt', flag:'flag{desxifrat_asciiactiu}' },

      { id:'Pol', title:'Codi Morse', category:'Criptografia', difficulty:'Fàcil',
        desc:'Desxifra el següent missatge en codi Morse: .... . .-.. .-.. --- / .-- --- .-. .-.. -..', solution:'solucions/Morse.txt', flag:'flag{codi_morse_primer_conegut}' },

      { id:'Pol', title:'Triple Capa', category:'Criptografia', difficulty:'Mitjà',
        desc:'Desxifra aquest missatge codificat en múltiples capes: Q1ZsbmdmcXJqcWZmYnd2Z3Y=', solution:'solucions/Triple_Capa.txt', flag:'flag{cryptography_is_fun}' },

      { id:'Pol', title:'XOR Brutal', category:'Criptografia', difficulty:'Mitjà',
        desc:'Aquest text ha estat xifrat amb XOR i una clau d’1 caràcter desconeguda (en ASCII): 1f0c190e0409110f171a', solution:'solucions/XOR_Brutal.txt', flag:'flag{xor_clau_simple}' }
    ],


    docs: [
      { id:'rev', title:'Encriptació',
        body:`<p><strong>L'encriptació</strong> porta amb nosaltres des de temps immemorials, evitant que enemics o persones alienes als nostres interessos puguin llegir els nostres missatges o instruccions.</p>
              <p>Un dels primers mètodes d'encriptació va ser el <em>mètode Cèsar</em>, que es basava a moure la posició de cada lletra X posicions dins de l'alfabet.</p>
              <p>Exemple: CASA → HEXE (desplaçant cada lletra 4 posicions).</p>
              <p>Avui en dia, utilitzem sistemes molt més complexos com AES, RSA o ECC per protegir dades sensibles com contrasenyes o transaccions bancàries.</p>` },

      { id:'brute', title:'Atacs de força bruta',
        body:`<p><strong>Els atacs de força bruta</strong> consisteixen a provar totes les combinacions possibles fins a trobar la correcta.</p>
              <p>Tipus principals:</p>
              <ul>
                <li><strong>Simplicitat:</strong> provar cada combinació (0000–9999).</li>
                <li><strong>Diccionari:</strong> utilitzar una llista de paraules comunes (per exemple: "password", "123456").</li>
              </ul>
              <p>Exemple de codi Python:</p>
              <pre style="background:#111;padding:8px;border-radius:6px;color:#f5f5f5;font-family:monospace;">
# Python exemple
for pin in range(10000):
    if check(str(pin).zfill(4)):
        print("PIN trobat:", pin)
        break
              </pre>` },

      { id:'ASCII', title:'ASCII',
        body:`<p><strong>La codificació ASCII</strong> assigna un nombre a cada caràcter imprimible i de control.</p>
              <p>És molt utilitzada en exercicis de CTF on cal convertir nombres a text llegible.</p>
              <pre style="background:#111;padding:8px;border-radius:6px;color:#f5f5f5;font-family:monospace;">
# Exemple Python
nums = "72 101 108 108 111".split()
print(''.join(chr(int(n)) for n in nums))  # Hello
              </pre>` },

      { id:'hash', title:'Hashing',
        body:`<p>Les funcions <em>hash</em> (MD5, SHA1, SHA256, etc.) converteixen dades en una empremta digital única.</p>
              <p>Aquesta empremta és pràcticament impossible de revertir. S'utilitza per verificar integritat o protegir contrasenyes.</p>
              <pre style="background:#111;padding:8px;border-radius:6px;color:#f5f5f5;font-family:monospace;">
import hashlib
text = "password"
print(hashlib.md5(text.encode()).hexdigest())  # 5f4dcc3b5aa765d61d8327deb882cf99
              </pre>` },

      { id:'osint', title:'OSINT',
        body:`<p>L’<strong>OSINT (Open Source Intelligence)</strong> és l’art de recopilar informació pública a Internet per obtenir pistes o proves.</p>
              <p>Exemples d’eines i fonts:</p>
              <ul>
                <li>Metadades d’imatges (EXIF)</li>
                <li>Consultes WHOIS de dominis</li>
                <li>Perfils socials i fòrums</li>
                <li>Històrics de DNS o IP</li>
              </ul>` },

      { id:'forensic', title:'Forense digital',
        body:`<p><strong>La forense digital</strong> consisteix a analitzar fitxers, imatges o tràfic de xarxa per trobar evidències ocultes.</p>
              <p>En CTFs, sovint cal recuperar dades esborrades, identificar banderes amagades en imatges o disseccionar captures de xarxa (PCAPs).</p>
              <pre style="background:#111;padding:8px;border-radius:6px;color:#f5f5f5;font-family:monospace;">
# Exemple: extracció d'imatges d'un fitxer .zip
unzip evidence.zip
strings dump.jpg | grep FLAG
              </pre>` },

      { id:'web', title:'Seguretat Web',
        body:`<p><strong>La seguretat web</strong> cobreix un ampli ventall de vulnerabilitats que permeten manipular aplicacions.</p>
              <p>Algunes de les més comunes són:</p>
              <ul>
                <li>XSS (Cross-Site Scripting)</li>
                <li>SQL Injection (SQLi)</li>
                <li>CSRF (Cross-Site Request Forgery)</li>
                <li>LFI/RFI (Local/Remote File Inclusion)</li>
                <li>SSRF (Server-Side Request Forgery)</li>
              </ul>
              <p>Exemple de codi vulnerable:</p>
              <pre style="background:#111;padding:8px;border-radius:6px;color:#f5f5f5;font-family:monospace;">
# Exemple PHP vulnerable
$id = $_GET['id'];
$query = "SELECT * FROM users WHERE id = '$id'";
              </pre>` }
    ]
  },

  no: {
 
    title: "CTF ENTI",
    subtitle: "praktiser · lær",
    hero_title: "ENTI",
    hero_sub: "Plattform for å lære cybersikkerhet",
    btn_ctf: "CTF",
    btn_doc: "Dokumentasjon",
    btn_roadmap: "Veikart",
    challenges_title: "Tilgjengelige utfordringer",
    challenges_hint: "Trykk på en utfordring for å starte",
    toc_title: "Innholdsfortegnelse",
    learn_intro: "Velg et tema til venstre for å se læringsinnholdet.",
    close: "Lukk",
    submit: "Send inn",
    view_solution: "Vis løsning",
    no_flag: "⚠️ Skriv inn et flagg",
    correct: "✅ Riktig!",
    wrong: "❌ Feil",
    roadmap_title: "Læringsvei",
    roadmap_sub: "Følg en tilfeldig vei med CTF-utfordringer",
    roadmap_intro: "Hver gang du laster inn denne siden genereres en tilfeldig vei av utfordringer.",
    roadmap_generate: "Generer ny vei",
    final_unlocked: "Alle fullført! Tilgang til sluttoppgaven er låst opp!",

    challenges: [
            { id:'Artur', title:'Base64 II', category:'Kryptografi', difficulty:'Lett',
        desc:'Du har en tekst kodet i Base64 lagret i variabelen b64. Dekrypter for å få FLAG{...}. b64 = "RkxBR3tCYXNlNjRfU2ltcGxlfQ=="',
        solution:'solucions/Decodificacio_Base64.txt', flag:'FLAG{Base64_Simple}' },

      { id:'Artur', title:'Hex til ASCII', category:'Kryptografi', difficulty:'Lett',
        desc:'Konverter hvert heks-par i variabelen hexs til tilsvarende ASCII-tegn. hexs = "464c41477b4865785f636f64655f4578616d706c657d"',
        solution:'solucions/Hex_a_ASCII.txt', flag:'FLAG{Hex_code_Example}' },

      { id:'Artur', title:'Simulert MD5-hash', category:'Kryptografi', difficulty:'Lett',
        desc:'Finn passordet som gir MD5-hashen "5f4dcc3b5aa765d61d8327deb882cf99" (passord = "password").',
        solution:'solucions/Hash_MD5_simulat.txt', flag:'FLAG{password}' },

      { id:'Artur', title:'Brute force PIN', category:'Sikkerhetsanalyse', difficulty:'Middels',
        desc:'Funksjonen check(pin) returnerer True hvis PIN er riktig. Prøv alle kombinasjoner fra 0000 til 9999.',
        solution:'solucions/Forca_Bruta_PIN.txt', flag:'FLAG{PIN_0420}' },

      { id:'Artur', title:'Mistenkelig mønster (SQLi)', category:'Web-sikkerhet', difficulty:'Middels',
        desc:'Analyser innloggingsforsøkene og finn linjen med FLAG{...}.',
        solution:'solucions/Deteccio_SQLi.txt', flag:'FLAG{SQLI_detected}' },

      { id:'Artur', title:'Finn FLAG i HTML-script', category:'Web-analyse', difficulty:'Lett',
        desc:'FLAG er skjult inne i et script-element i HTML-koden.',
        solution:'solucions/Extract_HTML_flag.txt', flag:'FLAG{XSS_example}' },

      { id:'Artur', title:'Oppdag phishing-lenke', category:'Sikkerhet', difficulty:'Lett',
        desc:'Finn lenken som inneholder FLAG{...} i teksten.',
        solution:'solucions/Deteccio_phishing.txt', flag:'FLAG{Phish_Example}' },

      { id:'Artur', title:'Mellomrom-steganografi', category:'Steganografi', difficulty:'Middels',
        desc:'Hver linje ender med et mellomrom (0) eller tab (1). Konverter bitene til tekst og finn FLAG.',
        solution:'solucions/Esteganografia_Espais.txt', flag:'U' },

      { id:'Artur', title:'Cæsar-kryptering', category:'Kryptografi', difficulty:'Lett',
        desc:'Dekrypter meldingen: sdamvobzxznvmhjgv', solution:'solucions/Xifrat_Cesar.txt', flag:'flag{xifratgecesarmola}' },

      { id:'Pol', title:'Base64', category:'Kryptografi', difficulty:'Lett',
        desc:'Dekrypter: ZmxhZ3tzZV9kZWNvZGlmaWNhcl9lbl9iYXNlNjR9', solution:'solucions/Base64.txt', flag:'flag{se_decodificar_en_base64}' },

      { id:'Pol', title:'Vigenère-kryptering', category:'Kryptografi', difficulty:'Lett',
        desc:'Dekrypter med nøkkelen "oberta": wkhvixphqkcjddnx', solution:'solucions/Xifrat_Vigenere.txt', flag:'flag{vigenere_et_completa}' },

      { id:'Pol', title:'ASCII-kode', category:'Kryptografi', difficulty:'Lett',
        desc:'Dekrypter meldingen kodet i ASCII: 72 101 108 108 111 32 87 111 114 108 100', solution:'solucions/ASCII.txt', flag:'flag{desxifrat_asciiactiu}' },

      { id:'Pol', title:'Morse-kode', category:'Kryptografi', difficulty:'Lett',
        desc:'Dekrypter morse-meldingen: .... . .-.. .-.. --- / .-- --- .-. .-.. -..', solution:'solucions/Morse.txt', flag:'flag{codi_morse_primer_conegut}' },

      { id:'Pol', title:'Triple Lag', category:'Kryptografi', difficulty:'Middels',
        desc:'Dekrypter meldingen kodet i flere lag: Q1ZsbmdmcXJqcWZmYnd2Z3Y=', solution:'solucions/Triple_Capa.txt', flag:'flag{cryptography_is_fun}' },

      { id:'Pol', title:'XOR Brutal', category:'Kryptografi', difficulty:'Middels',
        desc:'Denne teksten er kryptert med XOR og en 1-tegns nøkkel (ASCII): 1f0c190e0409110f171a', solution:'solucions/XOR_Brutal.txt', flag:'flag{xor_clau_simple}' }
    ],

    docs: [
        { id:'rev', title:'Kryptering',
        body:`<p><strong>Kryptering</strong> har vært med oss siden oldtiden for å hindre at fiender kan lese våre meldinger.</p>
              <p>En av de første metodene var <em>Cæsar-metoden</em>, hvor hver bokstav flyttes et visst antall posisjoner i alfabetet.</p>
              <p>Eksempel: HUS → MBX (flyttet 4 plasser).</p>
              <p>I dag bruker vi mer avanserte systemer som AES, RSA eller ECC for å beskytte sensitive data som passord og banktransaksjoner.</p>` },

      { id:'brute', title:'Brute Force-angrep',
        body:`<p><strong>Brute force-angrep</strong> går ut på å prøve alle mulige kombinasjoner til man finner den riktige.</p>
              <p>Hovedtyper:</p>
              <ul>
                <li><strong>Enkel:</strong> prøver alle tall eller tegnkombinasjoner.</li>
                <li><strong>Ordliste:</strong> bruker en fil med vanlige passord som "password" eller "123456".</li>
              </ul>
              <p>Eksempel i Python:</p>
              <pre style="background:#111;padding:8px;border-radius:6px;color:#f5f5f5;font-family:monospace;">
# Python-eksempel
for pin in range(10000):
    if check(str(pin).zfill(4)):
        print("PIN funnet:", pin)
        break
              </pre>` },

      { id:'ASCII', title:'ASCII',
        body:`<p><strong>ASCII-koding</strong> tildeler et tall til hvert trykkbare tegn og kontrolltegn.</p>
              <p>Ofte brukt i CTF-oppgaver for å konvertere tall til lesbar tekst.</p>
              <pre style="background:#111;padding:8px;border-radius:6px;color:#f5f5f5;font-family:monospace;">
# Python-eksempel
nums = "72 101 108 108 111".split()
print(''.join(chr(int(n)) for n in nums))  # Hello
              </pre>` },

      { id:'hash', title:'Hashing',
        body:`<p><em>Hash-funksjoner</em> (MD5, SHA1, SHA256) lager en unik digital fingeravtrykk av data.</p>
              <p>Brukes til å verifisere integritet eller beskytte passord mot direkte lagring.</p>
              <pre style="background:#111;padding:8px;border-radius:6px;color:#f5f5f5;font-family:monospace;">
import hashlib
text = "password"
print(hashlib.md5(text.encode()).hexdigest())  # 5f4dcc3b5aa765d61d8327deb882cf99
              </pre>` },

      { id:'osint', title:'OSINT',
        body:`<p><strong>OSINT (Open Source Intelligence)</strong> handler om å samle offentlig informasjon fra Internett for å finne spor eller bevis.</p>
              <p>Eksempler på kilder og verktøy:</p>
              <ul>
                <li>Bilde-metadata (EXIF)</li>
                <li>WHOIS-domeneoppslag</li>
                <li>Sosiale profiler og forum</li>
                <li>DNS- eller IP-historikk</li>
              </ul>` },

      { id:'forensic', title:'Digital Forensikk',
        body:`<p><strong>Digital forensikk</strong> handler om å analysere filer, bilder eller nettverkstrafikk for å finne skjulte bevis.</p>
              <p>I CTF-sammenheng må man ofte hente slettede data, finne skjulte flagg i bilder, eller analysere nettverksfiler (PCAP).</p>
              <pre style="background:#111;padding:8px;border-radius:6px;color:#f5f5f5;font-family:monospace;">
# Eksempel: hente ut data fra ZIP
unzip evidence.zip
strings dump.jpg | grep FLAG
              </pre>` },

      { id:'web', title:'Websikkerhet',
        body:`<p><strong>Websikkerhet</strong> dekker mange typer sårbarheter som lar angripere manipulere applikasjoner.</p>
              <p>De vanligste inkluderer:</p>
              <ul>
                <li>XSS (Cross-Site Scripting)</li>
                <li>SQL Injection (SQLi)</li>
                <li>CSRF (Cross-Site Request Forgery)</li>
                <li>LFI/RFI (Local/Remote File Inclusion)</li>
                <li>SSRF (Server-Side Request Forgery)</li>
              </ul>
              <p>Sårbart kodeeksempel:</p>
              <pre style="background:#111;padding:8px;border-radius:6px;color:#f5f5f5;font-family:monospace;">
# PHP-eksempel (sårbart)
$id = $_GET['id'];
$query = "SELECT * FROM users WHERE id = '$id'";
              </pre>` }
    ]
  }
};


function applyTranslations(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
}
