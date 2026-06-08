// Translation map: Portuguese (source) -> Spanish
// Keys are world|location|name concatenated to match data groups
const bossesES = [
  { world: 'W1', layer: 1, location: 'Montaña de los Siete Valles', name: 'Tatu Gigante de Caparazón Sombrío', times: ['00:30','03:30','06:30','09:30','12:30','15:30','18:30','21:30'] },
  { world: 'W1', layer: 3, location: '1F del Templo del Toro Demoníaco', name: 'Toro Trueno', times: ['01:00','03:00','05:00','07:00','09:00','11:00','13:00','15:00','17:00','19:00','21:00','23:00'] },
  { world: 'W1', layer: 3, location: 'Bosque del Toro Malvado', name: 'Mata', times: ['02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','00:00'] },
  { world: 'W1', layer: 1, location: 'Ciudad Unseo', name: 'Jihwa', times: ['02:30','05:30','08:30','11:30','14:30','17:30','20:30','23:30'] },
  { world: 'W1', layer: 3, location: 'Santuario del Rey de los Toros', name: 'Rey de los Toros Malvados', times: ['03:00','06:00','09:00','12:00','15:00','18:00','21:00','00:00'] },
  { world: 'W1', layer: 1, location: 'Montaña de los Siete Valles', name: 'Yaksha de los Ojos Nocturnos', times: ['03:30','09:30','15:30','21:30'] },
  { world: 'W1', layer: 1, location: 'Isla del Fuego Ardiente', name: 'Bulhu', times: ['04:30','10:30','16:30','22:30'] },
  { world: 'W2', layer: 1, location: 'Prisión Subterránea', name: 'Do Maengryong', times: ['00:30','06:30','12:30','18:30'] },
  { world: 'W2', layer: 1, location: 'Prisión Subterránea', name: 'Molgrash', times: ['01:30','04:30','07:30','10:30','13:30','16:30','19:30','22:30'] },
  { world: 'W2', layer: 3, location: 'Montaña de la Lúnula de Sangre', name: 'Juhui', times: ['02:30','05:30','08:30','11:30','14:30','17:30','20:30','23:30'] },
  { world: 'W2', layer: 1, location: 'Palacio del Dragón Noveno', name: 'Wi Kwangryeong', times: ['02:30','05:30','08:30','11:30','14:30','17:30','20:30','23:30'] },
  { world: 'W2', layer: 1, location: 'Campo de Hielo del Dragón Noveno', name: 'Gwe Mukang', times: ['05:30','11:30','17:30','23:30'] },
  { world: 'W3', layer: 3, location: 'Planicie de las Víboras Monstruosas', name: 'Emperador Tatu Sobrio', times: ['01:30','03:30','05:30','07:30','09:30','11:30','13:30','15:30','17:30','19:30','21:30','23:30'] },
  { world: 'W3', layer: 3, location: 'Necrópolis de Nerfariox', name: 'Gyo', times: ['02:30','08:30','14:30','20:30'] },
  { world: 'W3', layer: 3, location: 'Tumba de Rockcut', name: 'Mara', times: ['02:30','05:30','08:30','11:30','14:30','17:30','20:30','23:30'] },
  { world: 'W3', layer: 3, location: 'Tumba de Rockcut', name: 'Budu', times: ['03:30','09:30','15:30','21:30'] },
  { world: 'W4', layer: 3, location: 'Desierto de la Fantasía', name: 'Santidad Inquebrantable Nerfariox', times: ['02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','00:00'] },
  { world: 'W4', layer: 3, location: 'Círculo de Sello Suzerano', name: 'Kurilaika', times: ['03:00','06:00','09:00','12:00','15:00','18:00','21:00','00:00'] },
  { world: 'W5', layer: 3, location: 'Gran Muralla de Sabuk', name: 'Faluk', times: ['00:30','03:30','06:30','09:30','12:30','15:30','18:30','21:30'] },
  { world: 'W5', layer: 3, location: 'Templo Ilusorio', name: 'Fantasma Destructor de Historia', times: ['01:30','04:30','07:30','10:30','13:30','16:30','19:30','22:30'] },
  { world: 'W6', layer: 3, location: 'Ciudad Bicheon', name: 'Cheol Mokgang', times: ['00:30','02:30','04:30','06:30','08:30','10:30','12:30','14:30','16:30','18:30','20:30','22:30'] },
  { world: 'W6', layer: 3, location: 'Laberinto Bicheon', name: 'Yeticlops', times: ['00:30','06:30','12:30','18:30'] },
  { world: 'W6', layer: 3, location: 'Abismo de la Mina Abandonada', name: 'Hong Yeom Transformada', times: ['01:30','03:30','05:30','07:30','09:30','11:30','13:30','15:30','17:30','19:30','21:30','23:30'] },
  { world: 'W6', layer: 3, location: 'Ciudad Bicheon', name: 'Asura', times: ['04:30','10:30','16:30','22:30'] },
  { world: 'W6', layer: 3, location: 'Bosques Fantasmas', name: 'Wuihan', times: ['05:30','11:30','17:30','23:30'] },
  { world: 'W7', layer: 3, location: 'Jardín de Taehyul', name: 'Taehyul', times: ['01:00','03:00','05:00','07:00','09:00','11:00','13:00','15:00','17:00','19:00','21:00','23:00'] },
  { world: 'W7', layer: 3, location: 'Construcción Principal del Culto Demoníaco', name: 'Yiun', times: ['02:00','05:00','08:00','11:00','14:00','17:00','20:00','23:00'] },
  { world: 'W8', layer: 3, location: 'Círculo de Sello de los Gigantes Blancos', name: 'Ye Wihuang (Viejo)', times: ['01:00','05:00','09:00','13:00','17:00','21:00'] }
];

module.exports = bossesES;
