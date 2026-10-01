/* Edit company information here. Companies without confirmed information keep explicit placeholders. */
const exitCompanies = new Set(["Zoop", "Bind", "Arcus", "Codiga"]);

const companyDetails = {
  "Zoop": {
    founders: ["Fabiano Cruz, Rodrigo Miranda"],
    investmentDate: "April 2016",
    description: "Payment service provider (PSP) offering an end-to-end payments platform, combining payment processing and settlement software with proprietary Chip&PIN/EMV-certified POS terminals, letting banks, marketplaces, and merchants of any size accept and manage payments without relying on multiple intermediaries."
  },
  "Bind": {
    founders: ["Alejandro Bonilla, Santiago Alvarado"],
    investmentDate: "October 2017",
    description: "Cloud-based ERP built for small and medium-sized businesses in Mexico, centralizing accounting, invoicing, inventory, and sales management on a single platform."
  },
  "Arcus": {
    founders: ["Edrizio de la Cruz, Iñigo Rumayor, Hesham El-Nahhas"],
    investmentDate: "October 2017",
    description: "Payments and banking connectivity infrastructure (open banking/payments API) for Mexico, enabling fintechs and companies to move money and integrate with local banks."
  },
  "Comtrade": {
    founders: ["Luis Gerardo Díaz Infante", "Israel Félix"],
    investmentDate: "July 2023",
    website: "https://comtrade.global/",
    description: "B2B SaaS platform that automates foreign trade audits and simplifies supply chain management, giving importers and exporters a single tool for compliance, financing, insurance, and inspections."
  },
  "Konvex": {
    founders: ["Joan Rodríguez", "Carlos Cuéllar", "Cristóbal Sosa"],
    investmentDate: "September 2023",
    website: "https://www.getkonvex.com/",
    description: "AI-powered reconciliation and underwriting software that integrates with ERPs, e-commerce platforms, and payment gateways to automate financial reconciliation for businesses."
  },
  "Bridgefy": {
    founders: ["Jorge Ríos", "Roberto Betancourt", "Diego García"],
    investmentDate: "November 2016",
    website: "https://bridgefy.me/",
    description: "Mesh-networking technology that lets mobile apps function without an internet connection, using Bluetooth to relay messages between nearby devices in disasters, protests, or dead zones."
  },

 "Ualabee": {
  founders: ["Joaquín Di Mario", "Franco Rapetti", "Alexis Picón"],
  investmentDate: "December 2024",
  website: "https://ualabee.com/",
  description: "SaaS mobility platform that integrates transit and transportation data to deliver real-time insights for cities and companies. Deployed across 20 cities in Latin America with 600+ agencies integrated, Ualabee provides mobility data to clients including Google Maps, Apple, and Waze."
},

"Paybook": {
  founders: ["Gerardo Treviño"],
  investmentDate: "September 2015",
  website: "https://www.paybook.com/",
  description: "Open finance platform that aggregates and standardizes banking and accounting data, allowing businesses to build financial products and automate processes using their customers' financial information."
},

  "Balcony": {
    founders: ["David Hammel"],
    investmentDate: "December 2016",
    website: "https://www.balcony.io/",
    description: "Geo-communication platform that helps governments, enterprises, and NGOs coordinate teams and respond to emergencies with real-time, location-based situational awareness."
  },

  "Trato": {
    founders: ["Ignacio Bermeo"],
    investmentDate: "August 2017",
    website: "https://trato.io/",
    description: "Contract lifecycle management platform that simplifies and automates legal contract workflows, using blockchain to streamline how businesses draft, execute, and manage agreements."
  },
  "Apparta": {
    founders: ["Henry Sánchez", "Gonzalo Forero"],
    investmentDate: "July 2022",
    website: "https://www.apparta.co/",
    description: "Restaurant marketplace that fills empty tables during off-peak hours by offering diners discounted reservations, helping restaurants boost occupancy and revenue."
  },
  "Saldo": {
    founders: ["Marco Neri"],
    investmentDate: "April 2016",
    website: "https://www.saldo.mx/",
    description: "Mobile app that lets people in the U.S. pay bills and top up mobile phones on behalf of family and friends in Mexico directly from their smartphone."
  },
  "EdMachina": {
    founders: ["Yamil Rabbat"],
    investmentDate: "July 2023",
    website: "https://edmachina.com/",
    description: "AI-driven analytics platform for higher education institutions that predicts student dropout and course-failure risk and automates personalized retention outreach."
  },
  "Ruedata": {
    founders: ["Sebastián Baquero", "Jorge Quinche"],
    investmentDate: "December 2022",
    website: "https://ruedata.ai/",
    description: "SaaS platform that uses data analytics to help transport fleets monitor tire health, cut tire-related costs, and reduce accidents caused by tire failure."
  },
  "Carryt": {
    founders: ["Daniel Cuervo"],
    investmentDate: "December 2021",
    website: "https://carryt.co/",
    description: "Last-mile logistics platform that uses AI-driven routing and a network of micro-warehouses to help consumer goods, e-commerce, and retail companies deliver faster and more efficiently."
  },
  "Ezcale": {
    founders: ["Pedro Monteiro", "Rodrigo Miranda"],
    investmentDate: "May 2023",
    website: "https://ezcale.com/",
    description: "Payment orchestration infrastructure that handles automated multi-party splits, reconciliation, and dynamic pricing, giving marketplaces and fintechs the backbone to process complex payment flows reliably."
  },
  "BeatPulse": {
    founders: ["Jason Rieff", "Nikolay Vitanov"],
    investmentDate: "July 2025",
    website: "https://www.beatpulselabs.com/",
    description: "Provides licensed, expertly annotated music and multimedia datasets that give AI labs the high-fidelity training data needed to build generative music and multimodal models."
  },
  "Talently": {
    founders: ["Doménica Obando", "Roxana Kern", "Cristian Vega"],
    investmentDate: "July 2021",
    website: "https://talently.tech/",
    description: "EdTech platform that trains Latin American tech professionals and places them in international remote jobs, helping them significantly increase their earnings."
  },
  "Axify": {
    founders: ["Rodolfo Valdés", "Sofía Robles Santamarina"],
    investmentDate: "March 2023",
    website: "https://www.axify.shop/",
    description: "Save-now, buy-later fintech that lets consumers reserve products or services and pay for them gradually before taking possession, giving budget-conscious shoppers a debt-free way to access retail purchases."
  },
  "Two to Tango": {
    founders: ["Andrés Rico"],
    investmentDate: "April 2023",
    website: "https://www.twototango.co/",
    description: "Business matchmaking platform that automatically creates and nurtures meaningful professional connections between attendees before, during, and after events."
  },
  "Rally": {
    founders: ["Numaan Akram"],
    investmentDate: "April 2019",
    website: "https://rally.co/",
    description: "Technology marketplace that modernizes the charter bus industry, using AI to create new intercity routes and connect riders with bus operators for events and regional travel."
  },
  "LinkToAny": {
    founders: ["Sriram Subramanian"],
    investmentDate: "October 2020",
    website: "https://linktoany.com/",
    description: "Integration Platform as a Service (iPaaS) that connects apps and automates operational data flows for retail, food, and hospitality businesses, eliminating manual data entry between systems."
  },
  "Flexza": {
    founders: ["Santiago Ocejo", "Diego Villarreal"],
    investmentDate: "June 2024",
    website: "https://flexza.com/",
    description: "Flexible health benefits fintech that gives employees a card to cover medical expenses, letting employers offer a modern, tax-efficient health benefit without administrative overhead."
  },
  "Codiga": {
    founders: ["Julien Delange"],
    investmentDate: "September 2021",
    description: "Real-time code review that surfaces best-practice issues as developers write code and auto-suggests fixes, cutting code review time and helping teams reduce technical debt without hiring more engineers."
  },
  "Pantera": {
    founders: ["Hernan Rodriguez", "Juan Pablo Aguirre"],
    investmentDate: "September 2025",
    website: "https://www.getpantera.com/",
    description: "Agile AI automation platform that turns screen recordings or PDFs of a manual process into deployed AI agents within minutes, letting retail, legal/fintech, and back-office teams automate workflows without engineering resources, and adapting in real time as underlying UIs change."
  }
};

const portfolioCompanies = [
  ["Konvex", "konvex_logo.png"],
  ["Bridgefy", "bridgefy_logo.png"],
  ["Ualabee", "ualabee_logo.png"],
  ["Paybook", "paybook_logo.png"],
  ["Zoop", "zoop_logo.png"],
  ["Balcony", "balcony_logo.png"],
  ["Trato", "trato_logo.png"],
  ["Apparta", "apparta_logo.png"],
  ["Saldo", "saldo_logo.png"],
  ["Bind", "bind_logo.png"],
  ["EdMachina", "edmachina_logo.png"],
  ["Ruedata", "ruedata_logo.png"],
  ["Carryt", "carryt_logo.png"],
  ["Ezcale", "ezcale_logo.png"],
  ["Arcus", "arcus_logo.png"],
  ["Codiga", "codiga_logo.png"],
  ["BeatPulse", "beatpulse_logo.png"],
  ["Pantera", "pantera_logo.png"],
  ["Talently", "talently_logo.png"],
  ["Axify", "axify_logo.png"],
  ["Two to Tango", "twototango_logo.png"],
  ["Rally", "rallybus_logo.png"],
  ["LinkToAny", "linktoany_logo.png"],
  ["Comtrade", "auditate_logo.png"],
  ["Flexza", "flexza_logo.png"]
].map(([name, file]) => {
  const details = companyDetails[name] ?? {};

  return {
    name,
    logo: `assets/logos/logos_finales/${file}`,
    modalLogo: `assets/logos/logos_finales/${file}`,
    exited: exitCompanies.has(name),
    founders: (details.founders ?? ["TBD"]).map(founderName => ({
      name: founderName,
      photo: null
    })),
    investmentDate: details.investmentDate ?? "TBD",
    description: details.description ?? "Add company description",
    website: details.website ?? null,
    linkedin: null
  };
});


const teamMembers = [
  {
    name: "Lorenzo Garza",
    role: "Co-founder & Partner",
    photo: "assets/images/lorenzo_garza.png",
    linkedin: "https://www.linkedin.com/in/lorenzo-garza-8140764"
  },
  {
    name: "Rodrigo Ocejo",
    role: "Co-founder & Partner",
    photo: "assets/images/rodrigo_ocejo.png",
    linkedin: "https://www.linkedin.com/in/rodrigoocejo"
  },
  {
    name: "Miguel Bernard",
    role: "Associate",
    photo: "assets/images/miguel_bernard.png",
    linkedin: "https://www.linkedin.com/in/miguel-bernard-6a0407"
  },
  {
    name: "Wilber Palenque",
    role: "Principal",
    photo: "assets/images/wilber_palenque.jpeg",
    linkedin: "https://www.linkedin.com/in/wilber-palenque"
  },
  {
    name: "Antonio Arizmendi",
    role: "Analyst",
    photo: "assets/images/antonio_arizmendi.jpg",
    linkedin: "https://www.linkedin.com/in/antonioarizmendi"
  }
];

const portfolioGrid = document.querySelector("#portfolio-grid");
const exitsGrid = document.querySelector("#exits-grid");

const renderCompanies = (companies, container) => {
  companies.forEach((company) => {
    const button = document.createElement("button");
    const originalIndex = portfolioCompanies.findIndex(item => item.name === company.name);

    button.className = "company-card reveal";
    if (company.exited) button.classList.add("exit-card");

    button.type = "button";
    button.dataset.companyIndex = originalIndex;
    button.setAttribute("aria-label", `View ${company.name} investment details`);
 button.innerHTML = `
  <img
    src="${company.logo}"
    alt="${company.name} logo"
    loading="lazy"
  >
`;

    container.append(button);
  });
};

renderCompanies(portfolioCompanies.filter(company => !company.exited), portfolioGrid);
renderCompanies(portfolioCompanies.filter(company => company.exited), exitsGrid);

const teamGrid = document.querySelector("#team-grid");
teamMembers.forEach(member => { const article = document.createElement("article"); article.className = "team-card reveal"; article.innerHTML = `<img src="${member.photo}" alt="Portrait of ${member.name}" loading="lazy"><div class="team-info"><h3>${member.name}</h3><p>${member.role}</p>${member.linkedin ? `<a href="${member.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>` : ""}</div>`; teamGrid.append(article) });

const modal = document.querySelector("#company-modal"), modalPanel = modal.querySelector(".modal-panel"), modalContent = document.querySelector("#modal-content"); let lastFocused = null;
const openModal = company => { lastFocused = document.activeElement; const founderNames = company.founders.map(f => f.name).join(", "); modalContent.innerHTML = `<div class="modal-company"><div><div class="modal-logo-wrap"><img
  src="${company.modalLogo}"
  alt="${company.name} logo"
  data-company="${company.name}"
></div></div><div><p class="modal-meta">Portfolio company</p><h3 id="modal-title">${company.name}</h3><p class="modal-description ${company.description.startsWith("Add") ? "placeholder" : ""}">${company.description}</p><dl class="modal-fields"><div><dt>Founder${company.founders.length > 1 ? "s" : ""}</dt><dd class="${founderNames === "TBD" ? "placeholder" : ""}">${founderNames}</dd></div><div><dt>Investment date</dt><dd class="${company.investmentDate === "TBD" ? "placeholder" : ""}">${company.investmentDate}</dd></div>${company.website ? `<div><dt>Website</dt><dd><a href="${company.website}" target="_blank" rel="noopener">Visit website ↗</a></dd></div>` : ""}${company.linkedin ? `<div><dt>LinkedIn</dt><dd><a href="${company.linkedin}" target="_blank" rel="noopener">View profile ↗</a></dd></div>` : ""}</dl></div></div>`; modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false"); document.body.classList.add("modal-open"); modalPanel.focus() };
const closeModal = () => { modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true"); document.body.classList.remove("modal-open"); lastFocused?.focus() };
const handleCompanyClick = event => {
  const card = event.target.closest(".company-card");
  if (!card) return;
  openModal(portfolioCompanies[Number(card.dataset.companyIndex)]);
};

portfolioGrid.addEventListener("click", handleCompanyClick);
exitsGrid.addEventListener("click", handleCompanyClick);
modal.addEventListener("click", event => { if (event.target.closest("[data-close-modal]")) closeModal() });
document.addEventListener("keydown", event => { if (!modal.classList.contains("is-open")) return; if (event.key === "Escape") closeModal(); if (event.key === "Tab") { const focusable = [...modal.querySelectorAll("button,a[href]")]; const first = focusable[0], last = focusable.at(-1); if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() } } });

const header = document.querySelector("#site-header"), menuButton = document.querySelector(".menu-toggle"), navLinks = document.querySelector("#nav-links"), brandLogo = document.querySelector("#brand-logo");

const updateBrandLogo = () => {
  const useOriginalLogo = header.classList.contains("scrolled") || header.classList.contains("menu-open");
  const nextLogo = useOriginalLogo
    ? "assets/logos/avalancha_logo.png"
    : "assets/logos/avalancha_w.png";

  if (brandLogo.getAttribute("src") !== nextLogo) {
    brandLogo.setAttribute("src", nextLogo);
  }

  brandLogo.style.filter = "none";
};

const setMenu = open => {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.querySelector(".sr-only").textContent = open ? "Close menu" : "Open menu";
  navLinks.classList.toggle("open", open);
  header.classList.toggle("menu-open", open);
  updateBrandLogo();
};

menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
navLinks.addEventListener("click", event => { if (event.target.matches("a")) setMenu(false) });

const onScroll = () => {
  header.classList.toggle("scrolled", scrollY > 30);
  updateBrandLogo();

  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.style.setProperty("--parallax", `${Math.min(scrollY * .08, 45)}px`);
  }
};

addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Letter-by-letter animation for the hero statement
const animatedHeroTexts = document.querySelectorAll("[data-animate-text]");

let heroCharacterIndex = 0;

animatedHeroTexts.forEach((element) => {
    const text = element.textContent.trim();

    element.textContent = "";
    element.setAttribute("aria-hidden", "true");

    [...text].forEach((character) => {
        const span = document.createElement("span");

        span.className = "hero-char";
        span.style.setProperty(
            "--char-index",
            heroCharacterIndex
        );

        span.innerHTML =
            character === " "
                ? "&nbsp;"
                : character;

        element.appendChild(span);

        heroCharacterIndex += 1;
    });

    // Small additional pause between phrases
    heroCharacterIndex += 3;
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target) } }), { threshold: .12, rootMargin: "0px 0px -30px" }); document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelectorAll("[data-application-link],[data-privacy-link]").forEach(link => link.addEventListener("click", event => event.preventDefault()));

// ========================================
// SCROLL WRITING ANIMATION
// ========================================

(() => {
    const targets = [
    document.querySelector("#thesis-title"),
    document.querySelector("#team-title")
].filter(Boolean);

    const wrapDirectTextNodes = (element) => {
        let localIndex = 0;

        [...element.childNodes].forEach((node) => {
            if (node.nodeType !== Node.TEXT_NODE) return;

            const text = node.textContent.replace(/\s+/g, " ").trim();

            if (!text) {
                node.remove();
                return;
            }

            const fragment = document.createDocumentFragment();

            [...text].forEach((character) => {
                const span = document.createElement("span");

                span.className = "write-char";
                span.style.setProperty("--write-index", localIndex);

                span.textContent =
                    character === " " ? "\u00A0" : character;

                fragment.appendChild(span);

                localIndex += 1;
            });

            node.replaceWith(fragment);
        });

        element.classList.add("write-on-scroll");
    };

    targets.forEach(wrapDirectTextNodes);

    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {
        targets.forEach((target) => {
            target.classList.add("is-written");
        });

        return;
    }

    const writingObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-written");

                writingObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.35,
            rootMargin: "0px 0px -10% 0px"
        }
    );

    targets.forEach((target) => {
        writingObserver.observe(target);
    });
})();

// ========================================
// START YOUR JOURNEY — writing animation
// ========================================

const journeyLink = document.querySelector(".journey a");

if (journeyLink) {
    const arrow = journeyLink.querySelector("span");

    const journeyText = document.createElement("span");
    journeyText.className = "journey-write-text write-on-scroll";

    const text = "Start your journey";

    [...text].forEach((character, index) => {
        const span = document.createElement("span");

        span.className = "write-char";
        span.style.setProperty("--write-index", index);
        span.textContent = character === " " ? "\u00A0" : character;

        journeyText.appendChild(span);
    });

    journeyLink.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            node.remove();
        }
    });

    journeyLink.insertBefore(journeyText, arrow);

    const journeyObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                journeyText.classList.add("is-written");
                journeyObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.35
        }
    );

    journeyObserver.observe(journeyLink);
}