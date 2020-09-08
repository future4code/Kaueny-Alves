import { validateCharacter } from "../src/validateCharacter";
//a. Crie um teste que verifique o comportamento
//da função com um personagem com o nome vazio
describe("Validate Character", () => {
  test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  //b. Crie um teste que verifique o comportamento
  //da função com um personagem com a vida vazia
  test("Should return true for empty life", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });

  //c. Crie um teste que verifique o comportamento da função
  //com um personagem com a força vazia
  test("Should return true for empty strength", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(true);
  });

  //d. Crie um teste que verifique o comportamento
  //da função com um personagem com a defesa vazia
  test("Should return true for empty defense", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 0,
    });

    expect(result).toBe(true);
  });

  //e. Crie um teste que verifique o comportamento
  //da função com um personagem com a vida ou a força ou a defesa com um valor negativo
  test("Should false true for negative defense", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: -500,
    });

    expect(result).toBe(false);
  });

  //f. Crie um teste que verifique o comportamento
  //da função com um personagem com a vida ou a força ou a defesa com o valor 0
  test("Should return true for strength 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(true);
  });

  //g. Crie um teste que verifique o comportamento
  //da função com um personagem com as informações validas
  test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });
});
