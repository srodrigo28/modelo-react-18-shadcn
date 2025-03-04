#### React+18 + Roter-Dom-V6

#### TailWindCSS + ShadCN-UI OK

> ##### Guia Instalação
```
https://tailwindcss.com/docs/installation/framework-guides/react-router
```
> ##### 01 Criando um projeto React com Vite
```
npm create vite@latest app
```

> ##### 02 Dentro do seu projeto devidamente criado no Raiz

``` OK
npm install tailwindcss @tailwindcss/vite
```

> ##### 03 tsconfig.json
``` OK
/* TailWindCSS */
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```

> ##### 04 no arquivo tsconfig.app.json
``` OK
  /* TailWindCSS */
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
```

> ##### 05 instalar 
``` OK
npm install -D @types/node
```

> 5.1 vie.config
```
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

> ##### 06 shadcn :)
``` OK
npx shadcn@latest init
```

> 07 Instalando nosso primeiro componente
```
npx shadcn@latest add button
```

> 08 Testando
```
npm run dev
```