const obj = {

    nome: "Pequenininho",
    especie: "gato",
    raça: "viralata",
    idade: 3,
    dono: {nome:"Noah", celular: 40028922},
    celular: 40028922,
    consultas: ["16/08/1975," "22/03/2092"]
};


console.log(`o nome do meu paciente é ${obj.nome}.`);

const obj2 = {

    nome: "frajola",
    especie: "gato",
    raça: "frajola",
    idade: 1,
    dono: {nome: "Noah", celular: 40028922},
    consultas: ["15/09/2001","24/09/2025"]
};

console.log(obj2.consultas.length)
console.log(`já o meu outro paciente se chama ${obj2.dono.celular}.`);

