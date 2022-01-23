$(function() {
		$("#slider").Thumbelina({
			$bwdBut:$('#slider .left'),
			$fwdBut:$('#slider .right')

		});

	})

      

function cargar(img){
		if (img.id==1) {
			cuadro.src="productos/balon.png";
			codigo.value="1";
			descripcion.value="Balon";
			precio.value="25.99";
			azucar.src="productos/rojo.png";
			sal.src="productos/rojo.png";
			grasa.src="productos/amarillo.png";
		}
		if (img.id==2) {
			cuadro.src="productos/zapatos.png";
			codigo.value="2";
			descripcion.value="Zapatos";
			precio.value="105.99";
			azucar.src="productos/rojo.png";
			sal.src="productos/verde.png";
			grasa.src="productos/amarillo.png";
		}
		if (img.id==3) {
			cuadro.src="productos/arquero3.png";
			codigo.value="3";
			descripcion.value="Arquero";
			precio.value="15.25";
			azucar.src="productos/rojo.png";
			sal.src="productos/amarillo.png";
			grasa.src="productos/amarillo.png";
		}
		if (img.id==4) {
			cuadro.src="productos/camiseta.png";
			codigo.value="4";
			descripcion.value="Camiseta";
			precio.value="12.50";
			azucar.src="productos/verde.png";
			sal.src="productos/rojo.png";
			grasa.src="productos/amarillo.png";
		}
		if (img.id==5) {
			cuadro.src="productos/canilleras.png";
			codigo.value="5";
			descripcion.value="Canilleras";
			precio.value="15.99";
			azucar.src="productos/verde.png";
			sal.src="productos/verde.png";
			grasa.src="productos/verde.png";
		}
		if (img.id==6) {
			cuadro.src="productos/guantes4.png";
			codigo.value="6";
			descripcion.value="Guantes";
			precio.value="20.99";
			azucar.src="productos/verde.png";
			sal.src="productos/amarillo.png";
			grasa.src="productos/rojo.png";
		}
		if (img.id==7) {
			cuadro.src="productos/fondobalon.png";
			codigo.value="7";
			descripcion.value="Balon Puma";
			precio.value="52.25";
			azucar.src="productos/verde.png";
			sal.src="productos/amarillo.png";
			grasa.src="productos/verde.png";
		}
		if (img.id==8) {
			cuadro.src="productos/pantaloneta2.png";
			codigo.value="8";
			descripcion.value="Pantaloneta";
			precio.value="9.75";
			azucar.src="productos/amarillo.png";
			sal.src="productos/amarillo.png";
			grasa.src="productos/amarillo.png";
		}
	}
			var venta=0;
	function compra() {
		var precio;
		var cantidad;
		var resultado;

		var stockBalon=4;
		var stockGuantes=6;
		var codigo1=document.getElementById("codigo").value;
		precio=document.getElementById('precio').value;
		cantidad=document.getElementById('cantidad').value;
		if(parseInt(codigo1)==1&&cantidad>stockBalon){
			alert("No existe el suficiente stock para la compra");
		}
		if(codigo1==6&&cantidad>stockGuantes){
			alert("No existe el suficiente stock para la compra");
		}
		else{
		$('#respuesta').css("visibility","");
		resultado= parseFloat(precio)*parseInt(cantidad);
		venta=parseFloat(resultado)+parseFloat(venta);
		document.getElementById('respuesta').value=resultado;
		alert('Total a pagar: $'+venta);
		cuadro.src="imagenes/messibalon.png";
		}
	}