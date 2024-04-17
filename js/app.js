let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

const arrTime= []


console.log(btn);

function cadastrar() {
    //códigos
    let nomeInput = document.getElementById('nome').value
    let fundacaoInput = document.getElementById('fundacao').value
    let categoriaInput = document.getElementById('categoria').value
    let ligaInput = document.getElementById('liga').value
    let fundadorInput = document.getElementById('fundador').value


    const time = {
        nome: nomeInput,
        fundacao: fundacaoInput,
        categoria: categoriaInput,
        liga: ligaInput,
        fundador: fundadorInput,
    }

    arrTime.push(time)

    imprimir()

    console.log(arrTime)

   /* console.log(nome, sobrenome, categoria, peso, altura)*/

    /*div.innerHTML = "NOME: " + nome + "SOBRENOME: " + sobrenome + "CATEGORIA: " + categoria;*/
    /*
    div.innerHTML = `
    <strong>NOME:</strong> ${nome} 
    <strong>SOBRENOME:</strong> ${sobrenome} 
    <strong>CATEGORIA:</strong> ${categoria}
    <strong>IMC:</strong> ${imc} - ${categoriaImc}
    `*/
}



function imprimir(){

    div.innerHTML = ''

    for (let i = 0; i < arrTime.length; i++) {
    
        
 
    div.innerHTML += `

    <tr>
    <th scope="row">${i+1}</th>
    <td>${arrTime[i].nome}</td>
    <td>${arrTime[i].fundacao}</td>
    <td>${arrTime[i].categoria}</td>
    <td>${arrTime[i].liga}</td>
    <td>${arrTime[i].fundador}</td>
    </tr> 

    `
   }

}

btn.addEventListener('click', cadastrar)