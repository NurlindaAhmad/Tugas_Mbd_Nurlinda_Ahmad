const database = 'Final_Project_NurlindaAhmad';
const collection = 'mahasiswa';

use(database);

db.createCollection(collection);

db.mahasiswa.insertMany([
  {
    nama: "Nurlinda Ahmad",
    nim: "D0222036",
    prodi: "Informatika",
    kelas: "E",
    alamat: "Majene"
  },
  {
    nama: "Rusdi Ridha",
    nim: "D0222078",
    prodi: "PGSD",
    kelas: "D",
    alamat: "Tinambung"
  },
  {
    nama: "Indri Rastri",
    nim: "D0222532",
    prodi: "Informatika",
    kelas: "F",
    alamat: "Mosso"
  },
  {
    nama: "Marlina Salama",
    nim: "D0222067",
    prodi: "Informatika",
    kelas: "F",
    alamat: "Wonomulyo"
  },
  {
    nama: "Rizky",
    nim: "D0222045",
    prodi: "Informatika",
    kelas: "E",
    alamat: "Tommo"
  }
]);