import { DataGrid } from '@mui/x-data-grid';
import { useEffect,useState } from 'react';
import supabase from '../../../../supabase';

export default function Codeforces(){

    const [cf,setCf]=useState([])
    const [usernames,setUsernames]=useState([])
    const [users,setUsers]=useState([])


    let cfData=[]

    const fetchUsers = async () => {
        const res = await supabase
        .from('users')
        .select('*')
        setUsers(res.data)


        localStorage.setItem("users",JSON.stringify((res.data)))

        for (let i = 0; i < res.data.length; i++) {
            const element = res.data[i];
            console.log(element,"element")
            const fetchingCodeForcesData=await fetch("https://codeforces.com/api/user.info?handles="+element.codeforces_handle,{ cache: 'force-cache' })
            const check2=await fetchingCodeForcesData.json()
            const check3=check2.result
            check3[0]["enrollment_no"]=element.enrollment_no
            if(element.codeforces_handle){
                cfData.push(check3[0])
            }
        }
        console.log(cfData,"cfData")
        setCf(cfData)
    }
    

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