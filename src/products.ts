export type Product = {
    id: string,
    title: string,
    description: string,
    image_path: string,
    price: string,
    category: string
}

const products:Array<Product> = [];

products.push({
    id: "1",
    title: "31607000 Focus baterija za lavabo 100 chrome",
    description: "Focus baterija za lavabo 100 chrome. Jednoručna slavina ima keramičku glavu i mogućnost podešavanja maksimalne temperature. Pogodna je za protočne bojlere.Ograničavač protoka vode od 5 litara u minuti. Ima QuickClean aerator za jednostavno uklanjanje kamenca i poklopac za sifon 1¼”.",
    image_path: "image_product_1",
    price: "12.766,01 RSD / KOM",
    category: "Slavine za lavabo"
});

products.push({
    id: "2",
    title: "ARCHITECTURA LAVABO 55 (550X470MM)",
    description: "Architectura konzolni lavabo 55 cm brenda Villeroy&Boch ističe se lepim dizajnom i visokim nivooom funkcionalnosti. Keramika visokog kvaliteta za svačiji ukus.Sanitarna keramika je otporna na ogrebotine i udarce. Centralni otvor za slavinu. CeramicPlus za brzo i higijensko čišćenje. Dokazano je da AntiBac smanjuje rast bakterija za 99,9%. Opcionalni EasiAccess - uklonjiva zamka za miris.",
    image_path: "image_product_2",
    price: "9.635,52 RSD / KOM",
    category: "Lavaboi"
});

products.push({
    id: "3",
    title: "VELIS BOJLER 100L - EVO EU",
    description: "UVOZNIK : ENMON D.O.O. BEOGRAD ZEMLJA POREKLA : Italija",
    image_path: "image_product_3",
    price: "47.178,36 RSD / KOM",
    category: "Bojleri"
});

products.push({
    id: "4",
    title: "AVENTO KONZOLNI BIDE",
    description: "Avento konzolni bide kao dodatak u modernom kupatilu. Odličan dizajn, praktičan, lagan bide - idealan i za mala kupatila. Trendi mat izgled u kamenobeloj boji.Izrađen od sanitarne keramike koja je posebno dugotrajna i laka za čišćenje. CeramicPlus za brzo i higijensko čišćenje. Glatke površine sa bočnih strana olakšavaju čišćenje. Opciono dostupno: izlazni ventil sa keramičkim poklopcem.",
    image_path: "image_product_4",
    price: "26.576,31 RSD / KOM",
    category: "Bidei"
});

products.push({
    id: "5",
    title: "VITA COLORATA SLAVINA ZA SUDOPERU BLACK",
    description: "Jako niska migracija metala sa unutrašnje strane tokom protoka vode. Dozvoljena količina migracije olova je 0,5%, a Enmon baterije imaju svega 0,109%. Otpornost baterije na pritisak vode je 10 bara maksimalna dozvoljena temperature je do 80 stepeni. Baterija mora da sadrži minimalno 58% bakra i 32% cinka. Enmon baterije sadrže 60% bakra i 35% cinka što ih čini apsolutnim liderom u kavlitetu. One sadrže i keramičke mešače renomiranog proizvođača Sedal, poseduju visoku hermetičnost i galvansku zaštitu.",
    image_path: "image_product_5",
    price: "5.512,77 RSD / KOM",
    category: "Slavine za sudoperu"
});

products.push({
    id: "6",
    title: "MARINA OGLEDALO SA ORMARIĆEM I RASVETOM (600A3)",
    description: "Avento konzolni bide kao dodatak u modernom kupatilu. Odličan dizajn, praktičan, lagan bide - idealan i za mala kupatila. Trendi mat izgled u kamenobeloj boji.Izrađen od sanitarne keramike koja je posebno dugotrajna i laka za čišćenje. CeramicPlus za brzo i higijensko čišćenje. Glatke površine sa bočnih strana olakšavaju čišćenje. Opciono dostupno: izlazni ventil sa keramičkim poklopcem.",
    image_path: "image_product_6",
    price: "12.240,00 RSD / KOM",
    category: "Ogledalo sa ormarićem"
});

export default products;