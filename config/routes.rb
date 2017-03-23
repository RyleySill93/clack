Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  mount ActionCable.server => '/cable'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:create, :update, :destroy, :show, :index]
    resources :messages, only: [:create, :update, :destroy, :index]
    resources :memberships, only: [:create, :destroy]
    resources :reactions, only: [:create, :destroy]
  end
end
