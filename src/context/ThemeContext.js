import React, { useContext } from 'react'

export const ThemeContext = React.createContext({
    mode : "light",
    darkMode : () => {},
    lightMode : () => {}
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useMode(){
    return useContext(ThemeContext)
}