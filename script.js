const SITE_CONTENT = {
  meta: {
    productName: "iris",
    tagline: "See less. Do more.",
    subtext:
      "A snap-on phone companion that makes flight booking clearer for people with glaucoma.",
    conceptDeckUrl: "https://example.com/concept-deck",
    footerTeam: "Team iris",
    footerModule: "Accessibility Design Concept",
  },
  ui: {
    heroPrimaryCta: "Watch the demo",
    heroSecondaryCta: "See how it works",
    heroNote:
      "Calm, guided booking support for low-vision travel decisions.",
    eyebrows: {
      problem: "Problem",
      persona: "Persona",
      audit: "UX Audit",
      research: "Research Insights",
      behavior: "Behaviour Goal",
      product: "Product",
      features: "Features",
      demo: "Demo Flow",
      impact: "Impact",
    },
    labels: {
      targetBehavior: "Target Behaviour",
      hmw: "HMW",
      before: "Before",
      after: "After",
      wcagTags: "Relevant WCAG tags",
      simulatorSwitchState: "ON",
      videoFallback:
        "Your browser does not support embedded video. Please open the file directly.",
      stepJulia: "What Julia says",
      stepSystem: "System response",
      stepInk: "What InkView shows",
    },
    simulatorMock: {
      header: "Flight booking",
      from: "From",
      to: "To",
      depart: "Depart",
      return: "Return",
      optionA: "Option A",
      optionAText: "Cheaper, longer layover",
      optionB: "Option B",
      optionBText: "Shorter layover, higher fare",
    },
  },
  nav: [
    { label: "Problem", href: "#problem" },
    { label: "Features", href: "#features" },
    { label: "Demo", href: "#demo" },
    { label: "Impact", href: "#impact" },
  ],
  media: {
    heroImage: "./assets/hero-angle.png",
    productImage: "./assets/device-frame-placeholder.png",
    productImageAlt:
      "Concept render of the iris snap-on companion attached to a smartphone.",
    productFallback: "./assets/product-placeholder.svg",
    detailRender: "./assets/product-front.png",
    detailRenderAlt:
      "Front view concept render showing the iris add-on attached to a phone.",
    detailFallback: "./assets/demo-placeholder.svg",
    inkviewRender: "./assets/inkview-render.png",
    inkviewRenderAlt: "Concept close-up of the iris e-ink style display.",
    demoVideo: "./assets/demo.mp4",
    demoPoster: "./assets/demo-poster.jpg",
  },
  problemHook: {
    question:
      "Does more information help us see better, or does it just get in the way?",
    paragraph:
      "Dense airline interfaces force constant scanning, which increases fatigue and mistakes for users with tunnel vision.",
  },
  persona: {
    title: "Meet Julia",
    bullets: [
      "53, hospital call center staff",
      "Severe glaucoma (tunnel vision, reduced contrast sensitivity)",
      "Books after work, when fatigue is highest",
      "Wants to fly to Japan to visit her sister",
    ],
    simulatorLabel: "Tunnel Vision simulator",
    simulatorHelp:
      "Toggle to approximate a narrowed field of view over a booking UI example.",
    simulatorOffText: "Simulator is off. Full interface visible.",
    simulatorOnText:
      "Simulator is on. Peripheral content is dimmed to mimic tunnel vision.",
  },
  accessibilityGap: {
    title: "The Accessibility Gap",
    issues: [
      {
        label: "Low contrast + small text",
        why: "Hard to read when contrast sensitivity is reduced, especially late in the day.",
      },
      {
        label: "Dense lists + clutter",
        why: "Scanning fatigue increases when too many options compete in a limited field of view.",
      },
      {
        label: "Grids (calendar/seat map)",
        why: "Position is easy to misread, which increases the chance of high-cost mistakes.",
      },
    ],
    wcagTags: ["1.4.3", "1.4.11", "2.5.8", "2.4.6", "1.4.1"],
  },
  insights: {
    title: "Why it’s hard",
    stats: [
      {
        value: "15° field of vision",
        label: "Forces extensive scanning to piece together each booking step.",
      },
      {
        value: "70%",
        label: "Glare disability on bright screens (claim retained as a design placeholder).",
      },
      {
        value: "High error risk",
        label: "Not seeing the “big picture” at once makes navigation and confirmation harder.",
      },
    ],
    sourceNote: "Sources referenced in slide deck.",
  },
  enablement: {
    title: "What we’re enabling",
    targetBehavior:
      "Julia books economy flights independently after work, confidently and efficiently, with minimal eye strain.",
    hmw:
      "How might we recreate a booking experience for Julia, who has a narrowed field of vision, to book flights independently without extensive scanning fatigue?",
  },
  introducing: {
    title: "Introducing iris",
    paragraph:
      "iris is a small external hardware device that attaches to the back of a smartphone. It works alongside airline apps to support users with glaucoma during flight booking.",
    mockBadge: "Product mock · concept placeholder",
  },
  features: {
    title: "How iris works",
    items: [
      {
        name: "MagLink",
        icon: "maglink",
        description:
          "Snap-on attachment that stays where it matters most during booking.",
        note: "Connects via USB-C, adds physical presence/support.",
      },
      {
        name: "Context Voice",
        icon: "voice",
        description:
          "Guides users by understanding what’s happening on screen, not just reading labels.",
        note: "Reduces scanning, helps avoid wrong taps, supports reversible choices.",
      },
      {
        name: "InkView",
        icon: "ink",
        description:
          "A low-glare e-ink summary you can check anytime.",
        note: "Persistent summary reduces memory load between steps.",
        showRenderThumb: true,
        inkSummary: {
          Flight: "Singapore → Tokyo",
          Departure: "9 Apr",
          Return: "17 Apr",
          Seat: "12A (Window)",
        },
      },
    ],
    whyLine: "Less scanning. Clear checkpoints. Fewer mistakes.",
  },
  demo: {
    title: "A booking, step by step",
    videoLabel: "Concept demo clip",
    videoCaption:
      "Short concept animation from the provided assets. Replace with a narrated final demo if needed.",
    steps: [
      {
        title: "Destination + date",
        julia: "“Japan. Tokyo. 9 April departure, 17 April return.”",
        system:
          "“Got it. I found round-trip flights Singapore to Tokyo. I’ll keep dates visible as we go.”",
        ink: "SIN → NRT | 9 Apr → 17 Apr",
      },
      {
        title: "Round-trip confirmation",
        julia: "“Confirm round trip.”",
        system:
          "“Round trip selected. You can still change this later before payment.”",
        ink: "Trip type: Round-trip (reversible)",
      },
      {
        title: "Compare flights (Option A vs B)",
        julia: "“Compare the first two economy options.”",
        system:
          "“Option A is cheaper. Option B has a shorter layover. I’ll read the differences one by one.”",
        ink: "A: lower price | B: shorter transit",
      },
      {
        title: "Return flight choice",
        julia: "“Choose the afternoon return.”",
        system:
          "“Selected the afternoon return on 17 April. I’ll summarize before we continue.”",
        ink: "Return: 17 Apr, afternoon",
      },
      {
        title: "Assistance request (sighted guide)",
        julia: "“Add airport assistance. Sighted guide please.”",
        system:
          "“Assistance request added: sighted guide at departure and arrival airports.”",
        ink: "Assist: sighted guide (added)",
      },
      {
        title: "Seat change + payment confirmation",
        julia: "“Window seat if available. Then confirm payment summary.”",
        system:
          "“Window seat 12A selected. Here is your payment summary before final confirmation.”",
        ink: "Seat 12A | Payment summary ready",
      },
    ],
  },
  impact: {
    title: "From exhaustion to empowerment",
    before:
      "40+ mins, fatigue, fear of irreversible mistakes",
    after: "Shorter, clearer, more confident",
    placeholderClaim: "50% shorter (design placeholder)",
  },
  finalCta: {
    headline: "Get iris today.",
    subtext:
      "Iris is a snap-on phone companion. With MagLink, Context Voice and InkView keep booking clear and in your control.",
    button: "View concept deck",
  },
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function featureIcon(name) {
  if (name === "maglink") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 7.5h5a4 4 0 1 1 0 8h-2" />
        <path d="M16 16.5H11a4 4 0 1 1 0-8h2" />
      </svg>
    `;
  }
  if (name === "voice") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-5 0V7a2.5 2.5 0 0 1 2.5-2.5Z" />
        <path d="M6.5 11.5a5.5 5.5 0 0 0 11 0" />
        <path d="M12 17v3.5" />
        <path d="M9 20.5h6" />
      </svg>
    `;
  }
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" />
      <path d="M7.5 8h9M7.5 11h9M7.5 14h6" />
    </svg>
  `;
}

function renderNav() {
  return `
    <nav class="top-nav" aria-label="Section navigation">
      <ul>
        ${SITE_CONTENT.nav
          .map(
            (item) => `
          <li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>
        `
          )
          .join("")}
      </ul>
    </nav>
  `;
}

function renderPersonaBullets() {
  return SITE_CONTENT.persona.bullets
    .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
    .join("");
}

function renderIssues() {
  return SITE_CONTENT.accessibilityGap.issues
    .map(
      (issue, index) => `
      <article class="issue-card reveal" style="--reveal-delay:${index * 80}ms">
        <h3>${escapeHtml(issue.label)}</h3>
        <p>${escapeHtml(issue.why)}</p>
      </article>
    `
    )
    .join("");
}

function renderWcagChips() {
  return SITE_CONTENT.accessibilityGap.wcagTags
    .map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`)
    .join("");
}

function renderStats() {
  return SITE_CONTENT.insights.stats
    .map(
      (stat, index) => `
      <article class="stat-card reveal" style="--reveal-delay:${index * 70}ms">
        <p class="stat-value">${escapeHtml(stat.value)}</p>
        <p class="stat-label">${escapeHtml(stat.label)}</p>
      </article>
    `
    )
    .join("");
}

function renderInkSummary(summary) {
  return `
    <div class="inkview-mini" aria-label="InkView summary example">
      <span class="label">InkView summary</span>
      <dl>
        ${Object.entries(summary)
          .map(
            ([k, v]) =>
              `<dt>${escapeHtml(k)}:</dt><dd>${escapeHtml(v)}</dd>`
          )
          .join("")}
      </dl>
    </div>
  `;
}

function renderFeatures() {
  return SITE_CONTENT.features.items
    .map((item, index) => {
      const inkMarkup = item.inkSummary ? renderInkSummary(item.inkSummary) : "";
      const renderThumb = item.showRenderThumb
        ? `
          <img
            class="inkview-render-thumb"
            src="${escapeHtml(SITE_CONTENT.media.inkviewRender)}"
            alt="${escapeHtml(SITE_CONTENT.media.inkviewRenderAlt)}"
            loading="lazy"
            decoding="async"
            onerror="this.onerror=null;this.src='${escapeHtml(SITE_CONTENT.media.detailFallback)}';"
          />
        `
        : "";
      return `
        <article class="feature-card reveal" style="--reveal-delay:${index * 90}ms">
          <div class="feature-head">
            <div class="feature-icon">${featureIcon(item.icon)}</div>
            <h3>${escapeHtml(item.name)}</h3>
          </div>
          <p>${escapeHtml(item.description)}</p>
          <p class="feature-note">${escapeHtml(item.note)}</p>
          ${inkMarkup}
          ${renderThumb}
        </article>
      `;
    })
    .join("");
}

function renderSteps() {
  return SITE_CONTENT.demo.steps
    .map(
      (step, index) => `
      <article class="accordion-card reveal" style="--reveal-delay:${index * 60}ms">
        <details class="step-details" ${index === 0 ? "open" : ""}>
          <summary>
            <span class="step-label">
              <span class="step-index">${index + 1}</span>
              <span class="step-title">${escapeHtml(step.title)}</span>
            </span>
            <span class="step-chevron" aria-hidden="true">›</span>
          </summary>
          <div class="step-body">
            <div class="step-grid">
              <div class="step-line">
                <strong>${escapeHtml(SITE_CONTENT.ui.labels.stepJulia)}</strong>
                <p>${escapeHtml(step.julia)}</p>
              </div>
              <div class="step-line">
                <strong>${escapeHtml(SITE_CONTENT.ui.labels.stepSystem)}</strong>
                <p>${escapeHtml(step.system)}</p>
              </div>
              <div class="step-line">
                <strong>${escapeHtml(SITE_CONTENT.ui.labels.stepInk)}</strong>
                <p class="step-ink">${escapeHtml(step.ink)}</p>
              </div>
            </div>
          </div>
        </details>
      </article>
    `
    )
    .join("");
}

function renderApp() {
  const c = SITE_CONTENT;
  return `
    <div class="site">
      <header class="site-header">
        <div class="shell inner">
          <div class="brand-lockup">
            <img src="./assets/iris-icon.png" alt="" />
            <span>${escapeHtml(c.meta.productName)}</span>
          </div>
          ${renderNav()}
        </div>
      </header>

      <main id="main-content">
        <section class="section hero shell" aria-labelledby="hero-title">
          <div class="hero-card reveal is-visible">
            <div class="hero-grid">
              <div class="hero-copy">
                <h1 id="hero-title">${escapeHtml(c.meta.productName)}</h1>
                <p class="hero-tagline">${escapeHtml(c.meta.tagline)}</p>
                <p class="hero-subtext">${escapeHtml(c.meta.subtext)}</p>
                <div class="cta-row" aria-label="Primary actions">
                  <a class="button button-primary" href="#video">${escapeHtml(c.ui.heroPrimaryCta)}</a>
                  <a class="button button-secondary" href="#features">${escapeHtml(c.ui.heroSecondaryCta)}</a>
                </div>
                <p class="hero-note">${escapeHtml(c.ui.heroNote)}</p>
              </div>
              <div class="hero-visual" aria-hidden="true">
                <img
                  src="${escapeHtml(c.media.heroImage)}"
                  alt=""
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="section shell problem-hook reveal section-problem" id="problem" aria-labelledby="problem-title">
          <div class="single-card">
            <p class="eyebrow">${escapeHtml(c.ui.eyebrows.problem)}</p>
            <h2 id="problem-title">${escapeHtml(c.problemHook.question)}</h2>
            <p>${escapeHtml(c.problemHook.paragraph)}</p>
          </div>
        </section>

        <section class="section shell section-persona" id="julia" aria-labelledby="julia-title">
          <p class="eyebrow reveal">${escapeHtml(c.ui.eyebrows.persona)}</p>
          <h2 id="julia-title" class="reveal">${escapeHtml(c.persona.title)}</h2>
          <div class="persona-grid">
            <article class="persona-card reveal" aria-label="Julia persona summary">
              <ul>
                ${renderPersonaBullets()}
              </ul>
            </article>

            <article class="simulator-card reveal" aria-labelledby="sim-title">
              <div class="sim-head">
                <div>
                  <h3 id="sim-title">${escapeHtml(c.persona.simulatorLabel)}</h3>
                  <p class="sim-help">${escapeHtml(c.persona.simulatorHelp)}</p>
                </div>
                <label class="toggle-wrap">
                  <input type="checkbox" id="tunnel-toggle" />
                  <span class="toggle-pill" aria-hidden="true"></span>
                  <span class="toggle-label">${escapeHtml(c.ui.labels.simulatorSwitchState)}</span>
                </label>
              </div>
              <div class="simulator-stage">
                <div class="simulator-frame" id="simulator-frame" aria-describedby="sim-status">
                  <div class="fake-ui" aria-hidden="true">
                    <div class="fake-ui-header">
                      <span class="fake-ui-title">${escapeHtml(c.ui.simulatorMock.header)}</span>
                      <div class="fake-ui-actions">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                    <div class="fake-ui-body">
                      <div class="ui-row">
                        <div class="ui-fields">
                          <div class="ui-field">
                            <span class="ui-field-label">${escapeHtml(c.ui.simulatorMock.from)}</span>
                            <span class="ui-field-value">Singapore</span>
                          </div>
                          <div class="ui-field">
                            <span class="ui-field-label">${escapeHtml(c.ui.simulatorMock.to)}</span>
                            <span class="ui-field-value">Tokyo</span>
                          </div>
                        </div>
                        <div class="ui-fields">
                          <div class="ui-field">
                            <span class="ui-field-label">${escapeHtml(c.ui.simulatorMock.depart)}</span>
                            <span class="ui-field-value">9 Apr</span>
                          </div>
                          <div class="ui-field">
                            <span class="ui-field-label">${escapeHtml(c.ui.simulatorMock.return)}</span>
                            <span class="ui-field-value">17 Apr</span>
                          </div>
                        </div>
                      </div>
                      <div class="ui-panel">
                        <div class="ui-lines">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div class="ui-calendar">
                        <span class="ui-field-label">Calendar</span>
                        <div class="ui-calendar-grid">
                          ${Array.from({ length: 21 })
                            .map(() => "<span></span>")
                            .join("")}
                        </div>
                      </div>
                      <div class="ui-compare">
                        <div class="ui-compare-card">
                          <strong>${escapeHtml(c.ui.simulatorMock.optionA)}</strong>
                          <small>${escapeHtml(c.ui.simulatorMock.optionAText)}</small>
                        </div>
                        <div class="ui-compare-card">
                          <strong>${escapeHtml(c.ui.simulatorMock.optionB)}</strong>
                          <small>${escapeHtml(c.ui.simulatorMock.optionBText)}</small>
                        </div>
                      </div>
                      <div class="ui-footer">
                        <span class="ui-pill" aria-hidden="true"></span>
                        <span class="ui-primary" aria-hidden="true"></span>
                      </div>
                    </div>
                  </div>
                  <div class="vision-vignette" aria-hidden="true"></div>
                </div>
              </div>
              <p class="sim-status" id="sim-status">${escapeHtml(c.persona.simulatorOffText)}</p>
            </article>
          </div>
        </section>

        <section class="section shell section-divider-title" id="audit" aria-labelledby="gap-title">
          <p class="eyebrow reveal">${escapeHtml(c.ui.eyebrows.audit)}</p>
          <h2 id="gap-title" class="reveal">${escapeHtml(c.accessibilityGap.title)}</h2>
          <div class="card-grid">
            ${renderIssues()}
          </div>
          <div class="chip-row reveal" aria-label="${escapeHtml(c.ui.labels.wcagTags)}">
            ${renderWcagChips()}
          </div>
        </section>

        <section class="section shell section-research" id="research" aria-labelledby="insights-title">
          <p class="eyebrow reveal">${escapeHtml(c.ui.eyebrows.research)}</p>
          <h2 id="insights-title" class="reveal">${escapeHtml(c.insights.title)}</h2>
          <div class="stats-grid">
            ${renderStats()}
          </div>
          <p class="source-note reveal">${escapeHtml(c.insights.sourceNote)}</p>
        </section>

        <section class="section shell section-hmw" id="hmw" aria-labelledby="enable-title">
          <p class="eyebrow reveal">${escapeHtml(c.ui.eyebrows.behavior)}</p>
          <h2 id="enable-title" class="reveal">${escapeHtml(c.enablement.title)}</h2>
          <div class="enable-card single-card reveal">
            <div class="enable-block enable-target">
              <h3>${escapeHtml(c.ui.labels.targetBehavior)}</h3>
              <p>${escapeHtml(c.enablement.targetBehavior)}</p>
            </div>
            <div class="enable-block enable-hmw">
              <h3>${escapeHtml(c.ui.labels.hmw)}</h3>
              <p>${escapeHtml(c.enablement.hmw)}</p>
            </div>
          </div>
        </section>

        <section class="section shell section-dark section-product" id="product" aria-labelledby="introducing-title">
          <p class="eyebrow reveal">${escapeHtml(c.ui.eyebrows.product)}</p>
          <h2 id="introducing-title" class="reveal">${escapeHtml(c.introducing.title)}</h2>
          <div class="product-grid">
            <div class="panel reveal">
              <p>${escapeHtml(c.introducing.paragraph)}</p>
            </div>
            <figure class="product-figure reveal">
              <img
                src="${escapeHtml(c.media.productImage)}"
                alt="${escapeHtml(c.media.productImageAlt)}"
                loading="lazy"
                decoding="async"
                onerror="this.onerror=null;this.src='${escapeHtml(c.media.productFallback)}';"
              />
              <img
                class="product-inset"
                src="${escapeHtml(c.media.detailRender)}"
                alt="${escapeHtml(c.media.detailRenderAlt)}"
                loading="lazy"
                decoding="async"
                onerror="this.onerror=null;this.src='${escapeHtml(c.media.detailFallback)}';"
              />
              <figcaption class="product-badge">${escapeHtml(c.introducing.mockBadge)}</figcaption>
            </figure>
          </div>
        </section>

        <section class="section shell section-dark section-features" id="features" aria-labelledby="features-title">
          <p class="eyebrow reveal">${escapeHtml(c.ui.eyebrows.features)}</p>
          <h2 id="features-title" class="reveal">${escapeHtml(c.features.title)}</h2>
          <div class="features-grid">
            ${renderFeatures()}
          </div>
          <p class="why-line reveal">${escapeHtml(c.features.whyLine)}</p>
        </section>

        <section class="section shell section-dark section-demo" id="demo" aria-labelledby="demo-title">
          <p class="eyebrow reveal">${escapeHtml(c.ui.eyebrows.demo)}</p>
          <h2 id="demo-title" class="reveal">${escapeHtml(c.demo.title)}</h2>
          <div class="video-card reveal" id="video">
            <video
              controls
              preload="metadata"
              playsinline
              poster="${escapeHtml(c.media.demoPoster)}"
              aria-label="${escapeHtml(c.demo.videoLabel)}"
            >
              <source src="${escapeHtml(c.media.demoVideo)}" type="video/mp4" />
              ${escapeHtml(c.ui.labels.videoFallback)}
            </video>
            <p class="video-meta">${escapeHtml(c.demo.videoCaption)}</p>
          </div>
          <div class="accordion-wrap" aria-label="Scripted booking steps">
            ${renderSteps()}
          </div>
        </section>

        <section class="section shell section-impact" id="impact" aria-labelledby="impact-title">
          <p class="eyebrow reveal">${escapeHtml(c.ui.eyebrows.impact)}</p>
          <h2 id="impact-title" class="reveal">${escapeHtml(c.impact.title)}</h2>
          <div class="impact-grid">
            <article class="impact-card reveal">
              <h3>${escapeHtml(c.ui.labels.before)}</h3>
              <p>${escapeHtml(c.impact.before)}</p>
            </article>
            <article class="impact-card reveal">
              <h3>${escapeHtml(c.ui.labels.after)}</h3>
              <p>${escapeHtml(c.impact.after)}</p>
            </article>
          </div>
          <p class="impact-highlight reveal">${escapeHtml(c.impact.placeholderClaim)}</p>
        </section>

        <section class="section shell section-dark section-final" id="cta" aria-labelledby="cta-title">
          <div class="final-card reveal">
            <img
              class="final-device"
              src="${escapeHtml(c.media.detailRender)}"
              alt="${escapeHtml(c.media.detailRenderAlt)}"
              loading="lazy"
              decoding="async"
              onerror="this.onerror=null;this.src='${escapeHtml(c.media.productFallback)}';"
            />
            <div class="final-copy">
              <h2 id="cta-title">${escapeHtml(c.finalCta.headline)}</h2>
              <p>${escapeHtml(c.finalCta.subtext)}</p>
              <div class="cta-row">
                <a class="button button-primary" href="${escapeHtml(c.meta.conceptDeckUrl)}">
                  ${escapeHtml(c.finalCta.button)}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="shell footer-inner">
          <div>${escapeHtml(c.meta.footerTeam)}</div>
          <div>${escapeHtml(c.meta.footerModule)}</div>
        </div>
      </footer>
    </div>
  `;
}

function initTunnelVisionToggle() {
  const toggle = document.getElementById("tunnel-toggle");
  const frame = document.getElementById("simulator-frame");
  const status = document.getElementById("sim-status");
  if (!toggle || !frame || !status) return;

  const update = () => {
    const on = toggle.checked;
    frame.classList.toggle("sim-on", on);
    status.textContent = on
      ? SITE_CONTENT.persona.simulatorOnText
      : SITE_CONTENT.persona.simulatorOffText;
  };

  toggle.addEventListener("change", update);
  update();
}

function initRevealAnimations() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = Array.from(document.querySelectorAll(".reveal"));
  if (reduce) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  nodes.forEach((node) => observer.observe(node));
}

function initAccordionBehavior() {
  // Keep the accordion keyboard-friendly while ensuring a single open step.
  const details = Array.from(document.querySelectorAll(".step-details"));
  details.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      details.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}

function mount() {
  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = renderApp();
  initTunnelVisionToggle();
  initRevealAnimations();
  initAccordionBehavior();
}

document.addEventListener("DOMContentLoaded", mount);
