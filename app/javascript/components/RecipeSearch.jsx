import React, { useState } from 'react';
import { Button, Checkbox, Divider, Form, Header, List } from 'semantic-ui-react'

const RecipeSearch = ({ ingredientsPath, recipeSearchPath }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [recipes, setRecipes] = useState(null)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [ingredients, setIngredients] = useState(null)
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
        setRecipes(data.results)
      })
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleClick = (e) => {
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
            return <List.Item id={id} onClick={handleClick}>{title}</List.Item>
          })}
        </List>
      )}
      {ingredients && (
        <div>
          <Divider />
          <Header as='h1'>{selectedRecipe}</Header>
          <Form>
            {ingredients.map(({ name }) => {
              return (
                <Form.Field
                  control={Checkbox}
                  label={{ children: name }}
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