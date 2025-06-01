//Database dan collection


const database = 'MBD_LINDA';
const collection = 'buku';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);


//create document
db.buku.insertMany([
  {
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    penerbit: "Bentang Pustaka",
    tahun_terbit: 2005,
    kategori: ["Novel Fiksi", "Sastra Indonesia"]
  },
  {
    judul: "Bumi",
    penulis: "Tere Liye",
    penerbit: "Gramedia Pustaka Utama",
    tahun_terbit: 2014,
    kategori: ["Fantasi", "Fiksi Remaja"]
  },
  {
    judul: "Filsafat Ilmu",
    penulis: "Jujun S. Suriasumantri",
    penerbit: "Pustaka Sinar Harapan",
    tahun_terbit: 2009,
    kategori: ["Non-Fiksi", "Filsafat"]
  }
]);
