import { DataGrid } from '@mui/x-data-grid';
import { useEffect,useState } from 'react';
import supabase from '../../../../supabase';
import codeforcesData from '../../lib/codeforcesData'

export default function Codeforces(){

    const [cf,setCf]=useState([])
    const fetchUsers = async () => {
        const cfData=await codeforcesData()
        setCf(cfData)

    }   
    console.log(cf,"cf") 

    useEffect(() => {
        fetchUsers()
    }, [])

    const columns=[ 
        {field: 'id', headerName: 'Enrollment No', width: 200},
        {field: 'username', headerName: 'Username', width: 200},
        {field: 'rating', headerName: 'Rating', width: 200},
        {field: 'rank', headerName: 'Rank', width: 200},
        {field: 'maxRating', headerName: 'Max Rating', width: 200},
        {field: 'maxRank', headerName: 'Max Rank', width: 200},
    ]
    const rows=cf.map((user,key) => ({
        id:user.enrollment_no,
        username:user.handle,
        rating:user.rating,
        rank:user.rank,
        maxRating:user.maxRating,
        maxRank:user.maxRank,
    }))

    return(
        <div className='w-fit m-auto'>

                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]} 
                />
        </div>
    )
}