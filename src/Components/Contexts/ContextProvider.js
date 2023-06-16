import React,{useState,createContext} from 'react'
export const addData = createContext();

function ContextProvider({children}) {
    
    const [useradd, setUseradd] = useState("");
 

    return (
        <>
            <addData.Provider value={{ useradd, setUseradd }}>
            {children}
         
            </addData.Provider>
        </>
    )
}

export default ContextProvider