import React, { useState } from "react";
import { Admin } from "./Components/Admin";
// import { Route, Routes } from "react-router";
// import Boxes from "./Components/box";
// import Boxes from "./Components/box";
// import Header from "./Components/Header";
// import Input from "./Components/Input";
// import Handle from "./Components/Input";
// import Paysage from "./assets/images/img1.jpg"
// import Form from "./Components/Form";
// import { Functional } from "./Components/Functional";
// import Hook from "./Components/hook";
// import { Reder } from "./Components/useRef";
// import { Memo } from "./Components/Memo";
import { AppComponent } from "./Components/AppComponent";
// import { Life } from "./Components/Lifecycle";


function App() {
  // const[flag, setFlag] = useState(true)

  // const ChangeFlag = () => {
  //   setFlag(!flag)
  // }

  return (
    <div className="App">
      {/* <Boxes />
      <Input />
      <Handle text="This is something we write in a specific component" />
      <Handle image={Paysage}/>
      <Form />

      <button onClick={ChangeFlag}>Change</button>
      {flag? <Life/> : null} */}
      {/* <Header />

      <Routes>
        <Route path="/" element={<Boxes />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/input" element={<Handle />}/>
        <Route path="/*" element={<Boxes />}/>
        <Route path="/hook" element={<Reder />}/>
        <Route path="/functional" element={<Functional />}/>
        <Route path="/memo" element={<Memo />}/>
      </Routes> */}
      <AppComponent />
      <Admin />
    </div>
  );
}

export default App;
