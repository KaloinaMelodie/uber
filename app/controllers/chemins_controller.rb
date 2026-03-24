class CheminsController < ApplicationController
  before_action :set_chemin, only: %i[ show edit update destroy ]

  # GET /chemins or /chemins.json
  def index
    @chemins = Chemin.where(chemin:session[:chemin]).order(:id)
  end

  def list
    @chemins = Chemin.where(chemin:params[:chemin]).order(:id)
    session[:chemin]=params[:chemin]
  end

  # GET /chemins/1 or /chemins/1.json
  def show
  end

  # GET /chemins/new
  def new
    @chemin = Chemin.new(chemin:session[:chemin])
  end

  # GET /chemins/1/edit
  def edit
  end

  # POST /chemins or /chemins.json
  def create
    @chemin = Chemin.new(chemin_params)

    respond_to do |format|
      if @chemin.save
        format.html { redirect_to chemin_url(@chemin), notice: "Chemin was successfully created." }
        format.json { render :show, status: :created, location: @chemin }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @chemin.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /chemins/1 or /chemins/1.json
  def update
    respond_to do |format|
      if @chemin.update(chemin_params)
        format.html { redirect_to chemin_url(@chemin), notice: "Chemin was successfully updated." }
        format.json { render :show, status: :ok, location: @chemin }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @chemin.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /chemins/1 or /chemins/1.json
  def destroy
    @chemin.destroy

    respond_to do |format|
      format.html { redirect_to chemins_url, notice: "Chemin was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_chemin
      @chemin = Chemin.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def chemin_params
      params.require(:chemin).permit(:chemin, :x, :y)
    end
end
