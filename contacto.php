<?php
	$servidor="localhost";
	$usuario="root";
	$clave="";
	$baseDeDatos="proyectodw_hilario";
	$enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);
	if(!$enlace){
		echo"Error en la conexion con el servidor";
    }
    
		$nombresApellidos =$_POST["nombresApellidos"];
		$Correo=$_POST["Correo"];
		$Celular=$_POST["Celular"];
		$mensaje=$_POST["mensaje"];

		$sql = "INSERT INTO Contacto VALUES('$nombresApellidos',
													'$Correo',
													'$Celular',
													'$mensaje')";
		$ejecutar = mysqli_query($enlace, $sql);
		if(!$ejecutar){
			echo"Error En la linea de sql";
		}else{
			echo"Mensaje Enviado!<br><a href='contacto.html'>Volver</a>";
		}
?>

