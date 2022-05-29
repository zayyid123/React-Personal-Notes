import React, { useState } from 'react'

// data
import { getInitialData, showFormattedDate } from '../utils/data'

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
        <div className='max-w-[300px] p-1'>
            <h2 className='font-semibold text-xl mb-5'>Your Notes</h2>

            <div className='min-w-[250px] border rounded-lg border-[#211E2D] dark:border-slate-50'>
                <div className='flex w-full justify-between'>
                    <button onClick={() => setArchived(false)} className={!archived ? 'w-1/2 border-b-2 border-[#211E2D] dark:border-slate-50' : 'w-1/2 mb-[2px]'} >Active</button>
                    <button onClick={() => setArchived(true)} className={archived ? 'w-1/2 border-b-2 border-[#211E2D] dark:border-slate-50' : 'w-1/2 mb-[2px]'} >Archive</button>
                </div>

                <div className='flex p-2 w-full overflow-x-scroll'>
                    {
                        archived === false ?
                            dataUnArchived.length === 0 ?
                                <p>Tidak ada data</p> :
                                allData
                                    .filter((data) => data.title.toLowerCase().includes(valueSearch.toLowerCase()))
                                    .map((res, index) =>
                                        <div key={index} style={res.archived !== archived ? { display: 'none' } : {}} className='flex flex-col justify-between rounded-lg bg-white dark:bg-[#2D2D3D] border border-[#211E2D] dark:border-slate-50 min-w-[260px] m-2'>
                                            <div className='w-full border-b-2 border-[#211E2D] dark:border-slate-50'>
                                                <h1 className='font-semibold p-2'>{res.title}</h1>
                                                <p className='font-thin pl-2 text-sm'>{showFormattedDate(res.createdAt)}</p>
                                            </div>

                                            <p className='m-2'>{res.body}</p>

                                            <div className='flex w-full justify-between'>
                                                <button onClick={() => handleDelete(res.id)} className='w-1/2 border-t-2 border-r-2 pr-[2px] py-2 border-[#211E2D] dark:border-slate-50 text-red-600'>Delete</button>
                                                <button onClick={() => !res.archived ? handleArchive(res.id) : handleUnArchived(res.id)} className='w-1/2 border-t-2 py-2 border-[#211E2D] dark:border-slate-50 text-yellow-600'>{!res.archived ? 'Archive' : 'Unarchived'}</button>
                                            </div>
                                        </div>
                                    )
                            :
                            dataArchived.length === 0 ?
                                <p>Tidak ada data</p> :
                                allData
                                    .filter((data) => data.title.toLowerCase().includes(valueSearch.toLowerCase()))
                                    .map((res, index) =>
                                        <div key={index} style={res.archived !== archived ? { display: 'none' } : {}} className='flex flex-col justify-between rounded-lg bg-white dark:bg-[#2D2D3D] border border-[#211E2D] dark:border-slate-50 min-w-[260px] m-2'>
                                            <div className='w-full border-b-2 border-[#211E2D] dark:border-slate-50'>
                                                <h1 className='font-semibold p-2'>{res.title}</h1>
                                                <p className='font-thin pl-2 text-sm'>{showFormattedDate(res.createdAt)}</p>
                                            </div>

                                            <p className='m-2'>{res.body}</p>

                                            <div className='flex w-full justify-between'>
                                                <button onClick={() => handleDelete(res.id)} className='w-1/2 border-t-2 border-r-2 pr-[2px] py-2 border-[#211E2D] dark:border-slate-50 text-red-600'>Delete</button>
                                                <button onClick={() => !res.archived ? handleArchive(res.id) : handleUnArchived(res.id)} className='w-1/2 border-t-2 py-2 border-[#211E2D] dark:border-slate-50 text-yellow-600'>{!res.archived ? 'Archive' : 'Unarchived'}</button>
                                            </div>
                                        </div>
                                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default OutputComponent