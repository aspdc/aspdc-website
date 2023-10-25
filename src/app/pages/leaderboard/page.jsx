"use client"
import { useEffect, useState } from "react"
import { Button,InputLabel,Select,MenuItem,FormControl } from "@mui/material"
import supabase from "../../../../supabase"
import Navbar from "../../components/Navbar"
import Link from "next/link"
import {poppins} from "../../page"
import Codeforces from "@/app/components/leaderboard/codeforces"

import { DataGrid } from '@mui/x-data-grid';


export default function Leaderboard() {
    
    const [info,setInfo]=useState({error: "", data:[], count: "", status: "", statusText: ''})

    const check=[]

    useEffect(() => {
        fetchUsers()
    }, [])
    
    const fetchUsers = async () => {
        const res = await supabase
        .from('users')
        .select('*')
        console.log(info)
        setInfo(prev=>{
            return {
                ...prev,error:res.error,data:res.data,count:res.count,status:res.status,statusText:res.statusText
            }
        })
        console.log(res)
    }
    const [platform,setPlatform] = useState("Codeforces")
    const selectPlatform = (e) => {
        console.log(e.target.value)
        setPlatform(e.target.value)
    }

    const columns=[ 
        {field: 'id', headerName: 'Enrollment No', width: 200},
        {field: 'name', headerName: 'Name', width: 200},
        {field: 'codechef', headerName: 'Codechef', width: 200},
        {field: 'codeforces', headerName: 'Codeforces', width: 200},
        {field: 'leetcode', headerName: 'Leetcode', width: 200},
        {field: 'hackerrank', headerName: 'Hackerrank', width: 200},
        {field: 'hackerearth', headerName: 'Hackerearth', width: 200},
    ]
    const rows=info.data.map((user,key) => ({
        id:user.enrollment_no,
        name:user.Name,
        codechef:user.codechef_handle,
        codeforces:user.codeforces_handle,
        leetcode:user.leetcode_handle,
        hackerrank:user.hackerrank_handle,
        hackerearth:user.hackerearth_handle,
    }))
        



    return(
        <div className="w-full h-screen">

            <div className="w-fit m-auto text-black  ">
                <Navbar 
                    textColour="text-black"
                    hoverColour="text-blue"
                />
                <div className="flex mt-[4%] justify-between">
                    <div className="w-full" >
                        <FormControl className="w-[20%]" >
                            <InputLabel id="demo-simple-select-label">platform</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Platform"
                                defaultValue={"Codechef"}
                                onChange={selectPlatform}
                                value={platform}
                                >
                                <MenuItem value={"Codechef"}>Codechef</MenuItem>
                                <MenuItem value={"Codeforces"}>Codeforces</MenuItem>
                                <MenuItem value={"leetcode"}>leetcode</MenuItem>
                                <MenuItem value={"hackerrank"}>hackerrank</MenuItem>
                                <MenuItem value={"hackerearth"}>hackerearth</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <Link href={"/pages/leaderboard/register"} >
                            <Button type="outlined-filled" className="bg-blue-600 text-white" >
                                Register
                            </Button>
                        </Link>
                    </div>
                </div>
                <div>
                    {/* <Button  onClick={fetchUsers} > fetchUsers </Button> */}
                    <div className={`${poppins.className} text-center `}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}

                        />
                    </div>
                </div>
                <Codeforces/>
            
            </div>
        </div>
    )
}