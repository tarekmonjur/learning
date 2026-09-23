import MealGrid from '@/components/meals/meal-grid';
import Link from 'next/link';
import classes from './page.module.css';

export default function MealsPage() {
  return (
    <div>
      <header className={classes.header}>
        <h1>
          Delicious meals, created {' '}
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Favorite Meals</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealGrid meals={[]} />
      </main>
    </div>
  );
}