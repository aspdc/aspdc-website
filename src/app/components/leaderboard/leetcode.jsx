'use client'
import { DataGrid } from '@mui/x-data-grid';
import { useEffect,useState } from 'react';

export default function CodeChef(){

    
    const [users,setUsers]=useState([])
    const fetchUsers = async () => {
        setUsers(await fetch('../../api/leetcodeData').then(res => res.json()))
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const columns=[ 
        {field: 'id', headerName: 'Enrollment No', width: 200},
        {field: 'username', headerName: 'Username', width: 200},
        {field: 'rank', headerName: 'Rank', width: 200},
        {field: 'easySolved', headerName: 'Easy Solved', width: 200},
        {field: 'mediumSolved', headerName: 'Medium Solved', width: 200},
        {field: 'hardSolved', headerName: 'Hard Solved', width: 200},
        {field: 'totalSolved', headerName: 'Total Solved', width: 200},

    ]
    const rows=users.map((user,key) => ({
        id:user.enrollment_no,
        username:user.username,
        rank:user.rank,
        easySolved:user.easySolved,
        mediumSolved:user.mediumSolved,
        hardSolved:user.hardSolved,
        totalSolved:user.totalSolved
    }))
    const clickedCell=(e)=>{
        console.log(e,"cell clicked")
        console.log(e.row.username,"usernamess")
    }

    const [sortModel, setSortModel] = useState([
        {
          field: 'rank',
          sort: 'asc',
        },
      ]);
    return(
        <div className='w-fit m-auto'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]} 
                    sortModel={sortModel}
                    onSortModelChange={(model) => setSortModel(model)}
                    onRowClick={(e)=>clickedCell(e)}
                    />
        </div>
    )
}