import React from 'react'

// icon
import light from '../img/light-mode.png'
import dark from '../img/night-mode.png'

// inisialisasi local storage
if (localStorage.getItem('DARKMODE') === undefined) {
    localStorage.setItem('DARKMODE', 'dark')
}

const Navbar = ({ handleValueSearch }) => {
    const [darkMode, setDarkMode] = React.useState(localStorage.getItem('DARKMODE'))

    React.useEffect(() => {
        const root = window.document.documentElement

        if (darkMode === 'dark') {
            root.classList.remove('dark')
            root.classList.add('light')
        } else {
            root.classList.remove('light')
            root.classList.add('dark')
        }
    }, [darkMode])


    const handleMode = () => {
        if (darkMode === 'dark') {
            localStorage.setItem('DARKMODE', 'light')
            setDarkMode(localStorage.getItem('DARKMODE'))
        } else {
            localStorage.setItem('DARKMODE', 'dark')
            setDarkMode(localStorage.getItem('DARKMODE'))
        }
    }

    return (
        <div className='bg-slate-600 dark:bg-[#3F3B51]'>
            <div className='max-w-5xl mx-auto text-slate-50 dark:text-white flex justify-between items-center'>
                <h1 className='font-semibold text-2xl p-3'>Notes App</h1>

                <div className='flex justify-between items-center'>
                    <input onChange={handleValueSearch} className='text-slate-900 dark:bg-[#2D2D3D] dark:text-white rounded-lg p-2 w-full mr-2' type='text' placeholder='Find your note...'></input>
                    <img onClick={handleMode} className='cursor-pointer w-[30px] h-[30px]' src={darkMode === 'dark' ? light : dark} alt='icon light' />
                </div>
            </div>
        </div>
    )
}

export default Navbar