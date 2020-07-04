Rails.application.routes.draw do
  resources :groups do
    resources :items
  end

  devise_for :users
  root to: "groups#index"
end
