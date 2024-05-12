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