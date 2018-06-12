Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]

    resources :treats, only: [:index]
    get 'treats/search', to: 'treats#search'

    resources :cities, only: [:index]
    resources :favorites, only: [:index, :create, :destroy]
  end



end
