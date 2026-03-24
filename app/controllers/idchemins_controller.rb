class IdcheminsController < ApplicationController
  before_action :set_idchemin, only: %i[ show edit update destroy ]

  # GET /idchemins or /idchemins.json
  def index
    @idchemins = Idchemin.all
  end

  # GET /idchemins/1 or /idchemins/1.json
  def show
  end

  # GET /idchemins/new
  def new
    @idchemin = Idchemin.new
  end

  # GET /idchemins/1/edit
  def edit
  end

  # POST /idchemins or /idchemins.json
  def create
    @idchemin = Idchemin.new(idchemin_params)

    respond_to do |format|
      if @idchemin.save
        format.html { redirect_to idchemin_url(@idchemin), notice: "Idchemin was successfully created." }
        format.json { render :show, status: :created, location: @idchemin }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @idchemin.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /idchemins/1 or /idchemins/1.json
  def update
    respond_to do |format|
      if @idchemin.update(idchemin_params)
        format.html { redirect_to idchemin_url(@idchemin), notice: "Idchemin was successfully updated." }
        format.json { render :show, status: :ok, location: @idchemin }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @idchemin.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /idchemins/1 or /idchemins/1.json
  def destroy
    @idchemin.destroy

    respond_to do |format|
      format.html { redirect_to idchemins_url, notice: "Idchemin was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_idchemin
      @idchemin = Idchemin.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def idchemin_params
      params.require(:idchemin).permit(:idchem)
    end
end
