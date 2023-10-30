// import { NextResponse } from "next/server";

// export async function GET() {
//     const data = await fetch("https://codechef-api.vercel.app/Devvrat_singh2");
//     const data2 = await data.json();
//     return NextResponse.json(data2);
// }
import {getItem} from '../../../utils/get-item'
import { NextResponse } from 'next/server';
export async function GET() {
    const data=await getItem()
    let codechefData=[]
    for (let i = 0; i < data.data.length; i++) {
        const element = data.data[i];
        try{
            const fetchingCodechefData=await fetch("https://codechef-api.vercel.app/"+element.codechef_handle)
            const check2=await fetchingCodechefData.json()
            check2["enrollment_no"]=element.enrollment_no
            check2["username"]=element.codechef_handle
            if(check2.errors === undefined){
                codechefData.push(check2)
            }
        }
        catch(err){
            console.log(err,"err")
        }
    }
    return NextResponse.json(codechefData)
}