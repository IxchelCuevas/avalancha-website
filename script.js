/* Edit company information here. Unknown facts remain explicit placeholders. */

const LOGO_BASE_PATH = "assets/logos/logos_finales";
const exitCompanies = new Set(["Zoop", "Bind", "Arcus"]);
const portfolioCompanies = [
  ["Bayonet", "bayonet_logo.png"],
  ["Konvex", "konvex_logo.png"],
  ["Bridgefy", "bridgefy_logo.png"],
  ["Ualabee", "ualabee_logo.png"],
  ["Paybook", "paybook_logo.png"],
  ["Zoop", "zoop_logo.png"],
  ["Balcony", "balcony_logo.png"],
  ["Trato", "trato_logo.png"],
  ["Apparta", "apparta_logo.png"],
  ["Saldo", "saldo_logo.png"],
  ["TopicFlower", "topicflower_logo.png"],
  ["Bind", "bind_logo.png"],
  ["Hitsbook", "hitsbook_logo.png"],
  ["EdMachina", "edmachina_logo.png"],
  ["Ruedata", "ruedata_logo.png"],
  ["Carryt", "carryt_logo.png"],
  ["Ezcale", "ezcale_logo.png"],
  ["Arcus", "arcus_logo.png"],
  ["Chargy", "chargy_logo.png"],
  ["BeatPulse", "beatpulse_logo.png"],
  ["Talently", "talently_logo.png"],
  ["Axify", "axify_logo.png"],
  ["Two to Tango", "twototango_logo.png"],
  ["Rally", "rallybus_logo.png"],
  ["LinkToAny", "linktoany_logo.png"],
  ["Auditate", "auditate_logo.png"],
  ["Flexza", "flexza_logo.png"]
].map(([name, file]) => ({
  name,
  logo: `${LOGO_BASE_PATH}/${file}`,
  exited: exitCompanies.has(name),
  founders: [{ name: "TBD", photo: null }],
  investmentDate: "TBD",
  description: "Add company description",
  website: null,
  linkedin: null
}));

const teamMembers = [
  {
    name: "Lorenzo Garza",
    role: "Co-founder & Partner",
    photo: "assets/images/lorenzo_garza.png",
    linkedin: null
  },
  {
    name: "Rodrigo Ocejo",
    role: "Co-founder & Partner",
    photo: "assets/images/rodrigo_ocejo.png",
    linkedin: null
  },
  {
    name: "Miguel Bernard",
    role: "Associate",
    photo: "assets/images/miguel_bernard.png",
    linkedin: null
  },
  {
    name: "Wilber Palenque",
    role: "Principal",
    photo: "assets/images/wilber_palenque.png",
    linkedin: null
  },
  {
    name: "Antonio Arizmendi",
    role: "Analyst",
    photo: "assets/images/antonio_arizmendi.jpg",
    linkedin: null
  }
];

/* Portfolio */
const portfolioGrid = document.querySelector("#portfolio-grid");
const exitsGrid = document.querySelector("#exits-grid");

const createCompanyCard = (company, originalIndex) => {
  const button = document.createElement("button");

  button.className = "company-card reveal";
  button.type = "button";
  button.dataset.companyIndex = String(originalIndex);
  button.setAttribute(
    "aria-label",
    `View ${company.name} investment details`
  );

  if (company.exited) {
    button.classList.add("exit-card");
  }

  button.innerHTML = `
    <img
      src="${company.logo}"
      alt="${company.name} logo"
      loading="lazy"
      data-logo-file="${company.logo}">
  `;

  const image = button.querySelector("img");

  image.addEventListener("error", () => {
    console.error(
      `Logo not found: ${image.dataset.logoFile}. ` +
      "Confirm that the PNG exists directly inside assets/logos/logos_finales."
    );
  });

  return button;
};

const renderCompanies = (companies, container) => {
  companies.forEach((company) => {
    const originalIndex = portfolioCompanies.indexOf(company);
    container.append(createCompanyCard(company, originalIndex));
  });
};

/* Exits appear before the current portfolio in the HTML. */
renderCompanies(
  portfolioCompanies.filter((company) => company.exited),
  exitsGrid
);

renderCompanies(
  portfolioCompanies.filter((company) => !company.exited),
  portfolioGrid
);

/* Team */
const teamGrid = document.querySelector("#team-grid");

teamMembers.forEach((member) => {
  const article = document.createElement("article");

  article.className = "team-card reveal";
  article.innerHTML = `
    <img
      src="${member.photo}"
      alt="Portrait of ${member.name}"
      loading="lazy">
    <div class="team-info">
      <h3>${member.name}</h3>
      <p>${member.role}</p>
      ${
        member.linkedin
          ? `<a href="${member.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>`
          : ""
      }
    </div>
  `;

  teamGrid.append(article);
});

/* Company modal */
const modal = document.querySelector("#company-modal");
const modalPanel = modal.querySelector(".modal-panel");
const modalContent = document.querySelector("#modal-content");
let lastFocused = null;

const openModal = (company) => {
  lastFocused = document.activeElement;

  const founderNames = company.founders
    .map((founder) => founder.name)
    .join(", ");

  modalContent.innerHTML = `
    <div class="modal-company">
      <div>
        <div class="modal-logo-wrap">
          <img src="${company.logo}" alt="${company.name} logo">
        </div>
      </div>

      <div>
        <p class="modal-meta">
          ${company.exited ? "Exited company" : "Portfolio company"}
        </p>

        <h3 id="modal-title">${company.name}</h3>

        <p class="modal-description ${
          company.description.startsWith("Add") ? "placeholder" : ""
        }">
          ${company.description}
        </p>

        <dl class="modal-fields">
          <div>
            <dt>Founder${company.founders.length > 1 ? "s" : ""}</dt>
            <dd class="${founderNames === "TBD" ? "placeholder" : ""}">
              ${founderNames}
            </dd>
          </div>

          <div>
            <dt>Investment date</dt>
            <dd class="${
              company.investmentDate === "TBD" ? "placeholder" : ""
            }">
              ${company.investmentDate}
            </dd>
          </div>

          ${
            company.website
              ? `
                <div>
                  <dt>Website</dt>
                  <dd>
                    <a href="${company.website}" target="_blank" rel="noopener">
                      Visit website ↗
                    </a>
                  </dd>
                </div>
              `
              : ""
          }

          ${
            company.linkedin
              ? `
                <div>
                  <dt>LinkedIn</dt>
                  <dd>
                    <a href="${company.linkedin}" target="_blank" rel="noopener">
                      View profile ↗
                    </a>
                  </dd>
                </div>
              `
              : ""
          }
        </dl>
      </div>
    </div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalPanel.focus();
};

const closeModal = () => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  lastFocused?.focus();
};

const handlePortfolioClick = (event) => {
  const card = event.target.closest(".company-card");

  if (!card) {
    return;
  }

  const companyIndex = Number(card.dataset.companyIndex);
  openModal(portfolioCompanies[companyIndex]);
};

portfolioGrid.addEventListener("click", handlePortfolioClick);
exitsGrid.addEventListener("click", handlePortfolioClick);

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (!modal.classList.contains("is-open")) {
    return;
  }

  if (event.key === "Escape") {
    closeModal();
  }

  if (event.key === "Tab") {
    const focusable = [...modal.querySelectorAll("button, a[href]")];
    const first = focusable[0];
    const last = focusable.at(-1);

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

/* Header and mobile menu */
const header = document.querySelector("#site-header");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

const setMenu = (open) => {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.querySelector(".sr-only").textContent = open
    ? "Close menu"
    : "Open menu";
  navLinks.classList.toggle("open", open);
  header.classList.toggle("menu-open", open);
};

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    setMenu(false);
  }
});

const onScroll = () => {
  header.classList.toggle("scrolled", scrollY > 30);

  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.style.setProperty(
      "--parallax",
      `${Math.min(scrollY * 0.08, 45)}px`
    );
  }
};

addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* Letter-by-letter hero animation */
const animatedHeroTexts = document.querySelectorAll("[data-animate-text]");
let heroCharacterIndex = 0;

animatedHeroTexts.forEach((element) => {
  const text = element.textContent.trim();

  element.textContent = "";
  element.setAttribute("aria-hidden", "true");

  [...text].forEach((character) => {
    const span = document.createElement("span");

    span.className = "hero-char";
    span.style.setProperty("--char-index", heroCharacterIndex);
    span.innerHTML = character === " " ? "&nbsp;" : character;

    element.appendChild(span);
    heroCharacterIndex += 1;
  });

  heroCharacterIndex += 3;
});

/* Reveal-on-scroll animation */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -30px"
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

document.querySelector("#year").textContent = new Date().getFullYear();

document
  .querySelectorAll("[data-application-link], [data-privacy-link]")
  .forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });
