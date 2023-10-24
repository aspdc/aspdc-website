"use client"
import { useState } from "react"
import { Button,InputLabel,Select,MenuItem,FormControl } from "@mui/material"
import supabase from "../../../../supabase"
import Navbar from "../../components/Navbar"
import Link from "next/link"

export default function Leaderboard() {
    
    
    const fetchUsers = async () => {
        const res = await supabase
        .from('users')
        .select('*')
        console.log(res.data)
    }
    const [platform,setPlatform] = useState("Codeforces")
    const selectPlatform = (e) => {
        console.log(e.target.value)
        setPlatform(e.target.value)
    }
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
                            <Button type="outlined-filled" onClick={fetchUsers} className="bg-blue-600 text-white" >
                                Register
                            </Button>
                        </Link>
                    </div>
                </div>
            
            </div>
        </div>
    )
}