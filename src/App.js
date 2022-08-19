import { useState, useEffect } from "react";

import SpecialComponent from "./components/SpecialComponent";

function App() {

  const [counter, setCounter] = useState(0);
  const [showComponent, setShowComponent] = useState(false);


  useEffect(()=>{
    document.title = "React Hooks | useEffect";
  },[]);

  useEffect(()=>{
    alert('Valor do couter foi alterado! ' + counter);
  },[counter]);

  function incrementCounter(){
    setCounter(counter + 1);
  }

  function handleComponentVisibility(){
    setShowComponent(!showComponent);
  }

  return (
    <div className="App">
      <h1>useEffect em ação!</h1>
      <h2>{counter}</h2>
      <button onClick={incrementCounter}>Aumentar o counter</button>
      &nbsp;
      <button onClick={handleComponentVisibility}>{showComponent ? 'Esconder componente':'Mostrar componente'}</button>
      <br/>
      {showComponent && <SpecialComponent />}
    </div>
  );
}

export default App;
