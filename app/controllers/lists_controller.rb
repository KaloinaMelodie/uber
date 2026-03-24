class ListsController < ApplicationController
  before_action :set_list, only: %i[ show edit update destroy ]

  # GET /lists or /lists.json
  def index
    @lists = List.all
  end

def miditra
    client=Position.find(params[:idclient]) 
    @l=List.new
    @l.idtaxi=params[:idtaxi]
    @l.idclient=params[:idclient]
    taxi=Taxi.find(params[:idtaxi])
    # set position and destination taxi to position and destination curr client

    taxi.update(x:client.x, y:client.y,dx:client.dx,dy:client.dy,status:"arret")
    taxi.save
    @l.save
      
    respond_to do |format|
        format.html { redirect_to home_about_url, notice: "insert sussecc." }
        format.json { head :no_content }
    end
  end

  # GET /lists/1 or /lists/1.json
  def show
  end

  # GET /lists/new
  def new
    @list = List.new
  end

  # GET /lists/1/edit
  def edit
  end

  # POST /lists or /lists.json
  def create
    @list = List.new(list_params)

    respond_to do |format|
      if @list.save
        format.html { redirect_to list_url(@list), notice: "List was successfully created." }
        format.json { render :show, status: :created, location: @list }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /lists/1 or /lists/1.json
  def update
    respond_to do |format|
      if @list.update(list_params)
        format.html { redirect_to list_url(@list), notice: "List was successfully updated." }
        format.json { render :show, status: :ok, location: @list }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lists/1 or /lists/1.json
  def destroy
    @list.destroy

    respond_to do |format|
      format.html { redirect_to home_about_url, notice: "niala." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list
      @list = List.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def list_params
      params.require(:list).permit(:idtaxi, :idclient)
    end
end
