"use client"
import { useState } from "react"
import { Button,InputLabel,Select,MenuItem,FormControl } from "@mui/material"
import Navbar from "../../components/Navbar"
import Link from "next/link"
import {poppins} from "../../page"
import Codeforces from "@/app/components/leaderboard/codeforces"
import Leetcode from "@/app/components/leaderboard/leetcode"
import Codechef from "@/app/components/leaderboard/codechef"
import Loading from "@/app/components/LoadingPage"
import { Inter, Roboto_Mono } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 

export default function Leaderboard() {
    
    const [platform,setPlatform] = useState("Codeforces")
    const selectPlatform = (e) => {
        setPlatform(e.target.value)
    }

    return(
        <div className="h-screen">
            <div className="w-[100%] m-auto text-black  ">
                <div>
                    <Navbar 
                        textColour="text-white"
                        hoverColour="text-blue"
                        />
                </div>
                <div className={` text-center w-fit m-auto`}>
                    <div className="flex mt-[4%] m-auto justify-between">
                        <div className={`w-fit ${inter.className}`} >
                            <FormControl className="" >
                                <InputLabel id="demo-simple-select-label">platform</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Platform"
                                    defaultValue={"Codeforces"}
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
                                <Button variant="contained" className="text-poppins h-full" color="success" >
                                    Register
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-[1%]">

                        {   platform==="Codeforces" &&
                            <Codeforces/>
                        }
                        {
                            platform==="Codechef" &&
                            <Codechef/>
                        }
                        {
                            platform==="leetcode" &&
                            <Leetcode/>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}