
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

/* const cliente2 = new Cliente();
cliente2.nome = "Mary";
cliente2.cpf = 55566611136; */

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(500);


/* const contaCorrenteMary = new ContaCorrente();
contaCorrenteMary.cliente = cliente2;
contaCorrenteMary.agencia = 1001;
console.log(contaCorrenteMary)
let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrenteMary) 

console.log("valor: ", valor)
console.log(contaCorrenteMary)*/

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(conta2.saldo);






  





