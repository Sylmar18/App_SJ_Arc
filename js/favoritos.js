function favoritar(nome){

let favoritos =
JSON.parse(
localStorage.getItem("favoritos")
) || [];

if(!favoritos.includes(nome)){

favoritos.push(nome);

}

localStorage.setItem(
"favoritos",
JSON.stringify(favoritos)
);

}
const lista =
JSON.parse(
localStorage.getItem("favoritos")
) || [];

lista.forEach(nome=>{

document.getElementById(
"listaFavoritos"
).innerHTML +=

`<div class="card">${nome}</div>`;

});