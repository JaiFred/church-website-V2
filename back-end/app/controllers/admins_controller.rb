class AdminsController < ApplicationController
    def show
        render json: Admin.all 
    end

end
