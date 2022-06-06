import React from 'react'
import { showFormattedDate } from '../utils/data'

const Card = ({ archived, data, handleDelete, handleArchive, handleUnArchived }) => {
    return (
        <div style={data.archived !== archived ? { display: 'none' } : {}} className='flex flex-col justify-between rounded-lg text-center min-w-[260px] bg-white dark:bg-[#3F3B51] m-2 shadow-sm'>
            <div className='w-full'>
                <h1 className='font-semibold text-2xl p-2'>{data.title}</h1>
                <p className='font-thin pl-2 text-xs'>{showFormattedDate(data.createdAt)}</p>
            </div>

            <p className='m-2 p-1 font-medium'>{data.body}</p>

            <div className='flex justify-between m-2'>
                <button onClick={() => handleDelete(data.id)} className='w-1/2 m-1 py-2 rounded-lg bg-red-600 dark:bg-slate-900 dark:text-red-600 text-white dark:hover:bg-white hover:bg-slate-900'>Delete</button>
                <button onClick={() => !data.archived ? handleArchive(data.id) : handleUnArchived(data.id)} className='w-1/2 m-1 py-2 rounded-lg bg-yellow-600 dark:bg-slate-900 dark:text-yellow-600 text-white dark:hover:bg-white hover:bg-slate-900'>{!data.archived ? 'Archive' : 'Unarchived'}</button>
            </div>
        </div>
    )
}

export default Card