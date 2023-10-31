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
import { Suspense } from "react"

export default function Leaderboard() {
    
    const [platform,setPlatform] = useState("Codeforces")
    const selectPlatform = (e) => {
        setPlatform(e.target.value)
    }

    return(
        <Suspense fallback={<Loading />}>
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
                                <Button type="outlined-filled" className="bg-[#013D00] text-white h-full hover:bg-green-500" >
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
        </Suspense>
    )
}