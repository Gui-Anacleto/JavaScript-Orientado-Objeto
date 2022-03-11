class Cliente{
    nome;
    cpf;
}    

class ContaCorrente{
    agencia;
    //#saldo = 0;// https://github.com/tc39/proposal-class-fields#private-fields
    _saldo=0;
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }else{
            console.log("Operação invalida")
        }''
    }   

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            
        }else{
            console.log("Operação invalida")
        }       
    }


}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Mary";
cliente2.cpf = 55566611136;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
 

const contaCorrenteMary = new ContaCorrente();
contaCorrenteMary.agencia = 1001;


contaCorrenteRicardo.depositar(1000);
const valorScado = contaCorrenteRicardo.sacar(250);
console.log("Valor sacado: "+valorScado)

console.log(contaCorrenteRicardo)




  





