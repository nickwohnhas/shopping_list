import React, { useState } from 'react';
import { Button, Checkbox, Divider, Form, Header, List } from 'semantic-ui-react'

const RecipeSearch = ({ addIngredientsPath, ingredientsPath, recipeSearchPath }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [recipes, setRecipes] = useState(null)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [ingredients, setIngredients] = useState(null)
  const [chosenIngredients, setChosenIngredients] = useState([])
  const token = document.querySelector('[name=csrf-token]').content

  const handleSubmit = (e) => {
    fetch(recipeSearchPath, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-TOKEN': token
      },
      body: JSON.stringify({ name: searchQuery }),
      credentials: 'same-origin'
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setIngredients(null);
        setRecipes(data.results);
      })
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.target.id
    setSelectedRecipe(e.target.textContent)
    fetch(ingredientsPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-TOKEN': token
      },
      body: JSON.stringify({ id: id })
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setIngredients(data.ingredients)
      })
  }

  const handleIngredientSubmit = () => {
    fetch(addIngredientsPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-TOKEN': token
      },
      body: JSON.stringify({ checked_ingredients: chosenIngredients })
    })
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        const cart = document.querySelector(".item-count");
        cart.textContent = json.cartCount;
      })
  }

  const handleCheckboxChange = (e) => {
    const ingredientName = e.target.textContent
    let currentIngredients = [...chosenIngredients]

    if (!currentIngredients.find((item) => (item.name == ingredientName))) {
      currentIngredients.push({ name: ingredientName })
      setChosenIngredients(currentIngredients)
    } else {
      const updatedIngredients = chosenIngredients.filter((ingred) => ingred.name !== ingredientName)
      setChosenIngredients(updatedIngredients)
    }
  }

  return (
    <div>
      <h1>Search for recipes</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field onChange={handleChange} width="6">
          <label>Recipe name:</label>
          <input />
        </Form.Field>

        <Button type='submit'>Search</Button>
      </Form>
      {recipes && !ingredients && (
        <List>
          {recipes.map(({ id, title }) => {
            return (
              <List.Item onClick={handleClick} name={title}>
                <List.Content>
                  <a href="#" id={id}> {title} </a>
                </List.Content>
              </List.Item>
            )
          })}
        </List>
      )}
      {ingredients && (
        <div>
          <Divider />
          <Header as='h1'>{selectedRecipe}</Header>
          <Form id="ingredient-form" onSubmit={handleIngredientSubmit}>
            {ingredients.map(({ name }) => {
              return (
                <Form.Checkbox
                  label={{ children: name }}
                  control={Checkbox}
                  onChange={handleCheckboxChange}
                  checked={chosenIngredients.find((item) => (item.name == name))}
                />
              )
            })}
            <Button type='submit'>Add to Cart</Button>
          </Form>
        </div>
      )}
    </div>
  )
}

export default RecipeSearch;