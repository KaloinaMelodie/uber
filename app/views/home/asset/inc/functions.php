<?php 
	include('connection.php');
	//fonction admin
	function get_admin()
	{
		$sql = "select * from Administrateur";
		$list = mysqli_query(dbconnect(),$sql);
  	 	$result = mysqli_fetch_assoc($list);
		mysqli_free_result($list);
		return $result;
		mysqli_free_result($list);
	}
	function list_produit(){
		$sql="select * from Produit";
		$list_req = mysqli_query(dbconnect(),$sql);
		$result = array();
    while ($member = mysqli_fetch_array($list_req)) {
        $result[] = $member;
    }
		return $result;
		mysqli_free_result($list_req);
	}
	function inserer_produit($nomproduit,$pu,$code,$image){
		$sql="insert into Produit(NomProduit,PrixUnitaire,CodeCategorie,ImageProduit) values('%s','%s','%s','%s')";
		$sql = sprintf($sql,$nomproduit,$pu,$code,$image);
		$insert_req = mysqli_query(dbconnect(),$sql);
	}
	function delete_produit($code){
		$sql="delete from Produit where CodeProduit=$code";
		$delete_req = mysqli_query(dbconnect(),$sql);
	}
	function modifier_produit($codeproduit,$nomproduit,$pu,$code,$image){
		$sql="update Produit set NomProduit='$nomproduit',PrixUnitaire=$pu,CodeCategorie=$code,ImageProduit='$image' where CodeProduit=$codeproduit";
		$delete_req = mysqli_query(dbconnect(),$sql);
	}
	function list_livreur(){
		$sql="select * from Livreur";
		$list_req = mysqli_query(dbconnect(),$sql);
		$result = array();
    while ($member = mysqli_fetch_array($list_req)) {
        $result[] = $member;
    }
		return $result;
		mysqli_free_result($list_req);
	}
	function inserer_livreur($nomlivreur,$contact){
		$sql="insert into Livreur(NomLivreur,Contact) values('%s','%d')";
		$sql = sprintf($sql,$nomlivreur,$contact);
		$insert_req = mysqli_query(dbconnect(),$sql);
	}
	function delete_livreur($code){
		$sql="delete from Livreur where CodeLivreur=$code";
		$delete_req = mysqli_query(dbconnect(),$sql);
	}
	function modifier_livreur($code,$nl,$c){
		$sql="update Livreur set NomLivreur='$nl',Contact=$c where CodeLivreur=$code";
		$delete_req = mysqli_query(dbconnect(),$sql);
	}
	function list_command(){
		$sql="select * from Commande";
		$list_req = mysqli_query(dbconnect(),$sql);
		$result = array();
    while ($member = mysqli_fetch_array($list_req)) {
        $result[] = $member;
    }
		return $result;
		mysqli_free_result($list_req);
	}
	function modifier_etat($id,$etat){
		$sql="update Commande set EstLivre=$etat where IdCommande=$id";
		$etat_req = mysqli_query(dbconnect(),$sql);
	}
	function modifier_etat_panier($codeclient,$etat){
		$sql="update Panier set EstLivraison=$etat where CodeClient=$codeclient";
		$etat_req = mysqli_query(dbconnect(),$sql);
	}
	function get_commande($id){
		$sql="select * from Commande where IdCommande=$id";
		$req = mysqli_query(dbconnect(),$sql);
		 $result =  mysqli_fetch_assoc($req);
		return $result;
		mysqli_free_result($req);
	}

	function get_commande_by_CodeClient($id){
		$sql="select * from Commande where CodeClient=$id";
		$req = mysqli_query(dbconnect(),$sql);
		 $result =  mysqli_fetch_assoc($req);
		return $result;
		mysqli_free_result($req);
	}

	function globale(){
		$sql="select sum(PrixUnitaire)as isa,DateCommande from v_chiffre group by DateCommande";
		$list_req = mysqli_query(dbconnect(),$sql);
		$result = array();
    while ($member = mysqli_fetch_array($list_req)) {
        $result[] = $member;
    }
		return $result;
		mysqli_free_result($list_req);
	}
	function par_categorie(){
		$sql="select NomCategorie,sum(PrixUnitaire)as isa,DateCommande from v_chiffre group by DateCommande,CodeCategorie";
		$list_req = mysqli_query(dbconnect(),$sql);
		$result = array();
    while ($member = mysqli_fetch_array($list_req)) {
        $result[] = $member;
    }
		return $result;
		mysqli_free_result($list_req);
	}
	function par_produit(){
		$sql="select NomProduit,sum(PrixUnitaire)as isa,DateCommande from v_chiffre group by DateCommande,CodeProduit";
		$list_req = mysqli_query(dbconnect(),$sql);
		$result = array();
    while ($member = mysqli_fetch_array($list_req)) {
        $result[] = $member;
    }
		return $result;
		mysqli_free_result($list_req);
	}
	function clients_fideles(){
		$sql="select sum(PrixUnitaire)as isa,CodeClient,NomClient,Contact,Adresse,email from v_chiffre group by NomClient order by isa desc";echo $sql;
		$list_req = mysqli_query(dbconnect(),$sql);
		$result = array();
    while ($member = mysqli_fetch_array($list_req)) {
        $result[] = $member;
    }
		return $result;
		mysqli_free_result($list_req);
	}

	//fonction client

	function get_member_by_mail($mail)
	{
		$sql = "select * from Client where email='%s'";
		$sql = sprintf($sql,$mail);
		$member_req = mysqli_query(dbconnect(),$sql);
		$result = mysqli_fetch_assoc($member_req);
		mysqli_free_result($member_req);
		return $result;
		mysqli_free_result($member_req);
	}
	function get_member_by_id($id)
	{
		$sql = "select * from Client where CodeClient='%d'";
		$sql = sprintf($sql,$id);
		$member_req = mysqli_query(dbconnect(),$sql);
		$result = mysqli_fetch_assoc($member_req);
		mysqli_free_result($member_req);
		return $result;
		mysqli_free_result($member_req);
	}
	function get_member_by_name($name)
	{
		$sql="select * from Client where NomClient='%s'";
		$sql = sprintf($sql,$name);
		$member_req = mysqli_query(dbconnect(),$sql);
		$result = mysqli_fetch_assoc($member_req);
		mysqli_free_result($member_req);
		return $result;
		mysqli_free_result($member_req);
	}

	function list_members()
	{
		$sql = "select * from Client";
		$list_req = mysqli_query(dbconnect(),$sql);
		$result = array();
    while ($member = mysqli_fetch_array($list_req)) {
        $result[] = $member;
    }
		return $result;
		mysqli_free_result($list_req);
	}
	function list_members_without_user($user)
	{
		$sql="select * from Client where CodeClient!=$user";
		$list_req = mysqli_query(dbconnect(),$sql);
		$result = array();
    while ($member = mysqli_fetch_array($list_req)) {
        $result[] = $member;
    }
		return $result;
		mysqli_free_result($list_req);
	}

	function insert_members($nom, $contact, $adresses, $mdp, $mail)
	{
		$name=mysqli_real_escape_string(dbconnect(), $nom);
		$pass=mysqli_real_escape_string(dbconnect(), $mdp);
		$email=mysqli_real_escape_string(dbconnect(), $mail);
		$sql = "insert into Client (NomClient, Contact, Adresse, email, motdepasse) values('$name', $contact, '$adresses', '$email', sha1('$pass'))";
		$insert_req = mysqli_query(dbconnect(),$sql);
		//mysqli_free_result($insert_req);
		// $dir= "Client/$nom/";
		// if(is_dir($dir)) die ("Ce nom d'utilisateur existe deja, veuillez choisir un autre.");
		// mkdir($dir);
		// copy('user.png', $dir.'user.png');
		
	}

	function modify_mdp($mdp,$mail)
	{
		$pass=mysqli_real_escape_string(dbconnect(), $mdp);
		$sql = "update Client set motdepasse=sha1('%s') where email='%s'";
		$sql = sprintf($sql,$mdp,$mail);
		$mdp_req = mysqli_query(dbconnect(),$sql);
		mysqli_free_result($mdp_req);
	}

	function get_nouveau_Produit(){
		$sql="select count(CodeProduit) from Produit";
		$requete=mysqli_query(dbconnect(), $sql);
		$mysql=mysqli_fetch_assoc($requete);
		$nb=$mysql['count(CodeProduit)'];
		$limit=$nb-3;
		$sql_new="select * from Produit order by CodeProduit limit $limit,3";
		$request=mysqli_query(dbconnect(), $sql_new);
		$new_prod=array();
		while ($result=mysqli_fetch_array($request)) {
			$new_prod[]=$result;
		}
		return $new_prod;
	}

	function liste_produit(){
		$sql="select * from v_liste";
		$requete=mysqli_query(dbconnect(), $sql);
		$liste=array();
		while ($result=mysqli_fetch_array($requete)) {
			$liste[]=$result;
		}
		return $liste;
		mysqli_free_result($requete);
	}

	function get_produit_by_id($code){
		$sql="select * from Produit where CodeProduit=$code";
		$requete=mysqli_query(dbconnect(), $sql);
		$rep=mysqli_fetch_array($requete);
		return $rep;
	}

	function ajouter_panier($id, $CodeProduit, $produit, $prix){
		$sql="insert into Panier(CodeClient, CodeProduit, NomProduit, prix) values($id, $CodeProduit, '$produit', $prix)";
		echo $sql;
		$request=mysqli_query(dbconnect(), $sql);
	}

	function get_produit_in_Panier($id){
		$sql="select * from Panier where CodeClient=$id and EtatLivraison=0"; 
		$request=mysqli_query(dbconnect(), $sql);
		$commande=array();
		while($rep=mysqli_fetch_array($request)){
			$commande[]=$rep;
		}
		return $commande;
		mysqli_free_result($request);
	}
	function get_sum_in_Panier($id){
		$sql="select sum(prix) as isa from Panier where CodeClient=$id and EtatLivraison=0"; 
		$request=mysqli_query(dbconnect(), $sql);
		$rslt = mysqli_fetch_assoc($request);
		return $rslt;
		mysqli_free_result($request);
	}

	function passer_Commande($id, $livreur){
		$client=get_member_by_id($id);
		$adresse=$client['Adresse'];
		$sql="insert into Commande(CodeClient, CodeLivreur, AdresseLivraison) values ($id, $livreur, '$adresse')";
		echo $sql;
		$request=mysqli_query(dbconnect(), $sql);
		$sql_delete="delete from Panier where CodeClient=$id";
		$request_delete=mysqli_query(dbconnect(), $sql_delete);
	}

	function inserer_Detail($id, $code, $prix){
		$sql="insert into DetailCommande(idCommande, CodeProduit, PrixUnitaire) values ($id, $code, '$prix')";
		$request=mysqli_query(dbconnect(), $sql);
	}
	function list_Categorie(){
		$sql="select * from Categorie";
		$request=mysqli_query(dbconnect(), $sql);
		$categorie=array();
		while($rep=mysqli_fetch_array($request)){
			$categorie[]=$rep;
		}
		return $categorie;
	}

	function search_nom($nom){
		$sql = "select * from v_list where NomProduit like '%$nom%'";
		$result_req = mysqli_query(dbconnect(), $sql);
		$result = array();
    	while ($rslt = mysqli_fetch_array($result_req)) {
      	  $result[] = $rslt;
    	}
		return $result;
		mysqli_free_result($result_req);
	}

	function search_par_categorie($nom,$categorie){
		$sql = "select * from v_list where idCategorie='$categorie' or NomProduit like '%$nom%'"; echo $sql;
		$result_req = mysqli_query(dbconnect(), $sql);
		$result = array();
    	while ($rslt = mysqli_fetch_array($result_req)) {
      	  $result[] = $rslt;
    	}
		return $result;
		mysqli_free_result($result_req);
	}

	function search_categorie($categorie){
		$sql = "select * from v_list where idCategorie=$categorie"; echo $sql;
		$result_req = mysqli_query(dbconnect(), $sql);
		$result = array();
    	while ($rslt = mysqli_fetch_array($result_req)) {
      	  $result[] = $rslt;
    	}
		return $result;
		mysqli_free_result($result_req);
	}

	function search_prix_max(){
		$sql="select * from v_list group by PrixUnitaire order by max(PrixUnitaire) desc limit 1";
		$result_req = mysqli_query(dbconnect(), $sql);
    	$rslt = mysqli_fetch_assoc($result_req);
		return $rslt;
		mysqli_free_result($result_req);
	}

	function search_prix_min(){
		$sql="select * from v_list group by PrixUnitaire order by min(PrixUnitaire) asc limit 1";
		$result_req = mysqli_query(dbconnect(), $sql);
		$rslt = mysqli_fetch_assoc($result_req);
		return $rslt;
		mysqli_free_result($result_req);
	}

	function top3(){
		$sql=" select count(*) as isa, NomProduit from v_Commande order by isa desc limit 3";
		$result_req = mysqli_query(dbconnect(), $sql);
		$result = array();
    	while ($rslt = mysqli_fetch_array($result_req)) {
      	  $result[] = $rslt;
    	}
		return $result;
		mysqli_free_result($result_req);
	}
?>