//Database dan collection


const database = 'MBD_LINDA';
const collection = 'buku';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);



//updtae document
db.buku.updateOne(
  { judul: "Laskar Pelangi" },
  { $set: { tahun_terbit: 2006 } }
);
