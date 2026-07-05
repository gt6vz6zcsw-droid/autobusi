// =====================================================================
//  LOGIKA SAJTA — ne treba da menjaš ovaj fajl.
//  (podaci se menjaju u podaci.js)
// =====================================================================

// --- Zajednički meni (header) na svakoj stranici ---
const NAV = [
  ["index.html", "Početna"],
  ["usluge.html", "Usluge"],
  ["vozni-park.html", "Vozni park"],
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
          <a class="btn btn-phone js-tel-link">📞 <span class="js-phone"></span></a>
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
          <p>Vanlinijski prevoz putnika u zemlji i inostranstvu. Sopstveni vozni park od 8 autobusa.</p>
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
  const ikonica = b.tip === "Minibus" ? "🚐" : "🚌";
  return `
    <a class="card bus-card" href="autobus.html?id=${b.id}">
      <div class="bus-img" data-img="images/${b.id}-1.jpg"><span>${ikonica}</span></div>
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
  const ikonica = b.tip === "Minibus" ? "🚐" : "🚌";
  host.innerHTML = `
    <div class="container">
      <p class="crumbs"><a href="vozni-park.html">Vozni park</a> › <span>${b.naziv}</span></p>
      <div class="detalj-grid">
        <div class="galerija">
          <div class="galerija-glavna" id="gal-glavna" data-empty="1"><span class="gal-ikonica">${ikonica}</span></div>
          <div class="galerija-thumbs" id="gal-thumbs"></div>
          <p class="galerija-napomena" id="gal-napomena">Fotografije uskoro.</p>
        </div>
        <div class="detalj-info">
          <p class="detalj-tip">${b.tip}</p>
          <h1>${b.naziv}</h1>
          <div class="detalj-spec">
            <div class="spec"><span>Broj mesta</span><strong>${b.mesta}</strong></div>
            <div class="spec"><span>Godište</span><strong>${b.godiste}</strong></div>
            <div class="spec"><span>Gorivo</span><strong>${b.gorivo}</strong></div>
          </div>
          <p class="detalj-opis">${b.opis}</p>
          <h3>Oprema</h3>
          <ul class="oprema">${b.oprema.map(o => `<li>${o}</li>`).join("")}</ul>
          <div class="detalj-cta">
            <a class="btn btn-primary js-tel-link">📞 Pozovi za ovaj autobus</a>
            <a class="btn btn-ghost-dark" href="vozni-park.html">← Svi autobusi</a>
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
      // ubaci u pravom redosledu
      const posle = [...thumbs.children].find(c => +c.dataset.i > i);
      thumbs.insertBefore(t, posle || null);
      if (glavna.dataset.empty === "1") { postaviGlavnu(src); t.classList.add("sel"); }
    };
    img.src = src;
  }
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
  dodajStructuredData();
});
