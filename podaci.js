// =====================================================================
//  PODACI SAJTA — ovo je jedini fajl koji ti treba da menjaš.
//  (logika sajta je u sajt.js — njega ne diraj)
// =====================================================================

// --- Kontakt (menja se na jednom mestu, važi na celom sajtu) ---
const KONTAKT = {
  telefon: "066 809 7298",
  telefonLink: "+381668097298",
  email: "viaggiotours032@outlook.com",
  adresa: "Vojvode Stepe 59, Čačak"
};

// --- Vozni park -------------------------------------------------------
//  Svaki autobus ima svoju stranicu (klikom sa "Vozni park").
//  SLIKE: ubaci u images/ sa imenom  <id>-1.jpg, <id>-2.jpg ...  (do 6 komada)
//         npr. za Astromegu:  van-hool-astromega-1.jpg, van-hool-astromega-2.jpg
//  Dok slika nema, prikazuje se ikonica — ništa nije pokvareno.
//  OPIS i OPREMA su predlog — slobodno izmeni po stvarnom stanju vozila.
const BUSES = [
  {
    id: "van-hool-astromega",
    naziv: "Van Hool Astromega",
    tip: "Dvospratni turistički autobus",
    mesta: "93",
    godiste: 2003,
    gorivo: "Dizel",
    oprema: ["Dva nivoa putničkog prostora", "Klima uređaj", "Audio i video oprema", "Mikrofon", "Prostor za prtljag"],
    opis: "Dvospratni (double-decker) turistički autobus kapaciteta 93 sedišta. Zahvaljujući velikom kapacitetu namenjen je većim grupama na dužim relacijama — organizovanim putovanjima, ekskurzijama i turama u zemlji i inostranstvu."
  },
  {
    id: "van-hool-t8-astro",
    naziv: "Van Hool Astromega",
    tip: "Dvospratni turistički autobus",
    mesta: "89",
    godiste: 2002,
    gorivo: "Dizel",
    oprema: ["Dva nivoa putničkog prostora", "Klima uređaj", "Audio i video oprema", "Mikrofon", "Prostor za prtljag"],
    opis: "Dvospratni turistički autobus kapaciteta 89 sedišta. Kombinuje visok kapacitet i putnu udobnost na oba nivoa, čime je pogodan za veće grupe na dužim putovanjima."
  },
  {
    id: "bova-magiq",
    naziv: "VDL Bova Magiq",
    tip: "Turistički autobus",
    mesta: "72",
    godiste: 2007,
    gorivo: "Dizel",
    oprema: ["Klima uređaj", "Putnička sedišta sa naslonom", "Audio i video oprema", "Mikrofon", "Prostor za prtljag"],
    opis: "Turistički autobus kapaciteta 72 sedišta. Pogodan za putovanja, seminare i grupne izlete, uz nivo udobnosti primeren dužim relacijama."
  },
  {
    id: "vdl-bova-magiq",
    naziv: "VDL Bova Magiq",
    tip: "Turistički autobus",
    mesta: "67",
    godiste: 2006,
    gorivo: "Dizel",
    oprema: ["Klima uređaj", "Putnička sedišta sa naslonom", "Audio i video oprema", "Mikrofon", "Prostor za prtljag"],
    opis: "Turistički autobus kapaciteta 67 sedišta. Odgovara srednjim i većim grupama, uz uravnotežen odnos kapaciteta i putne udobnosti."
  },
  {
    id: "bova-futura",
    naziv: "VDL Bova Futura",
    tip: "Turistički autobus",
    mesta: "65",
    godiste: 2006,
    gorivo: "Dizel",
    oprema: ["Klima uređaj", "Putnička sedišta sa naslonom", "Audio i video oprema", "Mikrofon", "Prostor za prtljag"],
    opis: "Turistički autobus kapaciteta 65 sedišta. Namenjen putovanjima i ekskurzijama srednjih i većih grupa na domaćim i međunarodnim relacijama."
  },
  {
    id: "neobus-407vt",
    naziv: "Neobus 407 VT",
    tip: "Međugradski autobus",
    mesta: "53",
    godiste: 2002,
    gorivo: "Dizel",
    oprema: ["Klima uređaj", "Putnička sedišta", "Audio oprema", "Prostor za prtljag"],
    opis: "Autobus kapaciteta 53 sedišta. Pogodan za srednje grupe — izlete, transfere i prevoz na kraćim i srednjim relacijama."
  },
  {
    id: "neoplan-cityliner",
    naziv: "Neoplan Cityliner",
    tip: "Turistički autobus",
    mesta: "52",
    godiste: 2006,
    gorivo: "Dizel",
    oprema: ["Klima uređaj", "Putnička sedišta sa naslonom", "Audio i video oprema", "Mikrofon", "Prostor za prtljag"],
    opis: "Turistički autobus kapaciteta 52 sedišta. Namenjen manjim i srednjim grupama koje traže putnu udobnost na dužim relacijama."
  },
  {
    id: "mercedes-sprinter",
    naziv: "Mercedes Sprinter",
    tip: "Minibus",
    mesta: "20",
    godiste: 2007,
    gorivo: "Dizel",
    oprema: ["Klima uređaj", "Putnička sedišta", "Prostor za prtljag"],
    opis: "Minibus kapaciteta 20 sedišta. Ekonomično rešenje za manje grupe, transfere do aerodroma i banja, kao i za kraća putovanja."
  }
];

// --- Česta pitanja (prikazuju se na stranici Usluge) -----------------
//  Slobodno dodaj, izmeni ili obriši pitanja. p = pitanje, o = odgovor.
const FAQ = [
  {
    p: "Gde sve vozite?",
    o: "Vozimo u zemlji i inostranstvu, bez ograničenja destinacije — od jednodnevnih izleta do višednevnih putovanja širom Evrope."
  },
  {
    p: "Kako se plaća prevoz?",
    o: "Plaćanje je moguće gotovinom, uz fiskalni račun, ili preko računa — uz fiskalni račun ili SEF fakturu. Radimo sa fizičkim licima, firmama i agencijama."
  },
  {
    p: "Koliko unapred treba rezervisati autobus?",
    o: "Zavisi od termina. U toku sezone pojedine autobuse je potrebno rezervisati i mesec dana unapred, pa preporučujemo da nas kontaktirate na vreme."
  },
  {
    p: "Šta je uključeno u cenu?",
    o: "U cenu ture uključeni su prevoz i vozač. Troškove putarine, čekpointa i sličnih dažbina snosi korisnik prevoza, ukoliko nije drugačije dogovoreno."
  },
  {
    p: "Da li na dužim relacijama idu dva vozača?",
    o: "Da. Na dužim relacijama angažujemo dva vozača, u skladu sa propisima o radnom vremenu i odmoru posade vozila."
  },
  {
    p: "Koliko putnika možete da prevezete?",
    o: "Najveći autobus prima 93 putnika. Za veće grupe angažujemo više vozila, a za manje grupe na raspolaganju je i minibus."
  },
  {
    p: "Da li organizujete đačke ekskurzije?",
    o: "Da — to je jedna od naših primarnih delatnosti. Pored autobuskog prevoza, u okviru turističke agencije Viaggio Travel organizujemo i same ekskurzije, uz svu potrebnu dokumentaciju."
  },
  {
    p: "Šta ako se putovanje otkaže?",
    o: "Otkazivanje rešavamo dogovorno, uz blagovremeno obaveštenje o otkazu."
  },
  {
    p: "Radite li jednodnevne i višednevne ture?",
    o: "Da, organizujemo i jednodnevne i višednevne ture."
  }
];
