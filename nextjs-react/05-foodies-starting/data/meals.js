import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync('./data/meals.db');

export async function getMeals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  return db.prepare("select * from meals").all();
}

export async function getMeal(slug) {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  return db.prepare('select * from meals where slug=?').get(slug)
}

export async function saveMeal(meal) {
  return db.prepare(`
    insert into meals
      (title, slug, summary, creator, creator_email, image, instructions)
    values (
      @title, @slug, @summary, @name, @email, @image, @instructions 
    )
  `).run(meal);
}