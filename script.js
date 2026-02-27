document.documentElement.classList.add("enhanced");

const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const revealItems = Array.from(document.querySelectorAll(".reveal"));
const sections = Array.from(document.querySelectorAll("main section[id]"));
const skipLink = document.querySelector(".skip-link");
const mainContent = document.getElementById("main-content");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const autoplayVideos = Array.from(document.querySelectorAll("video[data-autoplay-video]"));

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

function syncMotionPreference(shouldReduceMotion) {
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
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !siteNav.classList.contains("is-open");
    updateMenuState(isOpen, true);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
      updateMenuState(false);
      menuToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.classList.contains("is-open")) {
      return;
    }

    const target = event.target;
    if (
      target instanceof Node &&
      (siteNav.contains(target) || menuToggle.contains(target))
    ) {
      return;
    }

    updateMenuState(false);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    updateMenuState(false);
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

syncMotionPreference(motionQuery.matches);
if (typeof motionQuery.addEventListener === "function") {
  motionQuery.addEventListener("change", (event) => {
    syncMotionPreference(event.matches);
  });
} else if (typeof motionQuery.addListener === "function") {
  motionQuery.addListener((event) => {
    syncMotionPreference(event.matches);
  });
}

if ("IntersectionObserver" in window) {
  if (motionQuery.matches) {
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
