import { DataGrid } from '@mui/x-data-grid';
import { useEffect,useState } from 'react';

export default function Codeforces(){

    const [cf,setCf]=useState([])
    const fetchUsers = async () => {
        const temp=await fetch('../../api/codeforcesData')
        const cfData=await temp.json()

        console.log(cfData,"cfDataaaaaaaa")
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
        username:user.username,
        rating:user.rating,
        rank:user.rank,
        maxRating:user.maxRating,
        maxRank:user.maxRank,
    }))
    
    const [sortModel, setSortModel] = useState([
        {
          field: 'rating',
          sort: 'desc',
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

                />
        </div>
    )
}