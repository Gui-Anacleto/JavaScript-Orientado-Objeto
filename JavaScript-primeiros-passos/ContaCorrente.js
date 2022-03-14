import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    

    //Privados

    _saldo=0;
    _cliente;

    get saldo(){
        return this._saldo;
    }
   

    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        
    } 

    get cliente(){
        return this._cliente;
    }
    
    //#saldo = 0;// https://github.com/tc39/proposal-class-fields#private-fields
    
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }else{
            console.log("Operação invalida")
        }
    }   

    depositar(valor){
        if(valor <= 0) 
        {
            return;
        }
        this._saldo += valor;
               
    }

    transferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}