<?php
	$servidor="localhost";
	$usuario="root";
	$clave="";
	$baseDeDatos="proyectodw_hilario";
	$enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);
	if(!$enlace){
		echo"Error en la conexion con el servidor";
    }
    
		$titulo =$_POST["titulo"];
		$nombresApellidos=$_POST["nombresApellidos"];
		$Correo=$_POST["Correo"];
        $Celular=$_POST["Celular"];
        $Direccion=$_POST["Direccion"];
        $cuenta=$_POST["cuenta"];
        $Entrega=$_POST["Entrega"];

		$sql = "INSERT INTO ventas VALUES('$titulo',
													'$nombresApellidos',
													'$Correo',
                                                    '$Celular',
                                                    '$Direccion',
                                                    '$cuenta',
													'$Entrega')";
		$ejecutar = mysqli_query($enlace, $sql);
		if(!$ejecutar){
			echo"Error En la linea de sql";
		}else{
			echo"Compra Realizada, revise su correo o este atento(a) a su celular!<br><a href='producto1.html'>Volver</a>";
		}