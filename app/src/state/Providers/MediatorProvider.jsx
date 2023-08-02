import { createContext } from "react";
import Mediator from "../../core/Mediator";

const MediatorContext = createContext({})

function MediatorProvider({children}) {
    const mediator = new Mediator();
    return <MediatorContext.Provider value={{mediator}}>{children}</MediatorContext.Provider>
}

export  {MediatorProvider , MediatorContext};