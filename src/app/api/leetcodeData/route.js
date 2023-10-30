import {getItem} from '../../../utils/get-item'
import { NextResponse } from 'next/server';

export async function GET() {
    const data=await getItem()
    let leetcodeData=[]
    for (let i = 0; i < data.data.length; i++) {
        const element = data.data[i];
        try{
            const fetchingLeetcodeData = await fetch('https://leetcode-api-faisalshohag.vercel.app/'+element.leetcode_handle);
            const check2=await fetchingLeetcodeData.json()
            check2["enrollment_no"]=element.enrollment_no
            check2["username"]=element.leetcode_handle
            if(check2.errors === undefined){
                leetcodeData.push(check2)
            }
        }
        catch(err){
            console.log(err,"err")
        }
    }
    return NextResponse.json(leetcodeData)
}