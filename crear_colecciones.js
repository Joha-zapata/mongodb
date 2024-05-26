db.createCollection("deportistas")
db.deportistas.insertMany([
  { "nombre": "Lionel Messi", "edad": 34, "nacionalidad": "Argentino", "posicion": "Delantero", "equipo": "Barcelona" },
  { "nombre": "Cristiano Ronaldo", "edad": 36, "nacionalidad": "Portugués", "posicion": "Delantero", "equipo": "Manchester United" }
])


db.createCollection("equipos")
db.equipos.insertMany([
  { "nombre": "Barcelona", "ciudad": "Barcelona", "fundacion": 1899, "jugadores": ["Lionel Messi", "Sergio Busquets", "Gerard Piqué"] },
  { "nombre": "Real Madrid", "ciudad": "Madrid", "fundacion": 1902, "jugadores": ["Karim Benzema", "Luka Modric", "Sergio Ramos"] },
])


db.createCollection("entrenadores")
db.entrenadores.insertMany([
  { "nombre": "Pep Guardiola", "edad": 50, "nacionalidad": "Español", "equipo": "Manchester City" },
  { "nombre": "Jurgen Klopp", "edad": 54, "nacionalidad": "Alemán", "equipo": "Liverpool" },
])


db.createCollection("arbitros")
db.arbitros.insertMany([
  { "nombre": "Howard Webb", "edad": 50, "nacionalidad": "Inglés", "experiencia": "20 años", "partidos_arbitrados": 500 },
  { "nombre": "Pierluigi Collina", "edad": 61, "nacionalidad": "Italiano", "experiencia": "25 años", "partidos_arbitrados": 600 },
])


db.createCollection("encuentros_deportivos")
db.encuentros_deportivos.insertMany([
  { "equipo_local": "Barcelona", "equipo_visitante": "Real Madrid", "fecha_hora": "2024-05-20T20:00:00Z", "estadio": "Camp Nou" },
  { "equipo_local": "Manchester United", "equipo_visitante": "Manchester City", "fecha_hora": "2024-05-21T19:30:00Z", "estadio": "Old Trafford" },
])

db.deportistas.insertMany([
  { "nombre": "Kylian Mbappé", "edad": 22, "nacionalidad": "Francés", "posicion": "Delantero", "equipo": "Paris Saint-Germain" },
  { "nombre": "Neymar Jr.", "edad": 29, "nacionalidad": "Brasileño", "posicion": "Delantero", "equipo": "Paris Saint-Germain" },
  { "nombre": "Robert Lewandowski", "edad": 33, "nacionalidad": "Polaco", "posicion": "Delantero", "equipo": "Bayern Munich" },
  { "nombre": "Kevin De Bruyne", "edad": 30, "nacionalidad": "Belga", "posicion": "Centrocampista", "equipo": "Manchester City" },
  { "nombre": "Virgil van Dijk", "edad": 29, "nacionalidad": "Neerlandés", "posicion": "Defensa", "equipo": "Liverpool" }
]);

db.equipos.insertMany([
  { 
    "nombre": "Paris Saint-Germain", 
    "ciudad": "París", 
    "fundacion": 1970, 
    "jugadores": ["Kylian Mbappé", "Neymar Jr.", "Marco Verratti"],
    "estadio": "Parc des Princes",
    "capacidad": 47929,
    "entrenador": "Mauricio Pochettino"
  },
  { 
    "nombre": "Manchester City", 
    "ciudad": "Manchester", 
    "fundacion": 1880, 
    "jugadores": ["Kevin De Bruyne", "Raheem Sterling", "Phil Foden"],
    "estadio": "Etihad Stadium",
    "capacidad": 55017,
    "entrenador": "Pep Guardiola"
  },
  { 
    "nombre": "Liverpool", 
    "ciudad": "Liverpool", 
    "fundacion": 1892, 
    "jugadores": ["Virgil van Dijk", "Mohamed Salah", "Sadio Mané"],
    "estadio": "Anfield",
    "capacidad": 54074,
    "entrenador": "Jurgen Klopp"
  },
  { 
    "nombre": "Bayern Munich", 
    "ciudad": "Múnich", 
    "fundacion": 1900, 
    "jugadores": ["Robert Lewandowski", "Thomas Müller", "Joshua Kimmich"],
    "estadio": "Allianz Arena",
    "capacidad": 75000,
    "entrenador": "Julian Nagelsmann"
  },
  { 
    "nombre": "Chelsea", 
    "ciudad": "Londres", 
    "fundacion": 1905, 
    "jugadores": ["N'Golo Kanté", "Timo Werner", "Mason Mount"],
    "estadio": "Stamford Bridge",
    "capacidad": 41841,
    "entrenador": "Thomas Tuchel"
  }
]);
