// ====== BOSS TIMER - Datos y lógica de renderizado ======
// Datos de jefes: 214 entradas (un registro por spawn)
const bossData = [
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Bosque del Toro Malvado",
    "name": "Mata",
    "spawnHour": 0,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Santuario del Rey de los Toros",
    "name": "Rey de los Toros Malvados",
    "spawnHour": 0,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Montaña de los Siete Valles",
    "name": "Tatu Gigante de Caparazón Sombrío",
    "spawnHour": 0,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "1F del Templo del Toro Demoníaco",
    "name": "Toro Trueno",
    "spawnHour": 1,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Bosque del Toro Malvado",
    "name": "Mata",
    "spawnHour": 2,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Ciudad Unseo",
    "name": "Jihwa",
    "spawnHour": 2,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "1F del Templo del Toro Demoníaco",
    "name": "Toro Trueno",
    "spawnHour": 3,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Santuario del Rey de los Toros",
    "name": "Rey de los Toros Malvados",
    "spawnHour": 3,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Montaña de los Siete Valles",
    "name": "Tatu Gigante de Caparazón Sombrío",
    "spawnHour": 3,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Montaña de los Siete Valles",
    "name": "Yaksha de los Ojos Nocturnos",
    "spawnHour": 3,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Bosque del Toro Malvado",
    "name": "Mata",
    "spawnHour": 4,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Isla del Fuego Ardiente",
    "name": "Bulhu",
    "spawnHour": 4,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "1F del Templo del Toro Demoníaco",
    "name": "Toro Trueno",
    "spawnHour": 5,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Ciudad Unseo",
    "name": "Jihwa",
    "spawnHour": 5,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Bosque del Toro Malvado",
    "name": "Mata",
    "spawnHour": 6,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Santuario del Rey de los Toros",
    "name": "Rey de los Toros Malvados",
    "spawnHour": 6,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Montaña de los Siete Valles",
    "name": "Tatu Gigante de Caparazón Sombrío",
    "spawnHour": 6,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "1F del Templo del Toro Demoníaco",
    "name": "Toro Trueno",
    "spawnHour": 7,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Bosque del Toro Malvado",
    "name": "Mata",
    "spawnHour": 8,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Ciudad Unseo",
    "name": "Jihwa",
    "spawnHour": 8,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "1F del Templo del Toro Demoníaco",
    "name": "Toro Trueno",
    "spawnHour": 9,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Santuario del Rey de los Toros",
    "name": "Rey de los Toros Malvados",
    "spawnHour": 9,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Montaña de los Siete Valles",
    "name": "Tatu Gigante de Caparazón Sombrío",
    "spawnHour": 9,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Montaña de los Siete Valles",
    "name": "Yaksha de los Ojos Nocturnos",
    "spawnHour": 9,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Bosque del Toro Malvado",
    "name": "Mata",
    "spawnHour": 10,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Isla del Fuego Ardiente",
    "name": "Bulhu",
    "spawnHour": 10,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "1F del Templo del Toro Demoníaco",
    "name": "Toro Trueno",
    "spawnHour": 11,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Ciudad Unseo",
    "name": "Jihwa",
    "spawnHour": 11,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Bosque del Toro Malvado",
    "name": "Mata",
    "spawnHour": 12,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Santuario del Rey de los Toros",
    "name": "Rey de los Toros Malvados",
    "spawnHour": 12,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Montaña de los Siete Valles",
    "name": "Tatu Gigante de Caparazón Sombrío",
    "spawnHour": 12,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "1F del Templo del Toro Demoníaco",
    "name": "Toro Trueno",
    "spawnHour": 13,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Bosque del Toro Malvado",
    "name": "Mata",
    "spawnHour": 14,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Ciudad Unseo",
    "name": "Jihwa",
    "spawnHour": 14,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "1F del Templo del Toro Demoníaco",
    "name": "Toro Trueno",
    "spawnHour": 15,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Santuario del Rey de los Toros",
    "name": "Rey de los Toros Malvados",
    "spawnHour": 15,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Montaña de los Siete Valles",
    "name": "Tatu Gigante de Caparazón Sombrío",
    "spawnHour": 15,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Montaña de los Siete Valles",
    "name": "Yaksha de los Ojos Nocturnos",
    "spawnHour": 15,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Bosque del Toro Malvado",
    "name": "Mata",
    "spawnHour": 16,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Isla del Fuego Ardiente",
    "name": "Bulhu",
    "spawnHour": 16,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "1F del Templo del Toro Demoníaco",
    "name": "Toro Trueno",
    "spawnHour": 17,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Ciudad Unseo",
    "name": "Jihwa",
    "spawnHour": 17,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Bosque del Toro Malvado",
    "name": "Mata",
    "spawnHour": 18,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Santuario del Rey de los Toros",
    "name": "Rey de los Toros Malvados",
    "spawnHour": 18,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Montaña de los Siete Valles",
    "name": "Tatu Gigante de Caparazón Sombrío",
    "spawnHour": 18,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "1F del Templo del Toro Demoníaco",
    "name": "Toro Trueno",
    "spawnHour": 19,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Bosque del Toro Malvado",
    "name": "Mata",
    "spawnHour": 20,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Ciudad Unseo",
    "name": "Jihwa",
    "spawnHour": 20,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "1F del Templo del Toro Demoníaco",
    "name": "Toro Trueno",
    "spawnHour": 21,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Santuario del Rey de los Toros",
    "name": "Rey de los Toros Malvados",
    "spawnHour": 21,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Montaña de los Siete Valles",
    "name": "Tatu Gigante de Caparazón Sombrío",
    "spawnHour": 21,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Montaña de los Siete Valles",
    "name": "Yaksha de los Ojos Nocturnos",
    "spawnHour": 21,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "Bosque del Toro Malvado",
    "name": "Mata",
    "spawnHour": 22,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Isla del Fuego Ardiente",
    "name": "Bulhu",
    "spawnHour": 22,
    "spawnMinute": 30
  },
  {
    "world": "W1",
    "layer": "Capa 3",
    "location": "1F del Templo del Toro Demoníaco",
    "name": "Toro Trueno",
    "spawnHour": 23,
    "spawnMinute": 0
  },
  {
    "world": "W1",
    "layer": "Capa 1",
    "location": "Ciudad Unseo",
    "name": "Jihwa",
    "spawnHour": 23,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Prisión Subterránea",
    "name": "Do Maengryong",
    "spawnHour": 0,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Prisión Subterránea",
    "name": "Molgrash",
    "spawnHour": 1,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 3",
    "location": "Montaña de la Lúnula de Sangre",
    "name": "Juhui",
    "spawnHour": 2,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Palacio del Dragón Noveno",
    "name": "Wi Kwangryeong",
    "spawnHour": 2,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Prisión Subterránea",
    "name": "Molgrash",
    "spawnHour": 4,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 3",
    "location": "Montaña de la Lúnula de Sangre",
    "name": "Juhui",
    "spawnHour": 5,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Palacio del Dragón Noveno",
    "name": "Wi Kwangryeong",
    "spawnHour": 5,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Campo de Hielo del Dragón Noveno",
    "name": "Gwe Mukang",
    "spawnHour": 5,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Prisión Subterránea",
    "name": "Do Maengryong",
    "spawnHour": 6,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Prisión Subterránea",
    "name": "Molgrash",
    "spawnHour": 7,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 3",
    "location": "Montaña de la Lúnula de Sangre",
    "name": "Juhui",
    "spawnHour": 8,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Palacio del Dragón Noveno",
    "name": "Wi Kwangryeong",
    "spawnHour": 8,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Prisión Subterránea",
    "name": "Molgrash",
    "spawnHour": 10,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 3",
    "location": "Montaña de la Lúnula de Sangre",
    "name": "Juhui",
    "spawnHour": 11,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Palacio del Dragón Noveno",
    "name": "Wi Kwangryeong",
    "spawnHour": 11,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Campo de Hielo del Dragón Noveno",
    "name": "Gwe Mukang",
    "spawnHour": 11,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Prisión Subterránea",
    "name": "Do Maengryong",
    "spawnHour": 12,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Prisión Subterránea",
    "name": "Molgrash",
    "spawnHour": 13,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 3",
    "location": "Montaña de la Lúnula de Sangre",
    "name": "Juhui",
    "spawnHour": 14,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Palacio del Dragón Noveno",
    "name": "Wi Kwangryeong",
    "spawnHour": 14,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Prisión Subterránea",
    "name": "Molgrash",
    "spawnHour": 16,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 3",
    "location": "Montaña de la Lúnula de Sangre",
    "name": "Juhui",
    "spawnHour": 17,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Palacio del Dragón Noveno",
    "name": "Wi Kwangryeong",
    "spawnHour": 17,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Campo de Hielo del Dragón Noveno",
    "name": "Gwe Mukang",
    "spawnHour": 17,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Prisión Subterránea",
    "name": "Do Maengryong",
    "spawnHour": 18,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Prisión Subterránea",
    "name": "Molgrash",
    "spawnHour": 19,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 3",
    "location": "Montaña de la Lúnula de Sangre",
    "name": "Juhui",
    "spawnHour": 20,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Palacio del Dragón Noveno",
    "name": "Wi Kwangryeong",
    "spawnHour": 20,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Prisión Subterránea",
    "name": "Molgrash",
    "spawnHour": 22,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 3",
    "location": "Montaña de la Lúnula de Sangre",
    "name": "Juhui",
    "spawnHour": 23,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Palacio del Dragón Noveno",
    "name": "Wi Kwangryeong",
    "spawnHour": 23,
    "spawnMinute": 30
  },
  {
    "world": "W2",
    "layer": "Capa 1",
    "location": "Campo de Hielo del Dragón Noveno",
    "name": "Gwe Mukang",
    "spawnHour": 23,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Planicie de las Víboras Monstruosas",
    "name": "Emperador Tatu Sobrio",
    "spawnHour": 1,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Necrópolis de Nerfariox",
    "name": "Gyo",
    "spawnHour": 2,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Tumba de Rockcut",
    "name": "Mara",
    "spawnHour": 2,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Planicie de las Víboras Monstruosas",
    "name": "Emperador Tatu Sobrio",
    "spawnHour": 3,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Tumba de Rockcut",
    "name": "Budu",
    "spawnHour": 3,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Planicie de las Víboras Monstruosas",
    "name": "Emperador Tatu Sobrio",
    "spawnHour": 5,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Tumba de Rockcut",
    "name": "Mara",
    "spawnHour": 5,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Planicie de las Víboras Monstruosas",
    "name": "Emperador Tatu Sobrio",
    "spawnHour": 7,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Necrópolis de Nerfariox",
    "name": "Gyo",
    "spawnHour": 8,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Tumba de Rockcut",
    "name": "Mara",
    "spawnHour": 8,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Planicie de las Víboras Monstruosas",
    "name": "Emperador Tatu Sobrio",
    "spawnHour": 9,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Tumba de Rockcut",
    "name": "Budu",
    "spawnHour": 9,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Planicie de las Víboras Monstruosas",
    "name": "Emperador Tatu Sobrio",
    "spawnHour": 11,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Tumba de Rockcut",
    "name": "Mara",
    "spawnHour": 11,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Planicie de las Víboras Monstruosas",
    "name": "Emperador Tatu Sobrio",
    "spawnHour": 13,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Necrópolis de Nerfariox",
    "name": "Gyo",
    "spawnHour": 14,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Tumba de Rockcut",
    "name": "Mara",
    "spawnHour": 14,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Planicie de las Víboras Monstruosas",
    "name": "Emperador Tatu Sobrio",
    "spawnHour": 15,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Tumba de Rockcut",
    "name": "Budu",
    "spawnHour": 15,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Planicie de las Víboras Monstruosas",
    "name": "Emperador Tatu Sobrio",
    "spawnHour": 17,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Tumba de Rockcut",
    "name": "Mara",
    "spawnHour": 17,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Planicie de las Víboras Monstruosas",
    "name": "Emperador Tatu Sobrio",
    "spawnHour": 19,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Necrópolis de Nerfariox",
    "name": "Gyo",
    "spawnHour": 20,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Tumba de Rockcut",
    "name": "Mara",
    "spawnHour": 20,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Planicie de las Víboras Monstruosas",
    "name": "Emperador Tatu Sobrio",
    "spawnHour": 21,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Tumba de Rockcut",
    "name": "Budu",
    "spawnHour": 21,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Planicie de las Víboras Monstruosas",
    "name": "Emperador Tatu Sobrio",
    "spawnHour": 23,
    "spawnMinute": 30
  },
  {
    "world": "W3",
    "layer": "Capa 3",
    "location": "Tumba de Rockcut",
    "name": "Mara",
    "spawnHour": 23,
    "spawnMinute": 30
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Desierto de la Fantasía",
    "name": "Santidad Inquebrantable Nerfariox",
    "spawnHour": 0,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Círculo de Sello Suzerano",
    "name": "Kurilaika",
    "spawnHour": 0,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Desierto de la Fantasía",
    "name": "Santidad Inquebrantable Nerfariox",
    "spawnHour": 2,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Círculo de Sello Suzerano",
    "name": "Kurilaika",
    "spawnHour": 3,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Desierto de la Fantasía",
    "name": "Santidad Inquebrantable Nerfariox",
    "spawnHour": 4,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Desierto de la Fantasía",
    "name": "Santidad Inquebrantable Nerfariox",
    "spawnHour": 6,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Círculo de Sello Suzerano",
    "name": "Kurilaika",
    "spawnHour": 6,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Desierto de la Fantasía",
    "name": "Santidad Inquebrantable Nerfariox",
    "spawnHour": 8,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Círculo de Sello Suzerano",
    "name": "Kurilaika",
    "spawnHour": 9,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Desierto de la Fantasía",
    "name": "Santidad Inquebrantable Nerfariox",
    "spawnHour": 10,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Desierto de la Fantasía",
    "name": "Santidad Inquebrantable Nerfariox",
    "spawnHour": 12,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Círculo de Sello Suzerano",
    "name": "Kurilaika",
    "spawnHour": 12,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Desierto de la Fantasía",
    "name": "Santidad Inquebrantable Nerfariox",
    "spawnHour": 14,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Círculo de Sello Suzerano",
    "name": "Kurilaika",
    "spawnHour": 15,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Desierto de la Fantasía",
    "name": "Santidad Inquebrantable Nerfariox",
    "spawnHour": 16,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Desierto de la Fantasía",
    "name": "Santidad Inquebrantable Nerfariox",
    "spawnHour": 18,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Círculo de Sello Suzerano",
    "name": "Kurilaika",
    "spawnHour": 18,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Desierto de la Fantasía",
    "name": "Santidad Inquebrantable Nerfariox",
    "spawnHour": 20,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Círculo de Sello Suzerano",
    "name": "Kurilaika",
    "spawnHour": 21,
    "spawnMinute": 0
  },
  {
    "world": "W4",
    "layer": "Capa 3",
    "location": "Desierto de la Fantasía",
    "name": "Santidad Inquebrantable Nerfariox",
    "spawnHour": 22,
    "spawnMinute": 0
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Gran Muralla de Sabuk",
    "name": "Faluk",
    "spawnHour": 0,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Templo Ilusorio",
    "name": "Fantasma Destructor de Historia",
    "spawnHour": 1,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Gran Muralla de Sabuk",
    "name": "Faluk",
    "spawnHour": 3,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Templo Ilusorio",
    "name": "Fantasma Destructor de Historia",
    "spawnHour": 4,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Gran Muralla de Sabuk",
    "name": "Faluk",
    "spawnHour": 6,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Templo Ilusorio",
    "name": "Fantasma Destructor de Historia",
    "spawnHour": 7,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Gran Muralla de Sabuk",
    "name": "Faluk",
    "spawnHour": 9,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Templo Ilusorio",
    "name": "Fantasma Destructor de Historia",
    "spawnHour": 10,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Gran Muralla de Sabuk",
    "name": "Faluk",
    "spawnHour": 12,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Templo Ilusorio",
    "name": "Fantasma Destructor de Historia",
    "spawnHour": 13,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Gran Muralla de Sabuk",
    "name": "Faluk",
    "spawnHour": 15,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Templo Ilusorio",
    "name": "Fantasma Destructor de Historia",
    "spawnHour": 16,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Gran Muralla de Sabuk",
    "name": "Faluk",
    "spawnHour": 18,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Templo Ilusorio",
    "name": "Fantasma Destructor de Historia",
    "spawnHour": 19,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Gran Muralla de Sabuk",
    "name": "Faluk",
    "spawnHour": 21,
    "spawnMinute": 30
  },
  {
    "world": "W5",
    "layer": "Capa 3",
    "location": "Templo Ilusorio",
    "name": "Fantasma Destructor de Historia",
    "spawnHour": 22,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Cheol Mokgang",
    "spawnHour": 0,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Laberinto Bicheon",
    "name": "Yeticlops",
    "spawnHour": 0,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Abismo de la Mina Abandonada",
    "name": "Hong Yeom Transformada",
    "spawnHour": 1,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Cheol Mokgang",
    "spawnHour": 2,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Abismo de la Mina Abandonada",
    "name": "Hong Yeom Transformada",
    "spawnHour": 3,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Cheol Mokgang",
    "spawnHour": 4,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Asura",
    "spawnHour": 4,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Abismo de la Mina Abandonada",
    "name": "Hong Yeom Transformada",
    "spawnHour": 5,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Bosques Fantasmas",
    "name": "Wuihan",
    "spawnHour": 5,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Cheol Mokgang",
    "spawnHour": 6,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Laberinto Bicheon",
    "name": "Yeticlops",
    "spawnHour": 6,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Abismo de la Mina Abandonada",
    "name": "Hong Yeom Transformada",
    "spawnHour": 7,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Cheol Mokgang",
    "spawnHour": 8,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Abismo de la Mina Abandonada",
    "name": "Hong Yeom Transformada",
    "spawnHour": 9,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Cheol Mokgang",
    "spawnHour": 10,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Asura",
    "spawnHour": 10,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Abismo de la Mina Abandonada",
    "name": "Hong Yeom Transformada",
    "spawnHour": 11,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Bosques Fantasmas",
    "name": "Wuihan",
    "spawnHour": 11,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Cheol Mokgang",
    "spawnHour": 12,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Laberinto Bicheon",
    "name": "Yeticlops",
    "spawnHour": 12,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Abismo de la Mina Abandonada",
    "name": "Hong Yeom Transformada",
    "spawnHour": 13,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Cheol Mokgang",
    "spawnHour": 14,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Abismo de la Mina Abandonada",
    "name": "Hong Yeom Transformada",
    "spawnHour": 15,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Cheol Mokgang",
    "spawnHour": 16,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Asura",
    "spawnHour": 16,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Abismo de la Mina Abandonada",
    "name": "Hong Yeom Transformada",
    "spawnHour": 17,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Bosques Fantasmas",
    "name": "Wuihan",
    "spawnHour": 17,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Cheol Mokgang",
    "spawnHour": 18,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Laberinto Bicheon",
    "name": "Yeticlops",
    "spawnHour": 18,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Abismo de la Mina Abandonada",
    "name": "Hong Yeom Transformada",
    "spawnHour": 19,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Cheol Mokgang",
    "spawnHour": 20,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Abismo de la Mina Abandonada",
    "name": "Hong Yeom Transformada",
    "spawnHour": 21,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Cheol Mokgang",
    "spawnHour": 22,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Ciudad Bicheon",
    "name": "Asura",
    "spawnHour": 22,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Abismo de la Mina Abandonada",
    "name": "Hong Yeom Transformada",
    "spawnHour": 23,
    "spawnMinute": 30
  },
  {
    "world": "W6",
    "layer": "Capa 3",
    "location": "Bosques Fantasmas",
    "name": "Wuihan",
    "spawnHour": 23,
    "spawnMinute": 30
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Jardín de Taehyul",
    "name": "Taehyul",
    "spawnHour": 1,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Construcción Principal del Culto Demoníaco",
    "name": "Yiun",
    "spawnHour": 2,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Jardín de Taehyul",
    "name": "Taehyul",
    "spawnHour": 3,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Jardín de Taehyul",
    "name": "Taehyul",
    "spawnHour": 5,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Construcción Principal del Culto Demoníaco",
    "name": "Yiun",
    "spawnHour": 5,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Jardín de Taehyul",
    "name": "Taehyul",
    "spawnHour": 7,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Construcción Principal del Culto Demoníaco",
    "name": "Yiun",
    "spawnHour": 8,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Jardín de Taehyul",
    "name": "Taehyul",
    "spawnHour": 9,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Jardín de Taehyul",
    "name": "Taehyul",
    "spawnHour": 11,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Construcción Principal del Culto Demoníaco",
    "name": "Yiun",
    "spawnHour": 11,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Jardín de Taehyul",
    "name": "Taehyul",
    "spawnHour": 13,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Construcción Principal del Culto Demoníaco",
    "name": "Yiun",
    "spawnHour": 14,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Jardín de Taehyul",
    "name": "Taehyul",
    "spawnHour": 15,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Jardín de Taehyul",
    "name": "Taehyul",
    "spawnHour": 17,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Construcción Principal del Culto Demoníaco",
    "name": "Yiun",
    "spawnHour": 17,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Jardín de Taehyul",
    "name": "Taehyul",
    "spawnHour": 19,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Construcción Principal del Culto Demoníaco",
    "name": "Yiun",
    "spawnHour": 20,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Jardín de Taehyul",
    "name": "Taehyul",
    "spawnHour": 21,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Jardín de Taehyul",
    "name": "Taehyul",
    "spawnHour": 23,
    "spawnMinute": 0
  },
  {
    "world": "W7",
    "layer": "Capa 3",
    "location": "Construcción Principal del Culto Demoníaco",
    "name": "Yiun",
    "spawnHour": 23,
    "spawnMinute": 0
  },
  {
    "world": "W8",
    "layer": "Capa 3",
    "location": "Círculo de Sello de los Gigantes Blancos",
    "name": "Ye Wihuang (Viejo)",
    "spawnHour": 1,
    "spawnMinute": 0
  },
  {
    "world": "W8",
    "layer": "Capa 3",
    "location": "Círculo de Sello de los Gigantes Blancos",
    "name": "Ye Wihuang (Viejo)",
    "spawnHour": 5,
    "spawnMinute": 0
  },
  {
    "world": "W8",
    "layer": "Capa 3",
    "location": "Círculo de Sello de los Gigantes Blancos",
    "name": "Ye Wihuang (Viejo)",
    "spawnHour": 9,
    "spawnMinute": 0
  },
  {
    "world": "W8",
    "layer": "Capa 3",
    "location": "Círculo de Sello de los Gigantes Blancos",
    "name": "Ye Wihuang (Viejo)",
    "spawnHour": 13,
    "spawnMinute": 0
  },
  {
    "world": "W8",
    "layer": "Capa 3",
    "location": "Círculo de Sello de los Gigantes Blancos",
    "name": "Ye Wihuang (Viejo)",
    "spawnHour": 17,
    "spawnMinute": 0
  },
  {
    "world": "W8",
    "layer": "Capa 3",
    "location": "Círculo de Sello de los Gigantes Blancos",
    "name": "Ye Wihuang (Viejo)",
    "spawnHour": 21,
    "spawnMinute": 0
  }
];

// Translation helper - uses global translations from main.js
function tBoss(key) {
    const lang = (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('mir4-lang') || 'es');
    const t = (typeof translations !== 'undefined') ? translations[lang] : null;
    return (t && t[key]) ? t[key] : key;
}

// ====== CONFIGURACIÓN DE ZONAS HORARIAS ======
const timezones = {
    '-3': { name: 'SA (UTC-3)', offset: -3 },
    '-4': { name: 'NA (UTC-4)', offset: -4 },
    '2':  { name: 'EU (UTC+2)', offset: 2 },
    '6':  { name: 'INMENA (UTC+6)', offset: 6 },
    '8':  { name: 'ASIA (UTC+8)', offset: 8 }
};
let currentTimezone = '-3';

// ====== ELEMENTOS DOM ======
const serverTimeEl        = document.getElementById('serverTime');
const serverTimezoneEl    = document.getElementById('serverTimezone');
const localTimeEl         = document.getElementById('localTime');
const serverSelector      = document.getElementById('serverSelector');
const cardsContainer      = document.getElementById('cardsContainer');
const cardsContainerNextHour = document.getElementById('cardsContainerNextHour');
const tableBody           = document.getElementById('tableBody');
const searchInput         = document.getElementById('searchInput');
const worldFilter         = document.getElementById('worldFilter');

const pad = (n) => n.toString().padStart(2, '0');

// ====== RELOJ Y CÁLCULOS DE TIEMPO ======
function getServerTime() {
    const now = new Date();
    const utcHour = now.getUTCHours();
    const utcMin  = now.getUTCMinutes();
    const utcSec  = now.getUTCSeconds();
    const offset  = parseInt(currentTimezone);
    const hour = (utcHour + offset + 24) % 24;
    return { hour, minute: utcMin, second: utcSec };
}

function updateClock() {
    if (serverTimeEl) {
        const t = getServerTime();
        serverTimeEl.textContent = pad(t.hour) + ':' + pad(t.minute) + ':' + pad(t.second);
        if (serverTimezoneEl) serverTimezoneEl.textContent = timezones[currentTimezone].name;
    }
    if (localTimeEl) {
        const now = new Date();
        localTimeEl.textContent = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
    }
}

function getNextSpawnTimeMs(boss) {
    const now = new Date();
    const spawnHourUTC = (boss.spawnHour - parseInt(currentTimezone) + 24) % 24;
    const spawnDate = new Date(Date.UTC(
        now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
        spawnHourUTC, boss.spawnMinute, 0
    ));
    if (spawnDate <= now) spawnDate.setUTCDate(spawnDate.getUTCDate() + 1);
    return spawnDate.getTime();
}

function getTimeRemainingMs(boss) {
    return getNextSpawnTimeMs(boss) - new Date().getTime();
}

function getTimeRemainingFormatted(boss) {
    const diffMs = getTimeRemainingMs(boss);
    if (diffMs <= 0) return '00:00:00';
    const totalSeconds = Math.floor(diffMs / 1000);
    const hours   = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

function formatSpawnTime(boss) {
    return pad(boss.spawnHour) + ':' + pad(boss.spawnMinute);
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[m]);
}

// ====== RENDERIZADO DE CARDS (PRÓXIMOS SPAWNS ≤ 30 MIN) ======
function renderCards() {
    if (!cardsContainer) return;
    const bossesWithTime = bossData
        .map(b => Object.assign({}, b, {
            timeRemainingMs: getTimeRemainingMs(b),
            timeRemainingStr: getTimeRemainingFormatted(b)
        }))
        .filter(b => b.timeRemainingMs <= 30 * 60 * 1000)
        .sort((a, b) => {
            const worldA = parseInt(a.world.substring(1)) || 0;
            const worldB = parseInt(b.world.substring(1)) || 0;
            if (worldA !== worldB) return worldA - worldB;
            return a.name.localeCompare(b.name, 'es');
        });

    let html = '';
    if (bossesWithTime.length === 0) {
        html = '<div class="no-bosses">' + escapeHtml(tBoss('sinJefes30min')) + '</div>';
    } else {
        html += '<div class="copy-all-wrap">' +
                '<button class="copy-all-btn" id="copyAllNearbyBtn" type="button">' +
                '📋 ' + escapeHtml(tBoss('copiarTodos')) + ' (' + bossesWithTime.length + ')' +
                '</button></div>';
        bossesWithTime.forEach(boss => {
            const infoText = boss.world + ' - ' + boss.name + ' - ' + boss.location + ' - ' + formatSpawnTime(boss);
            html += '<div class="boss-card">' +
                        '<span class="world-badge-card">' + boss.world + '</span>' +
                        '<div class="card-location">' + escapeHtml(boss.location) + '</div>' +
                        '<div class="card-details">' + escapeHtml(boss.layer) + ' • ' + boss.world + '</div>' +
                        '<div class="card-boss-name">' + escapeHtml(boss.name) + '</div>' +
                        '<div class="card-timer">' + boss.timeRemainingStr + '</div>' +
                        '<div class="card-spawn-time">' + escapeHtml(tBoss('colHorario')) + ': ' + formatSpawnTime(boss) + '</div>' +
                        '<button class="copy-btn copy-btn-card" data-info="' + escapeHtml(infoText) + '" type="button">' +
                        escapeHtml(tBoss('copiar')) +
                        '</button>' +
                    '</div>';
        });
    }
    cardsContainer.innerHTML = html;

    const copyAllBtn = document.getElementById('copyAllNearbyBtn');
    if (copyAllBtn) {
        copyAllBtn.addEventListener('click', () => {
            const text = bossesWithTime
                .map(b => b.world + ' - ' + b.name + ' - ' + b.location + ' - ' + formatSpawnTime(b) + ' (' + b.timeRemainingStr + ')')
                .join('\n');
            copyToClipboard(text, bossesWithTime.length);
        });
    }
}

// ====== RENDERIZADO DE CARDS (PRÓXIMOS SPAWNS 31-60 min) ======
function renderCardsNextHour() {
    if (!cardsContainerNextHour) return;
    const bossesWithTime = bossData
        .map(b => Object.assign({}, b, {
            timeRemainingMs: getTimeRemainingMs(b),
            timeRemainingStr: getTimeRemainingFormatted(b)
        }))
        .filter(b => b.timeRemainingMs > 30 * 60 * 1000 && b.timeRemainingMs <= 60 * 60 * 1000)
        .sort((a, b) => {
            const worldA = parseInt(a.world.substring(1)) || 0;
            const worldB = parseInt(b.world.substring(1)) || 0;
            if (worldA !== worldB) return worldA - worldB;
            return a.name.localeCompare(b.name, 'es');
        });

    let html = '';
    if (bossesWithTime.length === 0) {
        html = '<div class="no-bosses">' + escapeHtml(tBoss('sinJefes31a60')) + '</div>';
    } else {
        html += '<div class="copy-all-wrap">' +
                '<button class="copy-all-btn" id="copyAllNextHourBtn" type="button">' +
                '📋 ' + escapeHtml(tBoss('copiarTodos')) + ' (' + bossesWithTime.length + ')' +
                '</button></div>';
        bossesWithTime.forEach(boss => {
            const infoText = boss.world + ' - ' + boss.name + ' - ' + boss.location + ' - ' + formatSpawnTime(boss);
            html += '<div class="boss-card boss-card-next-hour">' +
                        '<span class="world-badge-card">' + boss.world + '</span>' +
                        '<div class="card-location">' + escapeHtml(boss.location) + '</div>' +
                        '<div class="card-details">' + escapeHtml(boss.layer) + ' • ' + boss.world + '</div>' +
                        '<div class="card-boss-name">' + escapeHtml(boss.name) + '</div>' +
                        '<div class="card-timer">' + boss.timeRemainingStr + '</div>' +
                        '<div class="card-spawn-time">' + escapeHtml(tBoss('colHorario')) + ': ' + formatSpawnTime(boss) + '</div>' +
                        '<button class="copy-btn copy-btn-card" data-info="' + escapeHtml(infoText) + '" type="button">' +
                        escapeHtml(tBoss('copiar')) +
                        '</button>' +
                    '</div>';
        });
    }
    cardsContainerNextHour.innerHTML = html;

    const copyAllBtn = document.getElementById('copyAllNextHourBtn');
    if (copyAllBtn) {
        copyAllBtn.addEventListener('click', () => {
            const text = bossesWithTime
                .map(b => b.world + ' - ' + b.name + ' - ' + b.location + ' - ' + formatSpawnTime(b) + ' (' + b.timeRemainingStr + ')')
                .join('\n');
            copyToClipboard(text, bossesWithTime.length);
        });
    }
}

// ====== RENDERIZADO DE TABLA ======
function renderTable() {
    if (!tableBody) return;
    const searchTerm = (searchInput && searchInput.value ? searchInput.value : '').toLowerCase();
    const world = worldFilter ? worldFilter.value : '';

    let filtered = bossData.filter(boss => {
        if (world && boss.world !== world) return false;
        if (searchTerm) {
            return boss.name.toLowerCase().includes(searchTerm) ||
                   boss.location.toLowerCase().includes(searchTerm) ||
                   boss.world.toLowerCase().includes(searchTerm);
        }
        return true;
    });

    filtered.sort((a, b) => getNextSpawnTimeMs(a) - getNextSpawnTimeMs(b));

    let html = '';
    filtered.forEach(boss => {
        const timeRemaining = getTimeRemainingFormatted(boss);
        const infoText = boss.world + ' - ' + boss.name + ' - ' + boss.location + ' - ' + formatSpawnTime(boss);
        html += '<tr>' +
                    '<td><span class="world-badge">' + boss.world + '</span></td>' +
                    '<td>' + escapeHtml(boss.layer) + '</td>' +
                    '<td>' + escapeHtml(boss.location) + '</td>' +
                    '<td class="boss-cell">' + escapeHtml(boss.name) + '</td>' +
                    '<td>' + formatSpawnTime(boss) + '</td>' +
                    '<td class="timer-cell">' + timeRemaining + '</td>' +
                    '<td><button class="copy-btn copy-btn-row" data-info="' + escapeHtml(infoText) + '" type="button">' +
                        escapeHtml(tBoss('copiar')) +
                    '</button></td>' +
                '</tr>';
    });
    tableBody.innerHTML = html;
}

// ====== PORTAPAPELES ======
function copyToClipboard(text, count) {
    const msg = (count !== undefined)
        ? tBoss('infoCopiada') + ' (' + count + ')'
        : tBoss('infoCopiada');
    const successFn = (typeof showToast === 'function') ? showToast : (m) => alert(m);
    const errorFn   = (typeof showToast === 'function') ? showToast : (m) => alert(m);

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => successFn(msg)).catch(() => errorFn(tBoss('errorCopiar')));
    } else {
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            successFn(msg);
        } catch (e) {
            errorFn(tBoss('errorCopiar'));
        }
    }
}

// ====== REFRESH GENERAL ======
function refreshAll() {
    updateClock();
    renderCards();
    renderCardsNextHour();
    renderTable();
}

// ====== EVENT LISTENERS ======
if (serverSelector) {
    serverSelector.addEventListener('change', (e) => {
        currentTimezone = e.target.value;
        refreshAll();
    });
}
if (searchInput) searchInput.addEventListener('input', renderTable);
if (worldFilter) worldFilter.addEventListener('change', renderTable);

// Delegación de clicks para botones copiar
document.addEventListener('click', (e) => {
    if (e.target && e.target.classList && e.target.classList.contains('copy-btn')) {
        const info = e.target.getAttribute('data-info');
        if (info) copyToClipboard(info);
    }
});

// Inicializar
refreshAll();
setInterval(refreshAll, 1000);
