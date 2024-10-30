import {createContext,useState} from "react";

const UserType = createContext();

const UserContext = ({children}) => {
    const [userId,setUserId] = useState("");
    const host = "192.168.224.122"
    

    return (
        <UserType.Provider value={{userId,setUserId,host}}>
            {children}
        </UserType.Provider>
    )
}

export {UserType,UserContext};