import { Button } from "./components/ui/button";

export function App(){
  return(
    <div className="bg-black h-screen text-white p-20">
      <h1 className="my-10 p-1 text-3xl">Hello World !</h1>
      <p className="">
        <span className="p-2 px-3 bg-violet-700 mr-2">
          React 18+
        </span> 
        
        <span className="p-2 px-3 bg-sky-700 mr-2">
          TailwindCSS
        </span>
        
        <span className="p-2 border px-3 bg-gray-900 text-white">
        ShadCN-UI
        </span>
      </p>
      <br />
      <hr />
      <br />
      <Button variant={"ghost"} className="border cursor-pointer">Entrar</Button>
    </div>
  )
}