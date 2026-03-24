class TaxisController < ApplicationController
  before_action :set_taxi, only: %i[ show edit update destroy ]

  # GET /taxis or /taxis.json
  def index
    @taxis = Taxi.all
  end

  def test
    @tax = Taxi.find(params[:id])
    if params[:check] == '1'
      @tax.mijanona=1
      @tax.save
    elsif params[:check] == '0'
      @tax.mijanona=0
      @tax.save
    end
      
    respond_to do |format|
        format.html { redirect_to taxis_url, notice: "Successfuly change." }
        format.json { head :no_content }
    end
  end

  # GET /taxis/1 or /taxis/1.json
  def show
  end

  # GET /taxis/new
  def new
    @taxi = Taxi.new
  end

  # GET /taxis/1/edit
  def edit
  end

  # POST /taxis or /taxis.json
  def create
    @taxi = Taxi.new(taxi_params)

    respond_to do |format|
      if @taxi.save
        Taxi.fill
        format.html { redirect_to taxi_url(@taxi), notice: "Taxi was successfully created." }
        format.json { render :show, status: :created, location: @taxi }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @taxi.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /taxis/1 or /taxis/1.json
  def update
    respond_to do |format|
      if @taxi.update(taxi_params)
        Taxi.fill
        format.html { redirect_to taxi_url(@taxi), notice: "Taxi was successfully updated." }
        format.json { render :show, status: :ok, location: @taxi }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @taxi.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /taxis/1 or /taxis/1.json
  def destroy
    @taxi.destroy
    Taxi.fill
    respond_to do |format|
      format.html { redirect_to taxis_url, notice: "Taxi was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_taxi
      @taxi = Taxi.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def taxi_params
      params.require(:taxi).permit(:numero, :x, :y, :dx, :dy, :status)
    end
end
