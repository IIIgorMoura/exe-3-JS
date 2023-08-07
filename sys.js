// button.addEventListener('click', function() {
// let ref = document.querySelector(':root');
// let refStyle = getComputedStyle(ref);
// let corFundo = refStyle.getPropertyValue('--corPage');
// let acesso = document.getElementById('txt');

// let valor = document.getElementById('senha').innerHTML;

// console.log(valor);

// });

let valor = document.querySelector("#senha");
let botao = document.querySelector("#entrar");

botao.addEventListener('click', function() {
    let valInput = valor.value;

    console.log(valInput);
});

if (valor>=1000 && valor<2000) {
    console.log(valor)
}

else if (valor>=2000 && valor<3000) {
    console.log("jose")
}

else if (valor>=3000) {
    console.log()
}