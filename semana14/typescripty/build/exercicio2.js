"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio1_1 = require("./exercicio1");
function filtraCarrosPorMarca(array, marca) {
    if (marca) {
        return array.filter((carro) => carro.marca === marca);
    }
    return array;
}
const resultado = filtraCarrosPorMarca(exercicio1_1.arrayDeCarros, 'volkswagen');
console.log(resultado);
//# sourceMappingURL=exercicio2.js.map