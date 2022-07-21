
import React,{useState,useContext,createContext} from 'react';
import Nav from './nav/Nav';

export const X=createContext()


function App() {
  const [count,setCount]=useState(0)


  return (
    <>
    <X.Provider value={[count,setCount]} >

    <Nav />

    </X.Provider>
    
    </>
  );
}

export default App;
