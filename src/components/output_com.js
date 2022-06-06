import React, { useState } from 'react'
import Card from './card'

// data
import { getInitialData } from '../utils/data'

const OutputComponent = (props) => {
    let myData = getInitialData()
    const [allData, setallData] = useState(myData)
    const [archived, setArchived] = useState(false)
    const [dataArchived, setDataArchived] = useState(allData.filter((data) => data.archived === true))
    const [dataUnArchived, setDataUnArchived] = useState(allData.filter((data) => data.archived === false))
    const valueSearch = props.valueSearch

    React.useEffect(() => { }, [valueSearch]);
    React.useEffect(() => {
        setDataArchived(allData.filter((data) => data.archived === true))
        setDataUnArchived(allData.filter((data) => data.archived === false))
    }, [allData]);
    React.useEffect(() => {
        if (props.newNote.id !== undefined) {
            const updateAllData = [...allData, props.newNote]
            setallData(updateAllData)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.newNote]);

    const handleDelete = (id) => {
        const dataFiltered = allData.filter(item => item.id !== id)
        setallData(dataFiltered)
    }

    const handleArchive = (id) => {
        const objIndex = allData.findIndex(obj => obj.id === id)
        const updatedObj = { ...allData[objIndex], archived: true }
        const updatedAllData = [
            ...allData.slice(0, objIndex),
            updatedObj,
            ...allData.slice(objIndex + 1),
        ]

        setallData(updatedAllData)
    }

    const handleUnArchived = (id) => {
        const objIndex = allData.findIndex(obj => obj.id === id)
        const updatedObj = { ...allData[objIndex], archived: false }
        const updatedAllData = [
            ...allData.slice(0, objIndex),
            updatedObj,
            ...allData.slice(objIndex + 1),
        ]

        setallData(updatedAllData)
    }

    return (
        <div className='max-w-[300px] p-1 mb-5'>
            <h2 className='font-semibold text-xl mb-5'>Your Notes</h2>

            <div className='min-w-[250px] bg-slate-400 dark:bg-[#1d182c] rounded-lg'>
                <div className='flex w-full rounded-t-lg bg-white dark:bg-[#3F3B51] justify-between'>
                    <button onClick={() => setArchived(false)} className={!archived ? 'w-1/2 py-2 border-b-2 border-[#211E2D] dark:border-slate-50' : ' py-2 w-1/2 mb-[2px]'} >Active</button>
                    <button onClick={() => setArchived(true)} className={archived ? 'w-1/2 py-2 border-b-2 border-[#211E2D] dark:border-slate-50' : ' py-2 w-1/2 mb-[2px]'} >Archive</button>
                </div>

                <div className='flex p-2 w-full overflow-x-scroll'>
                    {
                        archived === false ?
                            dataUnArchived.length === 0 ?
                                <div className='w-full text-white  text-center'>
                                    <p>No More Data</p>
                                </div> :
                                allData
                                    .filter((data) => data.title.toLowerCase().includes(valueSearch.toLowerCase()))
                                    .map((res, index) =>
                                        <Card key={index} data={res} archived={archived} handleDelete={handleDelete} handleArchive={handleArchive} handleUnArchived={handleUnArchived} />
                                    )
                            :
                            dataArchived.length === 0 ?
                                <div className='w-full text-white text-center'>
                                    <p>No More Data</p>
                                </div> :
                                allData
                                    .filter((data) => data.title.toLowerCase().includes(valueSearch.toLowerCase()))
                                    .map((res, index) =>
                                        <Card key={index} data={res} archived={archived} handleDelete={handleDelete} handleArchive={handleArchive} handleUnArchived={handleUnArchived} />
                                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default OutputComponent