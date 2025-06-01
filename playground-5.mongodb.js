//Database dan collection


const database = 'MBD_LINDA';
const collection = 'buku';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);


//delete document
db.buku.deleteOne({ judul: "Bumi" });
