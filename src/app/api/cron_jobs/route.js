import { NextResponse } from "next/server"
import { exec } from "child_process"

export async function GET(req, res) {

    await exec("python cron_jobs/testing_supabase.py",(err,stdout,stderr)=>{
        if(err){
            console.log(err)
            return NextResponse.json(err)
        }
        console.log(stdout,"code run")
        return NextResponse.json(stdout)
    })
    return NextResponse.json({message:"cron job did not start"})
}