class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataque() {
        let ataqueTipo;

        if (tipoAleatorio === "Mago") {
            ataqueTipo = "Magia";
        }
        else if (tipoAleatorio === "Guerreiro") {
            ataqueTipo = "Espada";
        }
        else if (tipoAleatorio === "Monge") {
            ataqueTipo = "Artes Marciais";
        }
        else if (tipoAleatorio === "Ninja") {
            ataqueTipo = "Shuriken";
        }
        return ataqueTipo;
    }
}

let tipo = ["Mago", "Guerreiro", "Monge", "Ninja"]
let indiceAleatorio = Math.floor(Math.random() * tipo.length);
let tipoAleatorio = tipo[indiceAleatorio];

// const ataque = new Ataque();
const heroi = new Heroi("Heroi Aleatório", tipoAleatorio)

console.log(`Tipo aleatório selecionado: ${tipoAleatorio}`);
console.log(`o ${tipoAleatorio} atacou usando ${heroi.ataque()}`)
