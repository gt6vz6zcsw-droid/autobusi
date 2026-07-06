// =====================================================================
//  LOGIKA SAJTA — ne treba da menjaš ovaj fajl.
//  (podaci se menjaju u podaci.js)
// =====================================================================

// --- Linijske ikonice (SVG) ---
const ICONS = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6 9 6 9-6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.8"/></svg>',
  bus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2.5"/><path d="M3 10.5h18"/><path d="M8 4.5V10M16 4.5V10"/><circle cx="7.5" cy="18" r="1.6"/><circle cx="16.5" cy="18" r="1.6"/></svg>',
  school: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 2 9l10 5 10-5-10-5z"/><path d="M6 11v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5"/><path d="M22 9v5"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.4 4 5.6 4 9s-1.5 6.6-4 9c-2.5-2.4-4-5.6-4-9s1.5-6.6 4-9z"/></svg>',
  plane: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="19" height="13" rx="2.5"/><path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7"/><path d="M2.5 12.5h19"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h10v4a5 5 0 0 1-10 0V4z"/><path d="M7 6H4.5a2 2 0 0 0 0 4H7M17 6h2.5a2 2 0 0 1 0 4H17"/><path d="M10 13.5V17M14 13.5V17M8 20h8M9 17h6"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/></svg>',
  wheel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.4"/><path d="M12 9.6V3.2M9.9 13.2 4.8 18.4M14.1 13.2l5.1 5.2"/></svg>',
  document: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8z"/><path d="M14 2.5V8h5.5"/><path d="M8.5 13h7M8.5 17h5"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4 2.6-2.6z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7-7A2 2 0 0 1 3 12.2V4a1 1 0 0 1 1-1h8.2a2 2 0 0 1 1.4.6l7 7a2 2 0 0 1 0 2.8z"/><circle cx="7.7" cy="7.7" r="1.3"/></svg>'
};
function renderIcons(root) {
  (root || document).querySelectorAll("[data-icon]").forEach(el => {
    const k = el.getAttribute("data-icon");
    if (ICONS[k] && !el.dataset.iconDone) { el.innerHTML = ICONS[k]; el.dataset.iconDone = "1"; }
  });
}

// --- Zajednički meni (header) na svakoj stranici ---
const NAV = [
  ["index.html", "Početna"],
  ["usluge.html", "Usluge"],
  ["vozni-park.html", "Vozni park"],
  ["galerija.html", "Galerija"],
  ["o-nama.html", "O nama"],
  ["kontakt.html", "Kontakt"]
];

function trenutnaStrana() {
  const p = location.pathname.split("/").pop();
  return p === "" ? "index.html" : p;
}

function ubaciHeader() {
  const cur = trenutnaStrana();
  const linkovi = NAV.map(([href, tekst]) =>
    `<a href="${href}"${href === cur ? ' class="active"' : ""}>${tekst}</a>`
  ).join("");
  const el = document.getElementById("site-header");
  if (!el) return;
  el.innerHTML = `
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="index.html"><img src="images/logo.png" alt="Viaggio Tours Čačak"></a>
        <button class="nav-toggle" aria-label="Meni">☰</button>
        <nav class="nav-links">
          ${linkovi}
          <a class="btn btn-phone js-tel-link"><span class="ico" data-icon="phone"></span><span class="js-phone"></span></a>
        </nav>
      </div>
    </header>`;
  const toggle = el.querySelector(".nav-toggle");
  const nav = el.querySelector(".nav-links");
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

function ubaciFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const linkovi = NAV.map(([href, tekst]) => `<a href="${href}">${tekst}</a>`).join("");
  el.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <img class="footer-logo" src="images/logo-white.png" alt="Viaggio Tours Čačak">
          <p>Vanlinijski prevoz putnika u zemlji i inostranstvu. Vozni park od osam autobusa, kapaciteta od 20 do 93 mesta.</p>
        </div>
        <div class="footer-col">
          <h4>Stranice</h4>
          <nav class="footer-links">${linkovi}</nav>
        </div>
        <div class="footer-col">
          <h4>Kontakt</h4>
          <p><a class="js-tel-link"><span class="js-phone"></span></a></p>
          <p><a class="js-mail-link"><span class="js-email"></span></a></p>
          <p>${KONTAKT.adresa}</p>
        </div>
      </div>
      <div class="footer-bottom container">
        <span>© <span id="year"></span> Janko Jovanović PR Viaggio Tours 2024 · PIB: 114297482</span>
        <span>${KONTAKT.adresa}</span>
      </div>
    </footer>`;
}

// --- Kontakt podaci u sve elemente sa js- klasama ---
function popuniKontakt() {
  document.querySelectorAll(".js-phone").forEach(e => e.textContent = KONTAKT.telefon);
  document.querySelectorAll(".js-email").forEach(e => e.textContent = KONTAKT.email);
  document.querySelectorAll(".js-tel-link").forEach(e => e.href = "tel:" + KONTAKT.telefonLink);
  document.querySelectorAll(".js-mail-link").forEach(e => e.href = "mailto:" + KONTAKT.email);
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

// --- Kartica autobusa (za grid) ---
function busKartica(b) {
  return `
    <a class="card bus-card" href="autobus.html?id=${b.id}">
      <div class="bus-img" data-img="images/${b.id}-1.jpg"><span class="bus-ico" data-icon="bus"></span></div>
      <div class="bus-card-body">
        <h3>${b.naziv}</h3>
        <p class="bus-meta"><strong>${b.mesta} mesta</strong> · ${b.tip}</p>
        <span class="bus-more">Pogledaj detalje →</span>
      </div>
    </a>`;
}

// --- Prikaz voznog parka (cela lista) ---
function prikaziVozniPark() {
  const host = document.querySelector("[data-fleet-grid]");
  if (!host) return;
  host.innerHTML = BUSES.map(busKartica).join("");
  aktivirajSlike();
}

// --- Prikaz izdvojenih autobusa na početnoj (prva 3) ---
function prikaziIzdvojene() {
  const host = document.querySelector("[data-fleet-featured]");
  if (!host) return;
  host.innerHTML = BUSES.slice(0, 3).map(busKartica).join("");
  aktivirajSlike();
}

// --- Prikaži sliku iz data-img ako fajl postoji (inače ostaje ikonica) ---
function aktivirajSlike() {
  document.querySelectorAll(".bus-img[data-img]").forEach(el => {
    if (el.dataset.done) return;
    el.dataset.done = "1";
    const img = new Image();
    img.onload = () => {
      el.style.backgroundImage = `url('${el.dataset.img}')`;
      el.classList.add("has-photo");
    };
    img.src = el.dataset.img;
  });
}

// --- Stranica pojedinačnog autobusa (autobus.html?id=...) ---
function prikaziBusDetalj() {
  const host = document.getElementById("bus-detalj");
  if (!host) return;
  const id = new URLSearchParams(location.search).get("id");
  const b = BUSES.find(x => x.id === id);
  if (!b) {
    host.innerHTML = `<div class="container section"><h1>Autobus nije pronađen</h1>
      <p><a class="btn btn-primary" href="vozni-park.html">← Nazad na vozni park</a></p></div>`;
    return;
  }
  document.title = `${b.naziv} — ${b.mesta} mesta | Viaggio Tours Čačak`;
  host.innerHTML = `
    <div class="container">
      <p class="crumbs"><a href="vozni-park.html">Vozni park</a> › <span>${b.naziv}</span></p>
      <div class="detalj-grid">
        <div class="galerija">
          <div class="galerija-glavna" id="gal-glavna" data-empty="1"><span class="gal-ikonica" data-icon="bus"></span></div>
          <div class="galerija-thumbs" id="gal-thumbs"></div>
          <p class="galerija-napomena" id="gal-napomena">Fotografije uskoro.</p>
        </div>
        <div class="detalj-info">
          <p class="detalj-tip">${b.tip}</p>
          <h1>${b.naziv}</h1>
          <div class="detalj-spec">
            <div class="spec"><span>Broj mesta</span><strong>${b.mesta}</strong></div>
          </div>
          <p class="detalj-opis">${b.opis}</p>
          <h3>Oprema</h3>
          <ul class="oprema">${b.oprema.map(o => `<li>${o}</li>`).join("")}</ul>
          <div class="detalj-cta">
            <a class="btn btn-primary" href="kontakt.html?bus=${b.id}"><span class="ico" data-icon="mail"></span>Pošalji upit za ovaj autobus</a>
            <a class="btn btn-ghost-dark js-tel-link"><span class="ico" data-icon="phone"></span>Pozovi</a>
          </div>
        </div>
      </div>
    </div>`;
  ucitajGaleriju(b.id);
  popuniKontakt();
}

function ucitajGaleriju(slug) {
  const glavna = document.getElementById("gal-glavna");
  const thumbs = document.getElementById("gal-thumbs");
  const napomena = document.getElementById("gal-napomena");
  const postaviGlavnu = src => {
    glavna.style.backgroundImage = `url('${src}')`;
    glavna.classList.add("has-photo");
    glavna.dataset.empty = "0";
  };
  for (let i = 1; i <= 6; i++) {
    const src = `images/${slug}-${i}.jpg`;
    const img = new Image();
    img.onload = () => {
      if (napomena) napomena.style.display = "none";
      const t = document.createElement("div");
      t.className = "thumb";
      t.style.backgroundImage = `url('${src}')`;
      t.dataset.i = i;
      t.addEventListener("click", () => {
        postaviGlavnu(src);
        thumbs.querySelectorAll(".thumb").forEach(x => x.classList.remove("sel"));
        t.classList.add("sel");
      });
      const posle = [...thumbs.children].find(c => +c.dataset.i > i);
      thumbs.insertBefore(t, posle || null);
      if (glavna.dataset.empty === "1") { postaviGlavnu(src); t.classList.add("sel"); }
    };
    img.src = src;
  }
}

// --- Forma za upit (kontakt.html) ---
function podesiUpitFormu() {
  const forma = document.getElementById("upit-forma");
  if (!forma) return;
  const izbor = document.getElementById("f-bus");

  BUSES.forEach(b => {
    const o = document.createElement("option");
    o.value = b.naziv;
    o.textContent = `${b.naziv} (${b.mesta} mesta)`;
    izbor.appendChild(o);
  });

  const busId = new URLSearchParams(location.search).get("bus");
  if (busId) {
    const b = BUSES.find(x => x.id === busId);
    if (b) izbor.value = b.naziv;
  }

  forma.addEventListener("submit", e => {
    e.preventDefault();
    const v = n => (forma.elements[n]?.value || "").trim();
    if (!v("ime") || !v("telefon")) {
      alert("Molimo unesite bar ime i telefon.");
      return;
    }
    const red = (labela, vr) => vr ? `${labela}: ${vr}\n` : "";
    const telo =
      red("Ime i prezime", v("ime")) +
      red("Telefon", v("telefon")) +
      red("E-mail", v("email")) +
      red("Autobus", v("autobus")) +
      red("Datum polaska", v("polazak")) +
      red("Datum povratka", v("povratak")) +
      red("Relacija", v("relacija")) +
      red("Broj putnika", v("putnici")) +
      red("Napomena", v("poruka"));
    const naslov = `Upit za angažovanje autobusa — ${v("ime")}`;
    const link = `mailto:${KONTAKT.email}?subject=${encodeURIComponent(naslov)}&body=${encodeURIComponent(telo)}`;
    window.location.href = link;
    const ok = document.getElementById("forma-ok");
    if (ok) ok.style.display = "block";
  });
}

// --- Galerija sa putovanja (galerija.html) ---
//  Slike idu u  images/galerija/1.jpg, 2.jpg, 3.jpg ...  (do 40 komada)
function prikaziGaleriju() {
  const host = document.querySelector("[data-galerija-grid]");
  if (!host) return;
  const prazno = document.getElementById("galerija-prazno");
  for (let i = 1; i <= 40; i++) {
    const src = `images/galerija/${i}.jpg`;
    const img = new Image();
    img.onload = () => {
      if (prazno) prazno.style.display = "none";
      const cell = document.createElement("a");
      cell.className = "gal-cell";
      cell.href = src;
      cell.style.backgroundImage = `url('${src}')`;
      cell.dataset.i = i;
      cell.addEventListener("click", e => { e.preventDefault(); otvoriLightbox(src); });
      const posle = [...host.children].find(c => +c.dataset.i > i);
      host.insertBefore(cell, posle || null);
    };
    img.src = src;
  }
}

function otvoriLightbox(src) {
  let lb = document.getElementById("lightbox");
  if (!lb) {
    lb = document.createElement("div");
    lb.id = "lightbox";
    lb.innerHTML = `<span class="lb-close" aria-label="Zatvori">&times;</span><img alt="">`;
    lb.addEventListener("click", () => lb.classList.remove("open"));
    document.body.appendChild(lb);
  }
  lb.querySelector("img").src = src;
  lb.classList.add("open");
}

// --- Strukturirani podaci za Google ---
function dodajStructuredData() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Viaggio Tours",
    "description": "Vanlinijski autobuski prevoz putnika u zemlji i inostranstvu.",
    "url": "https://autobusi.co.rs/",
    "telephone": KONTAKT.telefonLink,
    "email": KONTAKT.email,
    "address": { "@type": "PostalAddress", "streetAddress": "Vojvode Stepe 59", "addressLocality": "Čačak", "addressCountry": "RS" }
  };
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.textContent = JSON.stringify(ld);
  document.head.appendChild(s);
}

// --- Pokretanje ---
document.addEventListener("DOMContentLoaded", () => {
  ubaciHeader();
  ubaciFooter();
  popuniKontakt();
  prikaziIzdvojene();
  prikaziVozniPark();
  prikaziBusDetalj();
  podesiUpitFormu();
  prikaziGaleriju();
  dodajStructuredData();
  renderIcons(document);
});
