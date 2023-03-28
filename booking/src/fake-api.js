function createData(
  country,
  city,
  street,
  rooms,
) {
  return { country, city, street, rooms };
}

const rows = [
  createData('France', 'Lion', 'Mark', 5),
  createData('Italy', 'Rome', 'Avreli', 2),
  createData('GB', 'London', 'Twen', 1),
  createData('Ukraine', 'Lviv', 'Vovchok', 3),
];


export const fetchData = async () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(rows);
    }, 2000);
  })
}