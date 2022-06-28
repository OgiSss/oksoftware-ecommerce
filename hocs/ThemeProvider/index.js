import theme from '../../styles/theme'
import ThemeContext from '../../contexts/theme-context'

const ThemeProvider = function ({ children }) {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
