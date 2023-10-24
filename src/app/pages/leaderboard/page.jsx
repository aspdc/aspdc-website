
import { Button } from "@mui/material"
import Register from "../../components/Register"
import { createClient } from "@supabase/supabase-js"
import {cookies} from "next/headers"


export default async function Leaderboard() {
    
    const cookieStore = cookies()

    const users=cookieStore.get("users")

    return cookieStore.getAll().map((cookie) => (
        <div key={cookie.name}>
          <p>Name: {cookie.users}</p>
          <p>Value: {cookie.value}</p>
        </div>
      ))

    // return(
    //     <div className="">
    //         <div className="w-fit m-auto mt-[1%] h-full" >
                
    //         </div>
    //         <div className="h-full">

    //         </div>
    //         <Register/>
    //         <Button type="outlined-filled" className="bg-blue-600 text-white" >
    //             GO
    //         </Button>
    //         <div>
    //             users
    //             {users}
    //         </div>
    //     </div>
    // )
}