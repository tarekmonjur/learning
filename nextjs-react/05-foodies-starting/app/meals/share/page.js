'use client';
import ImagePicker from '@/components/image-picker/image-picker';
import ShareMealFormSubmit from '@/components/meals/meal-form-submit';
import { shareMeal } from '@/lib/actions';
import { useActionState } from 'react';
import classes from './page.module.css';

export default function ShareMealPage() {
  const [state, action, isPending] = useActionState(shareMeal, { error: {}, values: {} });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={action}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required defaultValue={state.values.name} />
              <span className={classes.error}>{state.error.name}</span>
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required defaultValue={state.values.email} />
              <span className={classes.error}>{state.error.email}</span>
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required defaultValue={state.values.title} />
            <span className={classes.error}>{state.error.title}</span>
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required defaultValue={state.values.summary} />
            <span className={classes.error}>{state.error.summary}</span>
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              defaultValue={state.values.instructions}
            ></textarea>
            <span className={classes.error}>{state.error.instructions}</span>
          </p>
          <ImagePicker label="meal image" name="image" />
          <span className={classes.error}>{state.error.image}</span>
          <p className={classes.actions}>
            <ShareMealFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}