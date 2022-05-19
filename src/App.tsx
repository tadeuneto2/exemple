import { css } from "@stitches/react"

const button = css({
  background: '#fc0',
  border: "solid 1px #f0c"
})

function App() {
  return (
   <div>
     <h1>Estudo Stitches</h1>

     <button className={button()}>Cadastrar</button>
   </div>
  );
}

export default App;
