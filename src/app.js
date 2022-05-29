import React from 'react'
import Content from './components/content'
import Footer from './components/footer'
import Navbar from './components/navbar'

const App = () => {
    const [valueSearch, setValueSearch] = React.useState("")

    const handleValueSearch = (e) => {
        setValueSearch(e.target.value)
    }

    return (
        <>
            <Navbar handleValueSearch={handleValueSearch} />
            <Content valueSearch={valueSearch} />
            <Footer />
        </>
    )
}

export default App