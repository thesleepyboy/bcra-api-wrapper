<div align='center'>
    <span>Librería TypeScript / JavaScript para interactuar con la API del Banco Central de la República Argentina (BCRA)</span>
</div>

# ¿Cómo empiezo?

### Autenticación

No necesita autenticación. Son consultas anónimas

### Ejemplo básico de uso

```ts
import BcraClient from 'bcra.js';

const bcra = new BcraClient();

const principalesVariables = await bcra.getPrincipalesVariables();

console.log(principalesVariables.reservas_internacionales.ultValorInformado) // Output: 40622.0
```