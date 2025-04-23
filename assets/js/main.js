const projects = {
  orizon: {
    title: "Orizon",
    tags: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Affinity Designer",
      "Affinity Publisher",
    ],
    overview:
      "Creazione di una brand identity per un'agenzia di viaggi ecosostenibile.",
    challenge: `La sfida principale è stata creare un'identità visiva che comunicasse 
    sia l'aspetto avventuroso del viaggio che l'impegno verso la sostenibilità ambientale.`,
    process: `Il processo è iniziato con una fase di ricerca approfondita nel settore del turismo sostenibile.
    Ho sviluppato diverse proposte di logo e palette colori, perfezionando iterativamente il design
    basandomi sul feedback ricevuto.`,
    results: `Il risultato finale è un'identità di marca coerente e versatile che comunica 
    efficacemente i valori del brand attraverso tutti i touchpoint.`,
    images: [
      "assets/img/copertina-progetto-grafica.jpg",
      "assets/img/orizon-process-1.jpg",
      "assets/img/orizon-process-2.jpg",
    ],
    pdfUrl: "assets/documents/progetto-grafica.pdf",
  },
  ivegan_discovery: {
    title: "iVegan Discovery",
    tags: ["User Experience Design", "Personas", "Journey Mapping", "User Information Architecture", "Miro"],
    overview: `iVegan è uno shop online dedicato al mondo vegan. Ho condotto una fase di discovery per analizzare il sito esistente e comprendere i reali bisogni e comportamenti delle persone che lo utilizzano. Il lavoro si è focalizzato sulla creazione di personas, journey maps e sulla riorganizzazione dei contenuti per migliorare l’esperienza utente.`,
    challenge: `Come rendere un sito e-commerce più accessibile, intuitivo e in linea con i valori etici del brand? L’obiettivo era semplificare il processo d’acquisto, eliminare barriere e trasmettere in modo chiaro l’identità sostenibile di iVegan..`,
    process: `Sono partita dall’analisi dell’esperienza utente attuale, evidenziando punti di forza e criticità con i principi di usabilità. Ho mappato la struttura del sito, studiato i competitor e raccolto dati qualitativi da recensioni e social. Un questionario online mi ha permesso di raccogliere insight diretti dagli utenti, fondamentali per costruire personas realistiche e user journey significative.`,
    results: `Questa fase ha fornito una base solida per il redesign del sito, mettendo al centro l’esperienza reale degli utenti e i valori del brand.`,
    images: [
      "assets/img/copertina-discovery.png",
      "assets/img/copertina-progetto-grafica.jpg",
      "assets/img/copertina-progetto-grafica.jpg",
    ],
    pdfUrl: "assets/documents/progetto-discovery.pdf",
  },
  ivegan_a11y: {
    title: "iVegan Accessibilità",
    tags: [
      "Web Content Accessibility Guidelines (WCAG)",
      "WCAG 2.1/2.2 Compliance",
      "Inclusive Design",
      "Accessibility",
      "a11y",
      "WAVE Evaluation",
      "NVDA/Tealkback Testing",
    ],
    overview: "Questo progetto nasce per rendere il sito iVegan accessibile e inclusivo. Partendo dal lavoro fatto nella fase di Discovery, ho esteso le personas e le user journey per includere utenti con disabilità, con l’obiettivo di individuare barriere e proporre soluzioni concrete.",
    challenge: `Come può un sito e-commerce rispondere davvero alle esigenze di chi ha disabilità visive, motorie o cognitive? La sfida era analizzare l’esperienza utente dal loro punto di vista e proporre interventi che rendano la piattaforma fruibile per tutti.`,
    process: `Ho integrato nelle personas esistenti scenari legati a disabilità specifiche per immedesimarmi nei bisogni di utenti reali. Ho analizzato 5 pagine chiave del sito, scelte per rappresentare diverse tipologie di interazione. Per ciascuna, ho individuato problemi di accessibilità seguendo le linee guida WCAG e applicando quanto appreso nel corso. Questo mi ha permesso di costruire un’analisi dettagliata, con un approccio empatico e orientato al miglioramento.`,
    results: `Il risultato è un’analisi accessibile, concreta e mirata, che punta a rendere l’esperienza su iVegan inclusiva per ogni persona, senza eccezioni.`,
    images: [
      "assets/img/copertina-accessibilità.jpg",
      "assets/img/ivegan-accessibility-research.jpg",
      "assets/img/ivegan-accessibility-personas.jpg",
    ],
    pdfUrl: "assets/documents/progetto-accessibilità.pdf",
  },
};

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("project");

// Populate page with project data
if (projectId && projects[projectId]) {
  const project = projects[projectId];

  // Update page title
  document.title = `${project.title} - Ilaria Ippolito Portfolio`;

  // Update content
  document.querySelector(".project-title").textContent = project.title;

  // Update tags
  const tagsContainer = document.querySelector(".project-tags");
  tagsContainer.innerHTML = project.tags
    .map((tag) => `<span class="card__tag">${tag}</span>`)
    .join("");

  // Update sections
  document.querySelector(".project-section:nth-child(1) p").textContent =
    project.overview;
  document.querySelector(".project-section:nth-child(2) p").textContent =
    project.challenge;
  document.querySelector(".project-section:nth-child(3) p").textContent =
    project.process;
  document.querySelector(".project-section:nth-child(4) p").textContent =
    project.results;

  // Update images
  // const imagesContainer = document.querySelector(".project-images");
  // imagesContainer.innerHTML = project.images
  //   .map((img) => `<img src="${img}" alt="Project process image" />`)
  //   .join("");

  // Update download link
  document.querySelector(".project-download a").href = project.pdfUrl;
}
