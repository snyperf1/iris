document.documentElement.classList.add("enhanced");

const root = document.documentElement;

const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const revealItems = Array.from(document.querySelectorAll(".reveal"));
const sections = Array.from(document.querySelectorAll("main section[id]"));
const skipLink = document.querySelector(".skip-link");
const mainContent = document.getElementById("main-content");

const a11yToggle = document.getElementById("a11y-toggle");
const a11yPanel = document.getElementById("a11y-panel");
const a11yStatus = document.getElementById("a11y-status");
const a11yContrast = document.getElementById("a11y-contrast");
const a11yText = document.getElementById("a11y-text");
const a11yMotion = document.getElementById("a11y-motion");

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const autoplayVideos = Array.from(document.querySelectorAll("video[data-autoplay-video]"));

const MODE_CLASS = {
  contrast: "user-high-contrast",
  text: "user-large-text",
  motion: "user-reduced-motion",
};

const MODE_KEY = {
  contrast: "iris_a11y_contrast",
  text: "iris_a11y_text",
  motion: "iris_a11y_motion",
};

const MODE_LABEL = {
  contrast: "High contrast mode",
  text: "Larger text",
  motion: "Reduced motion",
};

function safeGetStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore storage write errors.
  }
}

function announceStatus(message) {
  if (!a11yStatus) {
    return;
  }

  a11yStatus.textContent = "";
  requestAnimationFrame(() => {
    a11yStatus.textContent = message;
  });
}

function isReducedMotionActive() {
  return motionQuery.matches || root.classList.contains(MODE_CLASS.motion);
}

function syncMotionPreference() {
  const shouldReduceMotion = isReducedMotionActive();

  autoplayVideos.forEach((video) => {
    if (shouldReduceMotion) {
      video.pause();
      video.removeAttribute("autoplay");
      video.currentTime = 0;
      return;
    }

    video.setAttribute("autoplay", "");
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Autoplay can be blocked by browser policy.
      });
    }
  });

  if (shouldReduceMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
}

function setMode(mode, enabled, options = {}) {
  const { persist = true, announce = true } = options;
  const className = MODE_CLASS[mode];
  const key = MODE_KEY[mode];

  root.classList.toggle(className, enabled);

  if (mode === "contrast" && a11yContrast) {
    a11yContrast.checked = enabled;
  }
  if (mode === "text" && a11yText) {
    a11yText.checked = enabled;
  }
  if (mode === "motion" && a11yMotion) {
    a11yMotion.checked = enabled;
  }

  if (persist) {
    safeSetStorage(key, enabled ? "1" : "0");
  }

  if (mode === "motion") {
    syncMotionPreference();
  }

  if (announce) {
    announceStatus(`${MODE_LABEL[mode]} ${enabled ? "enabled" : "disabled"}.`);
  }
}

function loadStoredModes() {
  setMode("contrast", safeGetStorage(MODE_KEY.contrast) === "1", {
    persist: false,
    announce: false,
  });
  setMode("text", safeGetStorage(MODE_KEY.text) === "1", {
    persist: false,
    announce: false,
  });
  setMode("motion", safeGetStorage(MODE_KEY.motion) === "1", {
    persist: false,
    announce: false,
  });
}

function setA11yPanelOpen(isOpen, moveFocus = false) {
  if (!a11yToggle || !a11yPanel) {
    return;
  }

  a11yPanel.hidden = !isOpen;
  a11yToggle.setAttribute("aria-expanded", String(isOpen));
  a11yToggle.setAttribute(
    "aria-label",
    isOpen ? "Close accessibility options" : "Open accessibility options"
  );

  if (isOpen && moveFocus && a11yContrast) {
    a11yContrast.focus();
  }
}

function updateMenuState(isOpen, moveFocus = false) {
  if (!menuToggle || !siteNav) {
    return;
  }

  siteNav.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  if (isOpen && moveFocus && navLinks.length > 0) {
    navLinks[0].focus();
  }
}

function updateActiveNav(sectionId) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

loadStoredModes();
syncMotionPreference();

if (a11yToggle && a11yPanel) {
  a11yToggle.addEventListener("click", () => {
    const isOpen = a11yPanel.hidden;
    setA11yPanelOpen(isOpen, true);
  });

  if (a11yContrast) {
    a11yContrast.addEventListener("change", () => {
      setMode("contrast", a11yContrast.checked);
    });
  }

  if (a11yText) {
    a11yText.addEventListener("change", () => {
      setMode("text", a11yText.checked);
    });
  }

  if (a11yMotion) {
    a11yMotion.addEventListener("change", () => {
      setMode("motion", a11yMotion.checked);
    });
  }
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !siteNav.classList.contains("is-open");
    updateMenuState(isOpen, true);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  if (a11yPanel && !a11yPanel.hidden) {
    setA11yPanelOpen(false);
    if (a11yToggle) {
      a11yToggle.focus();
    }
    return;
  }

  if (siteNav && siteNav.classList.contains("is-open")) {
    updateMenuState(false);
    if (menuToggle) {
      menuToggle.focus();
    }
  }
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Node)) {
    return;
  }

  if (a11yPanel && !a11yPanel.hidden) {
    const clickedA11y =
      (a11yToggle && a11yToggle.contains(target)) || a11yPanel.contains(target);
    if (!clickedA11y) {
      setA11yPanelOpen(false);
    }
  }

  if (siteNav && siteNav.classList.contains("is-open")) {
    const clickedMenu =
      (menuToggle && menuToggle.contains(target)) || siteNav.contains(target);
    if (!clickedMenu) {
      updateMenuState(false);
    }
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    updateMenuState(false);
    setA11yPanelOpen(false);
    const sectionId = link.getAttribute("href")?.replace("#", "");
    if (sectionId) {
      updateActiveNav(sectionId);
    }
  });
});

if (skipLink && mainContent) {
  skipLink.addEventListener("click", () => {
    requestAnimationFrame(() => {
      mainContent.focus({ preventScroll: true });
    });
  });
}

if (typeof motionQuery.addEventListener === "function") {
  motionQuery.addEventListener("change", () => {
    syncMotionPreference();
  });
} else if (typeof motionQuery.addListener === "function") {
  motionQuery.addListener(() => {
    syncMotionPreference();
  });
}

if ("IntersectionObserver" in window) {
  if (isReducedMotionActive()) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 60, 320)}ms`;
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const sectionId = entry.target.getAttribute("id");
        if (sectionId) {
          updateActiveNav(sectionId);
        }
      });
    },
    {
      threshold: 0.38,
      rootMargin: "-12% 0px -48% 0px",
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (window.location.hash) {
  updateActiveNav(window.location.hash.replace("#", ""));
}
