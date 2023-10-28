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
        <div className="w-fit h-screen">

            <div className="w-min m-auto text-black  ">
                <div>
                    <Navbar 
                        textColour="text-white"
                        hoverColour="text-blue"
                        />
                </div>
                <div className={`${poppins.className} text-center w-fit m-auto`}>
                    <div className="flex mt-[4%] m-auto justify-between">
                        <div className="w-fit" >
                            <FormControl className="" >
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
                                <Button type="outlined-filled" className="bg-[#013D00] text-white h-full hover:bg-green-500" >
                                    Register
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-[1%]">
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