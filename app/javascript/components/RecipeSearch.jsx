import React, { useState } from 'react';
import { Button, Form, List } from 'semantic-ui-react'

const RecipeSearch = ({ recipeSearchPath }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [recipes, setRecipes] = useState(null)
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
        console.log(data.results)
        setRecipes(data.results)
      })
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
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
      {recipes && (
        <List>
          {recipes.map(({ title }) => {
            return <List.Item>{title}</List.Item>
          })}
        </List>
      )}
    </div>
  )
}

export default RecipeSearch;