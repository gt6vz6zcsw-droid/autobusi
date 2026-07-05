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
    tip: "Spratni (double-decker) autobus",
    mesta: "93",
    godiste: 2003,
    gorivo: "Dizel",
    oprema: ["Dva nivoa sedišta", "Klima uređaj", "Audio i video oprema", "Mikrofon za vodiča", "Veliki prostor za prtljag"],
    opis: "Naš najveći autobus — spratni Van Hool Astromega sa 93 mesta, idealan za velike grupe, ekskurzije i organizovana putovanja. Dva nivoa sedišta pružaju odličan pregled i udobnost na dužim relacijama."
  },
  {
    id: "van-hool-t8-astro",
    naziv: "Van Hool T8 TD 927 Astro",
    tip: "Spratni (double-decker) autobus",
    mesta: "89",
    godiste: 2002,
    gorivo: "Dizel",
    oprema: ["Dva nivoa sedišta", "Klima uređaj", "Audio i video oprema", "Mikrofon za vodiča", "Veliki prostor za prtljag"],
    opis: "Spratni autobus sa 89 mesta — velik kapacitet uz udobnost na oba nivoa. Pogodan za velike grupe na ekskurzijama i putovanjima u zemlji i inostranstvu."
  },
  {
    id: "bova-magiq",
    naziv: "Bova Magiq",
    tip: "Turistički autobus",
    mesta: "72",
    godiste: 2007,
    gorivo: "Dizel",
    oprema: ["Klima uređaj", "Udobna sedišta sa naslonom", "Audio i video oprema", "Mikrofon za vodiča", "Prostor za prtljag"],
    opis: "Turistički autobus visoke klase sa 72 mesta. Udoban i pouzdan izbor za putovanja, seminare i grupne izlete na svim relacijama."
  },
  {
    id: "vdl-bova-magiq",
    naziv: "VDL Bova Magiq",
    tip: "Turistički autobus",
    mesta: "67",
    godiste: 2006,
    gorivo: "Dizel",
    oprema: ["Klima uređaj", "Udobna sedišta sa naslonom", "Audio i video oprema", "Mikrofon za vodiča", "Prostor za prtljag"],
    opis: "Komforan turistički autobus sa 67 mesta. Odličan odnos kapaciteta i udobnosti za srednje i veće grupe."
  },
  {
    id: "bova-futura",
    naziv: "Bova Futura",
    tip: "Turistički autobus",
    mesta: "65",
    godiste: 2006,
    gorivo: "Dizel",
    oprema: ["Klima uređaj", "Udobna sedišta sa naslonom", "Audio i video oprema", "Mikrofon za vodiča", "Prostor za prtljag"],
    opis: "Turistički autobus sa 65 mesta, prepoznatljiv po udobnosti i pouzdanosti. Pravi izbor za putovanja i ekskurzije."
  },
  {
    id: "neobus-407vt",
    naziv: "Neobus 407VT",
    tip: "Autobus",
    mesta: "53",
    godiste: 2002,
    gorivo: "Dizel",
    oprema: ["Klima uređaj", "Udobna sedišta", "Audio oprema", "Prostor za prtljag"],
    opis: "Autobus sa 53 mesta, pogodan za srednje grupe — izlete, transfere i prevoz na kraćim i dužim relacijama."
  },
  {
    id: "neoplan-cityliner",
    naziv: "Neoplan Cityliner",
    tip: "Turistički autobus",
    mesta: "52",
    godiste: 2006,
    gorivo: "Dizel",
    oprema: ["Klima uređaj", "Udobna sedišta sa naslonom", "Audio i video oprema", "Mikrofon za vodiča", "Prostor za prtljag"],
    opis: "Neoplan Cityliner sa 52 mesta — udoban turistički autobus, idealan za manje i srednje grupe koje traže komfor na putovanju."
  },
  {
    id: "mercedes-sprinter",
    naziv: "Mercedes Sprinter 518 CDI",
    tip: "Minibus",
    mesta: "19+1",
    godiste: 2007,
    gorivo: "Dizel",
    oprema: ["Klima uređaj", "Udobna sedišta", "Kompaktan i okretan"],
    opis: "Minibus Mercedes Sprinter sa 19+1 mesta — savršen za manje grupe, transfere do aerodroma i banja, i kraća putovanja. Ekonomičan i praktičan."
  }
];
