export default abstract class Funcionario {

    private nome: string;
    private matricula: number;
    private salario: number;

    constructor(
        nome: string,
        matricula: number,
        salario: number
    ) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getMatricula(): number {
        return this.matricula;
    }

    setMatricula(matricula: number): void {
        this.matricula = matricula;
    }

    getSalario(): number {
        return this.salario;
    }

    alterarSalario(salario: number): void {
        if (salario > 0) {
            this.salario = salario;
            console.log("Salário alterado com sucesso!");
        } else {
            console.log("Salário inválido!");
        }
    }

    abstract calcularBonus(): number;

    abstract imprimeInfo(): void;
}
