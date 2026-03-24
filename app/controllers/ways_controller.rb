class WaysController < ApplicationController
  before_action :set_way, only: %i[ show edit update destroy ]

  # GET /ways or /ways.json
  def index
    @ways = Way.all
  end

  # GET /ways/1 or /ways/1.json
  def show
  end

  # GET /ways/new
  def new
    @way = Way.new
  end

  # GET /ways/1/edit
  def edit
  end

  # POST /ways or /ways.json
  def create
    @way = Way.new(way_params)

    respond_to do |format|
      if @way.save
        format.html { redirect_to way_url(@way), notice: "Way was successfully created." }
        format.json { render :show, status: :created, location: @way }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @way.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ways/1 or /ways/1.json
  def update
    respond_to do |format|
      if @way.update(way_params)
        format.html { redirect_to way_url(@way), notice: "Way was successfully updated." }
        format.json { render :show, status: :ok, location: @way }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @way.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ways/1 or /ways/1.json
  def destroy
    @way.destroy

    respond_to do |format|
      format.html { redirect_to ways_url, notice: "Way was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_way
      @way = Way.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def way_params
      params.require(:way).permit(:depart, :arrive, :chemin, :dx, :dy, :ax, :ay)
    end
end
