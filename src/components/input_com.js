import React from 'react'

const InputComponent = ({ handleAddNewNote }) => {
    const [title, setTitle] = React.useState('')
    const [body, setBody] = React.useState('')
    const [limit, setLimit] = React.useState(50)

    const data = {
        id: +new Date(),
        title: title,
        body: body,
        createdAt: new Date(),
        archived: false,
    }

    const handleChangeTitle = (e) => {
        setLimit(50 - e.target.value.length)
        setTitle(e.target.value.slice(0, 49))
    }

    const handleChangeBody = (e) => {
        setBody(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddNewNote(data)
    }

    return (
        <div className='max-w-[400px] p-1'>
            <h2 className='font-semibold text-xl mb-5'>Make Notes</h2>

            <p className='font-thin text-right'>Character Available: {limit}</p>
            <form onSubmit={handleSubmit}>
                <input required onChange={handleChangeTitle} value={title} className='dark:bg-[#2D2D3D] rounded-lg p-2 w-full mb-3' type='text' placeholder='Title your note...'></input>
                <textarea required onChange={handleChangeBody} className='dark:bg-[#2D2D3D] rounded-lg p-2 w-full mb-3 h-[200px]' placeholder='Type your note...'></textarea>
                <button type='submit' className='bg-white dark:bg-[#2D2D3D] rounded-lg p-2 w-full'>Submit</button>
            </form>
        </div>
    )
}

export default InputComponent