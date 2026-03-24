class HomeController < ApplicationController
  def index
    session[:route]=Chemin.where(chemin:1)
  end
  
  # near
  def about
    login=Login.find(1).idclient
    distance=Position.select("distance").where(id:login)
    xs=Position.select("x").where(id:login)
    ys=Position.select("y").where(id:login)
    @taxis=Taxi.where(" |/(((#{xs.to_sql})-x)^2+((#{ys.to_sql})-y)^2) <= (#{distance.to_sql}) and mijanona=0")
    @dis = Position.find(login)
    Taxi.fill
    Position.fill
  end

  def go
    # set position of current client
    pos=Position.find(Login.find(1).idclient)
    pos.update(distance:params[:distance],dx:params[:dx],dy:params[:dy])
    pos.save
    respond_to do |format|
        format.html { redirect_to home_about_url, notice: "Successfuly change." }
        format.json { head :no_content }
    end
  end

  def aller
    # set idchem to chemin of way where way.arrive=client.arrive
    route=Way.where(ax:params[:dx],ay:params[:dy])[0]
    idchem=Idchemin.find(1)
    idchem.update(idchem:route.chemin)
    idchem.save
    # set status taxi nidirana
    t=Taxi.find(params[:idtaxi])
    t.update(status:"en route vers "+route.arrive.to_str)
    t.save
    respond_to do |format|
        format.html { redirect_to home_about_url, notice: "Successfuly change." }
        format.json { head :no_content }
    end
  end
end
