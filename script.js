// ============================================================
// KONTAKT PODACI — izmeni samo ovde, sajt se svuda ažurira sam
// ============================================================
const KONTAKT = {
  telefon: "06X XXX XXXX",        // TODO: upiši pravi broj, npr. "064 123 4567"
  telefonLink: "+3816XXXXXXXX",   // TODO: isti broj u međunarodnom formatu, bez razmaka
  email: "kontakt@autobusi.co.rs" // TODO: upiši pravi e-mail
};
// ============================================================

document.querySelectorAll(".js-phone").forEach(el => el.textContent = KONTAKT.telefon);
document.querySelectorAll(".js-email").forEach(el => el.textContent = KONTAKT.email);
document.querySelectorAll(".js-tel-link").forEach(el => el.href = "tel:" + KONTAKT.telefonLink);
document.querySelectorAll(".js-mail-link").forEach(el => el.href = "mailto:" + KONTAKT.email);

document.getElementById("year").textContent = new Date().getFullYear();

// Slike autobusa: ako fajl iz data-img postoji u images/, prikaži ga umesto ikonice
document.querySelectorAll(".bus-img[data-img]").forEach(el => {
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url('${el.dataset.img}')`;
    el.classList.add("has-photo");
  };
  img.src = el.dataset.img;
});

// Zatvori mobilni meni posle klika na link
document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () => document.querySelector(".nav-links").classList.remove("open"))
);

// Strukturirani podaci za Google (LocalBusiness)
const ld = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Viaggio Tours",
  "description": "Vanlinijski autobuski prevoz putnika u zemlji i inostranstvu. Ekskurzije, transferi, izleti, prevoz za firme.",
  "url": "https://autobusi.co.rs/",
  "telephone": KONTAKT.telefonLink,
  "email": KONTAKT.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vojvode Stepe 59",
    "addressLocality": "Čačak",
    "addressCountry": "RS"
  }
};
const ldScript = document.createElement("script");
ldScript.type = "application/ld+json";
ldScript.textContent = JSON.stringify(ld);
document.head.appendChild(ldScript);
