//Database dan collection


const database = 'MBD_LINDA';
const collection = 'buku';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);


//comparision query
db.buku.find({ tahun_terbit: { $gt: 2000 } });
