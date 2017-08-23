use solarSystem;
db.dropDatabase();

var solarSystem = {};

// SOLAR SYSTEM ------------------------------------------

solarSystem.details = [{
  "Name": "The Solar System",

  "breadCrumbs": [],

  "links": [],

  "mainImage": {},

  "sideBar": [
    {
      "label": "Age",
      "value": "4.6 Billion Years"
    },
    {
      "label": "Closest neighbour",
      "value": "Proxima Centauri"
    },
    {
      "label": "Orbit Period",
      "value": "225-250 Million Years"
    },
    {
      "label": "Planets",
      "value": "8"
    },
    {
      "label": "Moons",
      "value": "181"
    },
    {
      "label": "Radius",
      "value": "0.95 light years"
    }
  ],

  "description": [
    {
      "type": "paragraph",
      "title": "The Solar System",
      "value": "The Solar System is the gravitationally-bound system comprising the Sun and the objects that orbit it, either directly or indirectly. Of those objects that orbit the Sun directly, the largest eight are the planets, with the remainder being significantly smaller objects, such as dwarf planets and small Solar System bodies. The Solar System formed 4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud. The vast majority of the system's mass is in the Sun, with the majority of the remaining mass contained in Jupiter. "
    },
    {
      "type": "paragraph",
      "title": "Planets Of The Solar System",
      "value": "The four smaller inner planets, Mercury, Venus, Earth and Mars, are terrestrial planets, being primarily composed of rock and metal. The four outer planets are giant planets, being substantially more massive than the terrestrials. The two largest, Jupiter and Saturn, are gas giants, being composed mainly of hydrogen and helium; the two outermost planets, Uranus and Neptune, are ice giants, being composed mostly of substances with relatively high melting points compared with hydrogen and helium, called volatiles, such as water, ammonia and methane. All eight planets have almost circular orbits that lie within a nearly flat disc called the ecliptic."
    },
    {
      "type": "paragraph",
      "title": "Other Objects",
      "value": "The Solar System also contains smaller objects. The asteroid belt, which lies between the orbits of Mars and Jupiter, mostly contains objects composed, like the terrestrial planets, of rock and metal. Beyond Neptune's orbit lie the Kuiper belt and scattered disc, which are populations of trans-Neptunian objects composed mostly of ices, and beyond them a newly discovered population of sednoids. Within these populations are several dozen to possibly tens of thousands of objects large enough that they have been rounded by their own gravity. Such objects are categorized as dwarf planets. Identified dwarf planets include the asteroid Ceres and the trans-Neptunian objects Plutoand Eris. In addition to these two regions, various other small-body populations, including comets, centaurs and interplanetary dust clouds, freely travel between regions. Six of the planets, at least four of the dwarf planets, and many of the smaller bodies are orbited by natural satellites, usually termed 'moons' after the Moon. Each of the outer planets is encircled by planetary rings of dust and other small objects."
    }
  ],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "./images/solar_system/sol_sys1.jpg",
      "hiRes": "./images/solar_system/sol_sys1.jpg"
    },
    {
      "label": "image 2",
      "lowRes": "./images/solar_system/sol_sys2.jpg",
      "hiRes": "./images/solar_system/sol_sys2.jpg"
    },
    {
      "label": "image 3",
      "lowRes": "./images/solar_system/sol_sys3.png",
      "hiRes": "./images/solar_system/sol_sys3.png"
    },
  ],

  "facts": ["This is the sun", "fact 2", "fact 3"]

}]

// SUN ------------------------------------------


solarSystem.suns = [];

var sun = {
  "Name": "Sun",

  "breadCrumbs": [],

  "links": [],

  "mainImage": {},

  "sideBar": [
    {
      "label": "Age",
      "value": "4.6 Billion Years"
    },
    {
      "label": "Type Of Star",
      "value": "G-type main-sequence star"
    },
    {
      "label": "Radius",
      "value": "695,700 km"
    },
    {
      "label": "Average Surface Temperature In Celsius",
      "value": "~5505"
    },
    {
      "label": "Average Core Temperature In Celsius",
      "value": "15 million"
    },
    {
      "label": "Total Mass",
      "value": "1.989 × 10^30 kg"
    }
  ],

  "description": [
    {
      "title": "Sol",
      "value": "The Sun is a G-type main-sequence star (G2V) based on its spectral class. As such, it is informally referred to as a yellow dwarf. It formed approximately 4.6 billion years ago from the gravitational collapse of matter within a region of a large molecular cloud. Most of this matter gathered in the center, whereas the rest flattened into an orbiting disk that became the Solar System. The central mass became so hot and dense that it eventually initiated nuclear fusion in its core. It is thought that almost all stars form by this process."
    },
    {
      "title": "The Sun and The Solar System",
      "value": "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. Its diameter is about 109 times that of Earth, and its mass is about 330,000 times that of Earth, accounting for about 99.86% of the total mass of the Solar System. About three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron."
    },
  ],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "./images/sun.png",
      "hiRes": "./images/sun.png"
    },
    // {
    //   "label": "image 2",
    //   "lowRes": "./images/earth/earth2.jpg",
    //   "hiRes": "./images/earth/earth2.jpg"
    // },
    // {
    //   "label": "image 3",
    //   "lowRes": "./images/earth/earth3.jpg",
    //   "hiRes": "./images/earth/earth3.jpg"
    // }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

// PLANETS ------------------------------------------

var planets = [];
solarSystem.planets = planets;

var mercury = {
  "Name": "Mercury",

  "breadCrumbs": [],

  "links": [],

  "mainImage": {},

  "sideBar": [
    {
      "label": "Length Of A Day",
      "value": "58 days"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": -167
    },
    {
      "label": "Distance From The Sun",
      "value": "57.91 million km"
    }
  ],

  "description": [
  {
    "title": "Mercury",
    "value": "Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 88 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods. Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, so it can only be seen visually in the morning or the evening sky, and never exceeds 28° away from the Sun. Also, like Venus and the Moon, the planet displays the complete range of phases as it moves around its orbit relative to Earth. Seen from Earth, this cycle of phases reoccurs approximately every 116 days, the so-called synodic period. Although Mercury can appear as a bright star-like object when viewed from Earth, its proximity to the Sun often makes it more difficult to see than Venus."
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "./images/mercury/mercury1.png",
      "hiRes": "./images/mercury/mercury1.png"
    },
    {
      "label": "image 2",
      "lowRes": "./images/mercury/mercury2.png",
      "hiRes": "./images/mercury/mercury2.png"
    },
    {
      "label": "image 3",
      "lowRes": "./images/mercury/mercury3.png",
      "hiRes": "./images/mercury/mercury3.png"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

var venus = {
  "Name": "Venus",

  "breadCrumbs": [],

  "links": [],

  "mainImage": {},

  "sideBar": [
    {
      "label": "Length Of A Day",
      "value": "116 days"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": -467
    },
    {
      "label": "Distance From The Sun",
      "value": "108.2 million km"
    }
  ],

  "description": [
  {
    "title": "Venus",
    "value": "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days.[12] It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets. It has no natural satellites. It is named after the Roman goddess of love and beauty. It is the second-brightest natural object in the night sky after the Moon, reaching an apparent magnitude of −4.6 – bright enough to cast shadows at night and, rarely, visible to the naked eye in broad daylight.[13][14] Orbiting within Earth's orbit, Venus is an inferior planet and never appears to venture far from the Sun; its maximum angular distance from the Sun (elongation) is 47.8°."
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "./images/venus/venus1.png",
      "hiRes": "./images/venus/venus1.png"
    },
    {
      "label": "image 2",
      "lowRes": "./images/venus/venus2.png",
      "hiRes": "./images/venus/venus2.png"
    },
    {
      "label": "image 3",
      "lowRes": "./images/venus/venus3.png",
      "hiRes": "./images/venus/venus3.png"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

var earth = {
  "Name": "Earth",

  "breadCrumbs": [],

  "links": [],

  "mainImage": {},

  "sideBar": [
    {
      "label": "Length Of A Day",
      "value": "24h"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": 16
    },
    {
      "label": "Distance From The Sun",
      "value": "149.6 million km"
    }
  ],

  "description": [
  {
    "title": "Earth",
    "value": "Earth is the third planet from the Sun and the only object in the Universe known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4 billion years ago. Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. During one orbit around the Sun, Earth rotates about its axis about 365.26 times; thus, an Earth year is about 365.26 days long. Earth's axis of rotation is tilted, producing seasonal variations on the planet's surface. The gravitational interaction between the Earth and Moon causes ocean tides, stabilizes the Earth's orientation on its axis, and gradually slows its rotation. Earth is the densest planet in the Solar System and the largest of the four terrestrial planets."
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "./images/earth/earth1.png",
      "hiRes": "./images/earth/earth1.png"
    },
    {
      "label": "image 2",
      "lowRes": "./images/earth/earth2.jpeg",
      "hiRes": "./images/earth/earth2.jpeg"
    },
    {
      "label": "image 3",
      "lowRes": "./images/earth/earth3.png",
      "hiRes": "./images/earth/earth3.png"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

var mars = {
  "Name": "Mars",

  "breadCrumbs": [],

  "links": [],

  "mainImage": {},

  "sideBar": [
    {
      "label": "Length Of A Day",
      "value": "24.65 hours"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": -63
    },
    {
      "label": "Distance From The Sun",
      "value": "227,940,000 km"
    }
  ],

  "description": [
  {
    "title": "Mars",
    "value": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, after Mercury. Named after the Roman god of war, it is often referred to as the 'Red Planet' because the iron oxide prevalent on its surface gives it a reddish appearance.[15] Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth. The rotational period and seasonal cycles of Mars are likewise similar to those of Earth, as is the tilt that produces the seasons. Mars is the site of Olympus Mons, the largest volcano and second-highest known mountain in the Solar System, and of Valles Marineris, one of the largest canyons in the Solar System. The smooth Borealis basin in the northern hemisphere covers 40% of the planet and may be a giant impact feature.[16][17] Mars has two moons, Phobos and Deimos, which are small and irregularly shaped."
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "./images/mars/mars1.png",
      "hiRes": "./images/mars/mars1.png"
    },
    {
      "label": "image 2",
      "lowRes": "./images/mars/mars2.png",
      "hiRes": "./images/mars/mars2.png"
    },
    {
      "label": "image 3",
      "lowRes": "./images/mars/mars3.png",
      "hiRes": "./images/mars/mars3.png"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

var jupiter = {
  "Name": "Jupiter",

  "breadCrumbs": [],

  "links": [],

  "mainImage": {},

  "sideBar": [
    {
      "label": "Length Of A Day",
      "value": "9.9 hours"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": -161
    },
    {
      "label": "Distance From The Sun",
      "value": "1.429 billion km"
    }
  ],

  "description": [
  {
    "title": "Jupiter",
    "value": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. Jupiter and Saturn are gas giants; the other two giant planets, Uranus and Neptune are ice giants. Jupiter has been known to astronomers since antiquity.[12] The Romans named it after their god Jupiter.[13] When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94, bright enough for its reflected light to cast shadows,[14] and making it on average the third-brightest object in the night sky after the Moon and Venus."
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "./images/jupiter/jupiter1.png",
      "hiRes": "./images/jupiter/jupiter1.png"
    },
    {
      "label": "image 2",
      "lowRes": "./images/jupiter/jupiter2.png",
      "hiRes": "./images/jupiter/jupiter2.png"
    },
    {
      "label": "image 3",
      "lowRes": "./images/jupiter/jupiter3.png",
      "hiRes": "./images/jupiter/jupiter3.png"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

var saturn = {
  "Name": "Saturn",

  "breadCrumbs": [],

  "links": [],

  "mainImage": {},

  "sideBar": [
    {
      "label": "Length Of A Day",
      "value": "10.6 hours"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": -178
    },
    {
      "label": "Distance From The Sun",
      "value": "1.429 billion km"
    }
  ],

  "description": [
  {
    "title": "Saturn",
    "value": "The second largest planet in our solar system, adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings -- made of chunks of ice and rock -- but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball of mostly hydrogen and helium. Surrounding by 53 confirmed and nine provisional moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries. The farthest planet from Earth observable by the unaided human eye, Saturn has been known since ancient times and is named for the Roman god of agriculture and wealth. The Greek equivalent was Cronos, the father of Zeus/Jupiter.",
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "./images/saturn/saturn1.png",
      "hiRes": "./images/saturn/saturn1.png"
    },
    {
      "label": "image 2",
      "lowRes": "./images/saturn/saturn2.png",
      "hiRes": "./images/saturn/saturn2.png"
    },
    {
      "label": "image 3",
      "lowRes": "./images/saturn/saturn3.png",
      "hiRes": "./images/saturn/saturn3.png"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

var uranus = {
  "Name": "Uranus",

  "breadCrumbs": [],

  "links": [],

  "mainImage": {},

  "sideBar": [
    {
      "label": "Length Of A Day",
      "value": "17 hours"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": -357
    },
    {
      "label": "Distance From The Sun",
      "value": "2.871 billion km"
    }
  ],

  "description": [
  {
    "title": "Uranus",
    "value": "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as 'ice giants' to distinguish them from the gas giants. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more 'ices' such as water, ammonia, and methane, along with traces of other hydrocarbons. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock."
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "./images/uranus/uranus1.png",
      "hiRes": "./images/uranus/uranus1.png"
    },
    {
      "label": "image 2",
      "lowRes": "./images/uranus/uranus2.jpg",
      "hiRes": "./images/uranus/uranus2.jpg"
    },
    {
      "label": "image 3",
      "lowRes": "./images/uranus/uranus3.jpg",
      "hiRes": "./images/uranus/uranus3.jpg"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

var neptune = {
  "Name": "Neptune",

  "breadCrumbs": [],

  "links": [],

  "mainImage": {},

  "sideBar": [
    {
      "label": "Length Of A Day",
      "value": "16h"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": -214
    },
    {
      "label": "Distance From The Sun",
      "value": "4.498 billion km"
    }
  ],

  "description": [
  {
    "title": "Neptune",
    "value": "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger than Neptune.[d] Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units (4.50×109 km). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident."
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "./images/neptune/neptune1.png",
      "hiRes": "./images/neptune/neptune1.png"
    },
    {
      "label": "image 2",
      "lowRes": "./images/neptune/neptune2.jpeg",
      "hiRes": "./images/neptune/neptune2.jpeg"
    },
    {
      "label": "image 3",
      "lowRes": "./images/neptune/neptune3.png",
      "hiRes": "./images/neptune/neptune3.png"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

var pluto = {
  "Name": "Pluto",

  "breadCrumbs": [],

  "links":[],

  "mainImage": {},

  "sideBar": [
    {
      "label": "Length Of A Day",
      "value": "6.4 Earth days",
    },
    {
      "label": "Average Temperature In Celsius",
      "value": -229,
    },
    {
      "label": "Distance From The Sun",
      "value": "5.9 billion km",
    }
  ],

  "description": [
    {
      "title": "Pluto",
      "value": "Pluto (minor-planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune. It was the first Kuiper belt object to be discovered. Pluto was discovered by Clyde Tombaugh in 1930 and was originally considered to be the ninth planet from the Sun. After 1992, its status as a planet was questioned following the discovery of several objects of similar size in the Kuiper belt. In 2005, Eris, a dwarf planet in the scattered disc which is 27% more massive than Pluto, was discovered. This led the International Astronomical Union (IAU) to define the term 'planet' formally in 2006, during their 26th General Assembly. That definition excluded Pluto and reclassified it as a dwarf planet. "
    },
  ],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "./images/pluto/pluto1.jpg",
      "highRes": "./images/pluto/pluto1.jpg"
    },
    {
      "label": "image 2",
      "lowRes": "./images/pluto/pluto2.png",
      "highRes": "./images/pluto/pluto2.png"
    },
    {
      "label": "image 3",
      "lowRes": "./images/pluto/pluto3.jpg",
      "highRes": "./images/pluto/pluto3.jpg"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

// EARTH MOON ------------------------------------------

earth.moons = [];

var moon = {
  "Name": "The Moon",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    },
    {
      "label": "Earth",
      "link": "localHost:3000/route-to-earth-page"
    },
  ],

  "links": [],

  "mainImage": {
    "label": "Moon",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Radius",
      "value": "1,737 km"
    },
    {
      "label": "Orbit Radius",
      "value": "384,400 km"
    },
    {
      "label": "Distance From The Sun",
      "value": "149.6 million km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on Kerberos",
    "value": "The Moon is an astronomical body that orbits planet Earth, being Earth's only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). Following Jupiter's satellite Io, the Moon is second-densest satellite among those whose densities are known. The Moon is thought to have formed about 4.51 billion years ago, not long after Earth. The most widely accepted explanation is that the Moon formed from the debris left over after a giant impact between Earth and a Mars-sized body called Theia.",
  }],

  "gallery": [],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

// JUPITER MOONS ------------------------------------------

// SATURN MOONS ------------------------------------------

saturn.moons = [];

var hyperion = {
  "Name": "Hyperion",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    },
    {
      "label": "Saturn",
      "link": "localHost:3000/route-to-saturn-page"
    },
  ],

  "links": [],

  "mainImage": {
    "label": "Hyperion",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Radius",
      "value": "135 km"
    },
    {
      "label": "Orbit Radius",
      "value": "1,500,934 km"
    },
    {
      "label": "Distance From The Sun",
      "value": "1.429 billion km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on Kerberos",
    "value": "Ariel is the fourth-largest of the 27 known moons of Uranus. Ariel orbits and rotates in the equatorial plane of Uranus, which is almost perpendicular to the orbit of Uranus, and so has an extreme seasonal cycle. It was discovered in October 1851 by William Lassell, and named for a character in two different pieces of literature. As of 2012, much of the detailed knowledge of Ariel derives from a single flyby of Uranus performed by the spacecraft Voyager 2 in 1986, which managed to image around 35% of the moon's surface. There are no active plans at present to return to study the moon in more detail, although various concepts such as a Uranus orbiter and probe have been proposed from time to time. After Miranda, Ariel is the second-smallest of Uranus' five major rounded satellites, and the second-closest to its planet. Among the smallest of the Solar System's 19 known spherical moons (it ranks 14th among them in diameter), it is believed to be composed of roughly equal parts ice and rocky material. Its mass is approximately equal in magnitude to Earth's hydrosphere.",
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "image/ariel1.jpg",
      "hiRes": "image/ariel1.jpg"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

// URANUS MOONS ------------------------------------------

uranus.moons = [];

var ariel = {
  "Name": "Ariel",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    },
    {
      "label": "Uranus",
      "link": "localHost:3000/route-to-uranus-page"
    },
  ],

  "links": [],

  "mainImage": {
    "label": "Ariel",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Radius",
      "value": "436,000 km"
    },
    {
      "label": "Orbit Radius",
      "value": "190,900 km"
    },
    {
      "label": "Distance From The Sun",
      "value": "2.8 billion km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on Kerberos",
    "value": "Ariel is the fourth-largest of the 27 known moons of Uranus. Ariel orbits and rotates in the equatorial plane of Uranus, which is almost perpendicular to the orbit of Uranus, and so has an extreme seasonal cycle. It was discovered in October 1851 by William Lassell, and named for a character in two different pieces of literature. As of 2012, much of the detailed knowledge of Ariel derives from a single flyby of Uranus performed by the spacecraft Voyager 2 in 1986, which managed to image around 35% of the moon's surface. There are no active plans at present to return to study the moon in more detail, although various concepts such as a Uranus orbiter and probe have been proposed from time to time. After Miranda, Ariel is the second-smallest of Uranus' five major rounded satellites, and the second-closest to its planet. Among the smallest of the Solar System's 19 known spherical moons (it ranks 14th among them in diameter), it is believed to be composed of roughly equal parts ice and rocky material. Its mass is approximately equal in magnitude to Earth's hydrosphere.",
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "image/ariel1.jpg",
      "hiRes": "image/ariel1.jpg"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

// PLUTO MOONS ------------------------------------------

pluto.moons = [];

var kerberos = {
  "Name": "Kerberos",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    },
    {
      "label": "Pluto",
      "link": "localHost:3000/route-to-pluto-page"
    },
  ],

  "links": [],

  "mainImage": {
    "label": "Kerberos",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Radius",
      "value": "606km"
    },
    {
      "label": "Orbit Radius",
      "value": "19,640 km"
    },
    {
      "label": "Distance From The Sun",
      "value": "5.9 billion km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on Kerberos",
    "value": "Kerberos is a small natural satellite of Pluto, about 12 km (7.5 mi) in its longest dimension. It was the fourth moon of Pluto to be discovered and its existence was announced on 20 July 2011. It was imaged, along with Pluto and its four other moons, by the New Horizons spacecraft in July 2015. The first image of Kerberos was released to the public on 22 October 2015. Kerberos appears to be smaller than scientists expected and has a highly-reflective surface, counter to predictions prior to the Pluto flyby in July. “Once again, the Pluto system has surprised us,” said New Horizons Project Scientist Hal Weaver, of the Johns Hopkins University Applied Physics Laboratory in Laurel, Maryland. The new data, downlinked from the New Horizons spacecraft on Oct. 20, show that Kerberos appears to have a double-lobed shape, with the larger lobe approximately 5 miles (8 kilometers) across and the smaller lobe approximately 3 miles (5 kilometers) across. Science team members speculate from its unusual shape that Kerberos could have been formed by the merger of two smaller objects. The reflectivity of Kerberos’ surface is similar to that of Pluto’s other small moons (approximately 50 percent) and strongly suggests Kerberos, like the others, is coated with relatively clean water ice.",
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "link for low-res image",
      "hiRes": "link for hi-res image"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

// PUSHING TO ARRAYS ------------------------------------------
solarSystem.suns.push(sun);
planets.push(mercury);

planets.push(venus);

planets.push(earth);
earth.moons.push(moon);

planets.push(mars);

planets.push(jupiter);

planets.push(saturn);

planets.push(uranus);
uranus.moons.push(ariel);

planets.push(neptune);
planets.push(pluto);


db.solarSystem.insert(solarSystem);

db.solarSystem.find();
