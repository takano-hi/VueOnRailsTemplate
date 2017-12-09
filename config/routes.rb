Rails.application.routes.draw do
  root to: 'homes#welcome'

  get '*path', to: 'homes#redirect_to_root'
end
