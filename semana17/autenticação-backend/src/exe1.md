Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso.

O uso dele é simples, veja abaixo:

```tsx
import { v4 } from "uuid";

const id = v4();

console.log("Generated Id: ", id);
```

_a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?_

`Acredito que usando string é mais díficil de um id se repetir.`

_b. A partir de hoje, vamos tentar isolar, ao máximo, as nossas lógicas em classes. Uma das vantagens disso é, por exemplo, utilizar a hierarquia para fazer modificações simples. Dado isso, crie uma classe que possua um método público para gerar um id._

_DICA -b. Na pasta: `service/`_

```tsx
import { v4 } from "uuid";

export class IdGenerator {
  public generate(): string {
    return v4();
  }
}
```
