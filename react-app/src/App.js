import React from "react";
import Boxes from "./Components/box";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Handle from "./Components/Input";
import Paysage from "./assets/images/img1.jpg"

function App() {
  return (
    <div className="App">
      <Header />
      <Boxes />
      <Input />
      <Handle text="This is something we write in a specific component" />
      <Handle image={Paysage}/>
    </div>
  );
}

export default App;
