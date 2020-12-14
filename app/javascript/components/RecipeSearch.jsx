import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const RecipeSearch = () => {

  const handleSubmit = (e) => {
    // fetch recipe from Spoontacular API
  }

  const handleChange = (e) => {
    // update search input here
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
    </div>
  )
}

export default RecipeSearch;