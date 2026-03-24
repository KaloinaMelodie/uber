Rails.application.routes.draw do
  resources :idchemins
  resources :chemins
  resources :ways
  resources :lists
  resources :logins
  get 'vnear/new'
  get 'vnear/create'
  get 'vnear/vnear'
  resources :positions
  resources :taxis
  # get 'home/index'
  root 'home#index'
  get 'home/about'
  get 'taxis/:check/:id', to:'taxis#test', as: 'taxis_test'
  get 'lists/:idtaxi/:idclient', to:'lists#miditra', as: 'lists_miditra'
  get 'home/go', to:'home#go', as: 'go'
  get 'home/aller/:dx/:dy/:idtaxi', to:'home#aller', as: 'aller'
  get 'chemin/list/:chemin', to:'chemins#list', as: 'list_chemins'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
