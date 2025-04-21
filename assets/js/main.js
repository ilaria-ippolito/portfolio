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
    title: "iVegan Discovery Parte 1",
    tags: ["UX Research", "UI Design", "Figma", "User Testing"],
    overview: `Progettazione di un'app per aiutare le persone a scoprire e adottare uno stile di vita vegano in modo graduale e personalizzato.`,
    challenge: `La sfida principale è stata creare un'esperienza utente che rendesse accessibile e non intimidatorio il passaggio a una dieta vegana, 
    considerando le diverse motivazioni e punti di partenza degli utenti.`,
    process: `Ho iniziato con una fase di ricerca utente approfondita, conducendo interviste e analizzando le abitudini alimentari.
    Ho creato personas e user journey maps per identificare i punti critici nel processo di transizione.
    Ho sviluppato wireframes e prototipi interattivi, testandoli con potenziali utenti per validare le soluzioni.`,
    results: `Il design finale offre un percorso personalizzato che tiene conto delle preferenze individuali,
    fornendo supporto pratico e motivazionale attraverso funzionalità come ricette personalizzate, 
    tracciamento dei progressi e connessione con la community.`,
    images: [
      "assets/img/copertina-discovery_1.png",
      "assets/img/copertina-progetto-grafica.jpg",
      "assets/img/copertina-progetto-grafica.jpg",
    ],
    pdfUrl: "assets/documents/progetto-discovery_1.pdf",
  },
  ivegan_a11y: {
    title: "iVegan Accessibilità",
    tags: [
      "UX Research",
      "User Personas",
      "User Journey Mapping",
      "Accessibility",
    ],
    overview: "Ricerca dei bisogni di persone con disabilità.",
    challenge: `La sfida principale era identificare le necessità di persone con disabilità nel loro uso di iVegan, 
    per fornire un'esperienza utente accessibile e inclusiva.`,
    process: `Ho iniziato con una fase di ricerca utente approfondita, conducendo interviste e analizzando le abitudini alimentari. 
    Ho creato personas e user journey maps per identificare i punti critici nel processo di transizione.
    Ho sviluppato wireframes e prototipi interattivi, testandoli con potenziali utenti per validare le soluzioni.`,
    results: `Il design finale offre un percorso personalizzato che tiene conto delle preferenze individuali,
    fornendo supporto pratico e motivazionale attraverso funzionalità come ricette personalizzate, 
    tracciamento dei progressi e connessione con la community.`,
    images: [
      "assets/img/ivegan-accessibility-cover.jpg",
      "assets/img/ivegan-accessibility-research.jpg",
      "assets/img/ivegan-accessibility-personas.jpg",
    ],
    pdfUrl: "assets/documents/progetto-accessibilità_1.pdf",
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
