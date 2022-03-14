1. Repetição de código

    Criando classes
    O que são atributos
    Instâcia/Objeto
    Operador new

    OBS: Se tivermos código que se repete porém não forma um contexto coeso, provavelmente teremos que criar duas classes, cada uma delimitando um contexto único que faça sentido.
 
2. Adicionando comportamentos
    O que aprendemos nessa aula:

    Criação de métodos
    Palavra chave this
    Encapsulamento
    Proposta de atributos privados
    Return e early return

    OBS: 
    Função e método são termos sinônimos e que nós ajudam a criar um vocabulário mais rico dentro do nosso sistema:
        Correta! Usamos métodos para dar nomes aos comportamentos que nossa classe possui e isso facilita a comunicação dentro da equipe

    Um método pode receber qualquer quantidade de parâmetros:
        Correto, um método pode ter nenhum, um ou mais parâmetros. Essa é a maneira de passarmos informações para podermos reutilizar métodos em diferentes cenários

    Um método define o comportamento ou a maneira de fazer algo:
        Correto, esse é o objetivo de métodos, definir o que um objeto saber fazer. O comportamento é implementado dentro do método.

    Proteção de atributos:
        Por padrão no JS utilizamos o "_" para indicar que um atributo é privado e não deveria ser alterado:
            Isso mesmo! Apesar de ainda ser possível alterar essa propriedade isso é considerado uma má prática e estamos quebrando o encapsulamento da classe.

        Atualmente no Js nenhum atributo ou método é realmente privado:
            Sim, o JS é uma linguagem de escopo aberto e por isso é possível visualizar qualquer atributo ou propriedade de nossa classe.

3. Modularizando código

    O que aprendemos nessa aula:

        Package.json
        Modules
        import/export
        Quais as vantagens de ter um código onde usamos classes e composição ao invés de tipos primitivos
        Tipos de valor e tipos de referência
        Alterando dinamicamente um objeto

    OBS:  

    Criamos módulos para compartilhar código entre os diferentes arquivos do meu sistema, ajudando na organização dele.

        Isso, dentro do JS cada arquivo é considerado um módulo e podemos escolher o que queremos exportar ou não a partir dele.

4. Acessando Atribultos privados

    O que aprendemos nessa aula:

        Diferenças entre null e undefined
        Aprofundando nos conceitos de referências a um espaço de memória
        Get e Set
        Melhor encapsulamento da classe
        Protegendo atributos sensíveis

    OBS:

    Usando assessores do tipo set podemos alterar a regra de como um atributo pode ou não ser modificado sem precisar alterar isso em diversos pontos do código

        Excelente! Essa é a ideia mesmo, assim se qualquer regra de atribuição mudar só precisamos modificar um único lugar.

    Usar assessores do tipo set é uma boa prática para garantirmos que a atribuição de propriedades está sempre segura

        Sim! Chamamos essa ideia de proteger atributos de nossas classes de encapsulamento e devemos sempre manter o máximo de encapsulamento possível.  

5. Construtores e estáticos
    
