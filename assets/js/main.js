// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("project");

// Define project data object
const projects = {
  orizon: {
    title: "Orizon",
    tags: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Affinity Designer",
      "Affinity Publisher",
    ],
    meta: {
      duration: "3 mesi",
      role: "Brand Designer",
      client: "Orizon Travel",
      year: "2024"
    },
    overview:
      "Creazione di una brand identity per un'agenzia di viaggi ecosostenibile.",
    challenge: `La sfida principale è stata creare un'identità visiva che comunicasse 
    sia l'aspetto avventuroso del viaggio che l'impegno verso la sostenibilità ambientale.`,
    process: `Il processo è iniziato con una fase di ricerca approfondita nel settore del turismo sostenibile.
    Ho sviluppato diverse proposte di logo e palette colori, perfezionando iterativamente il design
    basandomi sul feedback ricevuto.`,
    results: `Il risultato finale è un'identità di marca coerente e versatile che comunica 
    efficacemente i valori del brand attraverso tutti i touchpoint.`,
    processSteps: [
      {
        title: "Ricerca",
        description: "Analisi approfondita del mercato e dei competitor nel settore del turismo ecosostenibile."
      },
      {
        title: "Concept",
        description: "Sviluppo di concetti visivi che uniscono elementi naturali e simboli di esplorazione."
      },
      {
        title: "Design",
        description: "Creazione di diverse proposte di logo e sviluppo della palette colori."
      },
      {
        title: "Affinamento",
        description: "Perfezionamento del design in base al feedback ricevuto dal cliente."
      }
    ],
    resultsHighlights: [
      {
        title: "Coerenza visiva",
        description: "Sistema di design che mantiene un'identità riconoscibile su tutti i materiali."
      },
      {
        title: "Comunicazione dei valori",
        description: "Elementi visivi che esprimono autenticità e impegno ambientale."
      }
    ],
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
    meta: {
      duration: "2 mesi",
      role: "UX Designer",
      client: "iVegan",
      year: "2024"
    },
    overview: `iVegan è uno shop online dedicato al mondo vegan. Ho condotto una fase di discovery per analizzare il sito esistente e comprendere i reali bisogni e comportamenti delle persone che lo utilizzano. Il lavoro si è focalizzato sulla creazione di personas, journey maps e sulla riorganizzazione dei contenuti per migliorare l'esperienza utente.`,
    challenge: `Come rendere un sito e-commerce più accessibile, intuitivo e in linea con i valori etici del brand? L'obiettivo era semplificare il processo d'acquisto, eliminare barriere e trasmettere in modo chiaro l'identità sostenibile di iVegan.`,
    process: `Sono partita dall'analisi dell'esperienza utente attuale, evidenziando punti di forza e criticità con i principi di usabilità. Ho mappato la struttura del sito, studiato i competitor e raccolto dati qualitativi da recensioni e social. Un questionario online mi ha permesso di raccogliere insight diretti dagli utenti, fondamentali per costruire personas realistiche e user journey significative.`,
    results: `Questa fase ha fornito una base solida per il redesign del sito, mettendo al centro l'esperienza reale degli utenti e i valori del brand.`,
    processSteps: [
      {
        title: "Analisi",
        description: "Valutazione dell'esperienza utente attuale e identificazione delle criticità."
      },
      {
        title: "Ricerca",
        description: "Studio dei competitor e raccolta di dati qualitativi da recensioni e social."
      },
      {
        title: "User Research",
        description: "Questionario online per raccogliere insight dagli utenti."
      },
      {
        title: "Definizione",
        description: "Creazione di personas realistiche e user journey significative."
      },
      {
        title: "Definizione",
        description: "Creazione di personas realistiche e user journey significative."
      },
      {
        title: "Definizione",
        description: "Creazione di personas realistiche e user journey significative."
      }
    ],
    resultsHighlights: [
      {
        title: "Utenti al centro",
        description: "Comprensione approfondita delle esigenze degli utenti vegan."
      },
      {
        title: "Framework solido",
        description: "Base strategica per guidare le decisioni di redesign."
      }
    ],
    images: [
      "assets/img/copertina-discovery.png",
      "assets/img/ivegan-research.jpg",
      "assets/img/ivegan-personas.jpg",
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
    ],
    meta: {
      duration: "1 mese",
      role: "Accessibility Specialist",
      client: "iVegan",
      year: "2024"
    },
    overview: "Questo progetto nasce per rendere il sito iVegan accessibile e inclusivo. Partendo dal lavoro fatto nella fase di Discovery, ho esteso le personas e le user journey per includere utenti con disabilità, con l'obiettivo di individuare barriere e proporre soluzioni concrete.",
    challenge: `Come può un sito e-commerce rispondere davvero alle esigenze di chi ha disabilità visive, motorie o cognitive? La sfida era analizzare l'esperienza utente dal loro punto di vista e proporre interventi che rendano la piattaforma fruibile per tutti.`,
    process: `Ho integrato nelle personas esistenti scenari legati a disabilità specifiche per immedesimarmi nei bisogni di utenti reali. Ho analizzato 5 pagine chiave del sito, scelte per rappresentare diverse tipologie di interazione. Per ciascuna, ho individuato problemi di accessibilità seguendo le linee guida WCAG e applicando quanto appreso nel corso. Questo mi ha permesso di costruire un'analisi dettagliata, con un approccio empatico e orientato al miglioramento.`,
    results: `Il risultato è un'analisi accessibile, concreta e mirata, che punta a rendere l'esperienza su iVegan inclusiva per ogni persona, senza eccezioni.`,
    processSteps: [
      {
        title: "Analisi WCAG",
        description: "Valutazione del sito secondo le linee guida WCAG 2.1/2.2."
      },
      {
        title: "Personas inclusive",
        description: "Estensione delle personas per includere utenti con disabilità."
      },
      {
        title: "Testing",
        description: "Valutazione dell'esperienza con screen reader e altre tecnologie assistive."
      },
      {
        title: "Soluzioni",
        description: "Proposta di interventi concreti per migliorare l'accessibilità."
      }
    ],
    resultsHighlights: [
      {
        title: "Conformità WCAG",
        description: "Roadmap per raggiungere il livello AA di conformità."
      },
      {
        title: "Esperienza inclusiva",
        description: "Design che non discrimina in base alle capacità degli utenti."
      }
    ],
    images: [
      "assets/img/copertina-accessibilità.jpg",
      "assets/img/ivegan-accessibility-research.jpg",
      "assets/img/ivegan-accessibility-personas.jpg",
    ],
    pdfUrl: "assets/documents/progetto-accessibilità.pdf",
  },
};

// Populate page with project data
if (projectId && projects[projectId]) {
  const project = projects[projectId];

  // Update page title
  document.title = `${project.title} - Ilaria Ippolito Portfolio`;
  
  // Update basic content
  document.querySelector(".project-title").textContent = project.title;
  document.querySelector(".overview-content").textContent = project.overview;
  document.querySelector(".challenge-content").textContent = project.challenge;
  document.querySelector(".process-content").textContent = project.process;
  document.querySelector(".results-content").textContent = project.results;
  
  // Update project meta information
  if (project.meta) {
    const metaItems = document.querySelectorAll(".meta-item");
    if (metaItems.length >= 4) {
      metaItems[0].querySelector("p").textContent = project.meta.duration || "3 mesi";
      metaItems[1].querySelector("p").textContent = project.meta.role || "Designer";
      metaItems[2].querySelector("p").textContent = project.meta.client || "Cliente";
      metaItems[3].querySelector("p").textContent = project.meta.year || "2024";
    }
  }

  // Update tags
  const tagsContainer = document.querySelector(".project-tags");
  tagsContainer.innerHTML = project.tags
    .map((tag) => `<span class="card__tag">${tag}</span>`)
    .join("");

  // Update hero image if it exists
  if (project.images && project.images.length > 0) {
    const heroImg = document.querySelector(".project-hero-img");
    if (heroImg) {
      heroImg.src = project.images[0];
      heroImg.alt = `${project.title} - Hero image`;
    }
  }

  // Update process steps if available
  if (project.processSteps) {
    const processStepsContainer = document.querySelector(".process-steps");
    processStepsContainer.innerHTML = project.processSteps
      .map((step, index) => `
        <div class="process-step">
          <span class="step-number">${index + 1}</span>
          <h3>${step.title}</h3>
          <p>${step.description}</p>
        </div>
      `)
      .join("");
  }

  // Update results highlights if available
  if (project.resultsHighlights) {
    const resultsContainer = document.querySelector(".results-section .text-content");
    const resultsContentEl = document.querySelector(".results-content");
    
    // Keep the original results text and add the highlights after it
    const highlights = project.resultsHighlights
      .map(highlight => `
        <div class="results-item">
          <h3>${highlight.title}</h3>
          <p>${highlight.description}</p>
        </div>
      `)
      .join("");
    
    // Replace existing results items with our new ones while keeping the results content paragraph
    resultsContainer.innerHTML = `
      <p class="results-content">${project.results}</p>
      ${highlights}
    `;
  }

  // Update project images
  if (project.images && project.images.length > 0) {
    const imagesContainer = document.querySelector(".project-images");
    // Skip the first image as it's used for the hero
    const processImages = project.images.slice(1);
    
    if (processImages.length > 0) {
      imagesContainer.innerHTML = processImages
        .map((img) => `<img src="${img}" alt="Project process image" />`)
        .join("");
    } else {
      // Hide the container if no additional images
      imagesContainer.style.display = "none";
    }
  }

  // Update download link
  const downloadLink = document.querySelector(".project-pdf-link");
  if (downloadLink && project.pdfUrl) {
    downloadLink.href = project.pdfUrl;
  }
}