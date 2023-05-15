import React from "react";
import { Route, Routes } from "react-router";

export const GuestPage = () => {
    return <div>
        <Routes>
        <Route path="/" element={<Boxes />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/input" element={<Handle />}/>
        <Route path="/*" element={<Boxes />}/>
        <Route path="/hook" element={<Reder />}/>
        <Route path="/functional" element={<Functional />}/>
        <Route path="/memo" element={<Memo />}/>
      </Routes>
    </div>
}