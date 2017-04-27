Rails.application.routes.draw do
  root 'site#angular'

  get '*path', to: 'site#angular'
  get '/aboutMe', to: 'site#about'

  # api/ urls and default to json
  scope '/api', defaults: { format: :json } do
    # since we're just doing a json api we don't need new and edit pages to hold forms for our users
    resources :lists, except: [:new, :edit] do
      resources :items, except: [:new, :edit]
    end
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
