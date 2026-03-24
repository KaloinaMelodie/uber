<!DOCTYPE html>
<html>
<head>
	<title>Formulaire d'upload image</title>
</head>
<body>
	<form action="upload.php" method="post" enctype="multipart/form-data">
		<h2> Upload Fichier </h2>
		<p> Fichier: </p>
		<input type="file" name="photo" id="fileUpload">
		<input type="submit" name="submit" value="Valider">
	</form>
</body>
</html>