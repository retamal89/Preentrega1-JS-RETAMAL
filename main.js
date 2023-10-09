//Inicio ingresando usuario(ADMINISTRADOR), y contraseña (1234)
let usuario = prompt("Ingrese su Usuario(ADMINISTRADOR)").toUpperCase();
let contraseña = prompt("Ingrese su contraseña(1234)");
// aun no aprendemos a ocultar la contraseña, reemplazar cuando aprendamos.
while (usuario != "ADMINISTRADOR" && contraseña !="1234"){
    alert("Usuario y/o contraseña incorrectos")
    usuario = prompt("Ingrese su Usuario").toUpperCase();
    contraseña = prompt("Ingrese su contraseña");
}
alert(`Bienvenido a su sesion ${usuario}`)
let opcion = prompt("Que desea realizar: 1:Cargar turnos; 2:Revisar turnos; 3:Salir");
if(opcion === "3"){
    alert("Muchas gracias por utilizar este programa");
}else if(opcion === "2"){
    alert("Aun no aprendo a almacenar datos, pero aqui pronto podras revisar tus turnos");
    // desarrollar las variables para almacenar en opcion 1 para poder verlas desde esta opcion.
}else if(opcion === "1"){
    // se ofrece la opcion de elegir cuantos turnos ingresara en el dia
    let numeroTurno = Number(prompt("Cuantos turnos desea cargar durante el dia"));
    for(let turno = 1; turno <= numeroTurno; turno++){
        let nombre = prompt("Ingrese su nombre");
        let apellido = prompt("Ingrese su apellido");
        alert(`Se le ha concedido el turno N°${turno} a nombre de: ${nombre},${apellido}`);
    }
    alert(`Se han asignado todos los turnos para el dia de hoy,intente mañana. En el dia de hoy asigno ${numeroTurno} turnos`);
}else{
    alert("No eligio ninguna de las opciones validas, debe ingresar nuevamente.");
}
