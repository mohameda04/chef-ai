import { useState } from "react"

export default function Main() {

    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(ingredients => [...ingredients, newIngredient])
    }

    return (
        <main>
        <h1>Welcome to Chef AI</h1>
        <p>Your personal AI-powered cooking assistant.</p>
        <form onSubmit={handleSubmit} className="ingredient-form"> 
            <input 
                type="text"
                placeholder="e.g. parsley"
                aria-label="Add ingredient"
                name="ingredient"
                />
                <button>Add ingredient</button>
        </form>
        <ul>
            {ingredientsListItems}
        </ul>
        </main>
  )
}