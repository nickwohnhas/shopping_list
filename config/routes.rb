Rails.application.routes.draw do
  resources :groups do
    resources :items
  end

  resources :lists

  get '/recipe_cart/all_items', to: 'recipe_carts#all_items'
  post '/recipe_cart/add_items', to: 'recipe_carts#add_items'
  post 'recipe_cart/search_recipes', to: 'recipe_carts#search_recipes'
  get '/recipe_cart/recipes', to: 'recipe_carts#recipes'
  delete '/recipe_cart/remove_item/:id', to: 'recipe_carts#remove_item'

  devise_for :users
  root to: "groups#index"
end
