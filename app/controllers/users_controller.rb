class UsersController < ApplicationController

  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  def get_all
    @team = Team.find(params[:id])
    @users = []

    User.all.each do |user| 
#     $role = "";
#     if @team.team_members.find_by_id(user.id).users > 0
#        $role = @team.team_members.find_by_id(user.id).role
#      end
      @user_c = {
        :id =>  user.id,
        :first_name => user.first_name,
        :last_name => user.last_name,
        :role =>  ""  
      }
      @users.push(@user_c)
    end
  end


   #def get_all
    # user each 
    # if  user.team_member.team_id = 
   # @team = Team.find(params[:id])
   # @users = []

    #User.all.each do |user| 
    #  $role = "";
    #  if @team.team_members.find_by_id(user.id).users > 0
    #    $role = @team.team_members.find_by_id(user.id).role
    #  end
    #  @user_current = {
    #    :id =>  user.id,
    #    :first_name => user.first_name,
    #    :last_name => user.last_name,
    #    :role =>  $role   
    #  }
    #  @users.push(@user_current)
    #end
  #end


 

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render action: 'show', status: :created, location: @user }
      else
        format.html { render action: 'new' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:first_name, :last_name)
    end
end
