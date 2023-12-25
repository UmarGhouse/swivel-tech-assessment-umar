import mongodb, { closeConnection } from '../server/db/connect.js'
import seedData from '../seed/employees.json' assert { type: "json" };

const seedDatabase = async () => {
  const db = await mongodb();

  const result = await db.collection('employees')
    .insertMany(seedData);

  return console.log(`Successfully seeded database with ${Object.keys(result.insertedIds).length} items`);
}

await seedDatabase();
closeConnection();
