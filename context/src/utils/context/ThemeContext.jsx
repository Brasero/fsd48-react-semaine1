import {createContext, useContext, useState} from "react";

const ThemeContext = createContext({})

const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(true)

    const changeTheme = () => {
        setTheme(!theme)
    }

    const THEMES = {
        light: {
            background: '#fff',
            color: '#213547'
        },
        dark: {
            background: '#213547',
            color: '#fff'
        }
    }

    const themeValue = theme ? THEMES.light : THEMES.dark

    return (
        <ThemeContext.Provider value={{themeValue, changeTheme, state: theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () =>{
    return useContext(ThemeContext)
}
export default ThemeContextProvider