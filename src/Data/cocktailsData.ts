
import alexander from '../../src/Imgs/Cocktails/alexander.webp'
import americano from '../../src/Imgs/Cocktails/americano.webp'
import aviation from '../../src/Imgs/Cocktails/aviation.webp'
import basilSmash from '../../src/Imgs/Cocktails/basilSmash.webp'
import beesKnees from '../../src/Imgs/Cocktails/beesknees.webp'
import bellini from '../../src/Imgs/Cocktails/bellini.webp'
import blackRussian from '../../src/Imgs/Cocktails/blackrussian.webp'
import bloodyMary from '../../src/Imgs/Cocktails/bloodymary.webp'
import boulevardier from '../../src/Imgs/Cocktails/boulevardier.webp'
import caipirinha from '../../src/Imgs/Cocktails/caipirinha.webp'
import champagneCocktail from '../../src/Imgs/Cocktails/champagnecocktail.webp'
import cloverClub from '../../src/Imgs/Cocktails/cloverclub.webp'
import cosmopolitan from '../../src/Imgs/Cocktails/cosmopolitan.webp'
import cubaLibre from '../../src/Imgs/Cocktails/cubalibre.webp'
import daiquiri from '../../src/Imgs/Cocktails/daiquiri.webp'
import dryMartini from '../../src/Imgs/Cocktails/drymartini.webp'
import french75 from '../../src/Imgs/Cocktails/french75.webp'
import frenchConection from '../../src/Imgs/Cocktails/frenchConection.webp'
import garibaldi from '../../src/Imgs/Cocktails/garibaldi.webp'
import ginFizz from '../../src/Imgs/Cocktails/ginfizz.webp'
import grasshoper from '../../src/Imgs/Cocktails/grasshopper.webp'
import hankyPanky from '../../src/Imgs/Cocktails/hankypanky.webp'
import irishCofee from '../../src/Imgs/Cocktails/irishcofee.webp'
import johnCollins from '../../src/Imgs/Cocktails/johncollins.webp'
import kir from '../../src/Imgs/Cocktails/kir.webp'
import lastWord from '../../src/Imgs/Cocktails/lastword.webp'
import longIsland from '../../src/Imgs/Cocktails/longislandicedtea.webp'
import maiTai from '../../src/Imgs/Cocktails/maitai.webp'
import manhattan from '../../src/Imgs/Cocktails/manhattan.webp'
import margarita from '../../src/Imgs/Cocktails/margarita.webp'
import martinez from '../../src/Imgs/Cocktails/martinez.webp'
import mimosa from '../../src/Imgs/Cocktails/mimosa.webp'
import mintJulep from '../../src/Imgs/Cocktails/mintjulep.webp'
import mojito from '../../src/Imgs/Cocktails/mojito.webp'
import moscowMule from '../../src/Imgs/Cocktails/moscowmule.webp'
import negroni from '../../src/Imgs/Cocktails/negroni.webp'
import newYorkSour from '../../src/Imgs/Cocktails/newyorksour.webp'
import oldFashioned from '../../src/Imgs/Cocktails/oldfashioned.webp'
import paloma from '../../src/Imgs/Cocktails/paloma.webp'
import paperPlane from '../../src/Imgs/Cocktails/paperplane.webp'
import penicillin from '../../src/Imgs/Cocktails/penicillin.webp'
import piñaColada from '../../src/Imgs/Cocktails/piñacolada.webp'
import piscoSour from '../../src/Imgs/Cocktails/piscosour.webp'
import plantersPunch from '../../src/Imgs/Cocktails/planterspunch.webp'
import pornstarMartini from '../../src/Imgs/Cocktails/pornstarmartini.webp'
import rustyNail from '../../src/Imgs/Cocktails/rustynail.webp'
import sazerac from '../../src/Imgs/Cocktails/sazerac.webp'
import seaBreeze from '../../src/Imgs/Cocktails/seabreeze.webp'
import sexOnTheBeach from '../../src/Imgs/Cocktails/sexonthebeach.webp'
import sideCar from '../../src/Imgs/Cocktails/sidecar.webp'
import southSide from '../../src/Imgs/Cocktails/southside.webp'
import spritz from '../../src/Imgs/Cocktails/spritz.webp'
import tequilaSunrise from '../../src/Imgs/Cocktails/tequilasunrise.webp'
import vesper from '../../src/Imgs/Cocktails/vesper.webp'
import whiskySour from '../../src/Imgs/Cocktails/whiskeysour.webp'
import whiteLady from '../../src/Imgs/Cocktails/whitelady.webp'
import whiteRussian from '../../src/Imgs/Cocktails/whiterussian.webp'
import zombie from '../../src/Imgs/Cocktails/zombie.webp'
import kirRoyal from '../../src/Imgs/Cocktails/kirRoyal.webp'
import barracuda from '../../src/Imgs/Cocktails/barracuda.jpg'
import espresso from '../../src/Imgs/Cocktails/espressomartini.webp'
import gimlet from '../../src/Imgs/Cocktails/gimlet.jpg'
import hurricane from '../../src/Imgs/Cocktails/hurricane.jpg'
import godFather from '../../src/Imgs/Cocktails/godFather.jpg'
import robRoy from '../../src/Imgs/Cocktails/robRoy.webp'
import blueLagoon from '../../src/Imgs/Cocktails/blueLagoon.webp'
import bijou from '../../src/Imgs/Cocktails/bijou.jpg'
import kamikaze from '../../src/Imgs/Cocktails/kamikaze.jpeg'
import sweetMartini from '../../src/Imgs/Cocktails/sweetMartini.jpeg'
import hotelNacional from '../../src/Imgs/Cocktails/hotelnacional.jpg'
import gibson from '../../src/Imgs/Cocktails/gibson.webp'
import clarito from '../../src/Imgs/Cocktails/clarito.jpg'
import fernetCola from '../../src/Imgs/Cocktails/fernet-con-coca.webp'
import destornillador from '../../src/Imgs/Cocktails/destornillador.jpg'
import gintonic from '../../src/Imgs/Cocktails/gintonic.avif'

type FlavorsData = 'Aperitivo' | 'Dulce' | 'Fresco' | 'Tropical' | 'Frutal' | 'Floral' | 'Herbal / Botánico' | 'Cremoso' | 'Sparkling' | 'Seco' | 'Picante' | 'Salado' |'Cítrico'

export type CocktailData = {
  id: number,
  name: string,
  img: string,
  flavor: FlavorsData[],
  ingredients: string[],
  liquor: string[],
  description: string[]
}


export const cocktailsData: CocktailData[] = [
  {
    id: 1,
    name: "Americano",
    img: americano,
    flavor: ["Aperitivo"],
    ingredients: [
      "30 ml Campari",
      "30 ml Vermouth Rosso",
      "Soda"
    ],
    liquor: ["Campari", "Vermouth Rosso"],
    description: [
      "Servir Campari y Vermouth en vaso old fashioned con hielo.",
      "Completar con soda.",
      "Decorar con rodaja de naranja."
    ]
  },
  {
    id: 2,
    name: "Aperol Spritz",
    img: spritz,
    flavor: ["Aperitivo", "Dulce", 'Sparkling'],
    ingredients: [
      "90 ml Prosecco",
      "60 ml Aperol",
      "30 ml Agua con gas"
    ],
    liquor: ["Champagne", "Aperol"],
    description: [
      "Servir Aperol y prosecco en vaso con hielo.",
      "Agregar agua con gas.",
      "Decorar con rodaja de naranja."
    ]
  },
  {
    id: 3,
    name: "Aviation",
    img: aviation,
    flavor: ["Seco", "Floral"],
    ingredients: [
      "45 ml Gin",
      "15 ml Licor de marrasquino",
      "15 ml Jugo de limón fresco",
      "1 dash Crema de violeta (opcional)"
    ],
    liquor: ["Gin", "Licor de Maraschino"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en copa fría.",
      "Decorar con cereza."
    ]
  },
  {
    id: 4,
    name: "Manhattan",
    img: manhattan,
    flavor: ["Aperitivo", "Seco"],
    ingredients: [
      "50 ml rye whiskey (o bourbon)",
      "20 ml Vermouth Rosso",
      "1 dash de angostura bitters"
    ],
    liquor: ["Whisky", "Vermouth Rosso"],
    description: [
      "Verter todos los ingredientes en un vaso mezclador con hielo.",
      "Remover bien hasta enfriar.",
      "Colar en una copa cóctel fría.",
      "Decorar con una cereza al marrasquino."
    ]
  },
  {
    id: 77,
    name: "Basil Smash",
    img: basilSmash,
    flavor: ["Herbal / Botánico", "Fresco"],
    ingredients: [
      "50 ml gin",
      "25 ml jugo de limón",
      "20 ml jarabe simple",
      "8-10 hojas de albahaca fresca"
    ],
    liquor: ["Gin"],
    description: [
      "Machacar la albahaca junto con el jarabe simple y el jugo de limón en una coctelera.",
      "Agregar el gin y hielo.",
      "Agitar bien hasta enfriar.",
      "Colar en un vaso bajo con hielo.",
      "Decorar con una ramita de albahaca fresca."
    ]
  },
  {
    id: 5,
    name: "Barracuda",
    img: barracuda,
    flavor: ["Dulce", "Frutal", "Sparkling"],
    ingredients: [
      "45 ml Ron dorado",
      "90 ml Jugo de piña",
      "30 ml Prosecco",
      "15 ml Jugo de lima fresco",
      "15 ml de Almibar"
    ],
    liquor: ["Ron", "Champagne"],
    description: [
      "Batir ron, jugo de piña, lima y jarabe con hielo.",
      "Colar en copa flauta.",
      "Completar con prosecco."
    ]
  },
  {
    id: 6,
    name: "Bee's Knees",
    img: beesKnees,
    flavor: ["Dulce", "Fresco"],
    ingredients: [
      "60 ml Gin",
      "20 ml Jugo de limón",
      "20 ml Miel"
    ],
    liquor: ["Gin"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en copa fría.",
      "Decorar con twist de limón."
    ]
  },
  {
    id: 72,
    name: "Bellini",
    img: bellini,
    flavor: ["Dulce", "Frutal", "Sparkling"],
    ingredients: [
      "50 ml puré de durazno blanco",
      "100 ml Prosecco"
    ],
    liquor: ["Champagne"],
    description: [
      "Verter el puré de durazno en una copa flauta.",
      "Agregar lentamente el Prosecco frío.",
      "Mezclar suavemente sin agitar.",
      "Opcional: decorar con una rodaja de durazno."
    ]
  },
  {
    id: 7,
    name: "Bijou",
    img: bijou,
    flavor: ["Aperitivo", "Herbal / Botánico"],
    ingredients: [
      "30 ml Gin",
      "30 ml Vermouth Rosso",
      "30 ml Chartreuse verde",
      "1 dash Angostura bitters"
    ],
    liquor: ["Gin", "Vermouth Rosso", "Chartreuse"],
    description: [
      "Remover todos los ingredientes con hielo.",
      "Colar en copa fría.",
      "Decorar con twist de limón."
    ]
  },
  {
    id: 8,
    name: "Black Russian",
    img: blackRussian,
    flavor: ["Seco", 'Dulce', 'Herbal / Botánico' ],
    ingredients: [
      "50 ml Vodka",
      "20 ml Licor de Café"
    ],
    liquor: ["Vodka", "Licor de Café"],
    description: [
      "Servir ingredientes en vaso old fashioned con hielo.",
      "Remover suavemente."
    ]
  },
  {
    id: 9,
    name: "Bloody Mary",
    img: bloodyMary,
    flavor: ["Salado", "Picante", 'Herbal / Botánico'],
    ingredients: [
      "45 ml Vodka",
      "90 ml Jugo de tomate",
      "15 ml Jugo de limón fresco",
      "2 dashes Salsa Worcestershire",
      "1 dash Tabasco",
      "Sal y pimienta"
    ],
    liquor: ["Vodka"],
    description: [
      "Batir suavemente todos los ingredientes con hielo.",
      "Colar en vaso alto con hielo.",
      "Decorar con apio y rodaja de limón."
    ]
  },
  {
    id: 10,
    name: "Blue Lagoon",
    img: blueLagoon,
    flavor: ["Dulce", 'Fresco'],
    ingredients: [
      "45 ml Vodka",
      "15 ml Curaçao azul",
      "30 ml Limonada"
    ],
    liquor: ["Vodka", "Blue Curaçao"],
    description: [
      "Servir todos los ingredientes en vaso alto con hielo.",
      "Remover suavemente.",
      "Decorar con rodaja de limón."
    ]
  },
  {
    id: 11,
    name: "Caipirinha",
    img: caipirinha,
    flavor: ["Fresco", "Dulce", "Frutal"],
    ingredients: [
      "60 ml Cachaça",
      "4 trozos de lima",
      "2 cucharaditas de azúcar",
      "Opcional maracuyá, frutos rojos, frutilla, etc."
    ],
    liquor: ["Cachaça"],
    description: [
      "Macerar lima con azúcar en vaso old fashioned.",
      "Agregar hielo y cachaça.",
      "Remover suavemente."
    ]
  },
  {
    id: 12,
    name: "Caipiroska",
    img: caipirinha,
    flavor: ["Fresco", "Dulce", "Frutal"],
    ingredients: [
      "60 ml Vodka",
      "4 trozos de lima",
      "2 cucharaditas de azúcar",
      "Opcional maracuyá, frutos rojos, frutilla, etc."
    ],
    liquor: ["Vodka"],
    description: [
      "Macerar lima con azúcar en vaso old fashioned.",
      "Agregar hielo y vodka.",
      "Remover suavemente."
    ]
  },
  {
    id: 13,
    name: "Champagne Cocktail",
    img: champagneCocktail,
    flavor: ["Dulce", "Sparkling"],
    ingredients: [
      "1 cubo de azúcar",
      "2-3 dashes Angostura bitters",
      "90 ml Champagne",
      "Twist de limón"
    ],
    liquor: ["Champagne"],
    description: [
      "Colocar el cubo de azúcar en copa flauta.",
      "Agregar bitters y mojar con champagne.",
      "Completar con champagne.",
      "Decorar con twist de limón."
    ]
  },
  {
    id: 73,
    name: "Clover Club",
    img: cloverClub,
    flavor: ["Fresco", "Dulce", 'Frutal'],
    ingredients: [
      "45 ml gin",
      "15 ml Vermouth Dry",
      "15 ml jugo de limón",
      "15 ml jarabe de frambuesa",
      "1 clara de huevo (opcional)"
    ],
    liquor: ["Gin", "Vermouth Dry"],
    description: [
      "Agregar todos los ingredientes en una coctelera sin hielo y agitar en seco para emulsionar la clara.",
      "Agregar hielo y agitar nuevamente hasta enfriar bien.",
      "Colar y servir en una copa cóctel.",
      "Opcional: decorar con una frambuesa o twist de limón."
    ]
  },
  {
    id: 14,
    name: "Cosmopolitan",
    img: cosmopolitan,
    flavor: ["Fresco", "Dulce", 'Frutal'],
    ingredients: [
      "40 ml Vodka citron",
      "15 ml Cointreau",
      "15 ml Jugo de lima fresco",
      "30 ml Jugo de arándanos"
    ],
    liquor: ["Vodka", "Cointreau"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en copa de cóctel fría.",
      "Decorar con twist de lima."
    ]
  },
  {
    id: 74,
    name: "Cuba Libre",
    img: cubaLibre,
    flavor: ["Dulce", 'Fresco'],
    ingredients: [
      "50 ml ron blanco",
      "120 ml Coca-Cola",
      "10 ml jugo de lima"
    ],
    liquor: ["Ron"],
    description: [
      "Llenar un vaso highball con hielo.",
      "Agregar el ron y el jugo de lima.",
      "Completar con Coca-Cola.",
      "Mezclar suavemente y decorar con una rodaja de lima."
    ]
  }
  ,
  {
    id: 15,
    name: "Daiquiri",
    img: daiquiri,
    flavor: ["Fresco", "Dulce"],
    ingredients: [
      "45 ml Ron blanco",
      "25 ml Jugo de lima fresco",
      "15 ml de Almibar"
    ],
    liquor: ["Ron"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en copa fría.",
      "Decorar con twist de lima."
    ]
  },
  {
    id: 75,
    name: "Dry Martini",
    img: dryMartini,
    flavor: ["Seco"],
    ingredients: [
      "60 ml gin",
      "10 ml Vermouth Dry"
    ],
    liquor: ["Gin", "Vermouth Dry"],
    description: [
      "Verter el gin y el Vermouth Dry en un vaso mezclador con hielo.",
      "Revolver bien hasta enfriar.",
      "Colar en una copa cóctel fría.",
      "Decorar con una aceituna verde o un twist de limón, según preferencia."
    ]
  }
  ,

  {
    id: 16,
    name: "Espresso Martini",
    img: espresso,
    flavor: ["Dulce", "Aperitivo", 'Herbal / Botánico'],
    ingredients: [
      "40 ml Vodka",
      "30 ml Café espresso frío",
      "20 ml Licor de Café",
      "10 ml de Almibar"
    ],
    liquor: ["Vodka", "Licor de Café"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en copa de cóctel fría.",
      "Decorar con granos de café."
    ]
  },
  {
    id: 17,
    name: "French 75",
    img: french75,
    flavor: ["Seco", "Fresco", "Sparkling"],
    ingredients: [
      "30 ml Gin",
      "15 ml Jugo de limón fresco",
      "15 ml de Almibar",
      "60 ml Champagne"
    ],
    liquor: ["Gin", "Champagne"],
    description: [
      "Batir gin, limón y jarabe con hielo.",
      "Colar en copa flauta.",
      "Completar con champagne.",
      "Decorar con twist de limón."
    ]
  },
  {
    id: 18,
    name: "French Connection",
    img: frenchConection,
    flavor: ["Dulce", 'Herbal / Botánico', 'Seco'],
    ingredients: [
      "30 ml Cognac",
      "30 ml Amaretto"
    ],
    liquor: ["Cognac", "Amaretto"],
    description: [
      "Servir ingredientes en vaso old fashioned con hielo.",
      "Remover suavemente."
    ]
  },
  {
    id: 76,
    name: "Garibaldi",
    img: garibaldi,
    flavor: ["Aperitivo", 'Fresco'],
    ingredients: [
      "50 ml Campari",
      "100 ml jugo de naranja recién exprimido"
    ],
    liquor: ["Campari"],
    description: [
      "Llenar un vaso highball con hielo.",
      "Verter el Campari.",
      "Agregar el jugo de naranja lentamente.",
      "Mezclar suavemente y decorar con una rodaja de naranja."
    ]
  },

  {
    id: 19,
    name: "Gimlet",
    img: gimlet,
    flavor: ["Fresco"],
    ingredients: [
      "60 ml Gin",
      "22.5 ml Jugo de lima fresco",
      "15 ml de Almibar"
    ],
    liquor: ["Gin"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en copa fría.",
      "Decorar con rodaja de lima."
    ]
  },
  {
    id: 20,
    name: "Gin Fizz",
    img: ginFizz,
    flavor: ["Fresco", "Sparkling"],
    ingredients: [
      "45 ml Gin",
      "30 ml Jugo de limón fresco",
      "10 ml de Almibar",
      "Agua con gas"
    ],
    liquor: ["Gin"],
    description: [
      "Batir gin, jugo de limón y jarabe con hielo.",
      "Colar en vaso alto con hielo.",
      "Completar con agua con gas.",
      "Decorar con rodaja de limón."
    ]
  },
  {
    id: 21,
    name: "Godfather",
    img: godFather,
    flavor: ["Dulce", "Herbal / Botánico", 'Seco'],
    ingredients: [
      "35 ml Scotch whisky",
      "35 ml Amaretto"
    ],
    liquor: ["Whisky", "Amaretto"],
    description: [
      "Servir ingredientes en vaso old fashioned con hielo.",
      "Remover suavemente."
    ]
  },
  {
    id: 22,
    name: "Godmother",
    img: godFather,
    flavor: ["Dulce", 'Seco', 'Herbal / Botánico'],
    ingredients: [
      "35 ml Vodka",
      "35 ml Amaretto"
    ],
    liquor: ["Vodka", "Amaretto"],
    description: [
      "Servir ingredientes en vaso old fashioned con hielo.",
      "Remover suavemente."
    ]
  },
  {
    id: 23,
    name: "Alexander",
    img: alexander,
    flavor: ["Dulce", "Cremoso"],
    ingredients: [
      "30 ml Cognac",
      "30 ml crema de cacao (oscura)",
      "30 ml crema de leche"
    ],
    liquor: ["Cognac", "Crema de cacao"],
    description: [
      "Agregar todos los ingredientes en una coctelera con hielo.",
      "Agitar enérgicamente hasta enfriar.",
      "Colar en una copa cóctel fría.",
      "Espolvorear con nuez moscada como decoración."
    ]
  },

  {
    id: 24,
    name: "Piña Colada",
    img: piñaColada,
    flavor: ["Dulce", "Frutal", "Cremoso", 'Tropical'],
    ingredients: [
      "30 ml ron blanco",
      "30 ml crema de coco",
      "90 ml jugo de piña"
    ],
    liquor: ["Ron"],
    description: [
      "Colocar todos los ingredientes en una licuadora con hielo.",
      "Licuar hasta obtener una textura suave.",
      "Servir en un vaso grande o copa hurricane.",
      "Decorar con una rodaja de piña y una cereza."
    ]
  }
  ,
  {
    id: 25,
    name: "Grasshopper",
    img: grasshoper,
    flavor: ["Dulce", "Cremoso"],
    ingredients: [
      "30 ml Licor de menta verde",
      "30 ml Licor de cacao blanco",
      "30 ml Crema"
    ],
    liquor: ["Licor de Menta", "Licor de Cacao"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en copa fría."
    ]
  },

  {
    id: 78,
    name: "Hanky Panky",
    img: hankyPanky,
    flavor: ["Aperitivo", 'Seco', 'Herbal / Botánico'],
    ingredients: [
      "45 ml gin",
      "45 ml Vermouth Rosso (rosso)",
      "1 dash de Fernet Branca"
    ],
    liquor: ["Gin", "Vermouth Rosso", "Fernet"],
    description: [
      "Verter el gin y el Vermouth Rosso en un vaso mezclador con hielo.",
      "Agregar un dash de Fernet Branca.",
      "Revolver bien hasta enfriar.",
      "Colar en una copa cóctel fría.",
      "Decorar con una cáscara de naranja."
    ]
  }
  ,
  {
    id: 27,
    name: "Hurricane",
    img: hurricane,
    flavor: ["Dulce", "Frutal", 'Tropical'],
    ingredients: [
      "45 ml Ron blanco",
      "45 ml Ron oscuro",
      "60 ml Jugo de maracuyá",
      "15 ml Jugo de lima fresco",
      "15 ml de Almibar",
      "7.5 ml Jarabe de granadina"
    ],
    liquor: ["Ron"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en vaso hurricane con hielo.",
      "Decorar con rodaja de naranja y cereza."
    ]
  },
  {
    id: 28,
    name: "Irish Coffee",
    img: irishCofee,
    flavor: ["Dulce", 'Cremoso'],
    ingredients: [
      "40 ml Whiskey irlandés",
      "80 ml Café caliente",
      "30 ml Crema batida",
      "1 cucharadita de azúcar"
    ],
    liquor: ["Whisky"],
    description: [
      "Mezclar el whiskey y el café caliente.",
      "Agregar azúcar y revolver.",
      "Cubrir con crema batida."
    ]
  },
  {
    id: 79,
    name: "John Collins",
    img: johnCollins,
    flavor: ["Fresco"],
    ingredients: [
      "45 ml gin (Old Tom gin para un Tom Collins)",
      "30 ml jugo de limón",
      "15 ml jarabe simple",
      "Soda"
    ],
    liquor: ["Whisky"],
    description: [
      "Llenar un vaso highball con hielo.",
      "Agregar gin, jugo de limón y jarabe simple.",
      "Completar con soda.",
      "Mezclar suavemente y decorar con rodaja de limón y una cereza."
    ]
  },
  {
    id: 30,
    name: "Kamikaze",
    img: kamikaze,
    flavor: ["Fresco"],
    ingredients: [
      "30 ml Vodka",
      "30 ml Triple sec",
      "30 ml Jugo de lima fresco"
    ],
    liquor: ["Vodka", "Triple sec"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en vaso old fashioned con hielo.",
      "Decorar con rodaja de lima."
    ]
  },
  {
    id: 31,
    name: "Kir",
    img: kir,
    flavor: ["Dulce", "Frutal"],
    ingredients: [
      "90 ml Vino blanco seco",
      "10 ml Licor de cassis"
    ],
    liquor: ["Vino", "Licor de Cassis"],
    description: [
      "Servir licor de cassis en copa flauta.",
      "Completar con vino blanco seco.",
      "Decorar con rodaja de limón."
    ]
  },
  {
    id: 32,
    name: "Kir Royal",
    img: kirRoyal,
    flavor: ["Dulce", "Sparkling"],
    ingredients: [
      "90 ml Champagne",
      "10 ml Licor de cassis"
    ],
    liquor: ["Champagne", "Licor de Cassis"],
    description: [
      "Servir licor de cassis en copa flauta.",
      "Completar con champagne."
    ]
  },
  {
    id: 33,
    name: "Last Word",
    img: lastWord,
    flavor: ["Herbal / Botánico", "Fresco"],
    ingredients: [
      "22.5 ml Gin",
      "22.5 ml Licor Chartreuse verde",
      "22.5 ml Licor de marrasquino",
      "22.5 ml Jugo de lima fresco"
    ],
    liquor: ["Gin", "Chartreuse", "Licor Maraschino"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en copa fría."
    ]
  },
  {
    id: 34,
    name: "Mai Tai",
    img: maiTai,
    flavor: ["Dulce", "Frutal", 'Tropical'],
    ingredients: [
    "40 ml ron añejo",
    "20 ml ron blanco",
    "15 ml triple sec",
    "10 ml jarabe de orgeat",
    "10 ml jugo de lima fresco",
    ],
    liquor: ["Ron","Triple sec"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en vaso old fashioned con hielo.",
      "Decorar con rodaja de lima y menta."
    ]
  },
  {
    id: 35,
    name: "Margarita",
    img: margarita,
    flavor: ["Fresco", "Salado"],
    ingredients: [
      "50 ml Tequila",
      "20 ml Triple sec",
      "15 ml Jugo de lima fresco",
      "Sal para escarchar"
    ],
    liquor: ["Tequila", "Triple sec"],
    description: [
      "Escarchar copa con sal.",
      "Batir tequila, triple sec y jugo de lima con hielo.",
      "Colar en copa fría.",
      "Decorar con rodaja de lima."
    ]
  },
  {
    id: 81,
    name: "Martinez",
    img: martinez,
    flavor: ["Dulce", "Aperitivo", 'Herbal / Botánico'],
    ingredients: [
      "45 ml gin",
      "45 ml Vermouth Rosso (rosso)",
      "1 dash de Aperitivo de angostura",
      "1 dash de licor de marrasquino"
    ],
    liquor: ["Gin", "Vermouth Rosso", "Licor Maraschino"],
    description: [
      "Verter todos los ingredientes en un vaso mezclador con hielo.",
      "Revolver bien hasta enfriar.",
      "Colar en una copa cóctel fría.",
      "Decorar con una cáscara de limón o una cereza."
    ]
  }
  ,
  {
    id: 37,
    name: "Mimosa",
    img: mimosa,
    flavor: ["Dulce", "Sparkling"],
    ingredients: [
      "75 ml Champagne",
      "75 ml Jugo de naranja"
    ],
    liquor: ["Champagne"],
    description: [
      "Servir jugo de naranja en copa flauta.",
      "Completar con champagne."
    ]
  },
  {
    id: 82,
    name: "Mint Julep",
    img: mintJulep,
    flavor: ["Dulce", 'Fresco', "Herbal / Botánico"],
    ingredients: [
      "60 ml bourbon",
      "8-10 hojas de menta fresca",
      "15 ml jarabe simple",
      "Agua",
      "Hielo picado"
    ],
    liquor: ["Whisky"],
    description: [
      "Machacar suavemente las hojas de menta con el jarabe simple en un vaso julep o vaso bajo.",
      "Llenar el vaso con hielo picado.",
      "Agregar el bourbon.",
      "Mezclar ligeramente y decorar con una ramita de menta fresca."
    ]
  }
  ,
  {
    id: 38,
    name: "Mojito",
    img: mojito,
    flavor: ["Dulce", "Fresco", 'Herbal / Botánico'],
    ingredients: [
      "40 ml Ron blanco",
      "30 ml Jugo de lima fresco",
      "6 hojas de menta",
      "2 cucharaditas de azúcar",
      "Soda"
    ],
    liquor: ["Ron"],
    description: [
      "Macerar menta, azúcar y lima en vaso alto.",
      "Agregar hielo, ron y soda.",
      "Remover suavemente.",
      "Decorar con ramita de menta."
    ]
  },
  {
    id: 83,
    name: "Moscow Mule",
    img: moscowMule,
    flavor: ['Fresco', 'Dulce', 'Sparkling'],
    ingredients: [
      "50 ml vodka",
      "120 ml ginger beer",
      "15 ml jugo de lima (recién exprimido)"
    ],
    liquor: ["Vodka"],
    description: [
      "Llenar un vaso tipo mug o highball con hielo.",
      "Agregar vodka y jugo de lima.",
      "Completar con ginger beer.",
      "Mezclar suavemente y decorar con una rodaja o wedge de lima."
    ]
  },

  {
    id: 39,
    name: "Negroni",
    img: negroni,
    flavor: ["Aperitivo", "Herbal / Botánico", "Seco"],
    ingredients: [
      "30 ml Gin",
      "30 ml Campari",
      "30 ml Vermouth Rosso"
    ],
    liquor: ["Gin", "Campari", "Vermouth Rosso"],
    description: [
      "Servir ingredientes en vaso old fashioned con hielo.",
      "Remover suavemente.",
      "Decorar con rodaja de naranja."
    ]
  },
  {
    id: 95,
    name: "New York Sour",
    img: newYorkSour,
    flavor: ["Fresco", 'Aperitivo', 'Cremoso'],
    ingredients: [
      "45 ml whiskey (rye o bourbon)",
      "30 ml jugo de limón",
      "20 ml jarabe simple",
      "Float de vino tinto ",
      "Unas gotas de clara de huevo"
    ],
    liquor: ["Whisky", "Vino"],
    description: [
      "Agregar whiskey, jugo de limón y jarabe simple en una coctelera con hielo.",
      "Agitar bien y colar en un vaso old fashioned con hielo.",
      "Con cuidado, flotar el vino tinto sobre la superficie vertiéndolo lentamente.",
      "Decorar con una rodaja de limón o cereza."
    ]
  },

  {
    id: 40,
    name: "Old Fashioned",
    img: oldFashioned,
    flavor: ["Aperitivo", "Dulce", 'Seco'],
    ingredients: [
      "45 ml Bourbon o Rye whiskey",
      "2 dashes Angostura bitters",
      "1 cubo de azúcar",
      "Dash de agua"
    ],
    liquor: ["Whisky"],
    description: [
      "Disolver azúcar con bitters y un dash de agua en vaso old fashioned.",
      "Agregar hielo y whiskey.",
      "Remover suavemente.",
      "Decorar con twist de naranja."
    ]
  },
  {
    id: 41,
    name: "Paloma",
    img: paloma,
    flavor: ["Fresco", "Salado"],
    ingredients: [
      "50 ml Tequila",
      "120 ml Jugo de toronja",
      "15 ml Jugo de lima fresco",
      "Sal",
      "Soda"
    ],
    liquor: ["Tequila"],
    description: [
      "Escarchar vaso con sal.",
      "Agregar tequila, jugo de toronja y lima.",
      "Completar con soda.",
      "Remover suavemente y decorar con rodaja de lima."
    ]
  },
  {
    id: 85,
    name: "Paper Plane",
    img: paperPlane,
    flavor: ["Aperitivo", "Seco", 'Cítrico'],
    ingredients: [
      "30 ml bourbon",
      "30 ml Aperol",
      "30 ml Amaro Nonino",
      "30 ml jugo de limón"
    ],
    liquor: ["Whisky", "Aperol"],
    description: [
      "Agregar todos los ingredientes en una coctelera con hielo.",
      "Agitar bien hasta enfriar.",
      "Colar en una copa coupé fría.",
      "Sin decoración (opcional: garnish minimalista como un twist de limón)."
    ]
  },
  {
    id: 86,
    name: "Penicillin",
    img: penicillin,
    flavor: ['Fresco', 'Dulce', "Picante"],
    ingredients: [
      "60 ml blended Scotch whisky",
      "22 ml jugo de limón",
      "22 ml jarabe de miel y jengibre",
      "Float de whisky ahumado (Islay)",
    ],
    liquor: ["Whisky"],
    description: [
      "Agregar el Scotch, jugo de limón y jarabe de miel con jengibre en una coctelera con hielo.",
      "Agitar bien hasta enfriar.",
      "Colar en un vaso old fashioned con hielo (idealmente con un cubo grande).",
      "Flotar el whisky ahumado sobre la superficie.",
      "Decorar con una rodaja de jengibre o limón (opcional)."
    ]
  },
  {
    id: 42,
    name: "Pisco Sour",
    img: piscoSour,
    flavor: ["Fresco", 'Cremoso'],
    ingredients: [
      "60 ml Pisco",
      "30 ml Jugo de limón fresco",
      "20 ml de Almibar",
      "1 clara de huevo",
      "Aperitivo de angostura (opcional)"
    ],
    liquor: ["Pisco"],
    description: [
      "Batir todos los ingredientes sin hielo (dry shake).",
      "Agregar hielo y Batir nuevamente.",
      "Colar en copa fría.",
      "Agregar unas gotas de Aperitivo de angostura encima."
    ]
  },
  {
    id: 43,
    name: "Planter's Punch",
    img: plantersPunch,
    flavor: ["Dulce", "Frutal", "Fresco"],
    ingredients: [
      "45 ml Ron oscuro",
      "30 ml Jugo de limón fresco",
      "15 ml de Almibar",
      "60 ml Jugo de naranja",
      "15 ml Jarabe de granadina"
    ],
    liquor: ["Ron"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en vaso alto con hielo.",
      "Decorar con rodaja de naranja y cereza."
    ]
  },
  {
    id: 89,
    name: "Porn Star Martini",
    img: pornstarMartini,
    flavor: ["Dulce", "Frutal", 'Tropical'],
    ingredients: [
      "45 ml vodka de vainilla",
      "15 ml licor de fruta de la pasión",
      "15 ml jarabe de vainilla",
      "30 ml puré o jugo de maracuyá",
      "15 ml jugo de lima",
      "30 ml espumante (servido aparte)"
    ],
    liquor: ["Vodka", "Champagne"],
    description: [
      "Agregar todos los ingredientes excepto el espumante en una coctelera con hielo.",
      "Agitar enérgicamente hasta enfriar.",
      "Colar en una copa coupé o martini.",
      "Servir el espumante aparte en un shot glass.",
      "Decorar con media fruta de la pasión flotando en el cóctel."
    ]
  },

  {
    id: 44,
    name: "Rusty Nail",
    img: rustyNail,
    flavor: ["Dulce", 'Aperitivo', 'Seco'],
    ingredients: [
      "45 ml Scotch whisky",
      "25 ml Drambuie"
    ],
    liquor: ["Whisky", "Drambuie"],
    description: [
      "Servir ingredientes en vaso old fashioned con hielo.",
      "Remover suavemente."
    ]
  },
  {
    id: 45,
    name: "Sazerac",
    img: sazerac,
    flavor: ["Aperitivo", 'Herbal / Botánico', 'Seco'],
    ingredients: [
      "50 ml Rye whiskey",
      "10 ml de absenta",
      "1 cubo de azúcar",
      "2 dashes Peychaud's bitters",
      "Twist de limón"
    ],
    liquor: ["Whisky", "Absenta"],
    description: [
      "Enfriar vaso y descartarlo.",
      "Remojar vaso con absenta.",
      "Disolver azúcar con bitters en vaso mezclador.",
      "Agregar whiskey y hielo, remover.",
      "Colar en vaso preparado.",
      "Decorar con twist de limón."
    ]
  },
  {
    id: 90,
    name: "Sea Breeze",
    img: seaBreeze,
    flavor: ["Fresco", "Frutal"],
    ingredients: [
      "40 ml vodka",
      "120 ml jugo de arándanos",
      "30 ml jugo de pomelo"
    ],
    liquor: ["Vodka"],
    description: [
      "Llenar un vaso highball con hielo.",
      "Agregar el vodka.",
      "Completar con el jugo de arándanos y el jugo de pomelo.",
      "Mezclar suavemente.",
      "Decorar con una rodaja de lima o pomelo (opcional)."
    ]
  },
  {
    id: 91,
    name: "Sex on the Beach",
    img: sexOnTheBeach,
    flavor: ["Dulce", "Frutal", "Fresco", 'Tropical'],
    ingredients: [
      "40 ml vodka",
      "20 ml licor de durazno",
      "40 ml jugo de naranja",
      "40 ml jugo de arándanos"
    ],
    liquor: ["Vodka", "Licor de Durazno"],
    description: [
      "Llenar un vaso highball con hielo.",
      "Agregar el vodka y el licor de durazno.",
      "Completar con el jugo de naranja y el jugo de arándanos.",
      "Mezclar suavemente.",
      "Decorar con una rodaja de naranja."
    ]
  },
  {
    id: 46,
    name: "Sidecar",
    img: sideCar,
    flavor: ['Cítrico', 'Seco'],
    ingredients: [
      "50 ml Cognac",
      "20 ml Triple sec",
      "20 ml Jugo de limón fresco"
    ],
    liquor: ["Cognac", "Triple sec"],
    description: [
      "Escarchar borde de copa (opcional).",
      "Batir todos los ingredientes con hielo.",
      "Colar en copa fría.",
      "Decorar con twist de limón."
    ]
  },
  {
    id: 92,
    name: "South Side",
    img: southSide,
    flavor: ['Fresco', "Herbal / Botánico",],
    ingredients: [
      "45 ml gin",
      "30 ml jugo de limón",
      "15 ml jarabe simple",
      "8-10 hojas de menta",
      "Clara de huevo (opcional)"
    ],
    liquor: ["Gin"],
    description: [
      "Agregar el gin, jugo de limón, jarabe simple y hojas de menta en una coctelera con hielo.",
      "Agitar enérgicamente.",
      "Colar en una copa coupé fría.",
      "Decorar con una ramita de menta."
    ]
  }
  ,
  {
    id: 48,
    name: "Tequila Sunrise",
    img: tequilaSunrise,
    flavor: ["Dulce", "Frutal", 'Tropical'],
    ingredients: [
      "50 ml Tequila",
      "90 ml Jugo de naranja",
      "15 ml Jarabe de granadina"
    ],
    liquor: ["Tequila"],
    description: [
      "Servir tequila y jugo de naranja en vaso alto con hielo.",
      "Agregar jarabe de granadina lentamente para crear efecto de degradado.",
      "Decorar con rodaja de naranja y cereza."
    ]
  },
  {
    id: 49,
    name: "Tom Collins",
    img: johnCollins,
    flavor: ["Fresco", "Sparkling"],
    ingredients: [
      "45 ml Gin Old Tom",
      "30 ml Jugo de limón fresco",
      "15 ml de Almibar",
      "Agua con gas"
    ],
    liquor: ["Gin"],
    description: [
      "Batir gin, limón y jarabe con hielo.",
      "Colar en vaso alto con hielo.",
      "Completar con agua con gas.",
      "Decorar con rodaja de limón."
    ]
  },
  {
    id: 50,
    name: "Vesper",
    img: vesper,
    flavor: ["Seco", 'Herbal / Botánico'],
    ingredients: [
      "60 ml Gin",
      "20 ml Vodka",
      "10 ml Lillet Blanc"
    ],
    liquor: ["Gin", "Vodka", "Lillet"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en copa fría.",
      "Decorar con twist de limón."
    ]
  },
  {
    id: 51,
    name: "Whiskey Sour",
    img: whiskySour,
    flavor: ["Fresco", 'Cremoso'],
    ingredients: [
      "45 ml Whiskey Bourbon",
      "30 ml Jugo de limón fresco",
      "15 ml de Almibar",
      "1 clara de huevo (opcional)"
    ],
    liquor: ["Whisky"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en copa fría.",
      "Decorar con una rodaja de limón."
    ]
  },
  {
    id: 52,
    name: "Zombie",
    img: zombie,
    flavor: ["Dulce", "Frutal", 'Tropical'],
    ingredients: [
      "45 ml Ron blanco",
      "45 ml Ron dorado",
      "30 ml Ron oscuro",
      "15 ml Jugo de lima fresco",
      "15 ml de Almibar",
      "7.5 ml Licor de Frutilla",
      "7.5 ml Triple sec",
      "60 ml Jugo de piña",
      "Un dash de Angostura bitters"
    ],
    liquor: ["Ron", "Licor de Frutilla", "Triple sec"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en vaso grande con hielo.",
      "Decorar con fruta fresca y menta."
    ]
  },
  {
    id: 53,
    name: "Boulevardier",
    img: boulevardier,
    flavor: ["Aperitivo", 'Seco', 'Herbal / Botánico'],
    ingredients: [
      "30 ml Bourbon o Rye whiskey",
      "30 ml Campari",
      "30 ml Vermouth Rosso"
    ],
    liquor: ["Whisky", "Campari", "Vermouth Rosso"],
    description: [
      "Servir ingredientes en vaso old fashioned con hielo.",
      "Remover suavemente.",
      "Decorar con rodaja de naranja."
    ]
  },

  {
    id: 62,
    name: "Long Island Iced Tea",
    img: longIsland,
    flavor: ["Fresco", 'Dulce'],
    ingredients: [
      "15 ml Vodka",
      "15 ml Gin",
      "15 ml Ron blanco",
      "15 ml Tequila",
      "15 ml Triple sec (Cointreau)",
      "30 ml Jugo de limón fresco",
      "30 ml de Almibar",
      "Cola para rellenar"
    ],
    liquor: ["Vodka", "Gin", "Ron", "Tequila", "Triple sec"],
    description: [
      "Agregar todos los licores, jugo de limón y jarabe en vaso con hielo.",
      "Rellenar con cola.",
      "Revolver suavemente.",
      "Decorar con una rodaja de limón."
    ]
  },
  {
    id: 67,
    name: "Rob Roy",
    img: robRoy,
    flavor: ["Aperitivo", 'Seco', 'Herbal / Botánico'],
    ingredients: [
      "45 ml Scotch Whisky",
      "25 ml Vermouth Rosso",
      "2 gotas de Aperitivo de angostura"
    ],
    liquor: ["Whisky", "Vermouth Rosso"],
    description: [
      "Verter todos los ingredientes en vaso mezclador con hielo.",
      "Revolver bien y colar en copa de cóctel.",
      "Decorar con una cereza."
    ]
  },
  {
    id: 71,
    name: "White Lady",
    img: whiteLady,
    flavor: ["Fresco"],
    ingredients: [
      "40 ml Gin",
      "30 ml Cointreau",
      "20 ml Jugo de limón fresco"
    ],
    liquor: ["Gin", "Cointreau"],
    description: [
      "Batir todos los ingredientes con hielo.",
      "Colar en copa de cóctel fría.",
      "Decorar con una cáscara de limón."
    ]
  },
  {
    id: 94,
    name: "White Russian",
    img: whiteRussian,
    flavor: ["Dulce", "Cremoso"],
    ingredients: [
      "45 ml vodka",
      "20 ml licor de café",
      "30 ml crema de leche"
    ],
    liquor: ["Vodka", "Licor de Café"],
    description: [
      "Llenar un vaso old fashioned con hielo.",
      "Agregar vodka y licor de café.",
      "Completar con crema de leche.",
      "Mezclar suavemente antes de beber."
    ]
  },
  {
  id: 96,
  name: "Hotel Nacional",
  img: hotelNacional,
  flavor: ["Dulce", "Frutal", "Tropical"],
  ingredients: [
    "45 ml ron blanco",
    "15 ml Apricot Brandy",
    "30 ml jugo de piña",
    "15 ml jugo de lima",
    "15 ml jarabe simple"
  ],
  liquor: ["Ron", "Apricot Brandy"],
  description: [
    "Agregar todos los ingredientes en una coctelera con hielo.",
    "Agitar enérgicamente hasta enfriar.",
    "Colar en una copa coupé fría.",
    "Decorar con una rodaja de lima o piña deshidratada (opcional)."
  ]
}
,
{
  id: 97,
  name: "Sweet Martini",
  img: sweetMartini,
  flavor: ["Dulce", "Herbal / Botánico", 'Seco'],
  ingredients: [
    "60 ml gin",
    "30 ml Vermouth Rosso",
    "1 dash de angostura bitters (opcional)"
  ],
  liquor: ["Gin", "Vermouth Rosso"],
  description: [
    "Verter los ingredientes en un vaso mezclador con hielo.",
    "Remover hasta enfriar bien.",
    "Colar en una copa cóctel fría.",
    "Decorar con una cereza al marrasquino o un twist de naranja."
  ]
},
{
  id: 98,
  name: "Dirty Martini",
  img: dryMartini,
  flavor: ["Salado", "Seco"],
  ingredients: [
    "60 ml gin (o vodka)",
    "10 ml Vermouth Dry",
    "10 ml jugo de aceitunas (salmuera)"
  ],
  liquor: ["Gin", "Vermouth Dry"],
  description: [
    "Verter todos los ingredientes en un vaso mezclador con hielo.",
    "Remover bien hasta enfriar.",
    "Colar en una copa cóctel fría.",
    "Decorar con una o varias aceitunas verdes."
  ]
},
{
  id: 99,
  name: "Very Very Dry Martini",
  img: dryMartini,
  flavor: ["Seco"],
  ingredients: [
    "70 ml gin",
    "Rociar la copa con Vermouth Dry (opcional)"
  ],
  liquor: ["Gin"],
  description: [
    "Enfriar una copa cóctel.",
    "Rociar (o simplemente enjuagar) la copa con Vermouth Dry, luego desechar el exceso.",
    "Servir el gin muy frío directamente en la copa.",
    "Decorar con un twist de limón o una aceituna (opcional)."
  ]
},
{
  id: 100,
  name: "Gibson",
  img: gibson,
  flavor: ["Seco"],
  ingredients: [
    "60 ml gin",
    "10 ml Vermouth Dry"
  ],
  liquor: ["Gin", "Vermouth Dry"],
  description: [
    "Verter el gin y el Vermouth en un vaso mezclador con hielo.",
    "Remover hasta enfriar bien.",
    "Colar en una copa cóctel fría.",
    "Decorar con uno o dos cebollines."
  ]
},
{
  id: 101,
  name: "Clarito",
  img: clarito, 
  flavor: ["Seco"],
  ingredients: [
    "50 ml gin",
    "50 ml Vermouth Dry"
  ],
  liquor: ["Gin", "Vermouth Dry"],
  description: [
    "Agregar el gin y el Vermouth Dry en un vaso mezclador con hielo.",
    "Remover hasta que esté bien frío.",
    "Colar en una copa cóctel.",
    "Decorar con un twist de limón o una aceituna, según preferencia."
  ]
},
{
  id: 102,
  name: "Gin Tonic",
  img: gintonic,
  flavor: ['Aperitivo', 'Herbal / Botánico'],
  ingredients: [
    "50 ml gin",
    "100 ml agua tónica"
  ],
  liquor: ["Gin"],
  description: [
    "Llenar un vaso highball o copa balón con hielo.",
    "Agregar el gin.",
    "Completar con agua tónica bien fría.",
    "Mezclar suavemente.",
    "Decoracion a eleccion personal: (Limon, Pomelo, Pepino, Naranja, Menta, Romero, Albahaca, Pimienta, Frutos Rojos, etc.).",
  ]
},
{
  id: 103,
  name: "Destornillador",
  img: destornillador,
  flavor: ["Dulce", "Frutal", "Fresco"],
  ingredients: [
    "50 ml vodka",
    "100 ml jugo de naranja"
  ],
  liquor: ["Vodka"],
  description: [
    "Llenar un vaso highball con hielo.",
    "Agregar el vodka.",
    "Completar con jugo de naranja fresco.",
    "Mezclar suavemente.",
    "Decorar con una rodaja de naranja (opcional)."
  ]
},
{
  id: 104,
  name: "Fernet con Coca",
  img: fernetCola,
  flavor: ["Aperitivo", "Herbal / Botánico"],
  ingredients: [
    "50 ml fernet",
    "150 ml gaseosa cola"
  ],
  liquor: ["Fernet"],
  description: [
    "Llenar un vaso highball o de trago largo con mucho hielo.",
    "Agregar el fernet.",
    "Completar con gaseosa cola bien fría.",
    "Mezclar suavemente.",
  ]
}




];


