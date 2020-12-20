# README

**This app is a work in progress but if you want to run it locally do the following:**

`rails s` will start the server.

`yarn start` must also be run because the assets are served through webpack.

You will also need:
* Ruby version 2.6.5

* This app uses the Postgres DB

* A Spoontacular API KEY https://spoonacular.com/food-api/docs

Once you have your API key, you need to set it to the ENV variable `SPOONTACULAR_API_KEY`.

You can do this by adding `export SPOONTACULAR_API_KEY=yourkey` to your `.zshrc`, `.bashrc` or whatever shell you use.

# Usage
You can build a shopping list two different ways.  You can create groups which represent shelves in your fridge ("fruits"), and then add food items to them ("banana").  From there you can select the items and add them to your "Recipe Cart".  Once you have them in the cart you can create a shopping list from them.  This is the manual approach.  The alternative way is to search for recipes using the spoontacular API.  Each recipe can be clicked and will provide a list of ingredients.  Those ingredients can be added to your shopping cart and are automatically stored in a default "Spoontacular" group.

The final goal of ShoppingList is to be able to email and potentially text the list to yourself so that you can quickly view it in the store.  That feature will be coming soon.


