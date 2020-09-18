import React,{useState,createContext,useReducer} from 'react'
export const DataContext=createContext()

export const DataProvider = (props) =>{

const [cart,setCart]=useState([
  
])


  return (
    <DataContext.Provider value={[cart,setCart]}>
        {props.children}
    </DataContext.Provider>

  );
}


