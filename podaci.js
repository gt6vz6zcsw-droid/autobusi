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
    naziv: "Van Hool TD 927 Astromega",
    tip: "Dvospratni turistički autobus",
    mesta: "93",
    godiste: 2003,
    gorivo: "Dizel",
    oprema: ["Dva nivoa putničkog prostora", "Klima uređaj", "Audio i video oprema", "Mikrofon", "Prostor za prtljag"],
    opis: "Dvospratni (double-decker) turistički autobus kapaciteta 93 sedišta. Zahvaljujući velikom kapacitetu namenjen je većim grupama na dužim relacijama — organizovanim putovanjima, ekskurzijama i turama u zemlji i inostranstvu."
  },
  {
    id: "van-hool-t8-astro",
    naziv: "Van Hool T8 TD 927 Astro",
    tip: "Dvospratni turistički autobus",
    mesta: "89",
    godiste: 2002,
    gorivo: "Dizel",
    oprema: ["Dva nivoa putničkog prostora", "Klima uređaj", "Audio i video oprema", "Mikrofon", "Prostor za prtljag"],
    opis: "Dvospratni turistički autobus kapaciteta 89 sedišta. Kombinuje visok kapacitet i putnu udobnost na oba nivoa, čime je pogodan za veće grupe na dužim putovanjima."
  },
  {
    id: "bova-magiq",
    naziv: "Bova Magiq",
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
    naziv: "Bova Futura",
    tip: "Turistički autobus",
    mesta: "65",
    godiste: 2006,
    gorivo: "Dizel",
    oprema: ["Klima uređaj", "Putnička sedišta sa naslonom", "Audio i video oprema", "Mikrofon", "Prostor za prtljag"],
    opis: "Turistički autobus kapaciteta 65 sedišta. Namenjen putovanjima i ekskurzijama srednjih i većih grupa na domaćim i međunarodnim relacijama."
  },
  {
    id: "neobus-407vt",
    naziv: "Neobus 407VT",
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
    naziv: "Mercedes Sprinter 518 CDI",
    tip: "Minibus",
    mesta: "20",
    godiste: 2007,
    gorivo: "Dizel",
    oprema: ["Klima uređaj", "Putnička sedišta", "Prostor za prtljag"],
    opis: "Minibus kapaciteta 20 sedišta. Ekonomično rešenje za manje grupe, transfere do aerodroma i banja, kao i za kraća putovanja."
  }
];
