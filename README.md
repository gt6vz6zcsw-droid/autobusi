# autobusi.co.rs — sajt firme Viaggio Tours Čačak

Statički višestranični sajt (HTML/CSS/JS, bez baze i bez servera).
Katalog voznog parka sa zasebnom stranicom za svaki autobus, usluge i kontakt.

## Stranice

- `index.html` — Početna (hero, zašto mi, izdvojeni autobusi)
- `usluge.html` — Usluge
- `vozni-park.html` — svih 8 autobusa (klik na autobus → detalji)
- `autobus.html` — stranica pojedinačnog autobusa (galerija + opis), otvara se sa `?id=...`
- `o-nama.html`, `kontakt.html`

## Šta menjaš (i gde)

**Sve što treba da diraš je u `podaci.js`:**
- `KONTAKT` — telefon, e-mail, adresa (menja se na jednom mestu, važi svuda)
- `BUSES` — spisak autobusa: naziv, broj mesta, godište, gorivo, oprema, opis

`sajt.js` je logika (meni, footer, galerija) — njega ne treba dirati.

## Slike

- **Logo:** `images/logo.png` (za svetlu podlogu) i `images/logo-white.png` (za tamnu) — ne diraj.
- **Autobusi:** ubaci u `images/` kao `<id>-1.jpg`, `<id>-2.jpg` ... (do 6 po autobusu).
  Imena ID-jeva su u `images/PROCITAJ.txt`. Dok slika nema, stoji ikonica.

## Objava (Render Static Site)

Repo je već povezan sa GitHub-om (`gt6vz6zcsw-droid/autobusi`) i sa Render Static Site.
**Svaki `git push` automatski osveži živi sajt.** Za povezivanje domena `autobusi.co.rs`
vidi Render → Settings → Custom Domains (čeka da domen kod registra UNLIMITED.RS
pređe iz "Na čekanju" u "Aktivan").

## Lokalno

Otvori bilo koju `.html` u browseru — radi bez servera.
Napomena: pošto se meni i podaci učitavaju JS-om, najbolje je otvoriti sajt preko
`http://` (npr. `python3 -m http.server`) umesto direktno kao `file://`.
