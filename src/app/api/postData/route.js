import { NextResponse } from "next/server"
import supabase from "../../../../supabase"
const codeforcesPost=async (username,enrollment_no)=>{
    // console.log(username,"username----------------------------------------------------------------------")
    const fetchData=await fetch("https://codeforces.com/api/user.info?handles="+username)
    const check2=await fetchData.json()
    if(check2.status === 'OK'){
        const check3=check2.result[0]
        // console.log(check3,"check3")
        const { data, error } = await supabase
        .from('codeforces')
        .insert([
            { enrollment_no: enrollment_no,username:username,rating:check3.rating,maxRating:check3.maxRating,rank:check3.rank,maxRank:check3.maxRank},
        ])
        if(error){
            console.log(error,"error")
            return {error:"codeforcesSupabase"}
        }
        // console.log(check3,"codeforces final --------------------------------------------------------------------------------------------")
        return {error:null}
    }
    else{
        return {error:"codeforcesApi"}
    }
}

const leetcodePost=async (username,enrollment_no)=>{
    const fetchingLeetcodeData = await fetch('https://leetcode-api-faisalshohag.vercel.app/'+username);
    const check2=await fetchingLeetcodeData.json()

    if(check2.errors === undefined){
        const { data, error } = await supabase
        .from('leetcode')
        .insert([
            { enrollment_no: enrollment_no,username:username,rank:check2.ranking,easySolved:check2.easySolved,mediumSolved:check2.me diumSolved,hardSolved:check2.hardSolved,totalSolved:check2.totalSolved},
        ])
        if(error){
            console.log(error,"error")
            return {error:"leetcodeSupabase"}
        }
        // console.log(check2,"leetcode recieves final --------------------------------------------------------------------------------------------")
        return {error:null} 
    }
    else{
        return {error:"leetcodeApi"}
    }
    
}

const codechefPost=async (username,enrollment_no)=>{
    const fetchingCodechefData=await fetch("https://codechef-api.vercel.app/"+username)
    const check2=await fetchingCodechefData.json()
    console.log(check2,"codechef check xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    if(check2.success !== false){
        console.log("success")
        const {data,error}=await supabase
        .from('codechef')
        .insert([
            { enrollment_no: enrollment_no,username:username,currentRating:check2.currentRating,highestRating:check2.highestRating,globalRank:check2.globalRank,countryRank:check2.countryRank,stars:check2.stars},
        ])
        if(error){
            console.log(error,"error")
            return {error:"codechefSupabase"}
        }
        return {error:null}
    }
    else{
        // fetchingCodechefData.error=null
        // console.log("failur1e")
        return {error:"codechefApi"}
    }
}

const databasePost=async(userData)=>{

    const {data,error}=await supabase
    .from('userData')
    .insert([
        { enrollment_no: userData.enrollment_no,Name:userData.name,codeforces_handle:userData.codeforces,leetcode_handle:userData.leetcode,codechef_handle:userData.codechef,github_handle:userData.github}
    ])
    if(error){
        console.log(error,"error")
        return {error:"userDataSupabase"}
    }
    return {error:null}
}


export async function POST(request) {
    const element=await request.json()
    
    const leetcode = await leetcodePost(element.leetcode,element.enrollment_no)
    const codeforces = await codeforcesPost(element.codeforces,element.enrollment_no)
    const codechef = await codechefPost(element.codechef,element.enrollment_no)
    const db = await databasePost(element)



    return NextResponse.json(element)
}