let quien =['Mi perro ','Mi abuela ','Una tortuga ','Un pajaro '];
let accion = ['se comio ','perdio ','rompio ', 'regalo'];
let que = ['mi trabajo ','las llaves de casa ','las llaves del coche ','el gps '];
let donde = ['antes de salir de casa', 'en el parque','justo cuando venia aqui','durante el almuerzo'];

function frase(){
    let numarray0 = Math.floor(Math.random() * ( 3 - 0) + 0);
    let numarray1 = Math.floor(Math.random() * ( 3 - 0) + 0);   
    let numarray2 = Math.floor(Math.random() * ( 3 - 0) + 0);
    let numarray3 = Math.floor(Math.random() * ( 3 - 0) + 0);
    let excusa = quien[numarray0] + accion[numarray1] + que[numarray2] + donde[numarray3];

    document.getElementById("excuse").innerHTML = excusa;
}
