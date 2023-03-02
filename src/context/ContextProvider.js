import Context from "./Context";
import { useState } from 'react'

function ContextProvider({children}){
    const [photos, setPhotos] = useState([])

    const values = {
        photos,
        setPhotos
    }

    return (
        <Context.Provider value = {values}>
            {children}
        </Context.Provider>
            
    )
}

export default ContextProvider
