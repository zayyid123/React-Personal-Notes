import React from 'react'

export const useDarkMode = () => {
    const [theme, setTheme] = React.useState('dark')

    const colorTheme = theme === "dark" ? "light" : "dark"

    React.useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove(colorTheme)
        root.classList.add('dark')
    }, [theme, colorTheme])

    return [colorTheme, setTheme]
}
