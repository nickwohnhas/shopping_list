Rails.application.routes.draw do
  resources :groups do
    resources :items
  end

  get '/recipe_cart/all_items', to: 'recipe_carts#all_items'
  post '/recipe_cart/add_items', to: 'recipe_carts#add_items'

  devise_for :users
  root to: "groups#index"
end
