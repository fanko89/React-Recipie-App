import React, { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([
    { id: 1, name: "Spaghetti Bolognese", ingredients: "spaghetti, beef, tomato sauce, onion, garlic", isFavorited: false },
    { id: 2, name: "Chicken Curry", ingredients: "chicken, curry powder, coconut milk, onion, garlic", isFavorited: false },
    { id: 3, name: "Beef Stew", ingredients: "beef, carrots, potatoes, onion, garlic, beef broth", isFavorited: false }
  ]);

  const [newRecipe, setNewRecipe] = useState({ name: "", ingredients: "" });

  const handleAddRecipe = () => {
    const recipeId = recipes.length + 1;
    const recipeToAdd = { ...newRecipe, id: recipeId };
    setRecipes([...recipes, recipeToAdd]);
    setNewRecipe({ name: "", ingredients: "" });
  };

  const handleDeleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  const handleEditRecipe = (id, updatedRecipe) => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === id) {
        return { ...recipe, ...updatedRecipe };
      } else {
        return recipe;
      }
    });
    setRecipes(updatedRecipes);
  };

  const handleToggleFavorite = (id) => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === id) {
        return { ...recipe, isFavorited: !recipe.isFavorited };
      } else {
        return recipe;
      }
    });
    setRecipes(updatedRecipes);
  };

  return (
    <div>
      <h1>Recipe App</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h2>{recipe.name}</h2>
            <p>{recipe.ingredients}</p>
            <button onClick={() => handleDeleteRecipe(recipe.id)}>Delete Recipe</button>
            <button onClick={() => handleToggleFavorite(recipe.id)}>{recipe.isFavorited ? "Unfavorite" : "Favorite"}</button>
          </li>
        ))}
      </ul>
      <h2>Add New Recipe</h2>
      <label>Name:</label>
      <input type="text" value={newRecipe.name} onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })} />
      <label>Ingredients:</label>
      <input type="text" value={newRecipe.ingredients} onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })} />
      <button onClick={handleAddRecipe}>Add Recipe</button>
    </div>
  );
}

export default App;