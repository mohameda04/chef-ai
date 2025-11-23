export default function Main() {
  return (
    <main>
      <h1>Welcome to Chef AI</h1>
      <p>Your personal AI-powered cooking assistant.</p>
      <form className="ingredient-form"> 
        <input 
            type="text"
            placeholder="e.g. parsley"
            aria-label="Add ingredient"
            />
            <button>Add ingredient</button>
      </form>
    </main>
  )
}