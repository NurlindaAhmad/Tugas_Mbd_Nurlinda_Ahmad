
const database = 'Final_Project_NurlindaAhmad';
const collection = 'mahasiswa';

use(database);

db.createCollection(collection);

db.key_value.insertMany([
  { key: "mahasiswa1", value: "Nurlinda Ahmad" },
  { key: "mahasiswa2", value: "Rusdi Ridha" },
  { key: "mahasiswa3", value: "Indri Rastri" },
  { key: "mahasiswa4", value: "Marlina Salama" },
  { key: "mahasiswa5", value: "Rizky " }
]);