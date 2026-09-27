'use client'

export default function Error({ error }) {
  console.warn(error.message)
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch meals. Please try again.</p>
    </main>
  )
}