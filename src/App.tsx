import { Button } from "./components/ui/button";

export function App(){
  return(
    <div className="bg-black h-screen text-white">
      <h1>Hello World</h1>
      <p>
        <span className="p-2 px-3 bg-violet-700">
          React 18+
        </span> 
        
        <span className="p-2 px-3 bg-sky-700">
          TailwindCSS
        </span>
        
        <span className="p-2 px-3 bg-gray-900 text-white">
        ShadCN-UI
        </span>
      </p>
      <br />
      <hr />
      <br />
      <h2>ShadCN</h2>
      <Button variant={"ghost"}>Entrar</Button>
    </div>
  )
}