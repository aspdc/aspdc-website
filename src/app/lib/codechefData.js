import { NextResponse } from 'next/server'
import {getItem} from '../../utils/get-item'

export default async function GET(req, res) {
    const data=await getItem()
    
    const check=await fetch('https://codechef-api.vercel.app/devvrat_singh2')
    const check2=await check.json()
    return check2 
    } 
    // let cfData=[]
    // .then(blob => blob.json())

    // fetch('https://codechef-api.vercel.app/devvrat_singh2', { mode: 'no-cors'})
    // .then(data => {
    //     console.log(JSON.stringify(data),"data")
    //     return data
    // })
    // .catch(e => {
    //     console.log(e,"weeeeeeeee");
    //     return e;
    // });
    // for (let i = 0; i < data.data.length; i++) {
    //     const element = data.data[i];
    //     console.log(element,"element")
        // try{
        // }
        // catch(err){
        //     console.log(err,"err")
        // }
    // }
    // console.log(cfData,"cfData")
// }
    // const fetchingCodechefData=await fetch("https://codechef-api.vercel.app/"+element.codechef_handle)
    // const check2=await fetchingCodechefData.json()
    // const check3=check2.result
    // check3[0]["enrollment_no"]=element.enrollment_no
    // if(element.codeforces_handle){
    //     cfData.push(check3[0])
    // }

