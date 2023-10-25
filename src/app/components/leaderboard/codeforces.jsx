import { DataGrid } from '@mui/x-data-grid';
import { useEffect,useState } from 'react';
import supabase from '../../../../supabase';

export default function Codeforces(){

    const [cf,setCf]=useState()
    const [usernames,setUsernames]=useState([])
    const [users,setUsers]=useState([])

    const fetchUsers = async () => {
        const res = await supabase
        .from('users')
        .select('codeforces_handle')
        console.log(res.data,"res")
        setCf(res.data)
        
        const temp=res.data.map(async (user,key) => {
            const info = await fetch(`https://codeforces.com/api/user.info?handles=${user.codeforces_handle}`)
            console.log(info,"temp")
        })
    }
    

    useEffect(() => {
        fetchUsers()
    }, [])

    // const columns=[ 
    //     {field: 'id', headerName: 'Enrollment No', width: 200},
    //     {field: 'name', headerName: 'Name', width: 200},
    //     {field: 'codechef', headerName: 'Codechef', width: 200},
    //     {field: 'codeforces', headerName: 'Codeforces', width: 200},
    //     {field: 'leetcode', headerName: 'Leetcode', width: 200},
    //     {field: 'hackerrank', headerName: 'Hackerrank', width: 200},
    //     {field: 'hackerearth', headerName: 'Hackerearth', width: 200},
    // ]
    // const rows=info.data.map((user,key) => ({
    //     id:user.enrollment_no,
    //     name:user.Name,
    //     codechef:user.codechef_handle,
    //     codeforces:user.codeforces_handle,
    //     leetcode:user.leetcode_handle,
    //     hackerrank:user.hackerrank_handle,
    //     hackerearth:user.hackerearth_handle,
    // }))

    return(
        <div onClick={fetchUsers}>
            COdeforces
        </div>
    )
}