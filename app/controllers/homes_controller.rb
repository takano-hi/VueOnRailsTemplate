class HomesController < ApplicationController
  def welcome
  end

  def redirect_to_root
    redirect_to root_path
  end
end
