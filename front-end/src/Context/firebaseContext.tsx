
import { createContext, useContext } from "react";


const FirebaseContext = createContext(null);

export const useFirebase = ()=>useContext(FirebaseContext);

export const handleLogout = ()=>{

    

}

export const FirebaseProvider = (props)=>{
    

    return(
        <FirebaseContext.Provider value={handleLogout}>
            {props.children}
        </FirebaseContext.Provider>
    );

}
