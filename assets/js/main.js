/* =====================================================================
   Century Engineering Contractors — main.js
   Vanilla JS only. Progressive enhancement; the site works without it.
   ===================================================================== */
(function () {
  "use strict";

  /* --------------------------------------------------------------
     1. Mobile navigation toggle
     -------------------------------------------------------------- */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("mobile-menu");

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("is-open", !open);
    });

    // Close when a link is chosen
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeMenu();
        toggle.focus();
      }
    });

    // Close when resizing up to desktop
    var mq = window.matchMedia("(min-width: 1024px)");
    (mq.addEventListener ? mq.addEventListener.bind(mq, "change") : mq.addListener.bind(mq))(function () {
      if (mq.matches) closeMenu();
    });
  }

  /* --------------------------------------------------------------
     2. Project filter (projects page)
     -------------------------------------------------------------- */
  var filterBar = document.querySelector("[data-filter-bar]");
  if (filterBar) {
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-project]"));
    var countEl = document.querySelector("[data-project-count]");

    function applyFilter(value) {
      var shown = 0;
      cards.forEach(function (card) {
        var cats = (card.getAttribute("data-category") || "").split(" ");
        var match = value === "all" || cats.indexOf(value) !== -1;
        card.classList.toggle("is-hidden", !match);
        if (match) shown++;
      });
      if (countEl) {
        countEl.textContent = shown + (shown === 1 ? " project" : " projects");
      }
    }

    filterBar.querySelectorAll("button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBar.querySelectorAll("button").forEach(function (b) {
          b.setAttribute("aria-pressed", "false");
        });
        btn.setAttribute("aria-pressed", "true");
        applyFilter(btn.getAttribute("data-filter"));
      });
    });
  }

  /* --------------------------------------------------------------
     3. Reveal on scroll (IntersectionObserver)
     -------------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if (!("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var io = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      revealEls.forEach(function (el) { io.observe(el); });
    }
  }

  /* --------------------------------------------------------------
     4. Footer year
     -------------------------------------------------------------- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) { yearEl.textContent = String(new Date().getFullYear()); }

  /* --------------------------------------------------------------
     5. Contact form (no backend) — build a mailto: for graceful UX
     -------------------------------------------------------------- */
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector("[data-form-status]");
      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var email = (data.get("email") || "").toString().trim();
      var service = (data.get("service") || "").toString().trim();
      var message = (data.get("message") || "").toString().trim();

      if (!name || !email || !message) {
        if (status) {
          status.textContent = "Please complete your name, email and message.";
          status.className = "form__note";
          status.style.color = "#B4451F";
        }
        return;
      }

      var subject = "Project enquiry from " + name;
      var body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Service of interest: " + (service || "Not specified") + "\n\n" +
        message;

      var mailto = "mailto:cec@epcafrica.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;

      if (status) {
        status.textContent = "Opening your email app to send this enquiry to cec@epcafrica.com …";
        status.className = "form__note";
        status.style.color = "";
      }
    });
  }
})();
