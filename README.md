# autobusi.co.rs — sajt firme Viaggio Tours

Statički sajt (HTML/CSS/JS, bez baze i bez servera) — katalog voznog parka,
usluge i kontakt, da ljudi zovu za prevoz.

## Fajlovi

- `index.html` — ceo sajt (jedna stranica sa sekcijama)
- `style.css` — izgled
- `script.js` — **OVDE SE MENJA TELEFON I E-MAIL** (blok `KONTAKT` na vrhu)
- `images/` — fotografije autobusa (vidi `images/PROCITAJ.txt` za imena fajlova)

## Pre objave — obavezno

1. U `script.js` upiši pravi telefon i e-mail (sad su placeholder-i `06X XXX XXXX`).
2. Proveri broj mesta za Mercedes Sprinter (upisano 19 — proveri u saobraćajnoj).
3. Ubaci slike autobusa u `images/` (nije obavezno za start, ali mnogo znači).

## Objava na Render (besplatno, bez uspavljivanja)

1. Napravi GitHub repo i pushuj ovaj folder.
2. Na Render: **New → Static Site** → izaberi repo.
   - Build Command: ostavi prazno
   - Publish Directory: `.`
3. Kad se sajt digne, u Render → Settings → Custom Domains dodaj
   `autobusi.co.rs` i `www.autobusi.co.rs`.
4. Kod registra gde je kupljen domen podesi DNS po uputstvu koje Render
   prikaže uz svaki domen (A zapis za autobusi.co.rs, CNAME za www).

Static Site na Renderu je besplatan i NE uspavljuje se (za razliku od
besplatnih web servisa) — za prezentacioni sajt je to idealno.

## Lokalno pokretanje

Samo otvori `index.html` u browseru — nema instalacije, nema servera.
