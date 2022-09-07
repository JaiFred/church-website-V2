class AdminsController < ApplicationController
    def index
        render json: Admin.all 
    end

    # get '/me'
    def show 
        current_admin = Admin.find(session[:admin_id])
        if current_admin
            render json: current_admin, serializer: MemberSerializer, status: :ok
        else
            render json: { errors: "No Active Sessions" }, status: :unauthorized #401
        end

    end

end
