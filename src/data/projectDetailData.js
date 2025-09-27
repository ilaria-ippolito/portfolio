// src/data/projectDetailData.js

export const projectDetails = {
  a11y: {
    projectTitle: 'Progetto Accessibilità',
    projectTags: ['Branding', 'UI', 'Accessibilità'],
    meta: [
      { label: 'Durata', value: '3 mesi' },
      { label: 'Ruolo', value: 'Brand Designer' },
      { label: 'Cliente', value: 'Orizon Travel' },
      { label: 'Anno', value: '2024' },
    ],
    overviewText:
      'Descrizione dettagliata del progetto e degli obiettivi. Qui viene raccontato il contesto, gli utenti target e cosa si voleva raggiungere con il progetto.',
    overviewImage: 'assets/img/a11y-overview.png',
    challengeText:
      'Descrizione delle sfide affrontate durante il progetto e delle restrizioni tecniche o di progetto.',
    processSteps: [
      {
        number: 1,
        title: 'Ricerca e analisi',
        description:
          'Analisi del sito esistente, benchmark di competitor, raccolta di feedback dagli utenti.',
      },
      {
        number: 2,
        title: 'Wireframing',
        description: 'Creazione di wireframe a bassa fedeltà per definire la nuova struttura del sito.',
      },
      {
        number: 3,
        title: 'Prototyping',
        description:
          'Sviluppo di prototipi interattivi ad alta fedeltà per testare la user experience.',
      },
      {
        number: 4,
        title: 'Sviluppo',
        description: 'Implementazione del sito con HTML e CSS, ottimizzazione per l’accessibilità.',
      },
    ],
    projectImages: [
      'assets/img/a11y-project_1.png',
      'assets/img/a11y-project_2.png',
      'assets/img/a11y-project_3.png',
    ],
    results: [
      'Miglioramento dell’accessibilità e della navigazione per utenti con disabilità visive.',
      'Incremento del punteggio Lighthouse Accessibility da 60 a 100.',
      'Sito responsive e ottimizzato per dispositivi mobili.',
    ],
    resultsImage: 'assets/img/a11y-result.png',
    downloadUrl: 'assets/documents/progetto-accessibilità.pdf',
    timeRange: 'Feb - Mar 2024',
  },
  ticketone: {
    projectTitle: 'Ticketone redesign',
    projectTags: ['Figma', 'Wave', 'Maze'],
    meta: [
      { label: 'Durata', value: '2 mesi' },
      { label: 'Ruolo', value: 'UX/UI Designer' },
      { label: 'Cliente', value: 'Ticketone' },
      { label: 'Anno', value: '2025' },
    ],
    overviewText: 'Redesign della piattaforma Ticketone per migliorare l’esperienza utente e l’accessibilità.',
    overviewImage: 'assets/img/copertina-progetto-grafica.jpg',
    challengeText: 'Rendere la piattaforma più intuitiva e accessibile, ottimizzando il flusso di acquisto biglietti.',
    processSteps: [
      { number: 1, title: 'Analisi UX', description: 'Analisi dei flussi esistenti e raccolta feedback utenti.' },
      { number: 2, title: 'Wireframing', description: 'Progettazione wireframe e prototipi.' },
      { number: 3, title: 'Test', description: 'Test di usabilità e iterazione.' },
      { number: 4, title: 'UI Design', description: 'Design finale e handoff.' },
    ],
    projectImages: [
      'assets/img/ticketone/project1.png',
      'assets/img/ticketone/project2.png',
      'assets/img/ticketone/project3.png',
    ],
    results: [
      'Riduzione del tempo di acquisto del 30%.',
      'Aumento del punteggio di accessibilità a 98/100.',
      'Feedback positivi dagli utenti.'
    ],
    resultsImage: 'assets/img/ticketone/result.png',
    downloadUrl: 'assets/documents/progetto-grafica.pdf',
    timeRange: 'Set 2025 — Ott 2025',
  },
  ivegan: {
    projectTitle: 'iVegan redesign',
    projectTags: ['Figma', 'Wave', 'Maze'],
    meta: [
      { label: 'Durata', value: '1 mese' },
      { label: 'Ruolo', value: 'UX/UI Designer' },
      { label: 'Cliente', value: 'iVegan' },
      { label: 'Anno', value: '2025' },
    ],
    overviewText: 'Restyling del sito e-commerce iVegan per aumentare conversioni e usabilità.',
    overviewImage: 'assets/img/copertina-discovery.png',
    challengeText: 'Semplificare la navigazione e migliorare la presentazione dei prodotti.',
    processSteps: [
      { number: 1, title: 'Ricerca utenti', description: 'Interviste e analisi comportamentale.' },
      { number: 2, title: 'Prototipazione', description: 'Creazione di prototipi e test A/B.' },
      { number: 3, title: 'UI Design', description: 'Aggiornamento visual e branding.' },
    ],
    projectImages: [
      'assets/img/ivegan/project1.png',
      'assets/img/ivegan/project2.png',
      'assets/img/ivegan/project3.png',
    ],
    results: [
      'Aumento conversioni del 22%.',
      'Riduzione bounce rate del 15%.',
      'Migliore percezione del brand.'
    ],
    resultsImage: 'assets/img/ivegan/result.png',
    downloadUrl: 'assets/documents/progetto-discovery.pdf',
    timeRange: 'Ago 2025 — Set 2025',
  },
  orizon: {
    projectTitle: 'Orizion Brand Identity',
    projectTags: ['Illustrator', 'Photoshop'],
    meta: [
      { label: 'Durata', value: '1 mese' },
      { label: 'Ruolo', value: 'Brand Designer' },
      { label: 'Cliente', value: 'Orizion' },
      { label: 'Anno', value: '2024' },
    ],
    overviewText: 'Creazione della nuova brand identity per Orizion, con focus su logo, palette e materiali coordinati.',
    overviewImage: 'assets/img/copertina-accessibilità.png',
    challengeText: 'Definire un’identità visiva distintiva e versatile per diversi canali.',
    processSteps: [
      { number: 1, title: 'Analisi', description: 'Studio del mercato e dei competitor.' },
      { number: 2, title: 'Concept', description: 'Sviluppo concept e moodboard.' },
      { number: 3, title: 'Design', description: 'Realizzazione logo e materiali.' },
    ],
    projectImages: [
      'assets/img/orizon/project1.png',
      'assets/img/orizon/project2.png',
      'assets/img/orizon/project3.png',
    ],
    results: [
      'Brand identity riconoscibile.',
      'Materiali coordinati per stampa e digital.',
      'Cliente soddisfatto.'
    ],
    resultsImage: 'assets/img/orizon/result.png',
    downloadUrl: 'assets/documents/progetto-grafica.pdf',
    timeRange: 'Nov 2024 — Dic 2024',
  },
};
