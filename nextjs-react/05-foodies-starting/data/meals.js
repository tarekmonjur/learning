import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync('./data/meals.db');

export async function getMeals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  return db.prepare("select * from meals").all();
}