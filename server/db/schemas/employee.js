export const setupCollection = async (db) => {
  await db.command({
    collMod: 'employees',
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'first_name',
          'last_name',
        ],
        properties: {
          first_name: { bsonType: 'string' },
          last_name: { bsonType: 'string' },
          email: { bsonType: 'string' },
          number: { bsonType: 'string' },
          gender: { bsonType: 'string' },
          photo: { bsonType: 'string' },
        }
      }
    }
  });
}
