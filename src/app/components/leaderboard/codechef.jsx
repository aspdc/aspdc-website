import { DataGrid } from '@mui/x-data-grid';
import { useEffect,useState } from 'react';

export default function Codeforces(){

    const [codechefData,setCf]=useState([])
    const fetchUsers = async () => {
        const cfData=await fetch('../../api/codechefData').then(res => res.json())
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
        {field: 'stars', headerName: 'Stars', width: 200},
    ]
    const rows=codechefData.map((user,key) => ({
        id:user.enrollment_no,
        username:user.username,
        rating:user.currentRating,
        rank:user.globalRank,
        maxRating:user.highestRating,
        stars:user.stars,
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