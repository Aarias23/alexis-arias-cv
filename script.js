const root = document.documentElement;
const printButton = document.querySelector("#printCv");
const fontSize = document.querySelector("#fontSize");
const fontSizeLabel = document.querySelector("#fontSizeLabel");
const languageToggle = document.querySelector("#languageToggle");
const themeButtons = document.querySelectorAll("[data-theme-option]");
let currentLanguage = "es";

const content = {
  es: {
    pageTitle: "CV - Alexis Antonio Arias Castro",
    languageToggle: "English Version",
    printButton: "Imprimir CV",
    themeLabels: ["Claro", "Oscuro", "Teal"],
    fontSizeLabel: "Tamaño",
    role: "Docente | Innovación educativa | Competencias digitales",
    contact: [
      "Santo Domingo, Rep. Dom.",
      "Teléfono: 809-520-4515",
      "Email: aarias4ver@gmail.com",
    ],
    sections: [
      "Perfil",
      "Habilidades",
      "Idiomas",
      "Competencias",
      "Herramientas digitales",
      "Competencias personales",
      "Experiencia Profesional",
      "Educación",
      "Certificaciones",
      "Proyectos y Publicaciones",
    ],
    profile:
      "Docente universitario y del Ministerio de Educación de la República Dominicana (MINERD), dedicado a la enseñanza desde 2016. Profesional con formación en derecho, docencia virtual, innovación pedagógica y competencias digitales, con alta capacidad de aprendizaje autónomo, adaptación a nuevas herramientas y compromiso con experiencias educativas claras, inclusivas y orientadas al desarrollo integral del estudiante.",
    skillMeters: [
      "Docencia virtual",
      "Innovación educativa",
      "Competencias digitales",
      "Herramientas tecnológicas",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    languages: ["Español: nativo", "Inglés: Adult Advanced English Courses"],
    competencies: [
      "Planificación didáctica",
      "Gestión de aulas virtuales",
      "Evaluación de aprendizajes",
      "Diseño de recursos educativos",
      "Comunicación efectiva",
    ],
    digitalTools: [
      "Blackboard",
      "Microsoft Teams",
      "Class (Virtual Classroom)",
      "Google Classroom",
      "Google Sites",
      "Recursos multimedia",
      "Canva",
    ],
    personalCompetencies: [
      "Comunicación asertiva",
      "Liderazgo pedagógico",
      "Empatía",
      "Adaptabilidad",
      "Aprendizaje autónomo",
      "Resolución de problemas",
      "Trabajo colaborativo",
      "Responsabilidad",
    ],
    experience: [
      {
        meta: "2016 - Actualidad",
        title: "Docente de la Escuela de Idiomas y Ciclo Común",
        org: "Universidad del Caribe",
        body:
          "Docencia en programas académicos de la institución, acompañamiento de procesos de enseñanza-aprendizaje, orientación a estudiantes universitarios y fortalecimiento de competencias académicas y profesionales.",
      },
      {
        meta: "2015 - Actualidad",
        title: "Docente Técnico Profesional · MINERD",
        org: "Instituto Politécnico Salesiano Padre Bartolomé Vegh",
        body:
          "Formación técnico profesional con enfoque práctico, disciplina académica y acompañamiento continuo, integrando recursos pedagógicos y tecnológicos para favorecer el aprendizaje y la preparación laboral de los estudiantes.",
      },
    ],
    education: [
      {
        meta: "2010",
        title: "Licenciado en Derecho",
        body: "Universidad del Caribe.",
      },
      {
        meta: "2014",
        title: "Certificación en Habilitación Docente",
        body: "Universidad del Caribe. Duración: 306 horas.",
      },
      {
        meta: "Docencia virtual",
        title: "Certificación en Docencia Virtual",
        body: "Universidad Benito Juárez.",
      },
      {
        meta: "Inglés",
        title: "Adult Advanced English Courses",
        body: "Instituto Cultural Dominico Americano.",
      },
    ],
    certs: [
      ["Título Universitario", "Licenciado en Derecho, Universidad del Caribe"],
      ["Certificación en Habilitación Docente", "Universidad del Caribe, 306 horas, 2014"],
      ["Adult Advanced English Courses", "Instituto Cultural Dominico Americano"],
      ["Certificación en Docencia Virtual", "Universidad Benito Juárez"],
      ["Diplomado Docente Virtual", "MESCYT, FLEI y Blackboard, 80 horas, 2022"],
      ["Competencias Digitales e Innovación Docente", "104 horas, 2024"],
      ["Excelencia en Enseñanza y Aprendizaje Digital", "Certificado disponible"],
      ["Nuevas prácticas en Docencia Virtual", "Taller, 9 horas"],
      ["Dispositivos Tecnológicos en el Aula", "Utilidad pedagógica"],
      ["Habilidades Docentes", "Coursera"],
    ],
    projectTitle: "Espacio para proyecto educativo destacado",
    projectBody:
      "Pendiente de completar con nombre del proyecto, objetivo, tecnologías usadas, población impactada y resultado.",
    printProject:
      "Proyecto destacado pendiente de completar con objetivo, alcance y resultados.",
    footer: [
      "Referencias disponibles a solicitud.",
      "CV preparado para pantalla e impresión a color.",
    ],
  },
  en: {
    pageTitle: "CV - Alexis Antonio Arias Castro",
    languageToggle: "Versión en español",
    printButton: "Print CV",
    themeLabels: ["Light", "Dark", "Teal"],
    fontSizeLabel: "Size",
    role: "University Instructor | Educational Innovation | Digital Competencies",
    contact: [
      "Santo Domingo, Dominican Republic",
      "Phone: 809-520-4515",
      "Email: aarias4ver@gmail.com",
    ],
    sections: [
      "Profile",
      "Skills",
      "Languages",
      "Competencies",
      "Digital Tools",
      "Personal Competencies",
      "Professional Experience",
      "Education",
      "Certifications",
      "Projects and Publications",
    ],
    profile:
      "University instructor and teacher with the Ministry of Education of the Dominican Republic (MINERD), dedicated to education since 2016. Professional with a background in law, virtual teaching, pedagogical innovation, and digital competencies, with strong self-directed learning skills, adaptability to new tools, and a commitment to clear, inclusive educational experiences focused on students' holistic development.",
    skillMeters: [
      "Virtual teaching",
      "Educational innovation",
      "Digital competencies",
      "Technological tools",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    languages: ["Spanish: native", "English: Adult Advanced English course"],
    competencies: [
      "Lesson planning",
      "Virtual classroom management",
      "Learning assessment",
      "Educational resource design",
      "Effective communication",
    ],
    digitalTools: [
      "Blackboard",
      "Microsoft Teams",
      "Class (Virtual Classroom)",
      "Google Classroom",
      "Google Sites",
      "Multimedia resources",
      "Canva",
    ],
    personalCompetencies: [
      "Assertive communication",
      "Pedagogical leadership",
      "Empathy",
      "Adaptability",
      "Self-directed learning",
      "Problem solving",
      "Collaborative work",
      "Responsibility",
    ],
    experience: [
      {
        meta: "2016 - Present",
        title: "Instructor, School of Languages and General Education",
        org: "Universidad del Caribe",
        body:
          "Teaching in academic programs, supporting teaching and learning processes, advising university students, and strengthening academic and professional competencies.",
      },
      {
        meta: "2015 - Present",
        title: "Technical and Vocational Education Teacher · MINERD",
        org: "Instituto Politécnico Salesiano Padre Bartolomé Vegh",
        body:
          "Technical and vocational education with a practical approach, academic discipline, and continuous student support, integrating pedagogical and technological resources to strengthen learning and workforce readiness.",
      },
    ],
    education: [
      {
        meta: "2010",
        title: "Bachelor's Degree in Law",
        body: "Universidad del Caribe.",
      },
      {
        meta: "2014",
        title: "Teacher Qualification Certification",
        body: "Universidad del Caribe. Duration: 306 hours.",
      },
      {
        meta: "Virtual teaching",
        title: "Virtual Teaching Certification",
        body: "Universidad Benito Juárez.",
      },
      {
        meta: "English",
        title: "Adult Advanced English Courses",
        body: "Instituto Cultural Dominico Americano.",
      },
    ],
    certs: [
      ["University Degree", "Bachelor's Degree in Law, Universidad del Caribe"],
      ["Teacher Qualification Certification", "Universidad del Caribe, 306 hours, 2014"],
      ["Adult Advanced English Courses", "Instituto Cultural Dominico Americano"],
      ["Virtual Teaching Certification", "Universidad Benito Juárez"],
      ["Virtual Teaching Diploma", "MESCYT, FLEI and Blackboard, 80 hours, 2022"],
      ["Digital Competencies and Teaching Innovation", "104 hours, 2024"],
      ["Excellence in Digital Teaching and Learning", "Certificate available"],
      ["New Practices in Virtual Teaching", "Workshop, 9 hours"],
      ["Technological Devices in the Classroom", "Pedagogical use"],
      ["Teaching Skills", "Coursera"],
    ],
    projectTitle: "Space for a featured educational project",
    projectBody:
      "Pending completion with project name, objective, technologies used, impacted population, and outcome.",
    printProject:
      "Featured project pending completion with objective, scope, and results.",
    footer: [
      "References available upon request.",
      "CV prepared for screen and full-color printing.",
    ],
  },
};

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function setList(selector, items) {
  document.querySelectorAll(selector).forEach((item, index) => {
    if (items[index]) item.textContent = items[index];
  });
}

function applyLanguage(language) {
  const copy = content[language];
  currentLanguage = language;
  root.lang = language;
  document.title = copy.pageTitle;

  setText("#languageToggle", copy.languageToggle);
  setText("#printCv", copy.printButton);
  setText("#fontSizeLabel", copy.fontSizeLabel);
  setText(".role", copy.role);
  setList("[data-theme-option]", copy.themeLabels);
  setList(".contact-list span", copy.contact);
  setList(".cv-section h2", copy.sections);
  setText(".sidebar .cv-section:first-child p", copy.profile);
  setList(".skill-meter span", copy.skillMeters);
  setList(".sidebar .cv-section:nth-of-type(3) li", copy.languages);
  setList(".sidebar .cv-section:nth-of-type(4) li", copy.competencies);
  setList(".sidebar .cv-section:nth-of-type(5) li", copy.digitalTools);
  setList(".sidebar .cv-section:nth-of-type(6) li", copy.personalCompetencies);

  document.querySelectorAll(".main-column .cv-section:nth-of-type(1) .timeline-item").forEach((item, index) => {
    const entry = copy.experience[index];
    if (!entry) return;
    item.querySelector(".item-meta").textContent = entry.meta;
    item.querySelector("h3").textContent = entry.title;
    item.querySelector("strong").textContent = entry.org;
    item.querySelectorAll("p")[1].textContent = entry.body;
  });

  document.querySelectorAll(".main-column .cv-section:nth-of-type(2) .timeline-item").forEach((item, index) => {
    const entry = copy.education[index];
    if (!entry) return;
    item.querySelector(".item-meta").textContent = entry.meta;
    item.querySelector("h3").textContent = entry.title;
    item.querySelector("p").textContent = entry.body;
  });

  document.querySelectorAll(".cert-card").forEach((card, index) => {
    const cert = copy.certs[index];
    if (!cert) return;
    card.querySelector("strong").textContent = cert[0];
    card.querySelector("span").textContent = cert[1];
  });

  setText(".accordion-button", copy.projectTitle);
  setText(".accordion-body", copy.projectBody);
  setText(".print-only", copy.printProject);
  setList(".cv-footer span", copy.footer);
}

document.querySelectorAll(".skill-meter").forEach((meter) => {
  meter.style.setProperty("--level", meter.dataset.level || "80");
});

printButton?.addEventListener("click", () => {
  window.print();
});

fontSize?.addEventListener("input", (event) => {
  root.style.setProperty("--font-scale", `${event.target.value}%`);
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.dataset.themeOption;
    root.dataset.theme = theme;

    themeButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });
  });
});

languageToggle?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "es" ? "en" : "es");
});
