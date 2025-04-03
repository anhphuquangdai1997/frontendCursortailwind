import { createContext, useState } from "react";

export const HeaderContext = createContext<any>(null)

export const HeaderProvider :React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const toggleSearch = ()=>{
        setIsSearchOpen((prev)=> !prev)
    }
    return (
        <HeaderContext.Provider value={{isSearchOpen,toggleSearch}}>
            {children}
        </HeaderContext.Provider>
    )
}