Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'events/index'
      post 'events/create'
      delete 'events/:id', to: 'events#destroy'
    end
  end

  root 'events#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end