var contenido=document.getElementById("contenido");
var contenidoApi=document.getElementById("contenidoApi");
var contTabla=document.getElementById("tabla");

function traer(){
    fetch('texto.txt').then(data => data.text()).then(data => { contenido.innerHTML = '<h1>'+data+'</h1>';}); 
}
function leerApi(){
    fetch('https://randomuser.me/api/')
        .then(res => res.json()).then(res => { contenidoApi.innerHTML = `<img src="${res.results[0].picture.large}" width="100" class="img-fluid redounded-circle">
            <p>Name: ${res.results[0].name.last}</p>`}); 
}
function tablaDinamica(){
    fetch('tabla.json').then(data=> data.json()).then(data =>{ tabla(data)});
}

function tabla(data){
    contTabla.innerHTML='';
    for(let i of data){
        // console.log(i.nombre);
        contTabla.innerHTML +=`
        <tr>
                            <th scope="row">${i.id}</th>
                            <td>${i.nombre}</td>
                            <td>${i.email}</td>
                            <td>${i.estado? "activo" : "Inactivo"}</td>
                        </tr>
        `
    }
}