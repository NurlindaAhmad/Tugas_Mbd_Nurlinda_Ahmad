//Database dan collection


const database = 'MBD_LINDA';
const collection = 'buku';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);



//bulk write
db.buku.bulkWrite([
  {
    insertOne: {
      document: {
        judul: "Ayat-Ayat Cinta",
        penulis: "Habiburrahman El Shiraz",
        penerbit: "Republika",
        tahun_terbit: 2004,
        kategori: ["Novel Religi, Fiksi"]
      }
    }
  },
  {
    updateOne: {
      filter: { judul: "Filsafat Ilmu" },
      update: { $set: { penerbit: "Erlangga" } }
    }
  },
  {
    deleteOne: {
      filter: { judul: "Laskar Pelangi" }
    }
  }
]);
