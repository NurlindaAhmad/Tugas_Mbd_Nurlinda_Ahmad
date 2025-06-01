//Database dan collection


const database = 'MBD_LINDA';
const collection = 'buku';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

//schema validation
db.createCollection("buku_validasi", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["judul", "penulis", "penerbit", "tahun_terbit", "kategori"],
      properties: {
        judul: {
          bsonType: "string",
          description: "Harus string dan wajib diisi"
        },
        penulis: {
          bsonType: "string"
        },
        penerbit: {
          bsonType: "string"
        },
        tahun_terbit: {
          bsonType: "int",
          minimum: 1900,
          maximum: 2025
        },
        kategori: {
          bsonType: "array",
          items: { bsonType: "string" }
        }
      }
    }
  }
});
