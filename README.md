# bcra-api-wrapper

> En desarrollo

### Autenticación

No necesita autenticación. Son consultas anónimas

### Ejemplo básico de uso

```ts
import BcraClient from 'bcra-api-wrapper';

const bcra = new BcraClient();

const principalesVariables = await bcra.getPrincipalesVariables();

console.log(principalesVariables.reservas_internacionales)
```