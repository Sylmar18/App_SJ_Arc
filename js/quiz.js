function corrigirQuiz(){

let respostas = {
q1:"b",
q2:"c",
q3:"b",
q4:"c",
q5:"c",
q6:"b",
q7:"c",
q8:"a",
q9:"b",
q10:"c"
};

let pontos = 0;

for(let pergunta in respostas){

let marcada =
document.querySelector(
`input[name="${pergunta}"]:checked`
);

if(marcada &&
marcada.value === respostas[pergunta]){

pontos++;

}

}

let mensagem = "";

if(pontos === 10){

mensagem =
"🎉 Parabéns! Você acertou tudo!";

}
else if(pontos > 5){

mensagem =
"👏 Foi bom! Você conhece Arcoverde.";

}
else{

mensagem =
"🤠 Oxe, tá triste hein! Bora estudar mais sobre Arcoverde.";

}

document.getElementById("resultado").innerHTML =

`<h2>${pontos}/10 acertos</h2>
<p>${mensagem}</p>`;

}