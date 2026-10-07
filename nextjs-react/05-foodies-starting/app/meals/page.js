import MealGrid from '@/components/meals/meal-grid';
import { getMeals } from '@/data/meals';
import { cacheLife } from 'next/cache';
import Link from 'next/link';
import { Suspense } from 'react';
import MealsLoading from './loading-meals';
import classes from './page.module.css';

async function Meals() {
  'use cache'
  cacheLife('minutes')

  const meals = await getMeals()

  return <MealGrid meals={meals} />
}

export default async function MealsPage() {
  
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
        <Suspense fallback={< MealsLoading />}>
          <Meals />
        </Suspense>
      </main>
    </div>
  );
}