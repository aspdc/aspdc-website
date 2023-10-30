import {getItem} from '../../../utils/get-item'
import { NextResponse } from 'next/server';
export async function GET() {
    const data=await getItem()
    let cfData=[]
    for (let i = 0; i < data.data.length; i++) {
        const element = data.data[i];
        try{
            const fetchingCodeForcesData=await fetch("https://codeforces.com/api/user.info?handles="+element.codeforces_handle)
            const check2=await fetchingCodeForcesData.json()
            const check3=check2.result
            check3[0]["enrollment_no"]=element.enrollment_no
            if(element.codeforces_handle){
                cfData.push(check3[0])
            }
        }
        catch(err){
            console.log(err,"err")
        }
    }
    return NextResponse.json(cfData)
}