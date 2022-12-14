import React, { useState } from "react";
import Boxes from "./Components/box";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Handle from "./Components/Input";
import Paysage from "./assets/images/img1.jpg"
import Form from "./Components/Form";
import { Life } from "./Components/Lifecycle";

function App() {
  const[flag, setFlag] = useState(true)

  const ChangeFlag = () => {
    setFlag(!flag)
  }

  return (
    <div className="App">
      <Header />
      <Boxes />
      <Input />
      <Handle text="This is something we write in a specific component" />
      <Handle image={Paysage}/>
      <Form />

      <button onClick={ChangeFlag}>Change</button>
      {flag? <Life/> : null}
    </div>
  );
}

export default App;
