var botonCodificar = document.querySelector("#codificar");
var botonDecodificar = document.querySelector("#decodificar");
var botonCopiar = document.querySelector("#copiar")

botonCodificar.addEventListener("click",function(event){
	event.preventDefault();
	var form = document.querySelector("#form");
	var mensaje = validar(form);
	mensajeCodificado = codificarMensaje(mensaje); 
	var resultado = document.querySelector("#msg")
	resultado.value = mensajeCodificado;
});

botonDecodificar.addEventListener("click",function(event){
	event.preventDefault();
	var form = document.querySelector("#form");
	var mensaje = validar(form);
	mensajeDecodificado = decodificarMensaje(mensaje);
	var resultado = document.querySelector("#msg")
	resultado.value = mensajeDecodificado;
});


botonCopiar.addEventListener("click",function(event){
	event.preventDefault();
	var copiar = document.querySelector("#msg");
	copiar.select();
	document.execCommand('Copy');
	alert("El texto fue copiado");
})

function validar(form){
	mensaje = form.mensaje.value;
	var buscar = /^[a-z ]+$/g;
	if (mensaje.match(buscar)){
		return mensaje;
	}		
	else{ 
		alert("Solo puedes ingresar letras minusculas, sin acentos ni caracterses especiales");
		form.reset();
	}	
}


function codificarMensaje(mensaje){
	mensaje = mensaje.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
	return mensaje;
}

function decodificarMensaje(mensaje){
	mensaje = validar(form);
	mensaje = mensaje.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
	return mensaje;	
}







