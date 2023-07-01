// const NOTIFICATION_TITLE = 'Plan a vencer'
// const NOTIFICATION_BODY = 'HAYS 4 PLANES A VENCER'
// const CLICK_MESSAGE = 'Notification clicked!'

// new window.Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
//   .onclick = () => { document.getElementById('output').innerText = CLICK_MESSAGE }


//json de clientes


function saludo() {

  var clientes = [
    {
      "nombre": "Juan",
      "apellido": "Perez",
      "dni": "12345678",
      "plan": "Plan 1",
      "fecha": "01/06/2024",
      "monto": "1000",
      "estado": "Activo"
    },
    {
      "nombre": "Pedro",
      "apellido": "Gomez",
      "dni": "87654321",
      "plan": "Plan 2",
      "fecha": "01/04/2024",
      "monto": "2000",
      "estado": "Activo"
    },
    {
      "nombre": "Maria",
      "apellido": "Lopez",
      "dni": "12345678",
      "plan": "Plan 3",
      "fecha": "04/07/2023",
      "monto": "3000",
      "estado": "Activo"
    },
    {
      "nombre": "Fernando",
      "apellido": "Cortez",
      "dni": "12348754",
      "plan": "Plan 1",
      "fecha": "04/07/2023",
      "monto": "4000",
      "estado": "Activo"
    },

  ];
  //limpiar la tabla
  document.getElementById("bodytabla").innerHTML = "";


  //crear una tabla con los datos del json
  var tabla = "";
  var fechaactual = new Date();

  //concantenar al boy los datos del json
  for (var i = 0; i < clientes.length; i++) {
    //dar formato a la fecha
    clientes[i].fecha = new Date(clientes[i].fecha);
    clientes[i].fecha = clientes[i].fecha.toLocaleDateString();

    tabla += "<tr>";
    tabla += "<td onclick='noti("+clientes[i].fecha+")'>" + clientes[i].nombre + "</td>";
    tabla += "<td>" + clientes[i].apellido + "</td>";
    tabla += "<td>" + clientes[i].dni + "</td>";
    tabla += "<td>" + clientes[i].plan + "</td>";

    //if la fecha esta proxima a 5 dias a la fecha actual pintar la fila de rojo
    if(fechaactual>clientes[i].fecha){
      tabla += "<td style='background-color:red'>" + clientes[i].fecha + "</td>";
    }else{
      tabla += "<td>" + clientes[i].fecha + "</td>";
    }
    tabla += "<td>" + clientes[i].monto + "</td>";
    tabla += "<td>" + clientes[i].estado + "</td>";
    tabla += "</tr>";
  }
  //agregar la tabla al body
  document.getElementById("bodytabla").innerHTML = tabla;
  validarfechas();
}

function noti(fecha,nombre) {
  //formato de fecha

  fecha = new Date(fecha);
  fecha = fecha.toLocaleDateString();
  
  
  const NOTIFICATION_TITLE = 'Plan a vencer ' + fecha
  const NOTIFICATION_BODY = 'Del cliente ' + nombre 
  const CLICK_MESSAGE = 'Notification clicked!'

  new window.Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
    .onclick = () => { document.getElementById('output').innerText = CLICK_MESSAGE }


}

function validarfechas(){
 //validar las fechas de la tabla con la fecha actual
  //si la fecha es menor a la actual mostrar notificacion

  var fechaactual = new Date();


 
  var tabla = document.getElementById("bodytabla");
  var filas = tabla.getElementsByTagName("tr");
  for (var i = 0; i < filas.length; i++) {
    var celdas = filas[i].getElementsByTagName("td");
    var fecha = celdas[4].innerHTML;
    fecha = new Date(fecha);
   

    var nombre = celdas[0].innerHTML;
    var diferencia = fecha.getTime() - fechaactual.getTime();
    var diasRestantes = Math.ceil(diferencia / (1000 * 3600 * 24));

    if (diasRestantes < 4) {
     //dejar solo el dia mes y año
      fecha = fecha.toLocaleDateString();
      const NOTIFICATION_TITLE = 'Plan a vencer ' + fecha
      const NOTIFICATION_BODY = 'Del cliente ' + nombre + ' en ' + diasRestantes + ' dias'
      const CLICK_MESSAGE = 'EL PLAN DE ' + nombre + ' VENCE EN ' + diasRestantes + ' DIAS'
      new window.Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
        .onclick = () => { document.getElementById('output').innerText = CLICK_MESSAGE }
    }


    // alert(fecha);
    // alert(nombre);
    // alert(fechaactual);
    //si la fecha es menor a 3 dias de la fecha actual mostrar notificacion


  }

  
 
}



