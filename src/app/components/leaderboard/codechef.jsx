'use client'
import { DataGrid } from '@mui/x-data-grid';
import { useEffect,useState } from 'react';
import codeChef from '../../lib/codechefData'

export const getStaticProps = async () => {
    const data=await fetch("https://codechef-api.vercel.app/devvrat_singh2")
    const data2=await data.json()
    return {
        props: {userdata:data2}
    }
}

export default function CodeChef({userdata}){
    
    
    const [users,setUsers]=useState([])
    const fetchUsers = async () => {
        console.log(JSON.stringify(userdata),"userdataaa")
        // const data=await codeChef()
        console.log("codechef dataaaaaaaaa")
    }
    

    useEffect(() => {
        fetchUsers()
    }, [])

    // const columns=[ 
    //     {field: 'id', headerName: 'Enrollment No', width: 200},
    //     {field: 'username', headerName: 'Username', width: 200},
    //     {field: 'rating', headerName: 'Rating', width: 200},
    //     {field: 'rank', headerName: 'Rank', width: 200},
    //     {field: 'maxRating', headerName: 'Max Rating', width: 200},
    //     {field: 'maxRank', headerName: 'Max Rank', width: 200},
    // ]
    // const rows=cf.map((user,key) => ({
    //     id:user.enrollment_no,
    //     username:user.handle,
    //     rating:user.rating,
    //     rank:user.rank,
    //     maxRating:user.maxRating,
    //     maxRank:user.maxRank,
    // }))

    return(
        <div className='w-fit m-auto'>
            <div onClick={fetchUsers} >
                CodeChef
            </div>
                {/* <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]} 
                /> */}
        </div>
    )
}