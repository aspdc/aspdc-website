'use client'

import { DataGrid } from '@mui/x-data-grid';
import { useEffect,useState } from 'react';
import supabase from '../../../../supabase';
import { set } from 'react-hook-form';

// export const getStaticProps = async () => {
//     const res = await fetch("https://codechef-api.vercel.app/devvrat_singh2");
//     const data = await res.json();
//     console.log(data,"data");
//     return {
//         props: { userData:data }
//     }
// }

const Codechef= async ()=>{


    const [cf,setCf]=useState([])
    const [usernames,setUsernames]=useState([])
    const [users,setUsers]=useState([])
    
    
    let cfData=[]
    
    const fetchUsers = async () => {
        if (typeof window !== 'undefined') {
            const chef=localStorage.getItem("users")
            setUsers(JSON.parse(chef))
        }
        console.log((users),"chef")


        // for (let i = 0; i < users.length; i++) {
        //     const element = users[i];
        //     console.log(element,"element")
        //     const fetchingCodechefData=await fetch("https://codechef-api.vercel.app/"+element.codechef_handle)        
        
            // console.log(fetchingCodechefData,"fetchingCodechefData")
            // const check2=await fetchingCodeForcesData.json()
            // const check3=check2.result
            // check3[0]["enrollment_no"]=element.enrollment_no
            // if(element.codeforces_handle){
            //     cfData.push(check3[0])
            // }
        // }
        // console.log(cfData,"cfData")
        // setCf(cfData)
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
export default Codechef