import React from 'react'
import InputComponent from './input_com'
import OutputComponent from './output_com'

const Content = (props) => {
    const valueSearch = props.valueSearch
    const [newNote, setNewNote] = React.useState({})

    const handleAddNewNote = (data) => {
        setNewNote(data)
    }

    React.useEffect(() => {
        console.log(newNote)
    }, [newNote])


    return (
        <div className='bg-slate-200 text-slate-900 dark:bg-[#211E2D] dark:text-white'>
            <div className='max-w-5xl mx-auto min-h-screen'>
                <div className='flex justify-around items-start pt-10 flex-wrap'>
                    <InputComponent handleAddNewNote={handleAddNewNote} />
                    <OutputComponent valueSearch={valueSearch} newNote={newNote} />
                </div>
            </div>
        </div>
    )
}

export default Content