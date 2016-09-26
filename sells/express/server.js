var express = require('express');
var aplicacion = express(); 

aplicacion.get('/',inicio);

function inicio (peticion, respuesta) {
	respuesta.send("Este es el nuevo Home de OAPP");
}
aplicacion.listen(3000);
