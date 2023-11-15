import {exec,spawn,fork} from 'child_process'


export default async function Events() {
    
    const data=await fetch('http://localhost:3000/api/new')
    const json=await data.json()
    console.log(json,"json")

    // exec("testing_supabase.py",(err,stdout,stderr)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     console.log(stdout)
    // })
    

    return(
        <div className="events">
            <div className='flex h-screen w-screen justify-center gap-10 items-center text-[300%]'>
                Loading {json.name}
                <div className='border-solid border-8 border-gray-300 h-20 w-20 rounded-[100%] border-t-blue-600 animate-spin-slow'>
                </div>
            </div>
        </div>
    )
}