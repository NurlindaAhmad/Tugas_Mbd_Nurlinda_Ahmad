//Database dan collection


const database = 'MBD_LINDA';
const collection = 'buku';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

//logical query
db.buku.find({
  $or: [
    { tahun_terbit: { $lt: 2010 } },
    { kategori: "Filsafat" }
  ]
});
